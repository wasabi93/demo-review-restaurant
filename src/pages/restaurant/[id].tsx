import NextError from 'next/error';
import { useRouter } from 'next/router';

import type { NextPageWithLayout } from '../../pages/_app';
import { RouterOutput, trpc } from '../../utils/trpc';

type RestaurantByNameOutput = RouterOutput['restaurant']['byId'];

function RestaurantItem(props: { restaurant: RestaurantByNameOutput }) {
  const { restaurant } = props;
  return (
    <div className="flex flex-col justify-center h-full px-8 ">
      <h1 className="text-4xl font-bold">{restaurant.name}</h1>

      <h2 className="text-2xl font-semibold py-2">Raw data:</h2>
      <pre className="p-4 rounded-xl overflow-x-scroll">
        {JSON.stringify(restaurant)}
      </pre>
    </div>
  );
}

const RestaurantViewPage: NextPageWithLayout = () => {
  const id = useRouter().query.id as string;
  const restaurantQuery = trpc.restaurant.byId.useQuery({ id });

  if (restaurantQuery.error) {
    return (
      <NextError
        title={restaurantQuery.error.message}
        statusCode={restaurantQuery.error.data?.httpStatus ?? 500}
      />
    );
  }

  if (restaurantQuery.status !== 'success') {
    return (
      <div className="flex flex-col justify-center h-full px-8 ">
        <div className="w-full bg-zinc-900/70 rounded-md h-10 animate-pulse mb-2"></div>
        <div className="w-2/6 bg-zinc-900/70 rounded-md h-5 animate-pulse mb-8"></div>

        <div className="w-full bg-zinc-900/70 rounded-md h-40 animate-pulse"></div>
      </div>
    );
  }
  const { data } = restaurantQuery;
  return <RestaurantItem restaurant={data} />;
};

export default RestaurantViewPage;

import NextError from 'next/error';

import type { NextPageWithLayout } from '../pages/_app';
import { trpc } from '../utils/trpc';
import { memo, useState } from 'react';
import { SearchBar } from './SearchBar';
import { RestaurantCard } from './RestaurantCard';
import { useDebouncedCallback } from 'use-debounce';

function ListRestaurant(props: { searchInput: string }) {
  const { searchInput } = props;

  const restaurantsQuery = trpc.restaurant.getRestaurantsBySearchInput.useQuery(
    {
      searchInput: searchInput,
      limit: 10,
    },
  );

  const ListRestaurant = restaurantsQuery.data?.items ?? [];

  if (restaurantsQuery.error) {
    return (
      <NextError
        title={restaurantsQuery.error.message}
        statusCode={restaurantsQuery.error.data?.httpStatus ?? 500}
      />
    );
  }

  if (restaurantsQuery.status !== 'success') {
    return (
      <div className="flex flex-col justify-center h-full px-8 ">
        <div className="w-full bg-zinc-900/70 rounded-md h-10 animate-pulse mb-2"></div>
        <div className="w-2/6 bg-zinc-900/70 rounded-md h-5 animate-pulse mb-8"></div>

        <div className="w-full bg-zinc-900/70 rounded-md h-40 animate-pulse"></div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-20 mx-6">
      {ListRestaurant.map((restaurant) => (
        <RestaurantCard restaurant={restaurant} key={restaurant.id} />
      ))}
    </div>
  );
}

const RestaurantListViewPage: NextPageWithLayout = () => {
  const [searchInput, setSearchInput] = useState<string>('');

  const handleChangeInput = useDebouncedCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchInput(e.target.value);
    },
    1000,
  );

  return (
    <>
      <SearchBar handleChangeInput={handleChangeInput} />
      <ListRestaurant searchInput={searchInput} />
      <div className="h-20" />
    </>
  );
};

export default memo(RestaurantListViewPage);

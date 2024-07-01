import { Restaurant } from '@prisma/client';
import Link from 'next/link';
import { useState } from 'react';
import { StarTitleIcon, StarIcon, HeartIcon } from '~/icons';
import { trpc } from '~/utils/trpc';

export const RestaurantCard = ({ restaurant }: { restaurant: Restaurant }) => {
  const {
    name,
    desc,
    images,
    id,
    featured,
    isFavorite,
    rating,
    rating_count,
    price_range,
  } = restaurant;

  const { text } = featured as { text: string };

  const updateFavoriteBtn = trpc.restaurant.addFavorite.useMutation();

  const [currentFavorite, setCurrentFavorite] = useState(isFavorite);

  const handlePressFavorite = () => {
    updateFavoriteBtn.mutate(
      { id, isFavorite: !isFavorite },
      {
        onSuccess: () => {
          setCurrentFavorite(!currentFavorite);
        },
      },
    );
  };

  return (
    <div className="rounded overflow-hidden flex flex-col">
      <div className="relative">
        <Link href={`/restaurant/${id}`}>
          <div className="w-full h-52 bg-gray-300 rounded-2xl">
            <img
              className="w-full h-52 object-cover rounded-2xl"
              src={images[0] ?? images[1] ?? images[2]}
              alt={name}
            />
          </div>
        </Link>

        <div onClick={handlePressFavorite}>
          <div className="absolute top-0 right-0 bg-white/25 px-2 py-2 text-white mt-3 mr-3 rounded-full">
            <HeartIcon currentFavorite={currentFavorite} />
          </div>
        </div>
      </div>

      <Link href={`/restaurant/${id}`} className="pt-2">
        <div className="flex flex-row items-center">
          <StarTitleIcon />
          <p className="ml-1 text-orange-light text-xs/[18px]">{text}</p>
        </div>

        <div className="flex flex-row items-center justify-between">
          <p className="font-medium text-base truncate">{name}</p>
          <div className="flex flex-row items-center ml-1">
            <StarIcon />

            <p className="text-gray-500 text-sm">{`${rating ?? '-'}(${
              rating_count ?? '0'
            })`}</p>
          </div>
        </div>

        <p className="text-gray-500 text-sm">{`${desc} · ${price_range}만원`}</p>
      </Link>
    </div>
  );
};

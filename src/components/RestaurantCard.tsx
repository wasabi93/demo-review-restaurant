import { Restaurant } from '@prisma/client';
import Link from 'next/link';
import { useState } from 'react';
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
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill={currentFavorite ? '#fd3f35' : 'none'}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.4258 2.5C16.3609 2.5 18.3332 5.29375 18.3332 7.9C18.3332 13.1781 10.148 17.5 9.99984 17.5C9.85169 17.5 1.6665 13.1781 1.6665 7.9C1.6665 5.29375 3.63873 2.5 6.57391 2.5C8.2591 2.5 9.36095 3.35312 9.99984 4.10312C10.6387 3.35312 11.7406 2.5 13.4258 2.5Z"
                stroke={currentFavorite ? '#fd3f35' : '#ffff'}
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      <Link href={`/restaurant/${id}`} className="pt-2">
        <div className="flex flex-row items-center">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_167_10974)">
              <path
                d="M2.25 11V8.5M2.25 3.5V1M1 2.25H3.5M1 9.75H3.5M6.5 1.5L5.63291 3.75443C5.49191 4.12105 5.4214 4.30435 5.31177 4.45854C5.21459 4.5952 5.0952 4.71459 4.95854 4.81176C4.80435 4.9214 4.62105 4.99191 4.25443 5.13291L2 6L4.25443 6.86709C4.62105 7.00809 4.80435 7.0786 4.95854 7.18823C5.0952 7.28541 5.21459 7.4048 5.31177 7.54146C5.4214 7.69565 5.49191 7.87895 5.63291 8.24557L6.5 10.5L7.36709 8.24557C7.5081 7.87895 7.5786 7.69565 7.68824 7.54146C7.78541 7.4048 7.9048 7.28541 8.04146 7.18823C8.19565 7.0786 8.37895 7.00809 8.74557 6.86709L11 6L8.74557 5.13291C8.37895 4.99191 8.19565 4.9214 8.04146 4.81176C7.9048 4.71459 7.78541 4.5952 7.68824 4.45854C7.5786 4.30435 7.50809 4.12105 7.36709 3.75443L6.5 1.5Z"
                stroke="#FF692E"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_167_10974">
                <rect width="12" height="12" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p className="ml-1 text-orange-light text-xs/[18px]">{text}</p>
        </div>

        <div className="flex flex-row items-center justify-between">
          <p className="font-medium text-base truncate">{name}</p>
          <div className="flex flex-row items-center ml-1">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_167_10980)">
                <path
                  d="M7.53834 1.50996C7.70914 1.09931 8.29086 1.09931 8.46166 1.50996L9.99874 5.20555C10.0707 5.37867 10.2336 5.49695 10.4204 5.51194L14.4102 5.83179C14.8535 5.86733 15.0332 6.42059 14.6955 6.70992L11.6557 9.31378C11.5133 9.43575 11.4512 9.62714 11.4947 9.80952L12.4234 13.7028C12.5265 14.1354 12.0559 14.4773 11.6764 14.2455L8.26063 12.1592C8.10062 12.0615 7.89938 12.0615 7.73937 12.1592L4.32363 14.2455C3.94408 14.4773 3.47345 14.1354 3.57665 13.7028L4.50534 9.80952C4.54884 9.62714 4.48665 9.43575 4.34426 9.31378L1.30453 6.70992C0.966758 6.42059 1.14652 5.86733 1.58985 5.83179L5.57955 5.51194C5.76645 5.49695 5.92925 5.37867 6.00126 5.20555L7.53834 1.50996Z"
                  fill="#F2F4F7"
                />
                <g clipPath="url(#clip1_167_10980)">
                  <path
                    d="M7.53834 1.50996C7.70914 1.09931 8.29086 1.09931 8.46166 1.50996L9.99874 5.20555C10.0707 5.37867 10.2336 5.49695 10.4204 5.51194L14.4102 5.83179C14.8535 5.86733 15.0332 6.42059 14.6955 6.70992L11.6557 9.31378C11.5133 9.43575 11.4512 9.62714 11.4947 9.80952L12.4234 13.7028C12.5265 14.1354 12.0559 14.4773 11.6764 14.2455L8.26063 12.1592C8.10062 12.0615 7.89938 12.0615 7.73937 12.1592L4.32363 14.2455C3.94408 14.4773 3.47345 14.1354 3.57665 13.7028L4.50534 9.80952C4.54884 9.62714 4.48665 9.43575 4.34426 9.31378L1.30453 6.70992C0.966758 6.42059 1.14652 5.86733 1.58985 5.83179L5.57955 5.51194C5.76645 5.49695 5.92925 5.37867 6.00126 5.20555L7.53834 1.50996Z"
                    fill="#FDB022"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_167_10980">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
                <clipPath id="clip1_167_10980">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>

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

/**
 *
 * This is an example router, you can delete this file and then update `../pages/api/trpc/[trpc].tsx`
 */
import { Restaurant } from '@prisma/client';
import { router, publicProcedure } from '../trpc';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';
import { prisma } from '~/server/prisma';

/**
 * Default selector for Restaurant.
 * It's important to always explicitly say which fields you want to return in order to not leak extra information
 * @link https://github.com/prisma/prisma/issues/9353
 */

export const restaurantRouter = router({
  list: publicProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100).nullish(),
        cursor: z.string().nullish(),
      }),
    )
    .query(async ({ input }) => {
      /**
       * For pagination docs you can have a look here
       * @link https://trpc.io/docs/v11/useInfiniteQuery
       * @link https://www.prisma.io/docs/concepts/components/prisma-client/pagination
       */

      const limit = input.limit ?? 50;
      const { cursor } = input;

      const restaurants = await prisma.restaurant.findMany({
        // get an extra item at the end which we'll use as next cursor
        where: {},
        take: limit + 1,
        cursor: cursor
          ? {
              id: cursor,
            }
          : undefined,
      });

      if (!restaurants) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: `No restaurant in DB`,
        });
      }

      let nextCursor: typeof cursor | undefined = undefined;
      if (restaurants.length > limit) {
        // Remove the last item and use it as next cursor

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const nextItem = restaurants.pop()!;
        nextCursor = nextItem.id;
      }

      return {
        items: restaurants.reverse(),
        nextCursor,
      };
    }),
  bySearch: publicProcedure
    .input(
      z.object({
        searchInput: z.string().nullish(),
        limit: z.number().min(1).max(100).nullish(),
        cursor: z.string().nullish(),
      }),
    )
    .query(async ({ input }) => {
      const { searchInput, cursor } = input;
      const limit = input.limit ?? 50;
      let restaurants: Restaurant[] = [];

      if (searchInput) {
        restaurants = await prisma.restaurant.findMany({
          where: {
            OR: [
              {
                name: {
                  contains: searchInput,
                  mode: 'insensitive',
                },
              },
              {
                category: {
                  contains: searchInput,
                  mode: 'insensitive',
                },
              },
            ],
          },
          take: limit + 1,
          cursor: cursor
            ? {
                id: cursor,
              }
            : undefined,
        });
      } else {
        restaurants = await prisma.restaurant.findMany({
          where: {},
          take: limit + 1,
          cursor: cursor
            ? {
                id: cursor,
              }
            : undefined,
        });
      }
      if (!restaurants) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: `No restaurant with name: '${name}'`,
        });
      }
      let nextCursor: typeof cursor | undefined = undefined;
      if (restaurants.length > limit) {
        // Remove the last item and use it as next cursor

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const nextItem = restaurants.pop()!;
        nextCursor = nextItem.id;
      }

      return {
        items: restaurants.reverse(),
        nextCursor,
      };
    }),
  byId: publicProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .query(async ({ input }) => {
      const { id } = input;
      const restaurant = await prisma.restaurant.findUnique({
        where: { id },
      });
      if (!restaurant) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: `No restaurant with id: '${id}'`,
        });
      }
      return restaurant;
    }),
  updateFavorite: publicProcedure
    .input(
      z.object({
        id: z.string(),
        isFavorite: z.boolean(),
      }),
    )
    .mutation(async ({ input }) => {
      const { id, isFavorite } = input;
      const restaurant = await prisma.restaurant.update({
        where: { id },
        data: {
          isFavorite,
        },
      });
      
      if (!restaurant) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: `No restaurant with id: '${id}'`,
        });
      }

      return restaurant;
    }),
});

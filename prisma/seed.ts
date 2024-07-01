/**
 * Adds seed data to your db
 *
 * @link https://www.prisma.io/docs/guides/database/seed-database
 */
import { Prisma, PrismaClient, Restaurant } from '@prisma/client';

const prisma = new PrismaClient();

const iniRestaurants: Prisma.RestaurantCreateInput[] = [
  {
    rating: 4.2,
    rating_count: 139,
    category: 'YAKITORI',
    city: 'osaka',
    desc: '최고급 오마카세를 합리적인 가격에 무제한 사케와 함께 즐길 수 있는',
    id: '4dc2e1d1-fe89-4a29-b86a-f8bb0ce1395d',
    images: [
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    name: '카구라자카 이시카와 스시하루 나카노시마 스시야 카구라자카 이시카와 스시하루 나카노시마 스시야',
    price_range: '3~5',
    featured: {
      text: '나카노시마×야키토리 상위 맛집',
      icon: 'stars-02',
    },
    isFavorite: true,
  },
  {
    rating: 4.5,
    rating_count: 200,
    category: 'SUSHI',
    city: 'tokyo',
    desc: '신선한 해산물과 정통 스시를 제공하는',
    id: '6ac3e2d1-ge98-5a29-c86a-g9cc1de2396d',
    images: [
      'https://images.unsplash.com/photo-1547592180-2f1a1b3c3b68?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1547592180-2f1a1b3c3b68?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1547592180-2f1a1b3c3b68?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    name: '스시 긴자 이시카와',
    price_range: '4~6',
    featured: {
      text: '도쿄의 상위 스시 맛집',
      icon: 'stars-02',
    },
    isFavorite: false,
  },
  {
    rating: 4.7,
    rating_count: 180,
    category: 'RAMEN',
    city: 'kyoto',
    desc: '진한 국물과 다양한 토핑을 자랑하는',
    id: '7bd4f3e2-hf98-6b39-d87b-h0dd2ee2397e',
    images: [
      'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    name: '라멘 이치란',
    price_range: '2~4',
    featured: {
      text: '교토의 라멘 명소',
      icon: 'stars-02',
    },
    isFavorite: true,
  },
  {
    rating: 4.3,
    rating_count: 220,
    category: 'TEMPURA',
    city: 'nagoya',
    desc: '바삭한 텐푸라를 맛볼 수 있는',
    id: '8ce5g4f3-jg09-7c40-e98c-i1ee3ff3408f',
    images: [
      'https://images.unsplash.com/photo-1604908177732-40aa343c3f2b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1604908177732-40aa343c3f2b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1604908177732-40aa343c3f2b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    name: '텐푸라 마츠야',
    price_range: '3~5',
    featured: {
      text: '나고야 최고의 텐푸라집',
      icon: 'stars-02',
    },
    isFavorite: false,
  },
  {
    rating: 4.6,
    rating_count: 190,
    category: 'SOBA',
    city: 'fukuoka',
    desc: '쫄깃한 면발과 진한 육수를 자랑하는',
    id: '9df6h5g4-kh10-8d41-f09d-j2ff4gg4519g',
    images: [
      'https://images.unsplash.com/photo-1570544826585-8dd0cf1d2aa8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1570544826585-8dd0cf1d2aa8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1570544826585-8dd0cf1d2aa8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    name: '우동 타로',
    price_range: '2~4',
    featured: {
      text: '후쿠오카 우동 맛집',
      icon: 'stars-02',
    },
    isFavorite: true,
  },
  {
    rating: 4.1,
    rating_count: 160,
    category: 'YAKITORI',
    city: 'osaka',
    desc: '맛있고 저렴한 야키토리 전문점',
    id: '0eg7i6h5-lj21-9e52-g10e-k3gg5hh5620h',
    images: [
      'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    name: '야키토리 하치베',
    price_range: '1~3',
    featured: {
      text: '오사카 야키토리 숨은 맛집',
      icon: 'stars-02',
    },
    isFavorite: false,
  },
  {
    rating: 4.8,
    rating_count: 250,
    category: 'SUSHI',
    city: 'sapporo',
    desc: '신선한 해산물로 만든 정통 스시를 즐길 수 있는',
    id: '1fh8j7i6-mk32-0f63-h11f-l4hh6ii6731i',
    images: [
      'https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    name: '스시 사토',
    price_range: '4~6',
    featured: {
      text: '삿포로 스시 맛집',
      icon: 'stars-02',
    },
    isFavorite: true,
  },
  {
    rating: 4.4,
    rating_count: 170,
    category: 'RAMEN',
    city: 'hiroshima',
    desc: '깊은 맛의 국물과 탱탱한 면발을 자랑하는',
    id: '2gi9k8j7-nl43-1g74-i22g-m5ii7jj7842j',
    images: [
      'https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    name: '라멘 타츠야',
    price_range: '2~4',
    featured: {
      text: '히로시마 라멘 추천',
      icon: 'stars-02',
    },
    isFavorite: false,
  },
  {
    rating: 4.9,
    rating_count: 300,
    category: 'TEMPURA',
    city: 'yokohama',
    desc: '고급스러운 텐푸라를 제공하는',
    id: '3hj0l9k8-om54-2h85-j33h-n6jj8kk8953k',
    images: [
      'https://images.unsplash.com/photo-1610399220621-38b3599b57c2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1610399220621-38b3599b57c2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1610399220621-38b3599b57c2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    name: '텐푸라 야마구치',
    price_range: '5~7',
    featured: {
      text: '요코하마 텐푸라 추천',
      icon: 'stars-02',
    },
    isFavorite: true,
  },
  {
    rating: 4.0,
    rating_count: 150,
    category: 'SOBA',
    city: 'kobe',
    desc: '담백한 국물과 쫄깃한 면발이 일품인',
    id: '4ik1m0l9-pn65-3i96-k44i-o7kk9ll9064l',
    images: [
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    name: '우동 가게야마',
    price_range: '2~4',
    featured: {
      text: '고베 우동 맛집',
      icon: 'stars-02',
    },
    isFavorite: false,
  },
];

async function main() {
  await prisma.$transaction(
    iniRestaurants.map((restaurant) =>
      prisma.restaurant.upsert({
        where: { id: restaurant.id },
        update: {},
        create: restaurant,
      }),
    ),
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

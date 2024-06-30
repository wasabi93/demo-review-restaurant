import { Suspense } from 'react';
import ListRestaurant from '../../components/ListRestaurant';

export default function Search() {
  return (
    <Suspense>
      <ListRestaurant />
    </Suspense>
  );
}

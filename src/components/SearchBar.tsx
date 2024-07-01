import { ChangeEventHandler } from 'react';
import { SearchIcon } from '~/icons';

export const SearchBar = ({
  handleChangeInput,
}: {
  handleChangeInput: ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <section className="flex items-center mx-4 mt-2 shadow-custom-shadow rounded-lg fixed inset-x-0 top-0 z-50">
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>

      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <SearchIcon /> 
        </div>

        <input
          type="text"
          id="simple-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
          placeholder="맛집 이름을 검색해보세요"
          required
          onChange={handleChangeInput}
        />
      </div>
    </section>
  );
};

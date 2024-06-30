import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavbarPath } from '~/interface/navbar';

const SvgImage = {
  [NavbarPath.Home]: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block mb-1"
    >
      <path
        d="M8 17H16M11.0177 2.764L4.23539 8.03912C3.78202 8.39175 3.55534 8.56806 3.39203 8.78886C3.24737 8.98444 3.1396 9.20478 3.07403 9.43905C3 9.70352 3 9.9907 3 10.5651V17.8C3 18.9201 3 19.4801 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4801 21 18.9201 21 17.8V10.5651C21 9.9907 21 9.70352 20.926 9.43905C20.8604 9.20478 20.7526 8.98444 20.608 8.78886C20.4447 8.56806 20.218 8.39175 19.7646 8.03913L12.9823 2.764C12.631 2.49075 12.4553 2.35412 12.2613 2.3016C12.0902 2.25526 11.9098 2.25526 11.7387 2.3016C11.5447 2.35412 11.369 2.49075 11.0177 2.764Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  [NavbarPath.Search]: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block mb-1"
    >
      <path
        d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  [NavbarPath.Message]: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block mb-1"
    >
      <path
        d="M7 8.5H12M7 12H15M9.68375 18H16.2C17.8802 18 18.7202 18 19.362 17.673C19.9265 17.3854 20.3854 16.9265 20.673 16.362C21 15.7202 21 14.8802 21 13.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V20.3355C3 20.8684 3 21.1348 3.10923 21.2716C3.20422 21.3906 3.34827 21.4599 3.50054 21.4597C3.67563 21.4595 3.88367 21.2931 4.29976 20.9602L6.68521 19.0518C7.17252 18.662 7.41617 18.4671 7.68749 18.3285C7.9282 18.2055 8.18443 18.1156 8.44921 18.0613C8.74767 18 9.0597 18 9.68375 18Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  [NavbarPath.Calendar]: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block mb-1"
    >
      <path
        d="M21 10H3M16 2V6M8 2V6M7.8 22H16.2C17.8802 22 18.7202 22 19.362 21.673C19.9265 21.3854 20.3854 20.9265 20.673 20.362C21 19.7202 21 18.8802 21 17.2V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V17.2C3 18.8802 3 19.7202 3.32698 20.362C3.6146 20.9265 4.07354 21.3854 4.63803 21.673C5.27976 22 6.11984 22 7.8 22Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  [NavbarPath.Menu]: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block mb-1"
    >
      <path
        d="M3 12H21M3 6H21M3 18H21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

const Navbar = () => {
  const { asPath } = useRouter();

  const [activeTab, setActiveTab] = useState<string>(NavbarPath.Home);

  useEffect(() => {
    setActiveTab(asPath);
  }, [asPath]);

  const dynamicStyleHome =
    activeTab === NavbarPath.Home
      ? 'w-full hover:text-orange-dark justify-center inline-block text-center pt-2 pb-1 text-orange-dark'
      : 'w-full hover:text-orange-dark text-gray-text justify-center inline-block text-center pt-2 pb-1';

  const dynamicStyleSearch =
    activeTab === NavbarPath.Search
      ? 'w-full hover:text-orange-dark justify-center inline-block text-center pt-2 pb-1 text-orange-dark'
      : 'w-full hover:text-orange-dark text-gray-text justify-center inline-block text-center pt-2 pb-1';

  const dynamicStyleMessage =
    activeTab === NavbarPath.Message
      ? 'w-full hover:text-orange-dark justify-center inline-block text-center pt-2 pb-1 text-orange-dark'
      : 'w-full hover:text-orange-dark text-gray-text justify-center inline-block text-center pt-2 pb-1';

  const dynamicStyleCalendar =
    activeTab === NavbarPath.Calendar
      ? 'w-full hover:text-orange-dark justify-center inline-block text-center pt-2 pb-1 text-orange-dark'
      : 'w-full hover:text-orange-dark text-gray-text justify-center inline-block text-center pt-2 pb-1';

  const dynamicStyleMenu =
    activeTab === NavbarPath.Menu
      ? 'w-full hover:text-orange-dark justify-center inline-block text-center pt-2 pb-1 text-orange-dark'
      : 'w-full hover:text-orange-dark text-gray-text justify-center inline-block text-center pt-2 pb-1';

  return (
    <section
      id="bottom-navigation"
      className="block fixed inset-x-0 bottom-0 z-10 bg-white shadow pb-2 border-t border-gray-100"
    >
      <div id="tabs" className="flex justify-between">
        <Link href="/" className={dynamicStyleHome}>
          {SvgImage[NavbarPath.Home]}
          <span className="tab tab-home block text-xs">홈</span>
        </Link>
        <Link href="/search" className={dynamicStyleSearch}>
          {SvgImage[NavbarPath.Search]}
          <span className="tab tab-kategori block text-xs">검색</span>
        </Link>
        <Link href="/message" className={dynamicStyleMessage}>
          {SvgImage[NavbarPath.Message]}
          <span className="tab tab-explore block text-xs">피드</span>
        </Link>
        <Link href="/calendar" className={dynamicStyleCalendar}>
          {SvgImage[NavbarPath.Calendar]}
          <span className="tab tab-whishlist block text-xs">내 예약</span>
        </Link>
        <Link href="/menu" className={dynamicStyleMenu}>
          {SvgImage[NavbarPath.Menu]}
          <span className="tab tab-account block text-xs">메뉴</span>
        </Link>
      </div>
    </section>
  );
};

export default Navbar;

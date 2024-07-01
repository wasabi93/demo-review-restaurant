export const HeartIcon = ({currentFavorite}: {currentFavorite: boolean}) => {
    return (
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
    )
  }
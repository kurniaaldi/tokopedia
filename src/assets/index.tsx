export const BOOKMARK = (props: any) => {
  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill={props.color ? props.color : "#EBF0FF"}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.54493 10.7754L11.0001 18.0631L18.4553 10.7754L18.4956 10.736C20.5563 8.72154 20.5563 5.46185 18.4956 3.44831C16.4348 1.43478 13.1002 1.43384 11.0404 3.44831L11.0001 3.48767L10.9589 3.44738C8.89814 1.43291 5.56352 1.43291 3.50371 3.44738C1.4439 5.46185 1.44294 8.72154 3.50371 10.7351L3.54493 10.7754Z"
        // stroke="#9098B1"
        stroke={props.color ? props.color : "#EBF0FF"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const STAR = (props: any) => {
  return (
    <svg
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 0L10.6613 4.33699L15.6085 5.52786L12.3061 9.39915L12.7023 14.4721L8 12.5277L3.29772 14.4721L3.69387 9.39915L0.391548 5.52786L5.33867 4.33699L8 0Z"
        fill={props.color ? props.color : "#EBF0FF"}
      />
    </svg>
  );
};

export const TRASH = (props: any) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17 22H7C5.89543 22 5 21.1046 5 20V7H3V5H7V4C7 2.89543 7.89543 2 9 2H15C16.1046 2 17 2.89543 17 4V5H21V7H19V20C19 21.1046 18.1046 22 17 22ZM7 7V20H17V7H7ZM9 4V5H15V4H9ZM15 18H13V9H15V18ZM11 18H9V9H11V18Z"
        fill="#FF7D75"
      />
    </svg>
  );
};

export const EDIT = (props: any) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.41999 20.579C4.13948 20.5785 3.87206 20.4602 3.68299 20.253C3.49044 20.0475 3.39476 19.7695 3.41999 19.489L3.66499 16.795L14.983 5.481L18.52 9.017L7.20499 20.33L4.51099 20.575C4.47999 20.578 4.44899 20.579 4.41999 20.579ZM19.226 8.31L15.69 4.774L17.811 2.653C17.9986 2.46522 18.2531 2.35971 18.5185 2.35971C18.7839 2.35971 19.0384 2.46522 19.226 2.653L21.347 4.774C21.5348 4.96157 21.6403 5.21609 21.6403 5.4815C21.6403 5.74691 21.5348 6.00143 21.347 6.189L19.227 8.309L19.226 8.31Z"
        fill="#4CAF50"
      />
    </svg>
  );
};

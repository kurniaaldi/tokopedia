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
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
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

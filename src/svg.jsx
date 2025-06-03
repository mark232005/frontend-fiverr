export const Search = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>

)

export function ArrowRightIcon({ width = 15, height = 15, fill = 'rgb(122, 125, 133)' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      width={width}
      height={height}
      fill={fill}
    >
      <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
    </svg>
  );
}

export function ArrowLiftIcon({ width = 15, height = 15, fill = 'rgb(122, 125, 133)' }) {
  return (

    <svg xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      width={width}
      height={height}
      fill={fill}
      >

      <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" /></svg>
  )
}
export function HomeIcon({ width = 16, height = 16, fill = "currentColor" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={fill} viewBox="0 0 16 14">
      <path d="M12.773 13.5H3.227a.7.7 0 0 1-.482-.194.65.65 0 0 1-.2-.468V6.884H.5L7.541.672a.694.694 0 0 1 .918 0L15.5 6.884h-2.046v5.954a.65.65 0 0 1-.2.468.7.7 0 0 1-.481.194m-4.091-1.323h3.409V5.664L8 2.056 3.91 5.664v6.513h3.408v-3.97h1.364z"></path>
    </svg>
  );
}



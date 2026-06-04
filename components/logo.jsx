export const Logo = ({ width = 40, height = 40 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background circle */}
      <circle cx="20" cy="20" r="20" fill="#E0F2FE" />

      {/* Upward trending arrow made of geometric shapes */}
      <path
        d="M10 28V18C10 16.9 10.9 16 12 16H14C15.1 16 16 16.9 16 18V28"
        stroke="#0369A1"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M20 28V12C20 10.9 20.9 10 22 10H24C25.1 10 26 10.9 26 12V28"
        stroke="#06B6D4"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M30 28V20C30 18.9 30.9 18 32 18H34C35.1 18 36 18.9 36 20V28"
        stroke="#059669"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />

      {/* Upward trend line */}
      <path
        d="M8 30L38 8"
        stroke="#0891B2"
        strokeWidth="1.5"
        strokeDasharray="2,3"
        opacity="0.5"
      />
    </svg>
  );
};

export default Logo;

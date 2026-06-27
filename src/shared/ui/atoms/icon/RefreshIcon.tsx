type iconProps = React.SVGProps<SVGSVGElement> & {
  theme?: string;
};

const RefreshIcon = ({ theme = "black" }: iconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_347_141"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="1"
        y="2"
        width="14"
        height="12"
      >
        <path
          d="M2.25 5.76188L3.51875 7.95937L4.60125 7.33437L5.68375 6.70937M3.66369 7.68812C3.82494 5.07187 5.99744 3 8.65431 3C11.4156 3 13.6543 5.23875 13.6543 8C13.6543 10.7613 11.4156 13 8.65431 13C7.45431 13 6.35306 12.5769 5.49119 11.8725C5.08619 11.5412 4.73494 11.1481 4.45056 10.7075"
          stroke={theme}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </mask>
      <g mask="url(#mask0_347_141)">
        <rect width="16" height="16" fill={theme} />
      </g>
    </svg>
  );
};

export default RefreshIcon;

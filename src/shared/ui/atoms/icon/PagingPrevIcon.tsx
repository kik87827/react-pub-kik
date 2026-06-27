type iconProps = React.SVGProps<SVGSVGElement> & {
  theme?: string;
};

const PagingPrevIcon = ({ theme = "#666" }: iconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_324_2150"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="12"
        y="10"
        width="7"
        height="12"
      >
        <path
          d="M18.083 11L13.083 16L18.083 21"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </mask>
      <g mask="url(#mask0_324_2150)">
        <rect
          x="6"
          y="26"
          width="20"
          height="20"
          transform="rotate(-90 6 26)"
          fill={theme}
        />
      </g>
    </svg>
  );
};

export default PagingPrevIcon;

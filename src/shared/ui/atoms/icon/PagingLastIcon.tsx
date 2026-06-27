type iconProps = React.SVGProps<SVGSVGElement> & {
  theme?: string;
};

const PagingLastIcon = ({ theme = "#666" }: iconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_324_2157"
        style={{maskType:"alpha"}}
        maskUnits="userSpaceOnUse"
        x="11"
        y="10"
        width="11"
        height="12"
      >
        <path
          d="M11.917 21L16.917 16L11.917 11"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 21L21 16L16 11"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </mask>
      <g mask="url(#mask0_324_2157)">
        <rect
          x="26"
          y="6"
          width="20"
          height="20"
          transform="rotate(90 26 6)"
          fill={theme}
        />
      </g>
    </svg>
  );
};

export default PagingLastIcon;

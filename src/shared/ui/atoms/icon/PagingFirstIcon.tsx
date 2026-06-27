type iconProps = React.SVGProps<SVGSVGElement> & {
  theme?: string;
};

const PagingFirstIcon = ({ theme = "#666" }: iconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_324_2149"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="10"
        y="10"
        width="11"
        height="12"
      >
        <path
          d="M20.083 21L15.083 16L20.083 11"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 21L11 16L16 11"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </mask>
      <g mask="url(#mask0_324_2149)">
        <rect
          width="20"
          height="20"
          transform="matrix(4.37114e-08 1 1 -4.37114e-08 6 6)"
          fill={theme}
        />
      </g>
    </svg>
  );
};

export default PagingFirstIcon;

type iconProps = React.SVGProps<SVGSVGElement> & {
  theme?: string;
};

const PagingNextIcon = ({ theme = "#666" }: iconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_324_2156"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="13"
        y="10"
        width="7"
        height="12"
      >
        <path
          d="M13.917 21L18.917 16L13.917 11"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </mask>
      <g mask="url(#mask0_324_2156)">
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

export default PagingNextIcon;

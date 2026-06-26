type iconProps = React.SVGProps<SVGSVGElement> & {
  theme?: string;
};

const SearchIcon = ({ theme = "#000" }: iconProps) => {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_347_119"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x={1}
        y={1}
        width={14}
        height={14}
      >
        <path
          d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
          stroke="black"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.0006 13.9996L11.1006 11.0996"
          stroke={theme}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </mask>

      <g mask="url(#mask0_347_119)">
        <rect width={16} height={16} fill={theme} />
      </g>
    </svg>
  );
};

export default SearchIcon;

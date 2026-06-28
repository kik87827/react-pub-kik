type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement>;

const checkboxClass = `
appearance-none
cursor-pointer
box-content
w-[20px]
h-[20px]
rounded-[4px]
border
border-[#DFDFDF]
bg-white
bg-no-repeat
bg-[length:100%_auto]
bg-[position:0_0]
checked:bg-[url('/images/ico_checkbox.svg')]
checked:bg-[#1A94FF]
checked:border-[#1A94FF]
`;

const CheckboxTailwild = ({ className = "", ...props }: CheckboxProps) => (
  <input
    type="checkbox"
    className={`${checkboxClass} ${className}`}
    {...props}
  />
);

export default CheckboxTailwild;

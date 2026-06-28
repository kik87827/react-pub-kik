export const InputCustom = ({placeholder="검색어 입력"}) => {
  return (
    <div>
      <input type="text" className="h-8 w-full bg-white border border-[#D3D5E1] appearance-none p-2.5 text-[13px] rounded-[4px]" placeholder={placeholder} />
    </div>
  );
};

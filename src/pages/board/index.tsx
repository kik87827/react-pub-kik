const PagesBoard = () => {
  return (
    <>
      <div style={{ margin: 100 }}>
        <br />
        <br />
        <br />
        <br />
        <fieldset className="bg-[#f5f5f8] rounded-lg px-6 py-4.5 mb-6">
          <legend className="sr-only">FAQ 검색</legend>
          <ul className="grid grid-cols-[3fr_7fr_3fr_7fr_3fr_7fr_3fr_7fr] items-center gap-y-5 gap-x-3.25">
            <li>
              <label
                htmlFor="search_form_item_01"
                className="font-semibold text-sm leading-[140%] text-[#333333] whitespace-nowrap"
              >
                노출여부
              </label>
            </li>
            <li>
              <div className="bg-gray-200 p-2.5">폼요소</div>
            </li>
            <li>
              <label
                htmlFor="search_form_item_02"
                className="font-semibold text-sm leading-[140%] text-[#333333] whitespace-nowrap"
              >
                국가
              </label>
            </li>
            <li>
              <div className="bg-gray-200 p-2.5">폼요소</div>
            </li>
            <li>
              <label
                htmlFor="search_form_item_03"
                className="font-semibold text-sm leading-[140%] text-[#333333] whitespace-nowrap"
              >
                카테고리
              </label>
            </li>
            <li>
              <div className="bg-gray-200 p-2.5">폼요소</div>
            </li>
            <li>
              <label
                htmlFor="search_form_item_04"
                className="font-semibold text-sm leading-[140%] text-[#333333] whitespace-nowrap"
              >
                미입력 언어
              </label>
            </li>
            <li>
              <div className="bg-gray-200 p-2.5">폼요소</div>
            </li>
            <li>
              <label
                htmlFor="search_form_item_05"
                className="font-semibold text-sm leading-[140%] text-[#333333] whitespace-nowrap"
              >
                검색어
              </label>
            </li>
            <li>
              <div className="bg-gray-200 p-2.5">폼요소</div>
            </li>
            <li className="col-span-6">
              <div className="flex justify-end">버튼들</div>
            </li>
          </ul>
        </fieldset>
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

export default PagesBoard;
/* Filter */

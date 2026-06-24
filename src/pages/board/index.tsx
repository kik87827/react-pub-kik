import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

const columnHelper = createColumnHelper();

const mockData = [
  {
    id: 1,
    name: "홍길동",
    age: 30,
  },
  {
    id: 2,
    name: "김철수",
    age: 25,
  },
  {
    id: 3,
    name: "이영희",
    age: 28,
  },
];

const columns = [
  columnHelper.accessor("id", { header: "번호" }),
  columnHelper.accessor("id", { header: "이름" }),
  columnHelper.accessor("id", { header: "나이" }),
];

const PagesBoard = () => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
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
        <div className="flex justify-between items-center gap-5">
          <div className="flex items-center gap-4">
            <strong className="font-medium leading-none text-black">
              총 234건
            </strong>
            <div className="bg-gray-200 p-2.5">셀렉트폼</div>
          </div>
          <div className="flex items-center gap-4 justify-end">버튼들</div>
        </div>
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

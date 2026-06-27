import { useState } from "react";
import type { ColumnDef } from "@tanstack/react-table";

type Row = {
  isVisible: string;
  country: string;
  category: string;
  title: string;
  missingLang: string;
  postedAt: string;
};

import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  flexRender,
  type SortingState,
  type RowSelectionState, // ✅ 추가
} from "@tanstack/react-table";
import { Pagination } from "@/shared/ui";


const data = [
  {
    isVisible: "ON",
    country: "United States, Canada",
    category: "현대 캐피탈",
    title:
      "프로토 타입 완성, 전기 자동차로 해양을 가로지르는 세계 최장 다리 건설 예정.",
    missingLang: "Kor",
    postedAt: "2026-06-25",
  },
  {
    isVisible: "OFF",
    country: "Korea",
    category: "공지사항",
    title: "시스템 점검으로 인해 일부 서비스 이용이 제한됩니다.",
    missingLang: "Eng",
    postedAt: "2026-06-24",
  },
  {
    isVisible: "ON",
    country: "Japan",
    category: "이벤트",
    title: "여름맞이 프로모션 이벤트가 시작되었습니다.",
    missingLang: "-",
    postedAt: "2026-06-23",
  },
  {
    isVisible: "ON",
    country: "Germany",
    category: "금융",
    title: "신규 대출 상품 금리가 인하되었습니다.",
    missingLang: "Jpn",
    postedAt: "2026-06-22",
  },
  {
    isVisible: "OFF",
    country: "France",
    category: "서비스",
    title: "회원 등급 정책이 일부 변경될 예정입니다.",
    missingLang: "Kor",
    postedAt: "2026-06-21",
  },
  {
    isVisible: "ON",
    country: "Australia",
    category: "자동차",
    title: "전기차 충전 인프라 확대 계획을 발표했습니다.",
    missingLang: "Chi",
    postedAt: "2026-06-20",
  },
  {
    isVisible: "OFF",
    country: "Singapore",
    category: "뉴스",
    title: "글로벌 시장 진출을 위한 신규 파트너십을 체결했습니다.",
    missingLang: "-",
    postedAt: "2026-06-19",
  },
  {
    isVisible: "ON",
    country: "United Kingdom",
    category: "보험",
    title: "보험 청구 절차가 더욱 간편하게 개선되었습니다.",
    missingLang: "Eng",
    postedAt: "2026-06-18",
  },
  {
    isVisible: "ON",
    country: "Vietnam",
    category: "채용",
    title: "2026년 하반기 신입 및 경력사원 공개채용을 진행합니다.",
    missingLang: "Kor",
    postedAt: "2026-06-17",
  },
  {
    isVisible: "OFF",
    country: "China",
    category: "점검",
    title: "데이터베이스 업그레이드 작업이 예정되어 있습니다.",
    missingLang: "Eng",
    postedAt: "2026-06-16",
  },
  {
    isVisible: "ON",
    country: "United States, Canada",
    category: "현대 캐피탈",
    title:
      "프로토 타입 완성, 전기 자동차로 해양을 가로지르는 세계 최장 다리 건설 예정.",
    missingLang: "Kor",
    postedAt: "2026-06-25",
  },
  {
    isVisible: "OFF",
    country: "Korea",
    category: "공지사항",
    title: "시스템 점검으로 인해 일부 서비스 이용이 제한됩니다.",
    missingLang: "Eng",
    postedAt: "2026-06-24",
  },
  {
    isVisible: "ON",
    country: "Japan",
    category: "이벤트",
    title: "여름맞이 프로모션 이벤트가 시작되었습니다.",
    missingLang: "-",
    postedAt: "2026-06-23",
  },
  {
    isVisible: "ON",
    country: "Germany",
    category: "금융",
    title: "신규 대출 상품 금리가 인하되었습니다.",
    missingLang: "Jpn",
    postedAt: "2026-06-22",
  },
  {
    isVisible: "OFF",
    country: "France",
    category: "서비스",
    title: "회원 등급 정책이 일부 변경될 예정입니다.",
    missingLang: "Kor",
    postedAt: "2026-06-21",
  },
  {
    isVisible: "ON",
    country: "Australia",
    category: "자동차",
    title: "전기차 충전 인프라 확대 계획을 발표했습니다.",
    missingLang: "Chi",
    postedAt: "2026-06-20",
  },
  {
    isVisible: "OFF",
    country: "Singapore",
    category: "뉴스",
    title: "글로벌 시장 진출을 위한 신규 파트너십을 체결했습니다.",
    missingLang: "-",
    postedAt: "2026-06-19",
  },
  {
    isVisible: "ON",
    country: "United Kingdom",
    category: "보험",
    title: "보험 청구 절차가 더욱 간편하게 개선되었습니다.",
    missingLang: "Eng",
    postedAt: "2026-06-18",
  },
  {
    isVisible: "ON",
    country: "Vietnam",
    category: "채용",
    title: "2026년 하반기 신입 및 경력사원 공개채용을 진행합니다.",
    missingLang: "Kor",
    postedAt: "2026-06-17",
  },
  {
    isVisible: "OFF",
    country: "China",
    category: "점검",
    title: "데이터베이스 업그레이드 작업이 예정되어 있습니다.",
    missingLang: "Eng",
    postedAt: "2026-06-16",
  },
];

const columns: ColumnDef<Row>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <input
        type="checkbox"
        checked={table.getIsAllRowsSelected()}
        onChange={table.getToggleAllRowsSelectedHandler()}
      />
    ),
    cell: ({ row }) => (
      <input
        type="checkbox"
        checked={row.getIsSelected()}
        onChange={row.getToggleSelectedHandler()}
      />
    ),
  },

  {
    accessorKey: "isVisible",
    header: "노출여부",
    cell: ({ getValue }) => {
      const value = getValue<string>();
      return (
        <span
          className={`inline-flex justify-center items-center font-bold box-border min-w-13 h-8 px-2.5 text-[13px] text-[#0582F0] whitespace-nowrap bg-white border rounded-md ${
            value === "ON"
              ? "text-[#0582F0] border-[#0582F0]"
              : "text-[#666666] border-[#DFDFDF]"
          }`}
        >
          {value}
        </span>
      );
    },
  },
  {
    accessorKey: "country",
    header: "국가",
  },
  {
    accessorKey: "category",
    header: "카테고리",
  },
  {
    accessorKey: "title",
    header: "제목",
  },
  {
    accessorKey: "missingLang",
    header: "미입력 언어",
  },

  {
    id: "action",
    header: "",
    cell: ({ row }) => (
      <button onClick={() => console.log(row.original)}>✏️</button>
    ),
  },
];

const PagesBoard = () => {
  const [sorting, setSorting] = useState<SortingState>([]);

  // ✅ 추가: 체크박스 선택 상태
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      rowSelection, // ✅ 추가
    },

    // ✅ 추가
    onRowSelectionChange: setRowSelection,
    enableRowSelection: true,

    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),

    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
  });

  const thClassMap: Record<string, string> = {
    select: "text-center",
    isVisible: "text-center",
    country: "text-left",
    category: "text-left",
    title: "text-left",
    missingLang: "text-left",
    action: "text-left",
  };

  const tdClassMap: Record<string, string> = {
    select: "text-center",
    isVisible: "text-center",
    country: "",
    category: "",
    title: "",
    missingLang: "",
    action: "",
  };
  const labelStyle =
    "font-semibold text-sm leading-[140%] text-[#333333] whitespace-nowrap";
  return (
    <>
      <div style={{ margin: 100 }}>
        <br />
        <br />
        <br />
        <br />
        21
        <fieldset className="bg-[#f5f5f8] rounded-lg px-6 py-4.5 mb-6">
          <legend className="sr-only">FAQ 검색</legend>
          <ul className="grid grid-cols-[3fr_7fr_3fr_7fr_3fr_7fr_3fr_7fr] items-center gap-y-5 gap-x-3.25">
            <li>
              <label htmlFor="search_form_item_01" className={labelStyle}>
                노출여부
              </label>
            </li>
            <li>
              <div className="bg-gray-200 p-2.5">폼요소</div>
            </li>
            <li>
              <label htmlFor="search_form_item_02" className={labelStyle}>
                국가
              </label>
            </li>
            <li>
              <div className="bg-gray-200 p-2.5">폼요소</div>
            </li>
            <li>
              <label htmlFor="search_form_item_03" className={labelStyle}>
                카테고리
              </label>
            </li>
            <li>
              <div className="bg-gray-200 p-2.5">폼요소</div>
            </li>
            <li>
              <label htmlFor="search_form_item_04" className={labelStyle}>
                미입력 언어
              </label>
            </li>
            <li>
              <div className="bg-gray-200 p-2.5">폼요소</div>
            </li>
            <li>
              <label htmlFor="search_form_item_05" className={labelStyle}>
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
        <div className="flex justify-between items-center gap-5 mb-4">
          <div className="flex items-center gap-4">
            <strong className="font-medium leading-none text-black">
              총 234건
            </strong>
            <div className="bg-gray-200 p-2.5">셀렉트폼</div>
          </div>
          <div className="flex items-center gap-4 justify-end">버튼들</div>
        </div>
        <table className="w-full table-fixed">
          <colgroup>
            <col className="w-15" />
            <col className="w-30" />
            <col className="w-[15%]" />
            <col className="w-[15%]" />
            <col />
            <col className="w-[10%]" />
            <col className="w-15" />
          </colgroup>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    className={`cursor-pointer bg-[#4D526F] text-[13px] font-semibold text-white p-2.5 min-h-10.5 box-border ${
                      thClassMap[header.column.id] ?? ""
                    }`}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {{
                      asc: " ▲",
                      desc: " ▼",
                    }[header.column.getIsSorted() as string] ?? null}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className={`box-border p-2.5 max-h-13 border-b border-[#E6E7EE] ${
                      tdClassMap[cell.column.id] ?? ""
                    }`}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination table={table} />
      </div>
    </>
  );
};

export default PagesBoard;

import { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  flexRender,
  type SortingState,
} from "@tanstack/react-table";

const data = [
  { name: "홍길동", age: 30 },
  { name: "김철수", age: 25 },
  { name: "이영희", age: 35 },
  { name: "박민수", age: 28 },
  { name: "최지훈", age: 40 },
];

const columns = [
  { accessorKey: "name", header: "이름" },
  { accessorKey: "age", header: "나이" },
];

export default function BasicTable() {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),

    initialState: {
      pagination: {
        pageSize: 3,
      },
    },
  });

  return (
    <>
      <table border={1}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  style={{ cursor: "pointer" }}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
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
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: "12px", display: "flex", gap: "12px" }}>
        <button
          onClick={() => table.firstPage()}
          disabled={!table.getCanPreviousPage()}
        >
          ≪
        </button>

        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          ‹
        </button>

        {Array.from({ length: table.getPageCount() }).map((_, index) => (
          <button
            key={index}
            onClick={() => table.setPageIndex(index)}
            style={{
              color:
                table.getState().pagination.pageIndex === index
                  ? "#0066ff"
                  : "#666",
              fontWeight:
                table.getState().pagination.pageIndex === index
                  ? "bold"
                  : "normal",
            }}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          ›
        </button>

        <button
          onClick={() => table.lastPage()}
          disabled={!table.getCanNextPage()}
        >
          ≫
        </button>
      </div>
    </>
  );
}

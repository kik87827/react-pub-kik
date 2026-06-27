import PagingFirstIcon from "@/shared/ui/atoms/icon/PagingFirstIcon";
import PagingPrevIcon from "@/shared/ui/atoms/icon/PagingPrevIcon";
import PagingNextIcon from "@/shared/ui/atoms/icon/PagingNextIcon";
import PagingLastIcon from "@/shared/ui/atoms/icon/PagingLastIcon";

export const Pagination = ({ table }) => {
  return (
    <div className="mt-6 flex justify-center gap-1">
      <button
        onClick={() => table.firstPage()}
        disabled={!table.getCanPreviousPage()}
      >
        <PagingFirstIcon />
      </button>

      <button
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        <PagingPrevIcon />
      </button>

      {Array.from({ length: table.getPageCount() }).map((_, index) => (
        <button
          key={index}
          className="inline-flex w-8 rounded-[5px] h-8 items-center justify-center text-gray-500"
          onClick={() => table.setPageIndex(index)}
          style={{
            color:
              table.getState().pagination.pageIndex === index
                ? "#0582F0"
                : "#666",
            fontWeight:
              table.getState().pagination.pageIndex === index
                ? "bold"
                : "normal",
            backgroundColor:
              table.getState().pagination.pageIndex === index
                ? "rgba(26, 148, 255, 0.1)"
                : "transparent",
          }}
        >
          {index + 1}
        </button>
      ))}

      <button
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        <PagingNextIcon />
      </button>

      <button
        onClick={() => table.lastPage()}
        disabled={!table.getCanNextPage()}
      >
        <PagingLastIcon />
      </button>
    </div>
  );
};

import { useEffect, useMemo, useState, useRef } from "react";
import {
  flexRender,
  useReactTable,
  getCoreRowModel,
  // getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import { useVirtualizer } from "@tanstack/react-virtual";
import { BACKGROUND_COLORS, COLUMNS, ModelData, fallbackData } from "./data";
import "./index.css";

const DATA_PATH = "score.json";

interface ColumnSort {
  id: string;
  desc: boolean;
}
type SortingState = ColumnSort[];

const Leaderboard = () => {
  // Fetch data
  const [data, setData] = useState<ModelData[]>([]);
  const fetchData = async () => {
    try {
      const response = await fetch(DATA_PATH);
      const jsonData = (await response.json()) as ModelData[];
      setData(jsonData);
    } catch (error) {
      console.error("Failed to fetch score data", error);
    }
  };
  useEffect(() => {
    fetchData(); // eslint-disable-line
  }, []);

  // Table
  const columns = useMemo(() => COLUMNS, []);
  // const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });
  // const [sorting, setSorting] = useState<SortingState>([{ id: "overall", desc: true }]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const table = useReactTable({
    columns: columns,
    data: data ?? fallbackData,
    getCoreRowModel: getCoreRowModel(),
    // getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    // onPaginationChange: setPagination,
    onSortingChange: setSorting,
    // state: { pagination, sorting },
    state: { sorting },
  });

  // Virtualizer
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const { rows } = table.getRowModel();
  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => tableContainerRef.current,
    estimateSize: () => 32,
    overscan: 100,
    measureElement:
      typeof window !== "undefined" && !navigator.userAgent.includes("Firefox")
        ? (element) => element?.getBoundingClientRect().height
        : undefined,
  });
  const virtualRows = rowVirtualizer.getVirtualItems();

  return (
    <div className="leaderboard">
      <h1 className="leaderboard-title">Leaderboard on JMMMU</h1>
      <p>
        We show a partial leaderboard here. Please find more information in{" "}
        <a href="https://huggingface.co/spaces/JMMMU/JMMMU_Leaderboard" target="_blank" rel="noreferrer noopener">
          🏆 HF Leaderboard
        </a>
        .
      </p>
      <div className="leaderboard-content">
        <div ref={tableContainerRef} className="leaderboard-table-container">
          <div style={{ height: "25rem" }}>
            <table className="leaderboard-table">
              <thead
                className="leaderboard-table-header"
                style={{ position: "sticky", top: 0, zIndex: 1, background: "#ffffff" }}
              >
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        colSpan={header.colSpan}
                        style={{
                          borderBottom: "2px solid",
                          width: header.getSize(),
                          backgroundColor: BACKGROUND_COLORS[header.id],
                        }}
                      >
                        {header.isPlaceholder ? null : (
                          <div>{flexRender(header.column.columnDef.header, header.getContext())}</div>
                        )}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody
                className="leaderboard-table-body"
                style={{
                  // height: `${rowVirtualizer.getTotalSize()}px`,
                  position: "relative",
                }}
              >
                {virtualRows.map((virtualRow, index) => {
                  const row = rows[virtualRow.index];
                  return (
                    <tr
                      key={row.id}
                      style={{
                        height: `${virtualRow.size}px`,
                        transform: `translateY(${virtualRow.start - index * virtualRow.size}px)`,
                      }}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <td key={cell.id} style={{ backgroundColor: BACKGROUND_COLORS[cell.column.id] }}>
                          <code>{flexRender(cell.column.columnDef.cell, cell.getContext())}</code>
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        {/* <div className="leaderboard-pagination">
          <button onClick={() => table.firstPage()} disabled={!table.getCanPreviousPage()}>
            {"<<"}
          </button>
          <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
            {"<"}
          </button>
          <span>{` Page ${table.getState().pagination.pageIndex + 1} of ${table.getPageCount()} `}</span>
          <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
            {">"}
          </button>
          <button onClick={() => table.lastPage()} disabled={!table.getCanNextPage()}>
            {">>"}
          </button>
          <span>{" | Page size: "}</span>
          <select
            id="leaderboard-page-size"
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 50, 100, 200].map((pageSize) => (
              <option key={`pagesize${pageSize}`} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
        </div> */}
      </div>
    </div>
  );
};

export default Leaderboard;

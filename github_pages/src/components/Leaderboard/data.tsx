import { ColumnDef, SortDirection } from "@tanstack/react-table";
import { TiArrowSortedDown, TiArrowSortedUp, TiArrowUnsorted } from "react-icons/ti";

const getSortIcon = (isSorted: false | SortDirection): JSX.Element => {
  switch (isSorted) {
    case "asc":
      return <TiArrowSortedUp />;
    case "desc":
      return <TiArrowSortedDown />;
    default:
      return <TiArrowUnsorted />;
  }
};

// Define score data
interface ModelData {
  modelType?: string;
  model: string;
  modelUrl?: string;
  modelSize?: string;
  original: number;
  overall: number;
  cultureSpecific: number;
  cultureAgnostic: number;
  japaneseArt: number;
  japaneseHeritage: number;
  japaneseHistory: number;
  worldHistory: number;
  artPsychology: number;
  business: number;
  science: number;
  healthMedicine: number;
  techEngineering: number;
}
export type { ModelData };

const BACKGROUND_COLORS = {
  // Model
  model: "none",
  modelType: "none",
  modelSize: "none",
  // Overall
  overall: "none",
  // Culture Specific
  cultureSpecific: "#def1d380",
  // Culture Agnostic
  cultureAgnostic: "#d1edf980",
  // English Original
  original: "none",
  // Detailed (Culture Specific)
  japaneseArt: "#def1d380",
  japaneseHeritage: "#def1d380",
  japaneseHistory: "#def1d380",
  worldHistory: "#def1d380",
  // Detailed (Culture Agnostic)
  artPsychology: "#d1edf980",
  business: "#d1edf980",
  science: "#d1edf980",
  healthMedicine: "#d1edf980",
  techEngineering: "#d1edf980",
} as Record<string, string>;

const SCORE_COLUMNS = new Set([
  "overall",
  "cultureSpecific",
  "cultureAgnostic",
  "original",
  "japaneseArt",
  "japaneseHeritage",
  "japaneseHistory",
  "worldHistory",
  "artPsychology",
  "business",
  "science",
  "healthMedicine",
  "techEngineering",
]);

// Define columns
const COLUMNS: ColumnDef<ModelData>[] = [
  // Model information
  {
    id: "model",
    header: ({ column }) => (
      <div onClick={column.getToggleSortingHandler()}>
        <div>
          Model
          <br />
        </div>
      </div>
    ),
    cell: ({ row }) => {
      return row.original.modelUrl ? (
        <a href={row.original.modelUrl} target="_blank" rel="noreferrer noopener">
          <span style={{ textAlign: "left", display: "block" }}>{row.original.model}</span>
        </a>
      ) : (
        <span style={{ textAlign: "left", display: "block" }}>{row.original.model}</span>
      );
    },
  },
  // {
  //   id: "modelType",
  //   header: ({ column }) => (
  //     <div onClick={column.getToggleSortingHandler()}>
  //       <div>
  //         Model
  //         <br />
  //         Type
  //       </div>
  //     </div>
  //   ),
  //   cell: ({ row }) => <span style={{ textAlign: "center", display: "block" }}>{row.original.modelType}</span>,
  // },
  // {
  //   id: "modelSize",
  //   header: ({ column }) => (
  //     <div onClick={column.getToggleSortingHandler()}>
  //       <div>
  //         Model
  //         <br />
  //         Size
  //       </div>
  //     </div>
  //   ),
  //   cell: ({ row }) => <span style={{ textAlign: "center", display: "block" }}>{row.original.modelSize}</span>,
  // },
  // Overall scores
  {
    id: "overall",
    header: ({ column }) => (
      <div onClick={column.getToggleSortingHandler()}>
        <div>
          Overall
          <br />
          (1,320)
        </div>
        <div>{getSortIcon(column.getIsSorted())}</div>
      </div>
    ),
    accessorKey: "overall",
    cell: (value) => (
      <span style={{ textAlign: "center", display: "block" }}>{value.getValue<number>().toFixed(1)}</span>
    ),
    sortingFn: "basic",
  },
  {
    id: "cultureSpecific",
    header: ({ column }) => (
      <div onClick={column.getToggleSortingHandler()}>
        <div>
          CS
          <br />
          (600)
        </div>
        <div>{getSortIcon(column.getIsSorted())}</div>
      </div>
    ),
    accessorKey: "cultureSpecific",
    cell: (value) => (
      <span style={{ textAlign: "center", display: "block" }}>{value.getValue<number>().toFixed(1)}</span>
    ),
    sortingFn: "basic",
  },
  {
    id: "cultureAgnostic",
    header: ({ column }) => (
      <div onClick={column.getToggleSortingHandler()}>
        <div>
          CA
          <br />
          (720)
        </div>
        <div>{getSortIcon(column.getIsSorted())}</div>
      </div>
    ),
    accessorKey: "cultureAgnostic",
    cell: (value) => (
      <span style={{ textAlign: "center", display: "block" }}>{value.getValue<number>().toFixed(1)}</span>
    ),
    sortingFn: "basic",
  },
  {
    id: "original",
    header: ({ column }) => (
      <div onClick={column.getToggleSortingHandler()}>
        <div>
          CA (EN)
          <br />
          (720)
        </div>
        <div>{getSortIcon(column.getIsSorted())}</div>
      </div>
    ),
    accessorKey: "original",
    cell: (value) => {
      const valueStr = value.getValue<number>() < 0 ? "N/A" : value.getValue<number>().toFixed(1);
      return <span style={{ textAlign: "center", display: "block" }}>{valueStr}</span>;
    },
    sortingFn: "basic",
  },
  // Detailed scores (Culture Specific)
  {
    id: "japaneseArt",
    header: ({ column }) => (
      <div onClick={column.getToggleSortingHandler()}>
        <div>
          Jpn. Art
          <br />
          (150)
        </div>
        <div>{getSortIcon(column.getIsSorted())}</div>
      </div>
    ),
    accessorKey: "japaneseArt",
    cell: (value) => (
      <span style={{ textAlign: "center", display: "block" }}>{value.getValue<number>().toFixed(1)}</span>
    ),
    sortingFn: "basic",
  },
  {
    id: "japaneseHeritage",
    header: ({ column }) => (
      <div onClick={column.getToggleSortingHandler()}>
        <div>
          Jpn. Heritage
          <br />
          (150)
        </div>
        <div>{getSortIcon(column.getIsSorted())}</div>
      </div>
    ),
    accessorKey: "japaneseHeritage",
    cell: (value) => (
      <span style={{ textAlign: "center", display: "block" }}>{value.getValue<number>().toFixed(1)}</span>
    ),
    sortingFn: "basic",
  },
  {
    id: "japaneseHistory",
    header: ({ column }) => (
      <div onClick={column.getToggleSortingHandler()}>
        <div>
          Jpn. History
          <br />
          (150)
        </div>
        <div>{getSortIcon(column.getIsSorted())}</div>
      </div>
    ),
    accessorKey: "japaneseHistory",
    cell: (value) => (
      <span style={{ textAlign: "center", display: "block" }}>{value.getValue<number>().toFixed(1)}</span>
    ),
    sortingFn: "basic",
  },
  {
    id: "worldHistory",
    header: ({ column }) => (
      <div onClick={column.getToggleSortingHandler()}>
        <div>
          World History
          <br />
          (150)
        </div>
        <div>{getSortIcon(column.getIsSorted())}</div>
      </div>
    ),
    accessorKey: "worldHistory",
    cell: (value) => (
      <span style={{ textAlign: "center", display: "block" }}>{value.getValue<number>().toFixed(1)}</span>
    ),
    sortingFn: "basic",
  },
  // Detailed scores (Culture Agnostic)
  {
    id: "artPsychology",
    header: ({ column }) => (
      <div onClick={column.getToggleSortingHandler()}>
        <div>
          Art &amp; Psych.
          <br />
          (90)
        </div>
        <div>{getSortIcon(column.getIsSorted())}</div>
      </div>
    ),
    accessorKey: "artPsychology",
    cell: (value) => (
      <span style={{ textAlign: "center", display: "block" }}>{value.getValue<number>().toFixed(1)}</span>
    ),
    sortingFn: "basic",
  },
  {
    id: "business",
    header: ({ column }) => (
      <div onClick={column.getToggleSortingHandler()}>
        <div>
          Business
          <br />
          (150)
        </div>
        <div>{getSortIcon(column.getIsSorted())}</div>
      </div>
    ),
    accessorKey: "business",
    cell: (value) => (
      <span style={{ textAlign: "center", display: "block" }}>{value.getValue<number>().toFixed(1)}</span>
    ),
    sortingFn: "basic",
  },
  {
    id: "science",
    header: ({ column }) => (
      <div onClick={column.getToggleSortingHandler()}>
        <div>
          Science
          <br />
          (120)
        </div>
        <div>{getSortIcon(column.getIsSorted())}</div>
      </div>
    ),
    accessorKey: "science",
    cell: (value) => (
      <span style={{ textAlign: "center", display: "block" }}>{value.getValue<number>().toFixed(1)}</span>
    ),
    sortingFn: "basic",
  },
  {
    id: "healthMedicine",
    header: ({ column }) => (
      <div onClick={column.getToggleSortingHandler()}>
        <div>
          Medicine
          <br />
          (150)
        </div>
        <div>{getSortIcon(column.getIsSorted())}</div>
      </div>
    ),
    accessorKey: "healthMedicine",
    cell: (value) => (
      <span style={{ textAlign: "center", display: "block" }}>{value.getValue<number>().toFixed(1)}</span>
    ),
    sortingFn: "basic",
  },
  {
    id: "techEngineering",
    header: ({ column }) => (
      <div onClick={column.getToggleSortingHandler()}>
        <div>
          Tech &amp; Eng.
          <br />
          (210)
        </div>
        <div>{getSortIcon(column.getIsSorted())}</div>
      </div>
    ),
    accessorKey: "techEngineering",
    cell: (value) => (
      <span style={{ textAlign: "center", display: "block" }}>{value.getValue<number>().toFixed(1)}</span>
    ),
    sortingFn: "basic",
  },
];
const fallbackData: ModelData[] = [];

export { BACKGROUND_COLORS, COLUMNS, SCORE_COLUMNS, fallbackData };

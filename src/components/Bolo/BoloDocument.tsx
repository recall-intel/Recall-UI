import BoloContent from "./BoloContent";
import { BoloTag } from "./BoloTag";

interface Hit {
  title: string;
  content: string;
  summary: string;
  fileType: string;
  tags: { tagName: string; tagValue: string[] }[];
  // Add other properties of hit here if needed
}

interface BoloDocumentProps {
  hit: Hit;
}
export const BoloDocument: React.FC<BoloDocumentProps> = ({ hit }) => {
  return (
    <div className="col-md d-flex align-items-end justify-content-center">
      <h3 className="font-bold text-2xl text-blue-600 py-2"> {hit.title.replaceAll("_", " ").replace("-", " ")}</h3>
      <p className="p-2 shadow-lg bg-gray-100 flex">
        <span className="text-red-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            data-slot="icon"
            className="w-6 h-6 text-red-400"
          >
            <path d="M11.625 16.5a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75Z" />
            <path
              fill-rule="evenodd"
              d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875Zm6 16.5c.66 0 1.277-.19 1.797-.518l1.048 1.048a.75.75 0 0 0 1.06-1.06l-1.047-1.048A3.375 3.375 0 1 0 11.625 18Z"
              clip-rule="evenodd"
            />
            <path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" />
          </svg>
        </span>
        {hit.summary.trim()}
      </p>
      <br />
      <p className="p-2 shadow-lg bg-gray-100 flex">
        <BoloContent content={hit.content.trim()} fileType={hit.fileType} />
      </p>
      <p className="p-2 my-2 shadow-lg bg-gray-100">
        <BoloTag tags={hit.tags} />
      </p>
    </div>
  );
};

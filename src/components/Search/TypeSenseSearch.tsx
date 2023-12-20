import {
  InstantSearch,
  Hits,
  SearchBox,
  ClearRefinements,
  RefinementList,
  Configure,
  Highlight,
  Pagination,
} from "react-instantsearch";
import searchClient from "../../providers/Typesense/InstantSearchAdatper";
import { useState } from "react";
import PropTypes from "prop-types";

const Hit = ({ hit }) => {
  // Conditional rendering
  if (hit) {
    return (
      <div className="col-md d-flex align-items-end justify-content-center">
        <h3 className="font-bold text-2xl text-blue-600 py-2"> {hit.title.replaceAll("_", " ").replace("-", " ")}</h3>
        <p>{hit.content.trim()}</p>
        <div className="py-3">
          {hit.tags.map((tag, index) => (
            <div key={index}>
              <span className="text-red-400">{tag.tagName}:</span> {tag.tagValue.join(", ")}
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return <div />;
  }
};

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export function TypeSenseSearch() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showHits, setShowHits] = useState(false);

  return (
    <div className="relative min-h-screen flex-1">
      <h1 className="mb-4 text-4xl justify-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Bolo Documents Search ML Model
      </h1>

      <InstantSearch indexName="bolos" searchClient={searchClient} insights={false}>
        <div className="left-panel">
          <ClearRefinements />
          <h5 className="text-2xl font-extrabold dark:text-white">Bolos File Type</h5>
          <RefinementList className="space-x-2 px-2 py-2]" attribute="fileType" />
          <h5 className="text-2xl font-extrabold dark:text-white">Label</h5>
          <RefinementList className="space-x-2 px-2 py-2]" attribute="tags.tagName" />
          <h5 className="text-2xl font-extrabold dark:text-white">Type</h5>
          <RefinementList className="space-x-2 px-2 py-2]" attribute="tags.tagValue" />
          <Configure hitsPerPage={8} />
        </div>
        <div className="right-panel">
          <SearchBox onFocus={() => setShowHits(true)} onBlur={() => setShowHits(false)} />
          <Hits className="container mx-auto px-2 py-2 " hitComponent={Hit} />
          <Pagination />
        </div>
      </InstantSearch>
    </div>
  );
}

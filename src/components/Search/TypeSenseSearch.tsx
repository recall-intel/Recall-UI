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
import { BoloDocument } from "../Bolo/BoloDocument";

const Hit = ({ hit }) => {
  // Conditional rendering
  if (hit) {
    return <BoloDocument hit={hit} />;
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
      <h1 className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-gray">
        Bolo Documents Search
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

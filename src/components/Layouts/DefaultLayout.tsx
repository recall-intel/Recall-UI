import { NavHeader } from "../Header/Nav";
import { TypeSenseSearch } from "../Search/TypeSenseSearch";

export function DefaultLayout() {
  return (
    <div className="relative min-h-screen">
      <div>
        <NavHeader></NavHeader>
      </div>

      <TypeSenseSearch></TypeSenseSearch>
    </div>
  );
}

import { useAuth0 } from "@auth0/auth0-react";
import { NavHeader } from "../Header/Nav";
import { TypeSenseSearch } from "../Search/TypeSenseSearch";

export function DefaultLayout() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="relative min-h-screen">
      <div>
        <NavHeader></NavHeader>
      </div>
      {isAuthenticated ? <TypeSenseSearch /> : <h1>Please log in</h1>}
    </div>
  );
}

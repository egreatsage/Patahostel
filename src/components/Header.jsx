import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
export default function Header() {
  const [pageState, setPageState] = useState("Become An Agent");
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
      } else {
        setPageState("Become An Agent");
      }
    });
  }, [auth]);
  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-40">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div className="flex">
          <img
            src="data:image/png;base64,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"
            alt="logo"
            className="h-5 cursor-pointer"
            onClick={() => navigate("/")}
          />
          <span  onClick={() => navigate("/")}
          ><h1 className="font-bold ml-1 cursor-pointer ">Patahostel</h1></span>
        </div>
        <div>
          <ul className="flex space-x-5">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            {/* <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/offers") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/offers")}
            >
              Suggested
            </li> */}
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                (pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) &&
                "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/profile")}
            >
              {pageState}
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

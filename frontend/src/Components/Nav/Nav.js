import { SiHotelsdotcom } from "react-icons/si";
import { Link } from "react-router-dom";
import useStore from "../../Store/useStore";
import { Button } from "flowbite-react";
const Nav = () => {
  const { currentUser, setCurrentUser, setCurrentFilter } = useStore();
  const handleLogOut = (e) => {
    e.preventDefault();
    setCurrentUser({});
  };
  const resetFilters = () => {
    setCurrentFilter("");
  };
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          onClick={() => resetFilters()}
          to="/"
          className="flex items-center justify-center"
        >
          <SiHotelsdotcom className="text-xl mx-0" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            ouspitality
          </span>
        </Link>

        {currentUser.userId !== undefined ? (
          <>
            <p>Welcome {currentUser.firstName}!</p>
            <Button.Group>
              <Button className="border border-white">
                <Link to="/post_listing">Post listing</Link>
              </Button>
              <Button
                className="border border-white"
                onClick={(e) => handleLogOut(e)}
              >
                {" "}
                Log out
              </Button>
            </Button.Group>
          </>
        ) : (
          <>
            <Link to="/login">Log in / Sign up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;

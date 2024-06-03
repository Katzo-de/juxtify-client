import Library from "../../assets/icons/library.svg";
import Home from "../../assets/icons/home.svg";
import Discover from "../../assets/icons/discover.svg";
import Search from "../../assets/icons/search.svg";

function Menu() {
  return (
    <nav className="flex w-full h-14 space-x-5">
      <button className="hover:bg-tertiary my-2 space-x-3 flex items-center w-64  rounded-md bg-primary-foreground-dark text-secondary-foreground">
        <img src={Library} alt="Library" />
        <span>My Library</span>
      </button>

      <button className="hover:bg-tertiary my-2 space-x-3 flex items-center w-52  rounded-md bg-primary-foreground-dark text-secondary-foreground">
        <img src={Home} alt="Home" />
        <span>Home</span>
      </button>

      <button className="hover:bg-tertiary my-2 space-x-3 flex items-center w-52 rounded-md bg-primary-foreground-dark text-secondary-foreground">
        <img height={35} width={35} src={Discover} alt="Discover" />
        <span>Discover</span>
      </button>

      <button className="hover:bg-tertiary my-2 space-x-3 flex items-center w-52  rounded-md bg-primary-foreground-dark text-secondary-foreground">
        <img src={Search} alt="Search" />
      </button>


    </nav>
  );
}

export default Menu;

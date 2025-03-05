import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Root = () => {
  return (
    <div>
      <header>
      <h2 className="text-2xl text-center font-bold mb-10"> Espresso Emporium </h2>
        {/* <h2>Root div</h2> */}
        <nav className="flex justify-center gap-x-5">
        <Link to="/">
        <button className="btn-outline border-2 border-teal-500 p-2 rounded-lg">Home</button>
        </Link>
        <Link to="/addCoffee">
        <button className="btn-outline border-2 border-teal-500 p-2 rounded-lg">Add coffee</button>
        </Link>
        </nav>

        <NavBar></NavBar>
      </header>
      <main className="flex flex-wrap">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Root;

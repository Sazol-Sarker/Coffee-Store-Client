import { Link, Outlet, useLoaderData } from "react-router-dom";
import Footer from "../Footer";
import CoffeeCard from "../CoffeeCard";
import { useState } from "react";
import Swal from "sweetalert2";
const HomeLayout = () => {
  // load get api data
  const loadedCoffeeData = useLoaderData();
  // hooks
  const [coffeeList, setCoffeeList] = useState(loadedCoffeeData);
  console.log(loadedCoffeeData);

  const handleDelete = (id) => {
    console.log("Delete->", id);

    // REALLY delete??
    Swal.fire({
      title: "Delete this coffee?",
      text: "You won't be able to reverse this delete!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete coffee!",
    }).then((result) => {
      if (result.isConfirmed) {
        // DELETE API
        fetch(`https://coffee-store-server-ashy-six.vercel.app/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Response from mongodb=>", data);
            if (data.deletedCount === 1) {
              // filter out the deleted one
              const newCoffeeList = coffeeList.filter(
                (coffee) => coffee._id !== id
              );
              console.log(newCoffeeList);
              setCoffeeList(newCoffeeList);
              Swal.fire({
                title: "Deleted!",
                text: "Successfully deleted the coffee.",
                icon: "success",
              });
            } else {
              Swal.fire({
                title: "Failed!",
                text: "Delete Failed!",
                icon: "warning",
              });
            }
          });
      }
    });
  };
  return (
    <div className="w-10/12 mx-auto">
      <header>
        {/* <h2 className="text-2xl text-center font-bold"> Espresso Emporium </h2> */}
      </header>
      <main>
        {/* Coffee List */}
        <div className="coffee-list w-10/12 mx-auto">
          <h2 className="text-center font-semibold text-xl my-5">
            Coffee List: {loadedCoffeeData.length}
          </h2>
          <div className="grid grid-cols-2 gap-x-4">
            {/* <div className="grid grid-cols-2 w-1/2 mx-auto "> */}
            {coffeeList.map((coffee) => {
              return (
                <CoffeeCard
                  key={coffee._id}
                  handleDelete={handleDelete}
                  coffee={coffee}
                ></CoffeeCard>
              );
            })}
          </div>
        </div>

        <Outlet></Outlet>
      </main>

      {/* <footer>
        <Footer></Footer>
      </footer> */}
    </div>
  );
};

export default HomeLayout;

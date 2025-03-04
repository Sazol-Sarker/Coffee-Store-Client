import { useRef, useState } from "react";
import { FaEye } from "react-icons/fa6";
import { FaPencil } from "react-icons/fa6";
import { ImBin } from "react-icons/im";
import { Link } from "react-router-dom";
import CoffeDetails from "./CoffeDetails";
import UpdateCoffee from "./UpdateCoffee";
import Swal from "sweetalert2";

const CoffeeCard = ({ handleDelete, coffee }) => {
  // hooks

  const modalRef = useRef(null);
  const updModalRef = useRef(null);
  //   console.log(modalRef);
  const {
    _id,
    name,
    chefName,
    supplierName,
    taste,
    categoryName,
    detailsName,
    photoURL,
  } = coffee;

  const handleCoffeeView = () => {
    // <CoffeDetails coffee={coffee}></CoffeDetails>
    // if (modalRef.current) {
    //   modalRef.current.showModal();
    // }
  };

  return (
    <div className="border-2 m-4 p-4 card w-full  bg-base-100  flex flex-row">
      <figure className="w-1/3">
        <img src={photoURL} alt={name} className="w-40 h-48 mx-auto" />
      </figure>
      <div className="w-2/3 flex  px-2">
        <div className=" items-center justify-center ">
          <p>
            <b>Name:</b> {name}
          </p>
          <p>
            <b>Chef:</b> {chefName}
          </p>
     
          <p>
            <b>Supplier:</b> {supplierName}
          </p>
        </div>
        <div className=" flex flex-col gap-y-4 ml-20">
          <Link to={`/coffee/${ _id}`}>
            <button onClick={handleCoffeeView} className="btn  bg-[#D2B48C]">
              {/* <Link to="/viewCoffee"> */}
              <FaEye className="text-[#FFFFFF]" />
              
              {/* </Link>  */}
            </button>
          </Link>
            <Link to={`/coffee/edit/${_id}`}>
          <button className="btn  bg-[#3C393B]">
            {/* <button onClick={()=>handleUpdate(coffee._id)} className="btn btn-outline"> */}
              <FaPencil className="text-[#FFFFFF]" />
          </button>
            </Link>
          <button
            onClick={() => handleDelete(coffee._id)}
            className="btn  bg-[#EA4744]"
          >
            <ImBin className="text-[#FFFFFF]" />
          </button>
        </div>
      </div>

      {/* <CoffeDetails modalRef={modalRef} coffee={coffee}></CoffeDetails> */}
      {/* <UpdateCoffee updModalRef={updModalRef} coffee={coffee}></UpdateCoffee> */}
    </div>
  );
};

export default CoffeeCard;

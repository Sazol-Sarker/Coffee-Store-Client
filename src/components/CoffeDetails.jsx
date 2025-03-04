import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const CoffeDetails = ({ modalRef }) => {
  const coffee = useLoaderData();
  const navigate=useNavigate()

  const { photoURL, name, chefName, taste, supplierName } = coffee;

  return (
    <div className="w-6/12 mx-auto border-2 border-teal-300">
      
      <div className="hero bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={photoURL}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
             {name}
            </p>
            <p className="py-6">
             {chefName}
            </p>
            <p className="py-6">
             {taste}
            </p>
            <p className="py-6">
             {supplierName}
            </p>
            <button onClick={()=>navigate(-1)} className="btn btn-primary">Go Back</button>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default CoffeDetails;

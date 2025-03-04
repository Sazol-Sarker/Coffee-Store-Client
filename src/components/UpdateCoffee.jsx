import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateCoffee = () => {
  const navigate = useNavigate();
  const coffeeData = useLoaderData();
  console.log(coffeeData);
  const {
    _id,
    name,
    chefName,
    supplierName,
    taste,
    categoryName,
    detailsName,
    photoURL,
  } = coffeeData;

  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const chefName = form.chefName.value;
    const supplierName = form.supplierName.value;
    const taste = form.taste.value;
    const categoryName = form.categoryName.value;
    const detailsName = form.detailsName.value;
    const photoURL = form.photoURL.value;

    // making object to send to server: POST
    const updCoffee = {
      name,
      chefName,
      supplierName,
      taste,
      categoryName,
      detailsName,
      photoURL,
    };

    console.log("Updated Coffee=>", updCoffee);

    // clear the form
    form.reset();

    //   PUT update API
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updCoffee),
    })
      .then((res) => res.json())
      .then((data) => console.log("UPDATE Response from MongoDB=>", data));
  };

  return (
    <div className="w-2/3 mx-auto border-2 border-teal-500 rounded-md m-4">
      <h2 className="text-center text-2xl">Update Coffee</h2>

      <form onSubmit={handleUpdate} className="px-4">
        {/* Name & Chef */}
        <div className="flex justify-between my-4">
          <label className="input input-bordered flex items-center gap-2 w-1/2">
            Name
            <input type="text" name="name" className="grow" defaultValue={name} />
          </label>
          <label className="input input-bordered flex items-center gap-2 w-1/2">
            Chef
            <input type="text" name="chefName" className="grow" defaultValue={chefName} />
          </label>
        </div>

        {/* Supplier & Taste */}
        <div className="flex justify-between my-4">
          <label className="input input-bordered flex items-center gap-2 w-1/2">
            Supplier
            <input type="text" name="supplierName" className="grow" defaultValue={supplierName} />
          </label>
          <label className="input input-bordered flex items-center gap-2 w-1/2">
            Taste
            <input type="text" name="taste" className="grow" defaultValue={taste} />
          </label>
        </div>

        {/* Category & Details */}
        <div className="flex justify-between my-4">
          <label className="input input-bordered flex items-center gap-2 w-1/2">
            Category
            <input type="text" name="categoryName" className="grow" defaultValue={categoryName} />
          </label>
          <label className="input input-bordered flex items-center gap-2 w-1/2">
            Details
            <input type="text" name="detailsName" className="grow" defaultValue={detailsName} />
          </label>
        </div>

        {/* Photo URL */}
        <div className="w-full my-4">
          <label className="input input-bordered flex items-center gap-2 w-full">
            Photo URL
            <input type="text" name="photoURL" className="grow" defaultValue={photoURL} />
          </label>
        </div>

        {/* Buttons */}
        <div className="flex gap-5 mx-5">
          <button
            type="submit"
            className="w-1/2 text-center font-bold my-4 p-4 rounded-lg border-2 border-teal-400 bg-slate-200"
          >
            Update Coffee
          </button>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="w-1/2 font-bold rounded-lg hover:cursor-pointer text-center my-4 p-4 border-2 border-teal-400 bg-slate-200"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCoffee;

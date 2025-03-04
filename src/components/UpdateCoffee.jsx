const UpdateCoffee = () => {
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

    console.log(updCoffee);

    // clear the form
    form.reset();

    // https://i.ibb.co.com/whKJ386w/1.png
    // https://i.ibb.co.com/PZ2z65LT/2.png
    // https://i.ibb.co.com/PsPBY3mq/3.png
    // https://i.ibb.co.com/HS0814t/4.png
    // https://i.ibb.co.com/CK5V8QnK/5.png
    // https://i.ibb.co.com/JFqHSK3Z/6.png

    //   PUT update api
    fetch(`http://localhost:5000/coffee/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => console.log("Response form mongodb=>", data));
  };

  return (
    <div className="w-full ">
  
      <div className=" w-1/2 mx-auto border-2 border-teal-500 rounded-md m-4">
        <h2 className="text-center text-2xl">Update Coffee</h2>
        <form onSubmit={handleUpdate}>
          <div className="flex justify-between my-4 px-4">
            <label className="input input-bordered flex items-center gap-2">
              Name
              <input
                type="text"
                name="name"
                className="grow"
                placeholder="Enter coffee name"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Chef
              <input
                type="text"
                name="chefName"
                className="grow"
                placeholder="Enter chef name"
              />
            </label>
          </div>
          <div className="flex justify-between my-4 px-4">
            <label className="input input-bordered flex items-center gap-2">
              Supplier
              <input
                type="text"
                name="supplierName"
                className="grow"
                placeholder="Enter supplier"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Taste
              <input
                type="text"
                name="taste"
                className="grow"
                placeholder="Taste"
              />
            </label>
          </div>
          <div className="flex justify-between my-4 px-4">
            <label className="input input-bordered flex items-center gap-2">
              Category
              <input
                type="text"
                name="categoryName"
                className="grow"
                placeholder="Coffee Category"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Details
              <input
                type="text"
                name="detailsName"
                className="grow"
                placeholder="Coffee Details"
              />
            </label>
          </div>
          <div className="w-full my-4 px-4">
            <label className="input input-bordered flex items-center gap-2">
              Photo URL
              <input
                type="text"
                name="photoURL"
                className="grow"
                placeholder="Coffee Image URL"
              />
            </label>
          </div>
          <div className="w-full text-center my-4 p-4 border-2 border-teal-400 bg-slate-200">
            <button>Add Coffee</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;

const AddCoffee = () => {

    const handleAddNewCoffee=(e)=>{
        e.preventDefault();

        const form=e.target;
        const name=form.name.value;
        const chefName=form.chefName.value;
        const supplierName=form.supplierName.value;
        const taste=form.taste.value;
        const categoryName=form.categoryName.value;
        const detailsName=form.detailsName.value;
        const photoURL=form.photoURL.value;

        // making object to send to server: POST
        const newCoffee={name,chefName,supplierName,taste,categoryName,detailsName,photoURL}

        console.log(newCoffee);


        // POST API client to server
        fetch('http://localhost:5000/coffee',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))



        // clear the form
        form.reset()

    }
  return (
    <div className="w-1/2 mx-auto border-2 border-teal-500 rounded-md m-4">
        <h2 className="text-center text-2xl">Add New Coffee</h2>
      <form onSubmit={handleAddNewCoffee}>
        <div className="flex justify-between my-4 px-4">
          <label className="input input-bordered flex items-center gap-2">
            Name
            <input type="text" name="name" className="grow" placeholder="Enter coffee name" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Chef
            <input type="text" name="chefName" className="grow" placeholder="Enter coffee chef name" />
          </label>
        </div>
        <div className="flex justify-between my-4 px-4">
          <label className="input input-bordered flex items-center gap-2">
            Supplier
            <input type="text" name="supplierName" className="grow" placeholder="Daisy" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Taste
            <input type="text" name="taste" className="grow" placeholder="daisy@site.com" />
          </label>
        </div>
        <div className="flex justify-between my-4 px-4">
          <label className="input input-bordered flex items-center gap-2">
            Category
            <input type="text" name="categoryName" className="grow" placeholder="Daisy" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Details
            <input type="text" name="detailsName" className="grow" placeholder="daisy@site.com" />
          </label>
        </div>
        <div className="w-full my-4 px-4">
          <label className="input input-bordered flex items-center gap-2">
            Photo URL
            <input type="text" name="photoURL" className="grow" placeholder="Daisy" />
          </label>
        </div>
        <div className="w-full my-4 p-4 border-2 border-teal-400 bg-slate-200">
        <button>Add Coffee</button>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;

const CoffeDetails = ({ modalRef, coffee }) => {
  const {
    name,
    chefName,
    supplierName,
    taste,
    categoryName,
    detailsName,
    photoURL,
  } = coffee;
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        open modal
      </button> */}
      <dialog ref={modalRef} className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Click the button below to close</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
           
            
              <figure>
                <img src={photoURL} alt={name} />
              </figure>
              <div className="card-body flex flex-row">
                <div className="border-2 border-teal-500">
                  <h2 className="card-title">{name}</h2>
                  <p>{chefName}</p>
                  <p>{taste}</p>
                  <p>{supplierName}</p>
                </div>
                

             
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default CoffeDetails;

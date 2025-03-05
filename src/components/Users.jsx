import { useLoaderData } from "react-router-dom";
import { FaPencilAlt } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import NavBar from "./NavBar";
import Swal from "sweetalert2";

const Users = () => {
  const loadedUsers = useLoaderData();
  console.log(loadedUsers);
  const {users,setUsers}=useContext(AuthContext)
  setUsers(loadedUsers);
  const { deleteUserAccount } = useContext(AuthContext);

  //   Handle delete
  const handleUserDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        // MongoDB delete API
        fetch(`http://localhost:5000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            const remainingUsers = users.filter((usr) => usr._id !== id);
            setUsers(remainingUsers);
            console.log("Delete DB response=>", data);
          });
      }
    });
  };
//   handleUserUpdate
const handleUserUpdate=(id)=>{
    // fetch(`http://localhost:5000/users/${id}/edit`,{
    //     method:'PUT',
    //     headers:{'content-type':'application/json'},
    //     body:JSON.stringify(updUser)
    // })
}

  return (
    <div>
      <NavBar></NavBar>
      <h2 className="text-center text-xl text-teal-500 my-5 font-bold">
        Users: {users.length}{" "}
      </h2>

      <div className="overflow-x-auto w-8/12 mx-auto border-2 border-teal-500 rounded-lg m-4 p-4 space-y-4">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-xl text-teal-500">
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Created at</th>
              <th>Last Logged in</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, idx) => {
              return (
                <tr key={idx} className="hover:bg-slate-200">
                  <th>{idx + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.creationTime}</td>
                  <td>{user.lastSignInTime}</td>
                  <td className="flex gap-4">
                    <button onClick={()=>handleUserUpdate(user._id)}>
                      <FaPencilAlt className="text-xl hover:text-teal-400" />
                    </button>
                    <button onClick={() => handleUserDelete(user._id)}>
                      <RiDeleteBin6Line className="text-xl hover:text-red-600" />
                    </button>
                  </td>
                </tr>
              );
            })}
            {/* if empty table */}
          {!users.length && (
            <td className="text-center text-red-500">No user exists!</td>
          )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;

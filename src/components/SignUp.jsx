import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import NavBar from "./NavBar";

const SignUp = () => {
  // Access AuthContext
  const { name, registerUser } = useContext(AuthContext);
  console.log(name);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const user={name,email}
    
    // Creating user with FIREBASE
    registerUser(email, password)
    .then((result) => {
      console.log("REGISTER=> ", result.user);
      const newUserData=result.user
      console.log("SIGNUP in firebase done=>", user);
      // user
      const { creationTime,lastSignInTime}=newUserData.metadata
      const newUser = {...user,creationTime, lastSignInTime};
        // showing toast
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "Registered successfully!",
        });

        // Create user in MongoDB database: userCollection

        // POST API: user
        fetch("https://coffee-store-server-ashy-six.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Response from MongoDB=>>", data);
            // showing toast
            const Toast = Swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 2000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
              },
            });
            Toast.fire({
              icon: "success",
              title: "User inserted into DB successfully!",
            });
          });
      })
      .catch((error) => {
        console.log("ERROR=> ", error.code, error.message);
      });
  };
  return (
    <div className="w-8/12 mx-auto">
      <NavBar></NavBar>
      <div className=" w-full mx-auto bg-base-200 rounded-md my-5">
        <div className="flex flex-col items-center gap-y-5">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold text-center py-4">SignUp now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm my-5 shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-outline">SignUp</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

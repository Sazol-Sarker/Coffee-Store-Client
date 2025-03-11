import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const SignIn = () => {
  const { loginUser} = useContext(AuthContext);
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // Firebase user login
    loginUser(email, password)
      .then((result) => {
        const { email, metadata } = result.user;
        const updUser = { email, lastSignInTime: metadata?.lastSignInTime };

        // take metadata of logged in time & update partially in userCollection
        fetch(`https://coffee-store-server-ashy-six.vercel.app/users`, {
          method: "PATCH",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(updUser),
        })
          .then((res) => res.json())
          .then((data) => console.log("PATCH response from MongoDB:->", data));

        console.log(result.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Sign in successfull!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log("Error", error.code);
      });
  };
  return (
    <div className="w-8/12 mx-auto">
      <div className=" w-full mx-auto bg-base-200 rounded-md my-5">
        <div className="flex flex-col items-center gap-y-5">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold text-center py-4">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm my-5 shrink-0 shadow-2xl">
            <form onSubmit={handleSignIn} className="card-body">
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
                <label className="label">
                  <Link to="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-outline">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

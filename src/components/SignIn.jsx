import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="w-8/12 mx-auto">
      
      <div className=" w-full mx-auto bg-base-200 rounded-md my-5">
        <div className="flex flex-col items-center gap-y-5">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold text-center py-4">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm my-5 shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input
                  type="email"
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

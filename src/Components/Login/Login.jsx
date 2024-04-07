import { Link } from "react-router-dom";
import useDocumentTitle from "../../CustomHook/useDocumentTitle";
const Login = () => {

    useDocumentTitle('Login');

    return (
        <div className="container mx-auto hero min-h-screen ">
            <div className="hero-content flex-col gap-6">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login</h1>
                </div>
                <div className="card w-full shadow-2xl bg-base-100 md:w-96">
                <form className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <Link to='/register'><a href="#" className="label-text-alt link link-hover">Register Now</a></Link>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
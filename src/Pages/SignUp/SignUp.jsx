import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Auth/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UseAxiosPublic from "../../hooks/UseAxiosPublic";


const SignUp = () => {
    const axiosPublic = UseAxiosPublic();
    const { createUser, signInWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        console.log(email, password)
        createUser(email, password, name)
            .then(result => {
                const user = result.user;
                console.log(user);

                // create user entry in the database
                const userInfo = {
                    name,
                    email
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "User created successfully.",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            navigate(from, { replace: true })
                        }
                    })
            })
            .catch(error => {
                console.log(error)
            })
    }


    // handlelogin with google
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate("/");
                    })
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className="container mx-auto">
            <Helmet>
                <title>E-learning / Sign Up</title>
            </Helmet>
            <div className=" p-16 lg:pl-36 my-24 justify-between bg-blue-100">
                <div className="grid lg:grid-cols-2 gap-10">

                    <div className="w-full " style={{ backgroundImage: 'url(https://i.ibb.co/y00bZnx/il.jpg)' }}>
                        <h1 className=" bg-black pb-4 text-white font-bold pt-10 text-3xl text-center">Welcome bakc!</h1>
                        <div className="text-center pl-28 lg:w-[400px] mt-48 bg-[#09182acc]">
                            <p className="text-xl text-white py-4 pr-4">Learn From Us! Best Instruntors Around The World</p>
                        </div>
                    </div>

                    <div className=" h-[700px] rounded-md shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-center pb-2 font-bold text-2xl text-blue-600">Sign Up</h1>
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
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
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                            <div>
                                <p className="py-4 text-center text-xl underline">Ou using</p>
                                <button onClick={handleGoogleSignIn} className="p-3 mb-2 hover:bg-blue-600 hover:text-white hover:border-white w-full border-2 border-black rounded-md">Sign In with Google</button>
                                <button className="p-3 mb-2 hover:bg-blue-600 hover:text-white hover:border-white w-full border-2 border-black rounded-md">Sign In with Facebook</button>
                                <p className=" pt-2 text-center">do not have a account? <Link className="underline text-blue-500 font-bold" to="/signin">Sign In</Link></p>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SignUp;
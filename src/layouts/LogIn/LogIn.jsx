import { useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../Context/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";



const LogIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const ghProvider = new GithubAuthProvider();



    const handleGoogleLogIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            console.log(result);
            toast.success('Successfully logged in');
            setTimeout(() => {
                navigate(location?.state? location.state : "/");
            }, 2000);
        } catch (error) {
            console.error(error);
            toast.error('Failed to log in with Google');
        }
    }

    const handleGithubLogIn = () => {
        signInWithPopup(auth, ghProvider)
            .then(result => {
                console.log(result)
                toast.success('Successfully logged in');
                setTimeout(() => {
                    navigate(location?.state ? location.state : "/")
                }, 2000);
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleLogIn = (e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                console.log(result)
                toast.success('Successfully logged in');
                setTimeout(() => {
                    navigate(location?.state ? location.state : "/")
                }, 2000);
            })
            .catch(error => {
                console.error(error)
                toast.warning("User not found")
            })
    }

    
    
    return (
        <div>
            <div className="hero  min-h-screen bg-blue-200">
                <div className="hero-content flex-col animate__animated animate__backInDown">
                    <h3 className="text-4xl font-bold text-blue-500 mb-2">Login Now</h3>
                    <div className="card shrink-0 w-full md:w-[400px]  shadow-2xl bg-blue-100">
                        <form onSubmit={handleLogIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative">
                                    <input type={showPassword ? "text" : "password"} placeholder="Create new password" name="password" className="input input-bordered w-full" required />
                                    <span className="absolute top-4 right-3" onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? <AiFillEyeInvisible /> : <AiFillEye />
                                        }
                                    </span>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#113065] text-white">Login</button>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-center">Or</span>
                                </label>
                                <button onClick={handleGoogleLogIn} className="btn bg-orange-600 text-white"> <BsGoogle /> Sign in with Google </button>
                                <button onClick={handleGithubLogIn} className="btn bg-black text-white"> <BsGithub /> Sign in with Github </button>
                            </div>
                            <p className="text-center">Do not have an account?</p>
                            <Link to="/register"><p className="text-xl font-medium text-[#113065] underline text-center">Register</p></Link>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default LogIn;
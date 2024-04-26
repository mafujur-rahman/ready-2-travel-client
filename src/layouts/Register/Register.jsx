import { useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthProvider";


const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {createUser, user} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name,photo);

        if (password.length < 6) {
            toast.warning("Password should be atleast 6 characters");
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast.warning("Password must have an Uppercase letter")
            return;
        }
        else if (!/[a-z]/.test(password)) {
            toast.warning("Password must have an Lowercase letter")
            return;
        }

         // create user
         createUser(email, password)
         .then(result => {
             console.log(result.user)
             toast.success("Successfully Registered")
             setTimeout(() => {
                 navigate("/")
             }, 2000);
         })
         .catch(error => {
             console.error(error)
             if(user){
                 toast.warning("Already Registered, please login")
             }
            
         })
        
    }

    return (
        <div>
            <div className="hero  min-h-screen bg-blue-200">
                <div className="hero-content flex-col animate__animated animate__backInUp">
                    <h3 className="text-4xl font-bold text-blue-500 mb-2">Register Now</h3>
                    <div className="card shrink-0 w-full md:w-[400px]  shadow-2xl bg-blue-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" placeholder="Enter your full name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Enter your email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Enter your photo url" name="photo" className="input input-bordered" required />
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
                                <button className="btn bg-blue-950 text-white">Register</button>
                            </div>
                            <p className="text-center">Already have an account?</p>
                            <Link to="/log-in"><p className="text-xl font-medium text-blue-950 underline text-center">Log in</p></Link>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;
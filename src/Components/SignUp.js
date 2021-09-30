import logo from "../Assets/Vector.png"
import Input from "./Input"
import { Link } from "react-router-dom"
import { FcGoogle } from "react-icons/fc"
import { RiSendPlaneFill } from "react-icons/ri"


const SignUp = () => {

    return (
        <div className="lg:w-4/12 md:w-1/2 w-full flex flex-col items-center justify-evenly px-8 backdrop-filter backdrop-blur-35 bg-gray-100 bg-opacity-40">
            <Link to="/">
                <img src={logo} className="h-12 w-24" alt="" />
                <h1 className="text-green-400 font-bold text-2xl text-center tracking-wider">
                    Frus <span className="text-pink-500 font-medium text-xl">Dev</span>
                </h1>
            </Link>
            <form className="flex flex-col items-center">
                <h1 className="mb-3 text-lg font-medium text-gray-600">Sign up and <span className="text-sky-400">join the team</span></h1>
                <button className="bg-sky-200 w-full py-3 border-none text-sm font-bold rounded-lg text-gray-800 flex items-center justify-center hover:bg-sky-300 transition-colors transform duration-200 hover:text-gray-600"> <FcGoogle size={24} className="mr-2 bg-gray-100 rounded-full" /> Sign up with Google</button>
                <span className="text-xs text-gray-400 text-center py-4 cursor-pointer hover:underline">Or sign up with email</span>
                <Input type="text" placeholder="Full Name" />
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <Input type="password" placeholder="Confirm Password" />
                <Link to="/avatar" className="w-full py-3 border-none focus:outline-none mt-4 shadow-custom rounded-lg bg-green-400 text-gray-100 hover:bg-green-500 transition-colors transform duration-200 font-medium flex items-center justify-center"> <RiSendPlaneFill size={20} className="mr-1" /> Sign Up </Link>
                <p className="text-center text-sm mt-5 text-gray-600">By singing up, I agree to the <span className="underline cursor-pointer">Privacy Policy <br /> and Terms of Service</span></p>
                <h1 className="mt-2 text-gray-700 font-bold">Already have an account? <Link to="/login" className="cursor-pointer text-pink-500 font-black">Sign In</Link></h1>
            </form>
        </div>
    )
}

export default SignUp

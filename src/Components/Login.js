import Input from "./Input"
import logo from "../Assets/Vector.png"
import { Link } from "react-router-dom"
import { FcGoogle } from "react-icons/fc"

const Login = () => {
    return (
        <div className="lg:w-4/12 md:w-1/2 w-full flex flex-col items-center justify-evenly px-8 backdrop-filter backdrop-blur-35 bg-gray-100 bg-opacity-40 py-14">
            <Link to="/">
                <img src={logo} className="h-12 w-24" alt="" />
                <h1 className="text-green-400 font-bold text-2xl text-center tracking-wider">
                    Frus <span className="text-pink-500 font-medium text-xl">Dev</span>
                </h1>
            </Link>
            <form className="flex flex-col items-center">
                <h1 className="mb-3 text-xl font-bold text-gray-600">Sign in</h1>
                <button className="bg-sky-200 w-full py-3 border-none text-sm font-bold rounded-lg text-gray-800 flex items-center justify-center hover:bg-sky-300 transition-colors transform duration-200 hover:text-gray-600"> <FcGoogle size={24} className="mr-2 bg-gray-100 rounded-full" /> Sign in with Google</button>
                <span className="text-xs text-gray-400 text-center py-4 cursor-pointer hover:underline">Or sign up with email</span>
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <button className="w-full py-3 border-none focus:outline-none mt-4 shadow-custom rounded-lg bg-green-400 text-gray-100 hover:bg-green-500 transition-colors transform duration-200 font-medium flex items-center justify-center"> Sign In </button>
                <h1 className="mt-2 text-gray-700 font-bold">Don't have an account? <Link to="/" className="cursor-pointer text-pink-500 font-black">Sign Up</Link></h1>
            </form>
        </div>
    )
}

export default Login

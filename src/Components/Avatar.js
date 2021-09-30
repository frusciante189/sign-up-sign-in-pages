import { useState } from "react";
import logo from "../Assets/Vector.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsCloudUpload } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

const Avatar = () => {
  const [image, setImage] = useState();

  const avatarHandle = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.addEventListener("load", function () {
      setImage(this.result);
    });
    reader.readAsDataURL(file);
  };
  return (
    <div className="lg:w-4/12 md:w-1/2 w-full flex flex-col items-center justify-evenly px-8 backdrop-filter backdrop-blur-35 bg-gray-100 bg-opacity-40 pb-20">
      <Link to="/">
        <img src={logo} className="h-12 w-24" alt="" />
        <h1 className="text-green-400 font-bold text-2xl text-center tracking-wider">
          Frus <span className="text-pink-500 font-medium text-xl">Dev</span>
        </h1>
      </Link>
      <div className="flex flex-col justify-center items-center text-center text-gray-800 relative z-10">
        <h1 className="font-bold text-2xl mb-8">One Last Step</h1>
        <p className="font-medium mb-5">
          Upload your avatar <br /> for your premium account
        </p>
        <label className="bg-gray-300 bg-opacity-80 rounded-full p-7 hover:bg-gray-400 hover:bg-opacity-70 transition-colors transform duration-200 relative cursor-pointer">
          <input type="file" className="hidden" onChange={avatarHandle} />
          {image && (
            <img
              src={image}
              className="w-[100px] h-[100px] absolute top-0 inset-x-0 rounded-full object-cover"
              alt=""
            />
          )}
          <BsCloudUpload size={44} />
        </label>
        {(image && (
          <button className="bg-green-400 w-64 py-2 rounded-lg text-white flex items-center justify-center font-medium mt-5 focus:outline-none">
            <MdDashboard className="mr-1" /> Lets start!
          </button>
        )) || (
          <span className="font-bold text-sm flex items-center justify-center mt-5 hover:underline">
            Skip this step <AiOutlineArrowRight size={16} className="ml-1" />
          </span>
        )}
      </div>
      <div className="hidden 2xl:block 2xl:w-full 2xl:h-[300px] 2xl:mt-14 2xl:absolute 2xl:translate-y-2/3">
        <img
          src="https://images.unsplash.com/photo-1620880137148-60b425238e6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="pp"
          className="w-12 h-12 rounded-full object-cover absolute right-20 top-8"
        />
        <img
          src="https://images.unsplash.com/photo-1632583285386-a917ab2af861?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
          alt="pp"
          className="w-12 h-12 rounded-full object-cover absolute left-20 top-4"
        />
        <img
          src="https://images.unsplash.com/photo-1565144317118-0655428f4cb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="pp"
          className="w-12 h-12 rounded-full object-cover absolute left-40 top-16"
        />
        <img
          src="https://images.unsplash.com/photo-1601233748618-c0d3963fd030?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1109&q=80"
          alt="pp"
          className="w-10 h-10 rounded-full object-cover absolute right-44 top-12"
        />
        <img
          src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
          alt="pp"
          className="w-14 h-14 rounded-full object-cover absolute right-40 bottom-12"
        />
        <img
          src="https://images.unsplash.com/photo-1513673054901-2b5f51551112?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="pp"
          className="w-10 h-10 rounded-full object-cover absolute right-16 top-32"
        />
        <img
          src="https://images.unsplash.com/photo-1552663651-2e4250e6c7c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
          alt="pp"
          className="w-14 h-14 rounded-full object-cover absolute right-36 top-28"
        />
        <img
          src="https://images.unsplash.com/photo-1580331451062-99ff652288d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
          alt="pp"
          className="w-8 h-8 rounded-full object-cover absolute left-44 top-32"
        />
        <img
          src="https://images.unsplash.com/photo-1571170733941-e17a2a00083b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="pp"
          className="w-12 h-12 rounded-full object-cover absolute left-20 bottom-6"
        />
        <img
          src="https://images.unsplash.com/photo-1554564200-198b0cd87cf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80"
          alt="pp"
          className="w-8 h-8 rounded-full object-cover absolute left-5 bottom-20"
        />
        <img
          src="https://images.unsplash.com/photo-1580775710767-deb9652031b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
          alt="pp"
          className="w-10 h-10 rounded-full object-cover absolute left-40 bottom-12"
        />
        <img
          src="https://images.unsplash.com/photo-1631761320198-4bc79af9029b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
          alt="pp"
          className="w-14 h-14 rounded-full object-cover absolute left-28 bottom-24"
        />
        <img
          src="https://images.unsplash.com/photo-1632033526224-9fc8a4f76d6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
          alt="pp"
          className="w-14 h-14 rounded-full object-cover absolute left-8 bottom-40"
        />
        <img
          src="https://images.unsplash.com/photo-1619517934704-1613baa38c29?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
          alt="pp"
          className="w-12 h-12 rounded-full object-cover absolute right-14 bottom-2"
        />
        <img
          src="https://images.unsplash.com/photo-1632402122186-af947fe01e38?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80"
          alt="pp"
          className="w-16 h-16 rounded-full object-cover absolute bottom-8 right-60"
        />
      </div>
    </div>
  );
};

export default Avatar;

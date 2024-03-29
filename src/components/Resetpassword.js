import React, { useState } from "react";
import { BsEyeSlash, BsEye, BsFacebook } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Resetpassword() {

      const [showpw, setShowpw] = useState(false);
      const [email, getEmail] = useState("");
      const [password, getPassword] = useState("");
    const [confirmpw,getConfirmpw] = useState("")
      const showPassword = () => {
        setShowpw(!showpw);
      };
      const handleReset = (e) => {
        e.preventDefault();
        if(password!=confirmpw){
            toast.error("New password và confirm password không giống nhau")
        }
        else{
            toast.success("Vui lòng kiểm tra email để reset password")
        }
      };
      return (
        <div className="h-[100vh] pt-40">
          <div className="max-w-screen-md bg-[#ddeef8] dark:bg-[#a5d4f0] my-auto mx-auto items-center shadow-lg p-4 rounded-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
              <div className="hidden md:block bg-[url('./assets/login.jpg')] h-[80vh] bg-center bg-cover bg-no-repeat"></div>
              <div className="justify-center mx-auto w-[90%]">
                <h2 className="font-bold text-3xl dark:text-white mb-4">Password reset</h2>
                <p className="text-[#707070] dark:text-white my-4">
                  Welcome to <strong>Blue House Travel</strong>
                </p>
                <div>
                  <form onSubmit={handleReset}>
                    <div className="relative z-0 w-full mb-6 group">
                      <input
                        value={email}
                        onChange={(e) => getEmail(e.target.value)}
                        type="email"
                        name="floating_email"
                        autoFocus
                        id="floating_email"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Email address
                      </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                      <div
                        className="absolute right-1 top-[50%]"
                        onClick={() => showPassword()}
                      >
                        {showpw ? <BsEye /> : <BsEyeSlash />}
                      </div>
                      <input
                        value={password}
                        onChange={(e) => getPassword(e.target.value)}
                        type={showpw ? "type" : "password"}
                        name="floating_text"
                        id="floating_text"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        New password
                      </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                      <div
                        className="absolute right-1 top-[50%]"
                        onClick={() => showPassword()}
                      >
                        {showpw ? <BsEye /> : <BsEyeSlash />}
                      </div>
                      <input
                        value={confirmpw}
                        onChange={(e) => getConfirmpw(e.target.value)}
                        type={showpw ? "type" : "password"}
                        name="floating_text"
                        id="floating_text"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Confirm new password
                      </label>
                    </div>
                    <button
                      className="relative inline-flex w-full items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                    >
                      <span className="relative px-5 py-2.5 w-full transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Submit
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Resetpassword
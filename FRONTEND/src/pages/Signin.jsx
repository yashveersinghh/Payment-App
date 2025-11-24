import { useNavigate } from "react-router-dom"
import Button from "../components/Button"
import ButtonWarning from "../components/ButtonWarning"
import { Heading } from "../components/Heading"
import InputBox from "../components/InputBox"
import SubHeading from "../components/SubHeading"
import { useState } from "react"
import toast from 'react-hot-toast'
import axios from "axios"
import { API_BASE } from "../lib/api"

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e?.preventDefault?.();

    if (!username.trim() || !password.trim()) {
      toast("Please enter email and password");
      return;
    }

    try {
      const res = await axios.post(`${API_BASE}/api/v1/user/signin`, {
        username,
        password,
      });
      const data = res.data;
      if (data && data.token) {
        localStorage.setItem("token", data.token);
        toast.success("Signed in successfully!");
        navigate("/dashboard");
      } else {
        toast.error?.(data?.message || "Invalid Credentials");
      }
    } catch (err) {
      console.error(err);
      const serverMsg = err.response?.data?.message;
      if (serverMsg) toast.error?.(serverMsg);
      else toast.error?.("Network error. Try again later.");
    }
  };
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="bg-white w-80 rounded-lg text-centered p-2 px-4 h-max">
                <Heading label={'Sign In'} />
                <SubHeading label={"Enter your information to sign in your account"}/>
                <InputBox onchange={(e)=>{
                  setUsername(e.target.value);
                }} placeholder="user@gmail.com" label={"Email"} />
                <InputBox onchange={(e)=>{
                  setPassword(e.target.value);
                }} placeholder="password" type="password" label={"Password"} />
                <div className="pt-4">
                    <Button onClick={handleSignIn} label={"Sign in"} />
                </div>
                <ButtonWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"}/>
            </div>
        </div>
    </div>
  )
}

export default Signin
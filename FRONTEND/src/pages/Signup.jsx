import { useState } from "react"
import Button from "../components/Button"
import ButtonWarning from "../components/ButtonWarning"
import { Heading } from "../components/Heading"
import InputBox from "../components/InputBox"
import SubHeading from "../components/SubHeading"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import { API_BASE } from "../lib/api"

const Signup = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    if (!firstName.trim() || !lastName.trim() || !username.trim() || !password.trim()) {
      toast.error("Please fill all the fields");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(`${API_BASE}/api/v1/user/signup`, {
        firstName,
        lastName,
        username,
        password,
      });

      const data = response.data;
      if (data && data.token) {
        localStorage.setItem("token", data.token);
        toast.success("Signed up successfully!");
        navigate("/dashboard");
      } else {
        toast.error(data?.message || "Signup failed");
      }
    } catch (err) {
      console.error("Signup error:", err);
      const serverMsg = err.response?.data?.message;
      if (serverMsg) toast.error(serverMsg);
      else toast.error("Network or server error. Check console.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="bg-white w-80 rounded-lg text-centered p-2 px-4 h-max">
                <Heading label={'Sign Up'} />
                <SubHeading label={"Enter yout information to create an account"}/>
                <InputBox onchange={(e)=>{
                  setFirstName(e.target.value);
                }} placeholder="name" label={"First Name"} />
                <InputBox onchange={(e)=>{
                  setLastName(e.target.value);
                }} placeholder="title" label={"Last Name"} />
                <InputBox onchange={(e)=>{
                  setUsername(e.target.value);
                }} placeholder="user@gmail.com" label={"Email"} />
                <InputBox onchange={(e)=>{
                  setPassword(e.target.value);
                }} placeholder="password" type="password" label={"Password"} />
                <div className="pt-4">
                    <Button onClick={handleSignUp} label={loading ? "Signing..." : "Sign up"} />
                </div>
                <ButtonWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"}/>
            </div>
        </div>
    </div>
  )
}

export default Signup
import { useState } from "react"
import Button from "../components/Button"
import ButtonWarning from "../components/ButtonWarning"
import { Heading } from "../components/Heading"
import InputBox from "../components/InputBox"
import SubHeading from "../components/SubHeading"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Signup = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="bg-white w-80 rounded-lg text-centered p-2 px-4 h-max">
                <Heading label={'Sign Up'} />
                <SubHeading label={"Enter yout information to create an account"}/>
                <InputBox onchange={(e)=>{
                  setFirstName(e.target.value);
                }} placeholder="john" label={"First Name"} />
                <InputBox onchange={(e)=>{
                  setLastName(e.target.value);
                }} placeholder="cena" label={"Last Name"} />
                <InputBox onchange={(e)=>{
                  setUsername(e.target.value);
                }} placeholder="johncena@gmail.com" label={"Email"} />
                <InputBox onchange={(e)=>{
                  setPassword(e.target.value);
                }} placeholder="password" label={"Password"} />
                <div className="pt-4">
                    <Button onClick={async () => {
                      const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                        firstName,
                        lastName,
                        username,
                        password,
                      })
                      localStorage.setItem("token", response.data.token);
                      navigate("/dashboard")
                    }} label={"Sign up"}/>
                </div>
                <ButtonWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"}/>
            </div>
        </div>
    </div>
  )
}

export default Signup
import { useState } from "react"
import Button from "./Button";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  useEffect(()=>{
    axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
      .then(response => {
        setUsers(response.data.user);
      }
  )}, [filter]);

  return (
    <div className="w-full max-w-4xl pt-6 ml-9">
      <div className="font-semibold">Users</div>
      <input onChange={(e)=>{
        setFilter(e.target.value);
      }} type="text" placeholder="Search Users..." className="w-full p-1 border rounded border-slate-300 mt-2" />
      <div>
        {users.map(user => <User key={user._id} user={user} />)}
      </div>
    </div>
  )
}

function User({user}) {
  const navigate = useNavigate();
      return <div className="flex justify-between mt-4">
        <div className="flex">
            <div className="rounded-full h-10 w-10 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstName[0].toUpperCase()}
                </div>
            </div>
            <div className="flex flex-col justify-center h-full">
                <div>
                    {user.firstName} {user.lastName}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center h-full">
            <Button onClick={()=>{
              navigate("/send?id=" + user._id + "&name=" + user.firstName);
            }} label={"Send Money"} />
        </div>
    </div>
}

export default Users
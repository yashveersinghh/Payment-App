import { useState } from "react"
import Button from "./Button";

const Users = () => {
  const [users, setUsers] = useState([{
    firstName: "John",
    lastName: "Doe",
    _id: 1
  }]);

  return (
    <div className="w-full max-w-4xl pt-6 ml-9">
      <div className="font-semibold">Users</div>
      <input type="text" placeholder="Search Users..." className="w-full p-1 border rounded border-slate-300 mt-2" />
      <div>
        {users.map(user => <User key={user._id} user={user} />)}
      </div>
    </div>
  )
}

function User({user}) {
      return <div className="flex justify-between mt-4">
        <div className="flex">
            <div className="rounded-full h-10 w-10 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstName[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-full">
                <div>
                    {user.firstName} {user.lastName}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center h-full">
            <Button label={"Send Money"} />
        </div>
    </div>
}

export default Users
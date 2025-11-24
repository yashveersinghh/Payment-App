import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { API_BASE } from "../lib/api";

const Balance = () => {
  const [balance, setBalance] = useState(0);
  useEffect(() => {
  const token = localStorage.getItem('token');
  axios.get(`${API_BASE}/api/v1/account/balance`, {
    headers: { Authorization: `Bearer ${token}` }
  })
  .then(response => {
    setBalance(response.data.balance)
  });
}, []);
  return (
    <div className="flex">
        <div className="font-semibold text-lg">
            Your Balance
        </div>
        <div className="font-semibold ml-4 text-lg">
            Rs {balance}
        </div>
    </div>
  )
}

export default Balance
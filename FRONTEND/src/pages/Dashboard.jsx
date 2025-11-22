import AppBar from "../components/AppBar"
import Balance from "../components/Balance"
import Users from "../components/Users"

const Dashboard = () => {
	return (
		<div className="h-screen flex flex-col items-center">
			<div className="w-full max-w-4xl">
				<AppBar />
			</div>
			<div className="w-full max-w-4xl mt-4 px-4">
				<Balance value={"10,000"} />
			</div>
			<Users />
		</div>
	)
}

export default Dashboard
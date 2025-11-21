import AppBar from "../components/AppBar"
import Balance from "../components/Balance"

const Dashboard = () => {
	return (
		<div className="h-screen flex flex-col items-center">
			<div className="w-full max-w-4xl">
				<AppBar />
			</div>
			<div className="w-full max-w-4xl mt-4 px-4">
				<Balance />
			</div>
		</div>
	)
}

export default Dashboard
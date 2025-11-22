const SendMoney = () => {
	return (
		<div className="h-screen flex items-center justify-center bg-gray-200">
			<div className="h-min text-card-foreground max-w-md p-8 pt-8 w-120 bg-white shadow-lg rounded-lg">
				<h2 className="font-bold text-3xl flex justify-center">Send Money</h2>
				<div className="flex items-center gap-4 mt-15">
					<div className="h-12 w-12 rounded-full bg-green-500 flex justify-center items-center text-white text-xl">A</div>
					<h3 className="font-semibold text-2xl">Friend's Name</h3>
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="amount" className="font-semibold ">Amount(in Rs)</label>
					<input type="number" placeholder="Enter the Amount" className="border border-slate-200 rounded font-medium text-md text-gray-900 p-2" />
				</div>
				<div className="mt-5 mb-5">
					<button className="text-white font-medium bg-green-500 border rounded-xl cursor-pointer w-full pt-3 pb-3">Initiate Transfer</button>
				</div>
			</div>
		</div>
	)
}

export default SendMoney

const AppBar = () => {
  return (
    <div className="flex justify-between w-full h-max py-2 px-2 border border-slate-300 rounded m-4 font-semibold">
        <div>SimuPay</div>
        <div className="flex gap-5 px-4">
            <h1>Hello</h1>
            <div className= "border rounded-full w-7 h-7 flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </div>
        </div>
    </div>
  )
}

export default AppBar
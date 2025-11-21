import { Heading } from "../components/Heading"

const Signin = () => {
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="bg-white w-80 rounded-lg text-centered p-2 px-4 h-max">
                <Heading label={'Sign In'} />
            </div>
        </div>
    </div>
  )
}

export default Signin
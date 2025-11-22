const InputBox = ({label, placeholder, onchange}) => {
  return (
    <div>
        <div className="text-sm font-medium py-2 text-left">
            {label}
        </div>
        <input onChange={onchange} placeholder={placeholder} type="text" className="w-full px-2 py-1 border rounded border-slate-200" />
    </div>
  )
}

export default InputBox
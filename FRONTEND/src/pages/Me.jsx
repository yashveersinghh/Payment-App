import { useNavigate } from "react-router-dom";

const Me = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-lineart-to-b from-slate-100 via-white to-slate-100 flex items-start justify-center py-10">
            <div className="w-full max-w-5xl px-6">

                <header className="flex items-center justify-between bg-white/60 backdrop-blur-md rounded-xl p-4 shadow-md">
                    <div className="flex items-center gap-4">
                        <img src="/logo.png" alt="logo" className="w-12 h-12 rounded-full shadow-sm object-cover" />
                        <div>
                            <div className="text-2xl font-semibold font-primary">SimuPay</div>
                            <div className="text-xs text-slate-500">Demo MERN payment app</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => navigate("/signin")}
                            className="px-4 py-2 rounded-full bg-green-600 text-white font-semibold hover:bg-green-500 transition"
                        >
                            Sign in
                        </button>
                        <button
                            onClick={() => navigate("/signup")}
                            className="px-4 py-2 rounded-full border border-green-600 text-green-600 font-semibold hover:bg-green-50 transition"
                        >
                            Sign up
                        </button>
                    </div>
                </header>
                <main className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight font-primary">SimuPay — learn payments by building</h1>
                        <p className="text-lg text-slate-700 max-w-xl">SimuPay gives users a simulated balance and lets them transfer demo money. No real payments — just a safe playground for learning authentication, transactions, and frontend↔backend flows.</p>

                        <div className="flex flex-wrap gap-3">
                            <button onClick={() => navigate('/signup')} className="bg-green-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-green-500">Get started</button>
                            <a href="#video" className="px-5 py-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50">See demo</a>
                        </div>

                        <div className="mt-4 grid grid-cols-2 gap-3 max-w-sm">
                            <div className="bg-white rounded-lg p-3 shadow-sm">
                                <div className="text-sm font-medium">Authentication</div>
                                <div className="text-xs text-slate-500">Signup, signin and JWT-based auth</div>
                            </div>
                            <div className="bg-white rounded-lg p-3 shadow-sm">
                                <div className="text-sm font-medium">Transactions</div>
                                <div className="text-xs text-slate-500">Simulated transfers & balances</div>
                            </div>
                        </div>
                    </div>

                    <div id="video" className="w-full">
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                            <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                                <div className="font-medium">Demo Walkthrough</div>
                                <div className="text-xs text-slate-500">Auto-play muted loop</div>
                            </div>
                            <video
                                src="/demo.mp4"
                                autoPlay
                                muted
                                loop
                                className="w-full h-64 md:h-80 object-cover"
                            />
                            <div className="p-4 text-sm text-slate-600">
                                This short demo shows signing up, checking your balance, and sending demo money to another user.
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Me;
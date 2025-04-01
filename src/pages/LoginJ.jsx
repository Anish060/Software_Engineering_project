import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
function LoginJ() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:8081/j_info")
        .then((res) => res.json())
        .then((dataa) => {
          console.log("Fetched data:", dataa); // ✅ Debugging
          setData(dataa);
        })
        .catch((err) => console.error("Fetch error:", err));
    }, []); // ✅ Run only once on mount
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Login attempt with:", { email, password });
    };
  
    const handleLogin = async () => {
      if (data.length === 0) {
        alert("User data not loaded yet. Please try again.");
        return;
      }
  
      const user = data.find(
        (u) =>
          u.user_name.trim().toLowerCase() === email.trim().toLowerCase() &&
          String(u.password).trim() === password.trim()
      );
  
      if (user) {
        alert("Login successful!");
        try {
            const response = await fetch("http://localhost:8081/cur", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(email),
            });
      
            if (response.ok) {
              console.log("Data submitted successfully!");
            } else {
              console.error("Failed to submit data.");
            }
            
          } catch (error) {
            console.error("Error during submission:", error);
          }
        navigate("/dashboardj",{state:{email}});
      } else {
        alert("Invalid credentials");
      }
    };
  
    return (
        <div className="flex flex-col min-h-screen bg-gray-100 bg-[url('https://i.pinimg.com/736x/91/82/ae/9182ae6289b2e2dcc35ef5fd6618a6a6.jpg')]">
        {/* Header */}
        <div className="relative bg-[url('https://source.unsplash.com/1600x400/?law,justice')] bg-cover bg-center text-white">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative flex gap-2 items-center p-4">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/223f4f43b00bf6d9de1545efb7107a8b5ae7317d"
              alt=""
              className="w-12 h-12 max-sm:w-10 max-sm:h-10"
            />
            <div className="flex gap-9 items-center max-sm:hidden">
              <div className="text-xl underline hover:text-gray-300 cursor-pointer">About</div>
              <div className="text-xl underline hover:text-gray-300 cursor-pointer">Contact Us</div>
            </div>
          </div>
        </div>
  
        {/* Main Content */}
        <div className="flex flex-col items-center px-10 py-14">
          <div className="text-3xl text-center text-black underline font-bold tracking-wide">
            Legal Ease
          </div>
          <form className="flex flex-col gap-6 p-6 bg-white rounded-lg shadow-lg border border-gray-300 min-w-80">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-base text-stone-900">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 text-base bg-white rounded-lg border min-w-60"
                placeholder="Email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-base text-stone-900">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="flex-1 px-4 py-3 text-base bg-white rounded-lg border min-w-60"
                placeholder="Password"
              />
            </div>
            <div className="flex gap-4 items-center">
              <button type="button" className="p-3 bg-black text-white rounded-lg hover:bg-gray-800 transition duration-300" onClick={handleLogin}>
                Log In
              </button>
            </div>
            <a href="#" className="text-base underline text-stone-900 hover:text-gray-600">Forgot password?</a>
          </form>
        </div>
  
        {/* Footer */}
        <footer className="mt-10 bg-[url('https://source.unsplash.com/1600x400/?law,legal')] bg-gray-100 bg-cover bg-center text-white py-6 text-center border-t border-gray-100 relative">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative max-w-5xl mx-auto px-4">
            <p className="text-lg font-semibold">Legal Ease © {new Date().getFullYear()}</p>
            <p className="text-sm mt-1">Empowering Justice, One Click at a Time.</p>
            <div className="flex justify-center gap-6 mt-3">
              <a href="mailto:support@legalease.com" className="hover:text-gray-300 transition duration-300">
                support@legalease.com
              </a>
              <a href="tel:+911234567890" className="hover:text-gray-300 transition duration-300">
                +91 12345 67890
              </a>
            </div>
            <div className="flex justify-center gap-4 mt-3 text-gray-400">
              <a href="#" className="hover:text-white transition duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-white transition duration-300">Terms of Service</a>
            </div>
          </div>
        </footer>
      </div>
    );
}

export default LoginJ
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  const email = location.state?.email;
  const [law, setLaw] = useState([]);
  const [conte, setConte] = useState({ name: email, lawyer: "", title: "", description: "" });

  // Fetch lawyer details on mount
  useEffect(() => {
    fetch("http://localhost:8081/l_info")
      .then((res) => res.json())
      .then((data) => setLaw(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting:", conte);
    const lo=()=>{
      navigate("/");
    }

    try {
      const response = await fetch("http://localhost:8081/sen", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(conte),
      });

      if (response.ok) {
        console.log("Data submitted successfully!");
      } else {
        console.error("Failed to submit data.");
      }
      alert("Succesfully applied the case");
    } catch (error) {
      console.error("Error during submission:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
    {/* Header */}
    <div className="relative bg-[url('https://source.unsplash.com/1600x400/?law,justice')] bg-cover bg-center text-white">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative flex gap-2 items-center p-4">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/223f4f43b00bf6d9de1545efb7107a8b5ae7317d"
          alt="Logo"
          className="w-12 h-12 max-sm:w-10 max-sm:h-10"
        />
        <div className="flex gap-9 items-center max-sm:hidden">
          <div className="text-xl underline hover:text-gray-300 cursor-pointer">About</div>
          <div className="text-xl underline hover:text-gray-300 cursor-pointer">Contact Us</div>
          <Link to="/">
          <div className="text-xl underline hover:text-gray-300 cursor-pointer">Log out</div>
          </Link>
        </div>
       
      </div>
    </div>

    {/* Main Content */}
    <div className="flex flex-col bg-white min-h-screen p-6 bg-[url('https://i.pinimg.com/736x/91/82/ae/9182ae6289b2e2dcc35ef5fd6618a6a6.jpg')]">
      <div className="flex gap-1 items-center p-2.5 border-b">
        <Link to="/ch" state={{ email }}>
          <div className="text-base text-black">Case History</div>
        </Link>
        <p></p>
        <div className="text-base text-black">Response</div>
        <div className="ml-auto text-base text-black">Send</div>
      </div>

      {/* Case Input Form */}
      <div className="flex flex-col gap-6 mx-auto w-full max-w-[600px]">
        <p className="font-bold">Enter the case Information:</p>
        <div className="flex flex-col gap-2">
          <label className="text-base text-stone-900">Case Title:</label>
          <input
            type="text"
            placeholder="Enter context"
            className="px-4 py-3 w-full text-base bg-white rounded-lg border border-zinc-300 text-zinc-900"
            onChange={(e) => setConte({ ...conte, title: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-base text-stone-900">Case Description:</label>
          <textarea
            placeholder="Describe the issue"
            className="px-4 py-3 w-full text-base bg-white rounded-lg border resize-none border-zinc-300 min-h-20 text-zinc-900"
            onChange={(e) => setConte({ ...conte, description: e.target.value })}
          />
        </div>
        <button
          className="p-3 w-full text-base rounded-lg bg-stone-900 text-white hover:bg-gray-800 transition duration-300"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>

      {/* Lawyer Selection */}
      <div className="mt-8">
        <p className="font-bold mb-3">Lawyer Details:</p>
        <table className="w-full border-collapse border border-black bg-zinc-50">
          <thead className="bg-gray-200 border-b border-black">
            <tr className="text-base text-black hover:bg-[#ffa200] transition duration-200">
              <th className="p-3 border border-black">User</th>
              <th className="p-3 border border-black">Contact</th>
              <th className="p-3 border border-black">Select</th>
            </tr>
          </thead>
          <tbody>
            {law.length > 0 ? (
              law.map((item, index) => (
                <tr key={index} className="text-center border-b border-black hover:bg-[#f7ae30] transition duration-200">
                  <td className="p-3 border border-black">{item.user_name || "N/A"}</td>
                  <td className="p-3 border border-black">{item.contact_no || "N/A"}</td>
                  <td className="p-3 border border-black">
                    <input
                      type="radio"
                      name="selection"
                      onChange={() => setConte({ ...conte, lawyer: item.user_name })}
                      className="w-5 h-5 cursor-pointer"
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="p-3 text-center border border-black text-gray-500">
                  No Data Available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
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
};

export default Dashboard;

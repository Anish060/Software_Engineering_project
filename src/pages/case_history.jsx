import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function case_history() {
     const [data, setData] = useState([]);
        const location = useLocation();
  const emaill = location.state?.email;
    
      useEffect(() => {
        fetch("http://localhost:8081/mes")
          .then((res) => res.json())
          .then((dataa) => {
            console.log("Fetched data:", dataa); // ✅ Debugging
            setData(dataa);
          })
          .catch((err) => console.error("Fetch error:", err));
      }, []);
      const [p,setP]=useState(0);
      const [d,setD]=useState();
      
      const hview=(e)=>{
        setD(e);
        setP(1);
      }
      const hr=()=>{setP(0);}
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
          <Link to="/ch" className="text-xl underline hover:text-gray-300 cursor-pointer">Case history</Link>
          <Link to="/contact" className="text-xl underline hover:text-gray-300 cursor-pointer">Contact Us</Link>
        </div>
      </div>
    </div>
    
    {/* Navbar */}
    

    {p === 0 && (
      <div className=" min-h-screen mt-8 px-6 bg-[url('https://i.pinimg.com/736x/91/82/ae/9182ae6289b2e2dcc35ef5fd6618a6a6.jpg')]">
        <p className="font-bold mb-3">Lawyer Details:</p>
        <table className="w-full border-collapse border border-black bg-zinc-50">
          <thead className="bg-gray-200 border-b border-black">
            <tr className="text-base text-black">
              <th className="p-3 border border-black">Case Title</th>
              <th className="p-3 border border-black">Status</th>
              <th className="p-3 border border-black">Next Hearing</th>
              <th className="p-3 border border-black">Lawyer Status</th>
              <th className="p-3 border border-black">View</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.filter((item) => item.user_name.trim() === emaill?.trim()).map((item, index) => (
                <tr key={index} className="text-center border-b border-black">
                  <td className="p-3 border border-black">{item.case_title || "N/A"}</td>
                  <td className="p-3 border border-black">{item.status || "N/A"}</td>
                  <td className="p-3 border border-black">{item.next_hearing || "-"}</td>
                  <td className="p-3 border border-black">
                    {item.lawyer_approved === "N" ? "Not Approved yet" :
                      item.lawyer_approved === "R" ? "Rejected" : "Approved"}
                  </td>
                  <td>
                    <button onClick={() => hview(item)} className="p-2 bg-black text-white rounded-md">
                      View
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-3 text-center border border-black text-gray-500">
                  No Data Available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    )}

    {p === 1 && (
      <div className="flex justify-center items-start min-h-screen p-8 bg-[url('https://i.pinimg.com/736x/91/82/ae/9182ae6289b2e2dcc35ef5fd6618a6a6.jpg')]">
        <div className="flex flex-col items-start p-10 w-full max-w-[502px] rounded-lg border border-black shadow-md bg-white">
          <div>User Name: {d.user_name}</div>
          <div className="mt-4">Case Title: {d.case_title}</div>
          <div className="mt-4">Lawyer Name: {d.lawyer}</div>
          <div className="mt-6">Case Description:</div>
          <textarea
            className="px-3.5 pt-3.5 pb-20 mt-3.5 w-full border border-black shadow resize-none bg-white"
            value={d.case_desc || ""}
            readOnly
          />
           <div className="mt-6">Case Type:{d.Category}</div>
          <button
            className="self-end px-12 pt-1.5 pb-5 mt-6 font-semibold text-white rounded-lg bg-stone-900"
            onClick={hr}
          >
            Back
          </button>
        </div>
      </div>
    )}

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
  )
}

export default case_history
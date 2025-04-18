import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function judgedash() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState("All\n");
    const location = useLocation();
  const email = location.state?.email;
  const [hearr,setHear]=useState({hear:'',stat:''});
    
    const filters = ["All\n", "Infrastructure\n", "Health\n", "Education\n","Taxproblems\n"];
    const [data,setData]=useState([])
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
            const handleA = async (e) => {
                const { ID } = e; // ✅ Extract ID correctly
                const { hear, stat } = hearr; // ✅ Ensure correct keys
                
                try {
                    const response = await fetch("http://localhost:8081/senJ", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ ID,next_hearing:hear,status:stat }),
                    });
            
                    const result = await response.json();
                    console.log("Server response:", result); // ✅ Debugging
            
                    if (response.ok) {
                        alert("Successfully approved the case");
                        setTimeout(fetchData, 500); // ✅ Small delay before fetching updated data
                        
                    } else {
                        console.error("Failed to update case:", result.error);
                    }
                    
                } catch (error) {
                    console.error("Error during submission:", error);
                }
                setP(0);
                //navigate("/dashboardl",{state:{email}});
                    
            };
  return (
<div className="flex flex-col min-h-screen bg-gray-100">
  {/* Header */}
  <header className="relative bg-[url('https://source.unsplash.com/1600x400/?law,justice')] bg-gray-100 bg-cover bg-center text-white">
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="relative flex gap-2 items-center p-4">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/223f4f43b00bf6d9de1545efb7107a8b5ae7317d"
        alt="Logo"
        className="w-12 h-12 max-sm:w-10 max-sm:h-10"
      />
      <div className="flex gap-9 items-center max-sm:hidden">
        <Link to="/dashboardj" state={{ email }}>
          <button className="text-xl underline hover:text-gray-300 cursor-pointer">Case History</button>
        </Link>
        <div className="text-xl underline hover:text-gray-300 cursor-pointer">Contact Us</div>
        <div className="ml-auto text-xl underline hover:text-gray-300 cursor-pointer">About</div>
        <Link to="/">
          <div className="text-xl underline hover:text-gray-300 cursor-pointer">Log out</div>
          </Link>
      </div>
    </div>
  </header>

  {/* Main Content */}
  <main className="flex-grow min-h-screen bg-white p-6 bg-[url('https://i.pinimg.com/736x/91/82/ae/9182ae6289b2e2dcc35ef5fd6618a6a6.jpg')]">
    {(p === 0) && (
      <div className="mt-8">
        <p className="font-bold mb-3">Case Details:</p>
        <table className="w-full border-collapse border border-black bg-zinc-50">
          <thead className="bg-gray-200 border-b border-black">
            <tr className="text-base text-black hover:bg-[#ffa200] transition duration-200">
              <th className="p-3 border border-black">User Name</th>
              <th className="p-3 border border-black">Case Title</th>
              <th className="p-3 border border-black">Status</th>
              <th className="p-3 border border-black">Next Hearing</th>
              <th className="p-3 border border-black">Lawyer Name</th>
              <th className="p-3 border border-black">Lawyer Status</th>
              <th className="p-3 border border-black">Case Type</th>
              <th className="p-3 border border-black">View</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.filter((item) => item.lawyer_approved === 'Y').map((item, index) => (
                <tr key={index} className="text-center border-b border-black hover:bg-[#f7ae30] transition duration-200">
                  <td className="p-3 border border-black">{item.user_name || "N/A"}</td>
                  <td className="p-3 border border-black">{item.case_title || "N/A"}</td>
                  <td className="p-3 border border-black">{item.status || "N/A"}</td>
                  <td className="p-3 border border-black">{item.next_hearing || "-"}</td>
                  <td className="p-3 border border-black">{item.lawyer || "N/A"}</td>
                  <td className="p-3 border border-black">{(item.lawyer_approved === "N") ? "Not Approved yet" : (item.lawyer_approved === "R") ? "Rejected" : "Approved"}</td>
                  <td className="p-3 border border-black">{item.Category || "N/A"}</td>
                  <td className="p-3 border border-black">
                    <button onClick={() => hview(item)} className="p-2 bg-black text-white rounded-md">View</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="p-3 text-center border border-black text-gray-500">No Data Available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    )}

    {(p === 1) && (
      <div className="flex justify-center items-start min-h-screen p-8">
        <div className="flex overflow-hidden flex-col items-start self-start px-10 py-8 w-full rounded-lg border border-black border-solid max-w-[502px] shadow-lg bg-white">
          <div className="text-lg font-bold">User Name: {d.user_name}</div>
          <div className="mt-4 text-lg font-semibold">Case Title: {d.case_title}</div>
          <div className="mt-6 font-semibold">Case Description:</div>
          <textarea className="overflow-hidden px-3.5 pt-3.5 pb-20 mt-3.5 border border-black shadow w-full resize-none bg-white" value={d.case_desc || ""} readOnly />
          <div className="mt-6">Case Type:{d.Category}</div>
          <div className="text-lg ">Update hearing date:</div>
          <input type="text" className="px-3.5 py-2 mt-2 border border-black shadow w-full bg-white" placeholder={hearr.hear} onChange={(e) => setHear({ ...hearr, hear: e.target.value })} />
          <div className="text-lg ">Status update:</div>
          <input type="text" className="px-3.5 py-2 mt-2 border border-black shadow w-full bg-white" placeholder={hearr.stat} onChange={(e) => setHear({ ...hearr, stat: e.target.value })} />
          <div className="flex gap-4 mt-6">
            <button className="px-6 py-3 text-white bg-black rounded-lg" onClick={hr}>Back</button>
            <button className="px-6 py-3 text-black bg-[#39ff14] rounded-lg" onClick={() => handleA({ ID: d.ID })}>Confirm</button>
          </div>
        </div>
      </div>
    )}
  </main>

  {/* Footer */}
  <footer className="mt-auto bg-[url('https://source.unsplash.com/1600x400/?law,legal')] bg-gray-100 bg-cover bg-center text-white py-6 text-center border-t border-gray-100 relative">
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="relative max-w-5xl mx-auto px-4">
      <p className="text-lg font-semibold">Legal Ease © {new Date().getFullYear()}</p>
      <p className="text-sm mt-1">Empowering Justice, One Click at a Time.</p>
      <div className="flex justify-center gap-6 mt-3">
        <a href="mailto:support@legalease.com" className="hover:text-gray-300 transition duration-300">support@legalease.com</a>
        <a href="tel:+911234567890" className="hover:text-gray-300 transition duration-300">+91 12345 67890</a>
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

export default judgedash
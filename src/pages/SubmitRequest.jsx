import { useState } from "react";

const SubmitRequest = () => {
  const [request, setRequest] = useState("");

  const handleSubmit = () => {
    alert("Request submitted: " + request);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Submit Request</h2>
      <textarea
        className="border p-2 w-full"
        placeholder="Enter your request"
        onChange={(e) => setRequest(e.target.value)}
      ></textarea>
      <button className="bg-green-500 text-white p-2 mt-2 rounded" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default SubmitRequest;
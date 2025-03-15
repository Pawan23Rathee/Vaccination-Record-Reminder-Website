import React, { useState } from "react";

const FamilyMembers = () => {
  const [members, setMembers] = useState([
    { id: 1, name: "John Doe", age: 30, status: "Fully Vaccinated", relationship: "Self", date: "2023-10-12", vaccine: "COVID-19" },
    { id: 2, name: "Jane Doe", age: 25, status: "Partially Vaccinated", relationship: "Spouse", date: "2023-11-05", vaccine: "Influenza" },
    { id: 3, name: "Alice Smith", age: 40, status: "Fully Vaccinated", relationship: "Sister", date: "2023-09-15", vaccine: "Hepatitis B" },
  ]);
  
  const [newMember, setNewMember] = useState({
    name: "",
    age: "",
    status: "Partially Vaccinated",
    relationship: "",
    date: "",
    vaccine: "",
  });

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleAddMember = () => {
    const newMemberData = {
      id: members.length + 1,
      ...newMember,
    };
    setMembers([...members, newMemberData]);
    setNewMember({ name: "", age: "", status: "Partially Vaccinated", relationship: "", date: "", vaccine: "" });
  };

  const downloadCertificate = (member) => {
    const certificateText = `
      Vaccination Certificate
      ----------------------------
      Name: ${member.name}
      Age: ${member.age}
      Status: ${member.status}
      Relationship: ${member.relationship}
      Vaccine: ${member.vaccine}
      Date: ${member.date}
      Issued on: ${new Date().toLocaleDateString()}
    `;
    
    const blob = new Blob([certificateText], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${member.name}_certificate.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-8 mt-32 max-w-4xl mx-auto text-center">
      <h2 className="text-2xl font-bold mb-6">Family Members</h2>

      <div className="mb-6 p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Add New Family Member</h3>
        <input type="text" placeholder="Name" value={newMember.name} onChange={(e) => setNewMember({ ...newMember, name: e.target.value })} className="border p-2 rounded-md w-full mb-2" />
        <input type="number" placeholder="Age" value={newMember.age} onChange={(e) => setNewMember({ ...newMember, age: e.target.value })} className="border p-2 rounded-md w-full mb-2" />
        <input type="text" placeholder="Relationship" value={newMember.relationship} onChange={(e) => setNewMember({ ...newMember, relationship: e.target.value })} className="border p-2 rounded-md w-full mb-2" />
        <input type="date" value={newMember.date} onChange={(e) => setNewMember({ ...newMember, date: e.target.value })} className="border p-2 rounded-md w-full mb-2" />
        <input type="text" placeholder="Vaccine Name" value={newMember.vaccine} onChange={(e) => setNewMember({ ...newMember, vaccine: e.target.value })} className="border p-2 rounded-md w-full mb-2" />
        <select value={newMember.status} onChange={(e) => setNewMember({ ...newMember, status: e.target.value })} className="border p-2 rounded-md w-full mb-2">
          <option value="Fully Vaccinated">Fully Vaccinated</option>
          <option value="Partially Vaccinated">Partially Vaccinated</option>
          <option value="Not Vaccinated">Not Vaccinated</option>
        </select>
        <button onClick={handleAddMember} className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">Add Member</button>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Filter by Date</h3>
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="border p-2 rounded-md mr-2" />
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="border p-2 rounded-md" />
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 text-center">
        <h3 className="text-2xl font-semibold mb-4">Vaccination Records</h3>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">#</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Age</th>
              <th className="border p-2">Relationship</th>
              <th className="border p-2">Vaccine</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Download</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => (
              <tr key={member.id}>
                <td className="border p-2">{index + 1}</td>
                <td className="border p-2">{member.name}</td>
                <td className="border p-2">{member.age}</td>
                <td className="border p-2">{member.relationship}</td>
                <td className="border p-2">{member.vaccine}</td>
                <td className="border p-2">{member.date}</td>
                <td className="border p-2 font-bold text-green-600">{member.status}</td>
                <td className="border p-2">
                  <button onClick={() => downloadCertificate(member)} className="bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700 transition">Download</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FamilyMembers;

import { useState } from "react";
import {addVaccine} from '../api'
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const AddVaccineForm = ({ onAdd }) => {
  const [vaccine, setVaccine] = useState({ name: "", date: "", status: "Upcoming" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newVaccine = await addVaccine(vaccine);
    if (newVaccine) {
      onAdd(newVaccine);
      setVaccine({ name: "", date: "", status: "Upcoming" });
      toast.success("Vaccine added successfully!");
    } else {
      toast.error("Failed to add vaccine.");
    }
  };

  return (
    <motion.form 
  onSubmit={handleSubmit} 
  className="bg-white p-4 shadow-md rounded-lg"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>

      <input
        type="text"
        placeholder="Vaccine Name"
        value={vaccine.name}
        onChange={(e) => setVaccine({ ...vaccine, name: e.target.value })}
        className="w-full p-2 border mb-2"
        required
      />
      <input
        type="date"
        value={vaccine.date}
        onChange={(e) => setVaccine({ ...vaccine, date: e.target.value })}
        className="w-full p-2 border mb-2"
        required
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Vaccine
      </button>
    </motion.form>
  );
};

export default AddVaccineForm;

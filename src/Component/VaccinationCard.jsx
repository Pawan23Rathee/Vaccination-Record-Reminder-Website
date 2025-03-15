import { motion } from "framer-motion";

const VaccinationCard = ({ name, date, status }) => {
  return (
    <motion.div 
      className="p-5 bg-white shadow-lg rounded-lg border-l-4"
      style={{ borderColor: status === "Upcoming" ? "orange" : "green" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-500">{date}</p>
      <span className={`text-sm font-bold ${status === "Upcoming" ? "text-orange-500" : "text-green-500"}`}>
        {status}
      </span>
    </motion.div>
  );
};

export default VaccinationCard;

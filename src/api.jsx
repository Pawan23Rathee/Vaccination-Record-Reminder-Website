import React from 'react';

// Dummy Data Instead of API Calls
const vaccinations = [
    { id: 1, name: "COVID-19 Vaccine", date: "2025-03-20" },
    { id: 2, name: "Flu Shot", date: "2025-04-05" },
    { id: 3, name: "Hepatitis B", date: "2025-05-10" }
];

const getVaccinations = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(vaccinations), 500);
    });
};

export default getVaccinations;

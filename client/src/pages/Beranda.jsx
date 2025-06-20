import React, { useState } from "react";
import SubscopeForm from "../components/SubscopeForm";
import ScopeSelector from "../components/ScopeSelector";
import PeriodSelector from "../components/PeriodSelector";
import EmissionResultCard from "../components/EmissionResultCard";
import { calculateTotalEmission } from "../utils/calculateEmission";

const HomePage = () => {
  const [selectedScope, setSelectedScope] = useState("scope1");
  const [inputValues, setInputValues] = useState({});

  const handleChange = (id, value) => {
    setInputValues((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const totalEmission = calculateTotalEmission(inputValues);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <ScopeSelector
        selectedScope={selectedScope}
        onSelectScope={setSelectedScope}
      />
      <SubscopeForm
        selectedScope={selectedScope}
        inputValues={inputValues}
        onChange={handleChange}
      />
      <EmissionResultCard totalEmission={totalEmission} />
    </div>
  );
};

export default HomePage;

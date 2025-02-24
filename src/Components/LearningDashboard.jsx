import React, { useState, useEffect } from "react";
import MyLearnings from "./MyLearnings";
import NoLearningHeader from "./NoLearningHeader";

const LearningDashboard = () => {
  const [hasLearnings, setHasLearnings] = useState(false);

  useEffect(() => {
    // Check if there's any enrolled course or progress saved in localStorage
    // For simplicity, we use a flag "hasLearnings". 
    // In a real app, you might iterate over all enrolled course keys.
    const learned = localStorage.getItem("hasLearnings");
    if (learned === "true") {
      setHasLearnings(true);
    } else {
      setHasLearnings(false);
    }
  }, []);

  return hasLearnings ? <MyLearnings /> : <NoLearningHeader />;
};

export default LearningDashboard;

import React from "react";

interface BelajarType {
  title: string; // Required prop
  childern?: React.ReactNode; // Optional prop for rendering nested elements
}
const Props2: React.FC<BelajarType> = ({ title, childern }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      {childern && <div>{childern}</div>}
    </div>
  );
};

export default Props2;

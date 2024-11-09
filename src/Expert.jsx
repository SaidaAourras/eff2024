import React from "react";
import Evenement from "./Evenement";

const Expert = ({ experts }) => {
  return (
    <div>
      <h1>liste des experts</h1>
      {experts.map((expert, index) => {
        return (
          <li key={index}>
            {expert.nom_complet}
            <Evenement evenements={expert.événements}></Evenement>
          </li>
        );
      })}
    </div>
  );
};

export default Expert;

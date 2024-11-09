import React from "react";

const Evenement = ({ evenements }) => {
  const coutTotal = evenements.reduce((total, evenement) => {
    return total + evenement.cout_journalier * evenement.durée;
  }, 0);

  return (
    <div>
      <h2>Liste des Événements</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Thème</th>
            <th>Date Début</th>
            <th>Date Fin</th>
            <th>Description</th>
            <th>Coût Journalier</th>
            <th>Durée (jours)</th>
            <th>Coût Total de l'Événement</th>
          </tr>
        </thead>
        <tbody>
          {evenements.map((evenement, index) => {
            const coutTotalEvenement =
              evenement.cout_journalier * evenement.durée;

            return (
              <tr key={index}>
                <td>{evenement.thème}</td>
                <td>{evenement.date_debut}</td>
                <td>{evenement.date_fin}</td>
                <td>{evenement.description}</td>
                <td>{evenement.cout_journalier} €</td>
                <td>{evenement.durée}</td>
                <td>{coutTotalEvenement} €</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="6">
              <strong>Coût Total de Tous les Événements</strong>
            </td>
            <td>
              <strong>{coutTotal} €</strong>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Evenement;

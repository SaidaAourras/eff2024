import React, { useState } from "react";

const Formulaire = () => {
  const [submit, setSubmit] = useState(false);
  const [formData, setFormData] = useState({
    theme: "",
    date_debut: "",
    date_fin: "",
    cout: "",
    nom_complet: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Theme</label>
        <input
          type="text"
          name="theme"
          value={formData.theme}
          onChange={handleChange}
        />
        <br />

        <label>Date début</label>
        <input
          type="date"
          name="date_debut"
          value={formData.date_debut}
          onChange={handleChange}
        />
        <br />

        <label>Date fin</label>
        <input
          type="date"
          name="date_fin"
          value={formData.date_fin}
          onChange={handleChange}
        />
        <br />

        <label>Coût</label>
        <input
          type="text"
          name="cout"
          value={formData.cout}
          onChange={handleChange}
        />
        <br />
        <label>Expert</label>
        <input
          type="text"
          name="nom_complet"
          value={formData.nom_complet}
          onChange={handleChange}
        />
        <br />

        <button type="submit">Confirmer</button>
      </form>

      {submit && (
        <div>
          <h1>Formulaire de l'événement</h1>
          <h6>Thème:</h6>
          <strong>{formData.theme}</strong>
          <br />
          <h6>Date début:</h6>
          <strong>{formData.date_debut}</strong>
          <br />
          <h6>Date fin:</h6>
          <strong>{formData.date_fin}</strong>
          <br />
          <h6>Coût:</h6>
          <strong>{formData.cout}</strong>
          <br />
          <h6>Expert:</h6>
          <strong>{formData.nom_complet}</strong>
          <br />
        </div>
      )}
    </>
  );
};

export default Formulaire;

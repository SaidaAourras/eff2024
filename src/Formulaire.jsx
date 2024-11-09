import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

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
    <Container>
      <h1 className="my-4 text-center">Formulaire de l'événement</h1>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group controlId="theme">
              <Form.Label>Theme</Form.Label>
              <Form.Control
                type="text"
                name="theme"
                value={formData.theme}
                onChange={handleChange}
                placeholder="Enter the event theme"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="nom_complet">
              <Form.Label>Expert</Form.Label>
              <Form.Control
                type="text"
                name="nom_complet"
                value={formData.nom_complet}
                onChange={handleChange}
                placeholder="Enter the expert's name"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="date_debut">
              <Form.Label>Date début</Form.Label>
              <Form.Control
                type="date"
                name="date_debut"
                value={formData.date_debut}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="date_fin">
              <Form.Label>Date fin</Form.Label>
              <Form.Control
                type="date"
                name="date_fin"
                value={formData.date_fin}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="cout">
              <Form.Label>Coût</Form.Label>
              <Form.Control
                type="text"
                name="cout"
                value={formData.cout}
                onChange={handleChange}
                placeholder="Enter the event cost"
              />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit" className="mt-3">
          Confirmer
        </Button>
      </Form>

      {submit && (
        <div className="mt-4">
          <h2>Résumé de l'événement</h2>
          <ul>
            <li>
              <strong>Thème:</strong> {formData.theme}
            </li>
            <li>
              <strong>Date début:</strong> {formData.date_debut}
            </li>
            <li>
              <strong>Date fin:</strong> {formData.date_fin}
            </li>
            <li>
              <strong>Coût:</strong> {formData.cout}
            </li>
            <li>
              <strong>Expert:</strong> {formData.nom_complet}
            </li>
          </ul>
        </div>
      )}
    </Container>
  );
};

export default Formulaire;

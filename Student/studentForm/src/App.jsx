import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    document: null,
  });
  const [submittedData, setSubmittedData] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      document: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setShowConfirmation(true);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      document: null,
    });
  };

  const handleEdit = () => {
    setShowConfirmation(false);
    setEditMode(true);
    setFormData(submittedData);
  };

  const handleClose = () => {
    setShowConfirmation(false);
    setEditMode(false);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      document: null,
    });
  };


  return (  
   
    <div className="container">
      <h2>Simple Form</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="firstName">
          <Form.Label>First Name:</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
           
          />
        </Form.Group>
        <Form.Group controlId="lastName">
          <Form.Label>Last Name:</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
           
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
           
          />
        </Form.Group>
        <Form.Group controlId="phoneNumber">
          <Form.Label>Phone Number:</Form.Label>
          <Form.Control
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
           
          />
        </Form.Group>
        <Form.Group controlId="document">
          <Form.Label>Upload Documents:</Form.Label>
          <Form.Control
            type="file"
            onChange={handleFileChange}
           
          />
        </Form.Group>
        {editMode ? (
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        ) : (
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        )}
      </Form>

      <Modal show={showConfirmation} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Form submitted successfully!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Submitted Data:</p>
          <p>First Name: {submittedData && submittedData.firstName}</p>
          <p>Last Name: {submittedData && submittedData.lastName}</p>
          <p>Email: {submittedData && submittedData.email}</p>
          <p>Phone Number: {submittedData && submittedData.phoneNumber}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleEdit}>
            Edit
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default App

import { Modal, Button, Form } from 'react-bootstrap';
import { React, useState } from 'react'
export default function DataEdit({ isModalopen, initialData, onSave, handleModal }) {

  const [formData, setFormData] = useState(initialData || { name: '', username: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = (e) => {
    e.preventDefault()
    onSave(formData);
    setFormData({ name: '', username: '' });
  };
  const handleClose = () => {
    onSave(initialData)
  }
  return (
    <>
      <Modal show={isModalopen} onHide={() => handleModal} backdrop="static">
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>Edit Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form >
            <Form.Group controlId="editname">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                defaultValue={formData.name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="editusername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                defaultValue={formData.username}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="outline-primary" type="submit" size='sm' onClick={handleSave} style={{ margin: '10px 5px' }}>
              Save
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>


  )
}

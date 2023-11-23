import React from 'react';
import './../styles/components/pages/ContactoPage.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';



const ContactoPage = (props) => {
    return (
        <>
        <h2>FORMULARIO DE CONTACTO</h2>
         <Form>
                <Form.Group as={Col} controlId="Line 1" id='row' >
                    <Form.Label>Email</Form.Label>
                    <span> </span>
                    <Form.Control type="email" placeholder="Ingrese email" />
                    <span> - </span>
                    <Form.Label>Telefono</Form.Label>
                    <span> </span>
                    <Form.Control type="text" placeholder="telefono de contacto"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="Line 2" id='row' >
                    <Form.Label>Nombre</Form.Label>
                        <span> </span>
                    <Form.Control placeholder="Nombre" />
                        <span> - </span>
                    <Form.Label>Apellido</Form.Label>
                        <span> </span>
                    <Form.Control placeholder="Apellido" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label column sm={2}>Consulta:</Form.Label>
                </Form.Group>
                <br></br>
                <Col className="mb-3">
                    <textarea className='text-wrap' placeholder='Escriba aqui su consulta' ></textarea>
                <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Acepto enviar mis dato de contacto" />
                </Form.Group>
                </Col>
                <br></br> 
            <Button variant="primary" type="submit">
                Enviar
            </Button>
        </Form>
        </>
        
    );
}
export default ContactoPage;
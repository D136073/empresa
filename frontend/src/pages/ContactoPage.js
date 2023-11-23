import React, {useState} from 'react';
import axios from 'axios';
import './../styles/components/pages/ContactoPage.css';
import Button from 'react-bootstrap/Button';

 



const ContactoPage = (props) => {
    
    const initialForm = {
        nombre: '',
        apellido: '',
        email: '',
        mensaje: '',
        telefono: '',
    }
    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(oldData =>({
            ...oldData, 
            [name]: value
        }));
    }

    const handleSubmit = async e =>{
        e.preventDefault();
        setMsg('');
        setSending(true);
        const response = await 
        axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if(response.data.error === false){
            setFormData(initialForm);
        }
    }
    return (
            <form className='formulario' onSubmit={handleSubmit}>
            <h2 id='titulocontacto'>FORMULARIO DE CONTACTO</h2>
                <p>
                    <label>Nombre</label>
                    <span> </span>
                    <input type='text' name='nombre' value={formData.nombre} onChange={handleChange} required />
                    <span> </span>
                    <label>Apellido</label>
                    <span> </span>       
                    <input  name='apellido' type="text" value={formData.apellido} onChange={handleChange} required />
                </p>
                <p>
                    <label>Email</label>
                    <span> </span>       
                    <input  name='email' type="email" value={formData.email} onChange={handleChange} required />
                    <span> </span>      
                    <label>Telefono</label>
                    <span> </span>       
                    <input  name='telefono' type="text" value={formData.telefono} onChange={handleChange} required />
                </p>
                <p>   
                    <label>Consulta</label>  
                </p>
                <p>
                    <textarea  name='mensaje' required className='text-wrap' placeholder='Escriba aqui su consulta' value={formData.mensaje} onChange={handleChange} / > 
                </p>
                {sending ? <p>Enviando...</p>: null}
                {msg ? <p>{msg}</p> : null}
            <Button variant="primary" type="submit" id='Button'>
                Enviar
            </Button>

            </form>
        
    );
}
export default ContactoPage;
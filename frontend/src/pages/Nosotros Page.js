import React from 'react';
import '../../src/styles/components/pages/NosotrosPage.css';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';


const NosotrosPage = (props) => {
    return (
    <div id='contenedornos'>
        <br/>
        <Card>
            <Card.Body>
                <Card.Img src='images/escritorioplano.jpeg' id='cardimg' alt='unaimagen' height={200}/>
                <Card.Img src='images/grip.png' id='cardimg' alt='unaimagen' height={200}/>
                <Card.Img src='images/appmatra2.jpg' id='cardimg' alt='unaimagen' height={200}/>
                <Card.Img src='images/desarrollo.jpeg' id='cardimg' alt='unaimagen' height={200}/>
                <Card.Text>
                    <p>Trabajamos con tecnologias de vanguardia para el desarrollo
                        deaplicaciones, diseño grafico, diseño de marca y soluciones informaticas.
                        <br/>
                        Somos un equipo de profesionales que trabajamos unidos pero en diferentes partes del mundo 

                    </p>
                </Card.Text>
            </Card.Body>
        </Card>
      
            
    </div>    
    );
}
export default NosotrosPage;
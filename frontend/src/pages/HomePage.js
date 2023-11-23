import React from 'react';
import '../../src/styles/components/pages/homepage.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const HomePage = (props) => {
    return (
        <div className='container-fluid' id='contenedor'>
        <Col className='Col'>
            <Row>
                <h3>PRESENTACION</h3>
                <p> 
                    Somos una empresa de profesionales dedicados a  las creaciones digitales
                    Especializados en el desarrollo de aplicaciones, software de vanguardia, 
                    diseño gráfico innovador y sitios web de alta calidad. Con presencia en cinco 
                    países estratégicos, incluyendo Argentina, España, Chile, Estados Unidos e Italia, 
                    hemos establecido un equipo de profesionales altamente capacitados en todo el mundo.
                    Nuestro compromiso es impulsar
                    la innovación y la excelencia en cada
                    proyecto que emprendemos, brindando soluciones
                    digitales a medida que superan las expectativas de
                    nuestros clientes.
                </p>
            </Row>
        </Col>
        <Col className='Col'>
            <Row>
                <img src='/images/fondoteclado.jpeg' alt='Logo' className='LogoHome' />
            </Row>
        </Col>
        </div>
       
        
    );
}
export default HomePage;
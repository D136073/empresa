import React from "react";
import './../../../styles/components/layout/novedadesitem.css';
import Figure from 'react-bootstrap/Figure';



const NovedadItem = (props) => {
    const {title, subtitle, body, image} = props;
    return (
    <div className="novedades" id="novedadesdiv">
            <div id="titulonoticia">
               <h2>{title}</h2> 
            </div>
            <div id="subtitulonoticias" >
                <h4>{subtitle}</h4>
            </div>
           <Figure id="Figure" >
                <Figure.Image id="FI"
                width={200}
                    alt="novedad"
                    src={image}
                />
                <span> </span>
                <Figure.Caption dangerouslySetInnerHTML={{__html:body}} >          
                </Figure.Caption>
                </Figure>
            </div>

  );
}

export default NovedadItem;
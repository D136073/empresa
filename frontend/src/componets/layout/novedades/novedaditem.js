import React from "react";
import './../../../styles/components/layout/novedadesitem.css'

const NovedadItem = (props) => {
    const {title, subtitle, body, image} = props;
///armar la estructura de cada seccion de noticias para la parte viual
    return(
        <div className="novedades" id="novedades">
            <h2>{title}</h2>
            <h4>{subtitle}</h4>
            <div className="container-fluid" id="noticiaconfoto">
                <img src={image} alt="novedad" id="imgnovedades" / >
                <div dangerouslySetInnerHTML={{__html:body}} />     
                </div>
            </div>
            
    );
}

export default NovedadItem;
import {useState, useEffect} from 'react';
import React from 'react';
import axios from 'axios';
import NovedadItem from '../componets/layout/novedades/novedaditem';
import '../../src/styles/components/pages/NovedadesPage.css';


const NovedadesPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(()=>{
        const cargarNovedades = async () => {
            setLoading(true);

            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };
        cargarNovedades();
    },[]);


    return (
        <section className='novedades'>
            <h2>NOTICIAS</h2>{
                loading ? (
                    <p>Cargando...</p>
                ) : (
                    novedades.map(item => <NovedadItem key={item.id}
                       title={item.titulo} subtitle={item.subtitulo}
                       image={item.imagen} body={item.cuerpo}/>
                       )
                )
            }

        </section>
    )};
export default NovedadesPage;
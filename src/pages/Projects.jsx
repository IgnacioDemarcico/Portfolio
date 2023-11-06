import Details from '../components/Details'
import { useState, useEffect } from 'react'
import Item from '../components/Item'
import DB from '../services/db'
import './styles/Projects.css'

export default function Projects(props) {

    const [showModal, setShowModal] = useState(false);

    const abrirModal = () => {
        console.log("Abriendo el modal");
        setShowModal(true);
    };

    const cerrarModal = () => {
        setShowModal(false);
    };

    const [creaciones, setCreaciones] = useState([])

    useEffect(() => async () => setCreaciones(await new DB().getCreaciones()), [])

    useEffect(() => console.log('content', creaciones), [creaciones])

    return (
        <div>
            <h2 className='text' style={{textAlign:'center'}}>Projects page</h2>
            <p className='text' style={{textAlign:'center'}}>Here there are some of my projects</p>
            <section className='lista-items'>
                {
                    creaciones?.map((creacion, index) => <Item key={index} creacion={creacion} abrirModal={abrirModal}/>)
                }
            </section>
            <Details showModal={showModal} cerrarModal={cerrarModal} />
        </div>
    );
}
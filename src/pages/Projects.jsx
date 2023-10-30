import { useState, useEffect } from 'react'
import Card from '../components/Card'
import DB from '../services/db'

export default function Projects() {

    const [creaciones, setCreaciones] = useState([])

    useEffect(() => async () => setCreaciones(await new DB().getCreaciones()), [])

    useEffect(() => console.log('content', creaciones), [creaciones])

    return (
        <div>
            <h2 className='text'>Página de Catálogo</h2>
            <p className='text'>Aquí puedes mostrar el contenido específico de tu catálogo de productos.</p>
            <section className='lista-figuras'>
                {
                    creaciones?.map((creacion, index) => <Card key={index} creacion={creacion} /> )
                }
            </section>
        </div>
    );
}
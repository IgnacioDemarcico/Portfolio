import { useState, useEffect } from 'react'
import Item from '../components/Item'
import DB from '../services/db'
import './styles/Favorites.css'

export default function Favorites() {

    const [destacados, setDestacados] = useState([])

    useEffect(() => async () => setDestacados(await new DB().getDestacados()), [])

    useEffect(() => console.log('content', destacados), [destacados])

    return (
        <div>
            <h2 className='text'>Página de Catálogo</h2>
            <p className='text'>Aquí puedes mostrar el contenido específico de tu catálogo de productos.</p>
            <section className='lista-items'>
                {
                    destacados?.map((creacion, index) => <Item key={index} creacion={creacion} /> )
                }
            </section>
        </div>
    );
}
//import './Footer.css';
import { Instagram, Twitter, Facebook, Linkedin } from 'react-bootstrap-icons';

import { useForm } from "react-hook-form"
import {MDBFooter, MDBContainer,MDBCol, MDBRow, MDBBtn} from 'mdb-react-ui-kit';

export default function Footer() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <MDBFooter  style={{ position: 'relative', bottom: 0, width: '100%', backgroundColor: 'rgb(243, 189, 53)' }}>
            <MDBContainer className='p-4'>
                <MDBRow>
                    <MDBCol lg="4" md="8" className='mb-4 mb-md-0'>
                        <h5 className='text-uppercase'>Contact</h5>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            { }
                            <input placeholder="Gmail" {...register("example")} />
                            { }
                            <input style={{backgroundColor:'black'}}type="submit" />
                        </form>
                    </MDBCol>

                    <MDBCol>
                        <h2>Redes de Contacto</h2>
                        <MDBBtn
                            floating
                            className='m-1'
                            style={{ backgroundColor: '#3b5998' }}
                            href='#!'
                        >
                            <Facebook />
                        </MDBBtn>

                        <MDBBtn
                            floating
                            className='m-1'
                            style={{ backgroundColor: '#55acee' }}
                            href='#!'
                        >
                            <Twitter />
                        </MDBBtn>


                        <MDBBtn
                            floating
                            className='m-1'
                            style={{ backgroundColor: '#ac2bac' }}
                            href='#!'
                        >
                            <Instagram />
                        </MDBBtn>

                        <MDBBtn
                            floating
                            className='m-1'
                            style={{ backgroundColor: '#0082ca' }}
                            href='#!'
                        >
                            <Linkedin />
                        </MDBBtn>
                    </MDBCol>
                    <MDBCol lg="3" md="6" className='mb-4 mb-md-0'>
                        <h5 className='text-uppercase mb-0'>Links</h5>

                        <ul className='list-unstyled'>
                            <li>
                                <a href='#!' className='text-white'>
                                    Link 1
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='text-white'>
                                    Link 2
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='text-white'>
                                    Link 3
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='text-white'>
                                    Link 4
                                </a>
                            </li>
                        </ul>
                    </MDBCol>

                </MDBRow>
            </MDBContainer>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2023 Copyright:
                <a className='text-white' target='blank' href='https://www.youtube.com/watch?v=yEh_4GqXqFc'>
                    IgnacioDemarcico.com
                </a>
            </div>
        </MDBFooter>)
}

import React, { useEffect, useState } from 'react';
import img1 from '../../../Images/camera.png'
import img2 from '../../../Images/computer.png'
import img3 from '../../../Images/smartphone.png'
import img4 from '../../../Images/trusted1.png'
import img5 from '../../../Images/kilian-seiler-PZLgTUAhxMM-unsplash (1).jpg'
import img6 from '../../../Images/gadget1.jpg'
import styles from './Services.module.css'
import { Link } from 'react-router-dom';

const Services = () => {

    const [allService, setAllService] = useState([])

    useEffect(() => {
        fetch('https://desolate-citadel-65976.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setAllService(data))
    }, [])

    return (
        <div className="container text-center">
            <div className="row">
                <h2>SERVICE WE PROVIDED</h2>
                <h6 style={{ color: '#d1d1d1' }}>DISCOVER YOUR OLD GADGET INTO NEW</h6>

                {
                    allService.map(service => service.imageURL ? <div className="col-md-4">
                        <div className="card m-3 p-4 text-start">
                            <div className="card-img">
                                <img className="img-fluid" style={{ width: '100%', height: '200px' }} src={service.imageURL} alt={service.name} />
                            </div>
                            <div className="card-title">
                                <h4 className='mt-2'>{service.name}</h4>
                                <Link to={`/service/${service._id}`}><button className={styles.button}>VIEW DETAILS</button></Link>
                            </div>
                        </div>
                    </div> : '')
                }
            </div>
        </div>
    );
};

export default Services;
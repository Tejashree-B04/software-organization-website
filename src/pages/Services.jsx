import React from 'react'
import ServiceImg from './../assets/images/service1.jpg'
import FooterComponent from '../components/FooterComponent'
const Services = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row justify-content-evenly mt-5 ">
                    <h5 className='text-center'>Our Services</h5>
                    <div className="col-md-3 mt-4">
                        <div className="card">
                            <img src={ServiceImg} className="img-fluid" alt="Service Image" />
                            <div className="card-body">
                                <h5 className="card-title">Development</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-4">
                    <div className="card">
                            <img src={ServiceImg} className="img-fluid" alt="Service Image" />
                            <div className="card-body">
                                <h5 className="card-title">Software Testing</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-4">
                    <div className="card">
                            <img src={ServiceImg} className="img-fluid" alt="Service Image" />
                            <div className="card-body">
                                <h5 className="card-title">Maintenance</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-evenly mt-5 mb-5">
                    <div className="col-md-3 mt-4">
                        <div className="card">
                            <img src={ServiceImg} className="img-fluid" alt="Service Image" />
                            <div className="card-body">
                                <h5 className="card-title">Development</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-4">
                    <div className="card">
                            <img src={ServiceImg} className="img-fluid" alt="Service Image" />
                            <div className="card-body">
                                <h5 className="card-title">Software Testing</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-4">
                    <div className="card">
                            <img src={ServiceImg} className="img-fluid" alt="Service Image" />
                            <div className="card-body">
                                <h5 className="card-title">Maintenance</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterComponent />
        </div>
    )
}

export default Services
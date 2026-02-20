import React from 'react'

import StaffImg from './../assets/images/staff.jpg'
import FooterComponent from '../components/FooterComponent'
const AboutUs = () => {
  return (
    <div>
        <div className="container-fluid">
            <div className="row justify-content-evenly mt-5">
                <h5 className='text-center'>About Us</h5>
                <div className="col-md-5 mb-4 mt-3">
                    <img src={StaffImg} className="img-thumbnail" alt="Growth Iamge" />
                </div>
                <div className="col-md-5 mb-4 mt-3">
                    <p style={{textAlign:'justify'}}>
                    Technology training equips individuals with the knowledge and skills to effectively use technology in various contexts. It can involve software, hardware, networking, programming, or cloud computing skills. The goal is to improve productivity, efficiency, and overall performance. Technology-based training (TBT) uses digital technology to deliver training content and facilitate learning, often in the form of online courses or simulations. 
                    </p>
                    <button type="button" className="btn btn-outline-danger">Explore More</button>
                </div>
            </div>
            <FooterComponent/>
        </div>
    </div>
  )
}

export default AboutUs
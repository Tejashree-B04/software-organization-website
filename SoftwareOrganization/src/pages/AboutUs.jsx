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
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores labore pariatur qui possimus sit, sunt, soluta impedit illo modi dignissimos quas voluptas excepturi reiciendis fuga exercitationem, non vel. Consequatur, esse. Quasi, ipsa atque deleniti ab a quidem dolorem. Esse eaque illum mollitia iste, tenetur sit suscipit perspiciatis minus. Quidem iure et dolores, aut saepe ullam incidunt dignissimos ea dolorem sunt! Eum alias tenetur cumque, deserunt ipsam fugiat ut, voluptatibus aliquid a commodi enim expedita, ipsum placeat ex architecto dolores. Doloremque placeat vel adipisci eius nam, reiciendis omnis voluptates quae blanditiis!
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
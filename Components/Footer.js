import React from 'react'
import Image from 'next/image'
import ImageF1 from "../public/Images/Facebook.png"
import ImageF2 from "../public/Images/Skype.png"
import ImageF3 from "../public/Images/LinkedIn.png"

const Footer = () => {
    return (

        <>
            <div style={{  background: "#363E51" }}>
                <div >
                    <div class="row mx-auto ">
                        <div class="col-sm-9  mb-sm-0 mt-5">
                            <div class="ms-5">
                                <div class="card-body ms-5 mb-3">
                                    <div class="row row-cols-1 row-cols-md-4 ">
                                        <div class="col">
                                            <div class=""> <div class="card-body lh-1 ">
                                                <h5 class="card-title mb-3 text-white">Navigate</h5>
                                                <p class="card-text text-white">Home</p>
                                                <p class="card-text text-white">What we are</p>
                                                <p class="card-text text-white">Find Consultant</p>
                                            </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class=""> <div class="card-body lh-1" >
                                                <h5 class="card-title mb-3 text-white">Company Info </h5>
                                                <p class="card-text text-white">About Us</p>
                                                <p class="card-text text-white">How it’s Works</p>
                                                <p class="card-text text-white"> Why We Are</p>
                                                <p class="card-text text-white"> Work Agreements</p>
                                                <p class="card-text text-white"> Safe Pay</p>
                                            </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class=""><div class="card-body lh-1">
                                                <h5 class="card-title mb-3 text-white">Resources </h5>
                                                <p class="card-text text-white">Help & FAQ</p>
                                                <p class="card-text text-white">Blog</p>
                                                <p class="card-text text-white">Contact Us</p>
                                            </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class=""><div class="card-body lh-1">
                                                <h5 class="card-title mb-3 text-white">Policies </h5>
                                                <p class="card-text text-white">Privacy Policy</p>
                                                <p class="card-text text-white">Terms and Conditions</p>
                                                <p class="card-text text-white">Copyright Policy</p>
                                                <p class="card-text text-white">Fees and Charges</p>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3 mt-5 mx-auto mb-3">
                            <div class="">
                                <div class="card-body">
                                    <h5 class="card-title text-white d-flex justify-content-center mx-auto mb-3">Connect with Us</h5>

                                    <div className="container d-flex">
                                        <Image src={ImageF1} class="d-flex justify-content-center mx-auto mb-3" alt="Desigh&Art" width="35px" height="35px" />

                                        <Image src={ImageF2} class="d-flex justify-content-center mx-auto mb-3" alt="Desigh&Art" width="35px" height="35px" />

                                        <Image src={ImageF3} class="d-flex justify-content-center mx-auto mb-3" alt="Desigh&Art" width="35px" height="35px" />
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div></div>
            </div>

            <div className='d-flex align-items-center ' style={{ height: "40px", background: "#2B3147" }}>
                <h5 className='d-flex mx-5 text-light'>Copyright © 2023.</h5>
            </div>

        </>
    )
}

export default Footer



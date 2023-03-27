import React, { useState } from 'react'
import Link from 'next/link';

const Navbar = () => {

    const [reports, setReports] = useState(false);


    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary shadow fixed-top  z-1 mt-5 " >
                <div class="container-fluid mt-4">

                    <div class="collapse navbar-collapse" id="">
                        <div class="navbar-nav mx-5">
                            <Link class="nav-link mx-4 fw-semibold text-dark" aria-current="page" href="/">Home</Link>
                            <Link class="nav-link mx-4 fw-semibold text-dark" href="/AboutUs">About Us</Link>
                            <Link class="nav-link mx-4 fw-semibold text-dark" href="/WhatWeAre">What We Are</Link>
                            <Link class="nav-link mx-4 fw-semibold text-dark" href="/HowItsWork">How Its Work</Link>
                            <Link class="nav-link mx-4 fw-semibold text-dark" href="/Blogs">Blogs</Link>
                            <Link class="nav-link mx-4 fw-semibold text-dark" href="/Contact">Contact</Link>
                        </div>
                    </div>





                    <div class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setReports(!reports)} >

                        {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-dark mx-3" aria-current="page" href="/FindConsultans">Find Consultans</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link text-dark mx-3 " aria-current="page" href="/Browse Student Profile">Browse Student Profile</Link>
                            </li>
                        </ul> */}

                        <span class="navbar-toggler-icon"></span>

                    </div>



                    {reports && (
                        <div className="dropdownfunc shadow rounded ">
                            <div class="navbar-nav " style={{width:"100vh"}}>
                                <Link class="nav-link fw-semibold mx-4 text-dark" aria-current="page" href="/">Home</Link>
                                <Link class="nav-link fw-semibold mx-4 text-dark" href="/AboutUs">About Us</Link>
                                <Link class="nav-link fw-semibold mx-4 text-dark" href="/WhatWeAre">What We Are</Link>
                                <Link class="nav-link fw-semibold mx-4 text-dark" href="/HowItsWork">How Its Work</Link>
                                <Link class="nav-link fw-semibold mx-4 text-dark" href="/Blogs">Blogs</Link>
                                <Link class="nav-link fw-semibold mx-4 text-dark" href="/Contact">Contact</Link>
                            </div>
                        </div>
                    )}


                </div>
            </nav>




        </div>
    )
}

export default Navbar

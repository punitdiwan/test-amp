import React from 'react'
import Link from 'next/link'


const Header = () => {



    return (
        <>

            <nav className="navbar navbar-expand-lg bg-body-tertiary  fixed-top z-2 "  >
                <div className="container-fluid">

                    <Link className="navbar-brand fs-1 mx-3" href="/">Cohorten</Link>

                    <button className="navbar-toggler" type="button">
                        Login
                    </button>

                    <div className="collapse navbar-collapse" id="">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-dark mx-3" aria-current="page" href="/FindConsultans">Find Consultans</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link text-dark mx-3 " aria-current="page" href="/Browse Student Profile">Browse Student Profile</Link>
                            </li>
                        </ul>

                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">

                            <Link style={{ color: "#4267B2" }} className="btn btn-light me-md-2 text-primary-emphasis" href="/Login" role="button">Log in
                            </Link>

                            <Link style={{ background: "linear-gradient(265.87deg, #3D61BC 1.6%, #2273BB 99.12%);" }} className="btn btn-primary button" href="/Sign up" role="button">Sign up
                            </Link>

                        </div>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Header

import React from 'react'

const ConsultWithStudent = () => {
    return (


        <div className=''>

            <div className='d-flex justify-content-start p-5 ' style={{ background: "linear-gradient(96.79deg, #000000 0.31%, rgba(0, 0, 0, 0) 0%) , url(./Images/Landing1.png) no-repeat center " }}>

                <div className="container mt-5 p-5">
                    <h2 className='text-light container mt-5 opacity-75 fw-normal ' >Consult with <br />Student & Alumni <br />before your <br /> </h2>
                    <h1 className='text-white container mt-1 opacity-100'>Next Move.</h1>


                    <button type="button" style={{ background: "linear-gradient(265.87deg, #3D61BC 1.6%, #2273BB 99.12%)", boxShadow: "1px 1px 1px rgba(0, 0, 0, 0.25)", borderRadius: "5px", height: "70px" }} className="btn btn-primary btn-lg mx-3 mt-5">Find a Friendly Student</button>

                    <button type="button" className=" mt-5 btn btn-secondary btn-lg mx-3" style={{ background: "linear-gradient(179deg, rgba(0, 0, 0, 0.5) 0.91%, rgba(255, 255, 255, 0.5) 99.19%)", borderRadius: "5px", height: "70px" }}>Find a Friendly Student
                    </button>



                </div>
            </div>

        </div>
    )
}

export default ConsultWithStudent

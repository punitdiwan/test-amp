import React from 'react'
import Image from 'next/image'
import Image1 from "../public/Images/ProgrammingDevelopment.png"
import Image2 from "../public/Images/Desigh&Art.png"
import Image3 from "../public/Images/BusinessFinance.png"
import Image4 from "../public/Images/Engineering&Architech.png"
import Image5 from "../public/Images/Sales&Marketing.png"
import Image6 from "../public/Images/Legal.png"



const FindTopConsultant = () => {
  return (
    <div>
      <div className="mx-3 mt-5 mb-4">
                <h1 className="mx-5 d-flex justify-content-center">Find top consultants</h1>
                <div class="row row-cols-1 row-cols-md-3 g-4 mx-auto mt-4">
                    <div class="col">
                        <div class="card h-100">
                            <div class="card-body" 

                                style={{ 
                                boxShadow: "1px 1px 1px rgba(0, 0, 0, 0.25)", border: "5px solid #E6EEFF", borderRadius: "5px" 
                                }}
                                >

                                <Image src={Image1} class="d-flex justify-content-center mx-auto mb-3" alt="..." width="45px" height="45px" />
                                
                                <h5 class="card-title d-flex justify-content-center mb-4">Programming Development</h5>
                                <p class="card-text d-flex justify-content-center font-monospace">1442 Consultants </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100" style={{ boxShadow: "1px 1px 1px rgba(0, 0, 0, 0.25)", border: "5px solid #E6EEFF", borderRadius: "5px" }}>
                            <div class="card-body">
                                <Image src={Image2} class="d-flex justify-content-center mx-auto mb-3" alt="Desigh&Art" width="45px" height="45px" />
                                <h5 class="card-title d-flex justify-content-center mb-4">Desigh & Art</h5>
                                <p class="card-text d-flex justify-content-center font-monospace">1442 Consultants </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100" style={{ boxShadow: "1px 1px 1px rgba(0, 0, 0, 0.25)", border: "5px solid #E6EEFF", borderRadius: "5px" }}>
                            <div class="card-body">
                                <Image src={Image3} class="d-flex justify-content-center mx-auto mb-3" alt="BusinessFinance" width="45px" height="45px" />
                                <h5 class="card-title d-flex justify-content-center mb-4">Business Finance</h5>
                                <p class="card-text d-flex justify-content-center font-monospace">1442 Consultants </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100" style={{ boxShadow: "1px 1px 1px rgba(0, 0, 0, 0.25)", border: "5px solid #E6EEFF", borderRadius: "5px" }}>
                            <div class="card-body">
                                <Image src={Image4} class="d-flex justify-content-center mx-auto mb-3" alt="Engineering&Architech" width="45px" height="45px" />
                                <h5 class="card-title d-flex justify-content-center mb-4">Engineering & Architech</h5>
                                <p class="card-text d-flex justify-content-center font-monospace">1442 Consultants </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100" style={{ boxShadow: "1px 1px 1px rgba(0, 0, 0, 0.25)", border: "5px solid #E6EEFF", borderRadius: "5px" }}>
                            <div class="card-body">
                                <Image src={Image5} class="d-flex justify-content-center mx-auto mb-3" alt="Sales&Marketing" width="45px" height="45px" />
                                <h5 class="card-title d-flex justify-content-center mb-4">Sales & Marketing</h5>
                                <p class="card-text d-flex justify-content-center font-monospace">1442 Consultants </p>
                            </div>
                        </div>
                    </div>

                    <div class="col" >
                        <div class="card h-100" style={{ boxShadow: "1px 1px 1px rgba(0, 0, 0, 0.25)", border: "5px solid #E6EEFF", borderRadius: "5px" }}>
                            <div class="card-body">
                                <Image src={Image6} class="d-flex justify-content-center mx-auto mb-3" alt="Legal" width="45px" height="45px" />
                                <h5 class="card-title d-flex justify-content-center mb-4">Legal</h5>
                                <p class="card-text d-flex justify-content-center font-monospace">1442 Consultants </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div  >
    </div>
  )
}

export default FindTopConsultant

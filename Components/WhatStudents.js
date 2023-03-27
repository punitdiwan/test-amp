import React from 'react'
import Image from 'next/image'
import ImageWS1 from "../public/Images/Man.png"

const WhatStudents = () => {
  return (
    <div>
      <div class=" text-center container mt-4">

        <div class="card-body ">
          <h1 class="card-title mb-4">What Students Say</h1>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci</p>

          <div class=" mb-3 container" style={{ maxWidth: "540px" }}>
            <div class="row g-0 container">
              <div class="col-md-2">
                <Image src={ImageWS1} class="img-fluid rounded-circle border border-3" alt="..." />
              </div>
              <div class="col-md-10">
                <div class="card-body">
                  <h5 class="card-title">Jhon James</h5>
                  <p class="card-text">Student in University of cambridge </p>

                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default WhatStudents

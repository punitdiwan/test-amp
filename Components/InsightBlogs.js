import React from 'react'
import Image from 'next/image'
import ImageIB1 from "../public/Images/Insight1.png"
import ImageIB2 from "../public/Images/Insight2.png"
import ImageIB3 from "../public/Images/Insight3.png"
import ImageIB4 from "../public/Images/Insight4.png"

const InsightBlogs = () => {
    return (
        <div>

            <h1 class="card-title mb-4 d-flex justify-content-center">Insights Blogs</h1>
            <div class="row row-cols-1 row-cols-md-4 mx-4">
                <div class="col">
                    <div class="card h-100 border border-3">
                        <Image src={ImageIB1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p class="card-text">March 15 , 2023</p>
                            <p class="card-text">Lorem ipsum dolor sit amet,consectetuer adipiscing elit, sed diam nonummy nibh  aliquam erat volutpat. </p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border border-3">
                        <Image src={ImageIB2} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p class="card-text">March 15 , 2023</p>
                            <p class="card-text">Lorem ipsum dolor sit amet,consectetuer adipiscing elit, sed diam nonummy nibh  aliquam erat volutpat. </p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border border-3">
                        <Image src={ImageIB3} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p class="card-text">March 15 , 2023</p>
                            <p class="card-text">Lorem ipsum dolor sit amet,consectetuer adipiscing elit, sed diam nonummy nibh  aliquam erat volutpat. </p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border border-3">
                        <Image src={ImageIB4} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p class="card-text">March 15 , 2023</p>
                            <p class="card-text">Lorem ipsum dolor sit amet,consectetuer adipiscing elit, sed diam nonummy nibh  aliquam erat volutpat. </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container d-flex justify-content-center mt-4 mb-4">
                <button type="button" style={{ background: "linear-gradient(265.87deg, #3D61BC 1.6%, #2273BB 99.12%)", boxShadow: "1px 1px 1px rgba(0, 0, 0, 0.25)", borderRadius: "5px", height: "60px" }} class="btn btn-primary btn-lg mx-3 ">View Our Blogs</button>
            </div>



        </div>
    )
}

export default InsightBlogs

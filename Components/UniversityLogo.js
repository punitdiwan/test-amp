import React from 'react'
import Image from 'next/image'
import ImageU1 from "../public/Images/Banglor.png"
import ImageU2 from "../public/Images/Liverpool.png"
import ImageU3 from "../public/Images/Brunel.png"
import ImageU4 from "../public/Images/EdgeHill.png"
import ImageU5 from "../public/Images/Oxford.png"



const UniversityLogo = () => {
    return (
        <div>

            <div class="row row-cols-5 row-cols-md-5 mx-auto bg-white  " style={{height:"80px"}}>
                <div class="col ">

                    <a href="#">
                        <Image src={ImageU1} className='card-img-top' alt="Banglor" />
                    </a>

                </div>
                <div class="col">
                    <a href="#">
                        <Image src={ImageU2}className='card-img-top' alt="Banglor" />
                    </a>
                </div>
                <div class="col">
                    <a href="#">
                        <Image src={ImageU3} className='card-img-top h-50' alt="Banglor" />
                    </a>
                </div>
                <div class="col">
                    <a href="#">
                        <Image src={ImageU4} className='card-img-top h-50' alt="Banglor" />
                    </a>
                </div>
                <div class="col">
                    <a href="#">
                        <Image src={ImageU5} className='card-img-top' alt="Banglor" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default UniversityLogo

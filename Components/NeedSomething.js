import React from 'react'

const NeedSomething = () => {
    return (
        <div>
            <div className="mx-auto mt-4">
                <h1 className="mx-5 ">Need something done?</h1>

                {/* row-cols-1 row-cols-md-4 mx-auto mt-4 */}

                <div class="row ">
                    <div class="col-xl-3 col-md-6">
                        <div class="h-100 mx-3 ">
                            <div class="card-body ">
                                <h5 class="card-title d-flex justify-content-center mb-4">Post a Query</h5>
                                <p class="card-text d-flex justify-content-center font-monospace">It’s free and easy to post a Query. You can get a consultant list fromto choose for.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-md-6">
                        <div class="h-100 mx-3">
                            <div class="card-body">
                                <h5 class="card-title d-flex justify-content-center mb-4">Choose Consultant</h5>
                                <p class="card-text d-flex justify-content-center font-monospace">We have got a list of all the Consultants based on rating. You can choose amoung them.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-md-6 ">
                        <div class="h-100 mx-3" >
                            <div class="card-body">
                                <h5 class="card-title d-flex justify-content-center mb-4">Pay Safely</h5>
                                <p class="card-text d-flex justify-content-center font-monospace">Choose from multiple payment methods with SafePay payment protection.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-md-6">
                        <div class="h-100 mx-3">
                            <div class="card-body">
                                <h5 class="card-title d-flex justify-content-center mb-4">We are here to help you</h5>
                                <p class="card-text d-flex justify-content-center font-monospace">Lorem ipsum dolor sit amet,consectetuer adipiscing elit, sed diam nonummy nibh  aliquam erat volutpat. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div class="grid text-center ">
                <div class="g-col-6 g-col-md-4">.g-col-6 .g-col-md-4</div>
                <div class="g-col-6 g-col-md-4">.g-col-6 .g-col-md-4</div>
                <div class="g-col-6 g-col-md-4">.g-col-6 .g-col-md-4</div>
            </div> */}


            {/* <div className="row d-flex justify-content-center">
                <div className="col-lg-3 col-sm-2">1</div>
                <div className="col-lg-3 col-sm-2">2</div>
                <div className="col-lg-3 col-sm-2">3</div>
                <div className="col-lg-3 col-sm-2">4</div>
            </div> */}
        </div>
    )
}

export default NeedSomething

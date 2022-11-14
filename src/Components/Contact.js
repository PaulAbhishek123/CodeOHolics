import React from 'react'
import { Link } from 'react-router-dom';

const Contacts = () => {
    return (
        <>
            <div className='text-[#2192FF] text-center lg:text-4xl text-2xl my-3 font-bold'>
                Contact Us
            </div>
            <div className="container row">
                <div className="col-12 col-md-8 mx-4">
                    <div>
                        <p className='text-[#34393b] lg:text-xl text-base font-bold'>
                            <font>Email : <a className="text-[#677078]" href="/" target = "_blank">CodeOHolics@cmrtc.ac.in</a></font>
                        </p>
                        <p className=' text-[#34393b] text-base font-extrabold'>
                            <a href="/" target = "_blank"> <i className="fa-sharp fa-solid fa-location-dot mr-2  fa-xl text-slate-600 hover:text-[#ff0000]"></i>
                            </a>
                            Address
                        </p>
                        <div className='mx-1' >
                            <font>Cmr Technical Campus</font>
                            <br />
                            <font>Near ORR junction, Kandlakoya,</font>
                            <br />
                            <font>Medchal Road,</font>
                            <br />
                            <font>Hyderabad 501401,</font>
                            <br />
                            <font>Telangana</font>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-2 mx-4 my-2">
                    <p className='text-[#34393b] lg:text-xl text-lg font-bold'><strong>Follow us on</strong></p>
                    <a to="/" target = "_blank"> <i className="fa-brands fa-facebook-f mr-2  fa-xl text-slate-600 hover:text-[#4267B2]"></i></a>
                    <a href="https://www.instagram.com/codeoholics/" target = "_blank"><i className="fa-brands fa-instagram mx-2 fa-xl text-slate-600 hover:text-[#E4405F]"></i></a>
                    <a href="https://www.linkedin.com/in/codeoholics-club-67968222b/" target ="_blank"><i className="fa-brands fa-linkedin mx-2 fa-xl text-slate-600 hover:text-[#0077b5]"></i></a>
                    <a to="/" target = "_blank"><i className="fa-brands fa-discord mx-2 fa-xl text-slate-600 hover:text-[#738ADB]"></i></a>
                </div>
            </div>
        </>
    )
}

export default Contacts;
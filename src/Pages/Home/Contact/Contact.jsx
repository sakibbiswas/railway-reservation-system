import React from 'react';
import img from '../../../assets/Photos/p1.jpg'

const Contact = () => {
    return (
        <div id='contact' className='space-y-5  bg-base-200 p-8'>

            <h2 className='text-center text-4xl font-bold text-red-500'>CONTACT US</h2>

            <p className='text-center text-xl font-semibold text-slate-800'>Drop a line. We are ready to help you!</p>
            <div className="md:grid grid-cols-2  gap-8">
                <img src={img} className='h-full rounded-lg' data-aos="zoom-out-up" data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" />

                <form className='space-y-3 bg-red-100 rounded-2xl p-8'
                    data-aos="zoom-out-up" data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <div class="form-control w-full ">
                        <label class="label">
                            <span class="label-text font-semibold">Your Name Please</span>
                        </label>
                        <input type="text" placeholder=" Your Name" class="input input-bordered w-full " />
                    </div>

                    <div class="form-control w-full ">
                        <label class="label">
                            <span class="label-text font-semibold"> Your Email</span>
                        </label>
                        <input type="email" placeholder="@Enter Email" class="input input-bordered w-full " />
                    </div>
                    <div class="form-control w-full ">
                        <label class="label">
                            <span class="label-text font-semibold">Your Message</span>
                        </label>
                        <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                    </div>


                    <input className='btn btn-neutral mt-5' type="submit" value="Submit" />

                </form >
            </div>

            <div className="md:flex justify-start items-center gap-3"
            >
                <p className='text-red-500 font-bold text-2xl'>------</p>
                <h3 className='text-xl text-slate-800 font-semibold'>+8801631479509 [ Whatsapp ]</h3>
            </div>
            <div className="md:flex justify-start items-center gap-3">
                <p className='text-red-500 font-bold text-2xl'>------</p>
                <h3 className='text-xl text-slate-800 font-semibold'>sazzadurrahman99880@gmail.com</h3>
            </div>
            <div className="md:flex justify-start items-center gap-3">
                <p className='text-red-500 font-bold text-2xl'>------</p>
                <h3 className='text-xl text-slate-800 font-semibold'>Netrakona,Dhaka</h3>
            </div>
            <div className="md:flex justify-start items-center gap-3">
                <p className='text-red-500 font-bold text-2xl'>------</p>
                <h3 className='text-xl text-slate-800 font-semibold'>www.sazzadur.com</h3>
            </div>
        </div>

    );
};

export default Contact;
import React from 'react';

const About = () => {
    return (

        <>
            <h1 className='text-center font-bold text-4xl text-red-500 mt-8'>ABOUT US</h1>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <img src="https://i.ytimg.com/vi/pvsm21vGsg8/maxresdefault.jpg" className="max-w-lg rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold text-slate-800">Welcome to Railway Reservation System</h1>
                        <p className="py-6 text-slate-800 text-justify">
                            Bangladesh Railway (BR) is the state-owned rail transport agency of Bangladesh, operating under the Ministry of Railways. It plays a crucial role in the country's transportation infrastructure, offering vital services for both passenger and freight transport. BR is an integral part of the national economy, facilitating connectivity, trade, and mobility across Bangladesh.The foundation of the railway in Bangladesh was laid during the British colonial period. The first railway line in the region, then part of British India, was inaugurated in 1862, connecting Darsana with Jagati. This line was a significant milestone in the transportation history of the region.After Bangladesh gained independence in 1971, the railway network was nationalized and restructured to meet the transportation needs of the new nation. The focus was on rebuilding and expanding the network to support economic growth and regional connectivity.Bangladesh Railway remains a cornerstone of the country's transportation sector, dedicated to enhancing connectivity and supporting economic growth. Through ongoing modernization efforts and strategic initiatives, BR aims to provide improved and efficient rail services to meet the evolving needs of its passengers and freight customers.
                        </p>
                        <button className="btn btn-primary">Read More</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
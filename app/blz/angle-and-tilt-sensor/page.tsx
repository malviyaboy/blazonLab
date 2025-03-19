import { Box } from '@mui/material';
import Image from 'next/image';
import BreadCrumb from '@/app/component/BreadCrumb/BreadCrumb';
import { Metadata } from 'next';
import { getPageMetadata } from '@/app/lib/metadata';

export function generateMetadata(): Metadata {
    return getPageMetadata("/blz/angle-and-tilt-sensor");
  }

export default function angleTilt() {
    return (<div >
        <BreadCrumb title='Angle and Tilt Sensor' />
        <div className="gps min-h-screen  flex justify-center items-center">
            <div className="bg-white rounded-lg md:p-8 w-full max-w-6xl">

                <section>
                    <div className='my-5 py-5'>
                        <div className="elementor-widget-container">
                            <h1 className='text-center'><strong>Angle and Tilt Sensor</strong></h1>
                        </div>
                        <div className='elementor-widget-container'>
                            <p className='text-center'>Angle and Tilt Sensor is Bluetooth enabled battery operated device. easy to install and configure. Monitor angle change of the arm it is attached to.</p>
                        </div>
                        <Box display="grid" gridTemplateColumns={{ xs: "1fr", sm: " 1fr", md: "2fr 2fr" }} gap={2} p={2}>

                            <Box className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4" sx={{ p: 2 }}>
                                <div className="bg-white-200 border-2 shadow-xl rounded-full  px-4 mb-2 inline-flex items-center">Battery Operated</div>
                                <div className="bg-white-200 border-2 shadow-xl rounded-full  px-4 mb-2 inline-flex items-center">Digital Output via BLE</div>
                                <div className="bg-white-200 border-2 shadow-xl rounded-full  px-4 mb-2 inline-flex items-center">Report Angle, Battery level</div>
                                <div className="bg-white-200 border-2 shadow-xl rounded-full  px-4 mb-2 inline-flex items-center">High Accuracy</div>
                                <div className="bg-white-200 border-2 shadow-xl rounded-full  px-4 mb-2 inline-flex items-center">Android Calibration App</div>

                            </Box>
                            {/* center */}
                            <Box sx={{ p: 2 }} className="flex justify-center mb-8 inline center ">
                                <div className='elementor-background-overlay'>
                                    <Image
                                        height={100}
                                        width={355}
                                        src="/Angel.png" // Replace with your actual image path
                                        alt="Angel"
                                        className="max-w-xs Gps_tracker"
                                    // style={{opacity:'1'}}
                                    />
                                </div>
                                <Box className="border-2 shadow-xl rounded-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4 bg-white-200 items-center text-center">
                                    <div className="text-lg font-semibold py-2 px-4 mb-2 ">Price: INR 6000/unit, MOQ: 50</div></Box>
                            </Box>
                        </Box>
                    </div>
                </section>
                {/* config */}
                <section>
                    <div className='widget_container'>
                        <h2 className='Heading_title'>How it works..</h2>
                    </div>
                    <Box display="grid" gridTemplateColumns={{ xs: "1fr", sm: " 1fr", md: "2fr 4fr" }} gap={2} p={2}>
                        <Box className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4" sx={{ p: 2 }}>
                            <ul>
                            <li className='p-0'>Sensor  rotate with the Drum around rotation Axis. Track angle change and direction, convert this data into directional RPM.</li>
                            <li>Require simple config via Mobile application.</li>
                            </ul>
                        </Box>
                        <Box className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4" sx={{ p: 2 }}>
                            <Image
                                height={620}
                                width={1024}
                                src="/Angle-sensor-anim.gif"
                                alt="Angle-sensor-anim" />
                        </Box>
                    </Box>
                </section>
                <section>
                    <div className='widget_container'>
                        <h2 className='Heading_title'>Usage Scenario..</h2>
                    </div>
                    <Box display="grid" gridTemplateColumns={{ xs: "1fr", sm: " 1fr", md: "6fr" }} gap={2} p={2}>
                        <Box className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4" sx={{ p: 2 }}>
                            <Image
                                height={620}
                                width={1024}
                                src="/angle-1.png"
                                alt="angle-1" />
                        </Box>
                        <Box className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4" sx={{ p: 2 }}>
                            <Image
                                height={620}
                                width={1024}
                                src="/angle-3.png"
                                alt="angle-3" />
                        </Box>
                        <Box className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4" sx={{ p: 2 }}>
                            <Image
                                height={620}
                                width={1024}
                                src="/angle-2.png"
                                alt="angle-2" />
                        </Box>
                        <Box className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4" sx={{ p: 2 }}>
                            <Image
                                height={620}
                                width={1024}
                                src="/tanker-sensor.png"
                                alt="tanker-sensor" />
                        </Box>
                    </Box>
                </section>
            </div>
        </div>
    </div>);
}


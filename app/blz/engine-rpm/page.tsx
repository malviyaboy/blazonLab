import { Box } from '@mui/material';
import Image from 'next/image';
import BreadCrumb from '@/app/component/BreadCrumb/BreadCrumb';
import { Metadata } from 'next';
import { getPageMetadata } from '@/app/lib/metadata';

export function generateMetadata(): Metadata {
    return getPageMetadata("/blz/engine-rpm-sensor");
  }

export default function engineRpm() {
    return (<div >
        <BreadCrumb title='Engine RPM Sensor' />
        <div className="gps min-h-screen  flex justify-center items-center">
            <div className="bg-white rounded-lg mb:p-8 w-full max-w-6xl">

                <section>
                    <div className='my-5 py-5'>
                        <div className="elementor-widget-container">
                            <h1 className='text-center'><strong>Engine RPM Sensor (ERS-01)</strong></h1>
                        </div>
                        <div className='elementor-widget-container'>
                            <p className='text-center'>Engine RPM Sensor (ERS-01) is bluetooth enabled device. 3 wire input. Connect with power and Alternator and configure using Blazon configurator app</p>
                        </div>
                        <Box display="grid" gridTemplateColumns={{ xs: "1fr", sm: " 1fr", md: "2fr 2fr" }} gap={2} p={2}>

                            <Box className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4" sx={{ p: 2 }}>
                                <div className="bg-white-200 border-2 shadow-xl rounded-full py-2 px-4 mb-2 inline-flex items-center">3 wire connectivity</div>
                                <div className="bg-white-200 border-2 shadow-xl rounded-full py-2 px-4 mb-2 inline-flex items-center">Digital Output via BLE</div>
                                <div className="bg-white-200 border-2 shadow-xl rounded-full py-2 px-4 mb-2 inline-flex items-center">0-30v Input Voltage</div>
                                <div className="bg-white-200 border-2 shadow-xl rounded-full py-2 px-4 mb-2 inline-flex items-center">High Accuracy</div>
                                <div className="bg-white-200 border-2 shadow-xl rounded-full py-2 px-4 mb-2 inline-flex items-center">Android Calibration App</div>

                            </Box>
                            {/* center */}
                            <Box sx={{ p: 2 }} className="flex justify-center mb-8 inline center ">
                                <div className='elementor-background-overlay'>
                                    <Image
                                        height={100}
                                        width={355}
                                        src="/Rpm_sensor.png" // Replace with your actual image path
                                        alt="Rpm_sensor"
                                        className="max-w-xs Gps_tracker"
                                    // style={{opacity:'1'}}
                                    />
                                </div>
                                <Box className="border-2 shadow-xl rounded-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4 bg-white-200 items-center text-center">
                                    <div className="text-lg font-semibold py-2 px-4 mb-2 ">Pricing: 3000/unit, MOQ:20</div></Box>
                            </Box>
                        </Box>
                    </div>
                </section>
                {/* How it work start */}
                <section>
                    <div className='widget_container'>
                        <h2 className='Heading_title'>How it works..</h2>
                    </div>
                    <Box display="grid" gridTemplateColumns={{ xs: "1fr", sm: " 1fr", md: "2fr 4fr" }} gap={2} p={2}>

                        <Box className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4" sx={{ p: 2 }}>
                            <p className='p-0'>Takes frequency input from alternator wire. Based on frequency analysis calculate actual frequency.</p>
                            <p>Require simple calibration via Mobile application.</p>
                        </Box>
                        <Box className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4" sx={{ p: 2 }}>
                            <Image
                                height={334}
                                width={1106}
                                src="/installation.png"
                                alt="installation"
                            // className="max-w-xs"

                            />
                        </Box>
                    </Box>
                </section>
                {/* how it work end */}

                {/* config */}
                <section>
                    <div className='widget_container'>
                        <h2 className='Heading_title'>Usage Scenario..</h2>
                    </div>
                    <Box display="grid" gridTemplateColumns={{ xs: "1fr", sm: " 1fr", md: "6fr" }} gap={2} p={2}>
                        <Box className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4" sx={{ p: 2 }}>
                            <Image
                                height={620}
                                width={1024}
                                src="/engine-rpm-network.png"
                                alt="engine-rpm-network" />
                        </Box>
                    </Box>
                </section>
            </div>
        </div>
    </div>);
}


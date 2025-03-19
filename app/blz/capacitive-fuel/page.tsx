import { Box } from '@mui/material';
import Image from 'next/image';
import BreadCrumb from '@/app/component/BreadCrumb/BreadCrumb';
import { Metadata } from 'next';
import { getPageMetadata } from '@/app/lib/metadata';

export function generateMetadata(): Metadata {
    return getPageMetadata("/blz/axel-load-sensor");
  }

export default function feulLevel() {
    return (<div >
        <BreadCrumb title='Fuel Level Sensor-old' />
    <div className="gps min-h-screen  flex justify-center items-center">
                <div className="bg-white rounded-lg m:p-8 w-full max-w-6xl">
    
                    <section>
                        <div className='my-5 py-5'>
                        <div className="elementor-widget-container">
                            <h1 className='text-center'><strong>Capacitive Fuel Level Sensor (BL-01)</strong></h1>
                        </div>
                        <div className='elementor-widget-container'>
                            <p className='text-center'>BL-01 is Standard Capacitive Fuel Level Sensor with Analog Output. Made with high grade Aluminium Alloy Pipes and Glass Filled Nylon Body.</p>
                        </div>
                        <Box display="grid" gridTemplateColumns={{ xs: "1fr", sm: " 1fr", md: "2fr 2fr" }} gap={2} p={2}>
    
                            <Box className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4" sx={{ p: 2 }}>
                                <div className="bg-white-200 border-2 shadow-xl rounded-full py-2 px-4 mb-2 inline-flex items-center">Capacitive Technology</div>
                                <div className="bg-white-200 border-2 shadow-xl rounded-full py-2 px-4 mb-2 inline-flex items-center">0-5v Analog Output</div>
                                <div className="bg-white-200 border-2 shadow-xl rounded-full py-2 px-4 mb-2 inline-flex items-center">0-30v Input Voltage</div>
                                <div className="bg-white-200 border-2 shadow-xl rounded-full py-2 px-4 mb-2 inline-flex items-center">12 WireAccuracy 1mm</div>
                                <div className="bg-white-200 border-2 shadow-xl rounded-full py-2 px-4 mb-2 inline-flex items-center">Android Calibration App</div>
                                
                            </Box>
                            {/* center */}
                            <Box sx={{ p: 2 }} className="flex justify-center mb-8 inline center ">
                                <div className='elementor-background-overlay'>
                                <Image
                                    height={100}
                                    width={355}
                                    src="/fuel-sensor.png" // Replace with your actual image path
                                    alt="Product"
                                    className="max-w-xs Gps_tracker"
                                    // style={{opacity:'1'}}
                                />
                                </div>
                                <Box className="border-2 shadow-xl rounded-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4 bg-white-200 items-center text-center">
                                <div className="text-lg font-semibold py-2 px-4 mb-2 ">Pricing:5200/unit, MOQ:100</div></Box>
                            </Box>
                        </Box>
                        </div>
                        {/* second section of page */}
                        <div className='my-5 py-5' style={{margin:'5rem 0'}}>
                        <div className="elementor-widget-container">
                            <h1 className='text-center'><strong>Bluetooth Capacitive Fuel Level Sensor (BL-01-BLE)</strong></h1>
                        </div>
                        <div className='elementor-widget-container'>
                            <p className='text-center'>BL-01-BLE is an extension of BL-01. It provide Digital data output over Low Power Bluetooth. Compatible with most BLE devices.</p>
                        </div>
                        <Box display="grid" gridTemplateColumns={{ xs: "1fr", sm: " 1fr", md: "2fr 2fr" }} gap={2} p={2}>
    
                            <Box className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4" sx={{ p: 2 }}>
                                <div className="bg-white-200 border-2 shadow-xl rounded-full py-2 px-4 mb-2 inline-flex items-center">Capacitive Technology</div>
                                <div className="bg-white-200 border-2 shadow-xl rounded-full py-2 px-4 mb-2 inline-flex items-center">Digital Output over BLE4.0</div>
                                <div className="bg-white-200 border-2 shadow-xl rounded-full py-2 px-4 mb-2 inline-flex items-center">0-30v Input Voltage</div>
                                <div className="bg-white-200 border-2 shadow-xl rounded-full py-2 px-4 mb-2 inline-flex items-center">12 WireAccuracy 1mm</div>
                                <div className="bg-white-200 border-2 shadow-xl rounded-full py-2 px-4 mb-2 inline-flex items-center">Internal Battery backup</div>
                                <div className="bg-white-200 border-2 shadow-xl rounded-full py-2 px-4 mb-2 inline-flex items-center">Android Calibration App</div>
                                
                            </Box>
                            {/* center */}
                            <Box sx={{ p: 2 }} className="flex justify-center mb-8 inline center ">
                                <div className='elementor-background-overlay'>
                                <Image
                                    height={100}
                                    width={355}
                                    src="/fuel-sensor.png" // Replace with your actual image path
                                    alt="Product"
                                    className="max-w-xs Gps_tracker"
                                    // style={{opacity:'1'}}
                                />
                                </div>
                            </Box>
                        </Box>
                        </div>
                        <Box display="grid" gridTemplateColumns={{ xs: "1fr", sm: " 1fr", md: "1fr 2fr 1fr" }} gap={2} p={2} >
                            <Box className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4" sx={{ p: 2 }}></Box>
                            {/* <Box className="border-2 shadow-xl rounded-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4 bg-white-200 items-center text-center">
                                <div className="text-lg font-semibold py-2 px-4 mb-2">Pricing: 3000/unit, MOQ: 20</div></Box> */}
                            <Box className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4" sx={{ p: 2 }}>
                            </Box>
    
                        </Box>
    
                    </section>
                    <section>
                        <div className='widget_container'>
                            <h2 className='Heading_title'>Sample Data Graph..</h2>
                        </div>
                        <Box display="grid" gridTemplateColumns={{ xs: "1fr", sm: " 1fr", md: "1fr 5fr" }} gap={2} p={2}>
    
                            <Box className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4" sx={{ p: 2 }}>
                                <p>Sample data graph of fuel Sensor.
                                Green dots show Filling events and Red dots show Removal events.</p>
                            </Box>
                            <Box className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4" sx={{ p: 2 }}>
                                <Image
                                    height={334}
                                    width={1106}
                                    src="/fuel-graph.png"
                                    alt="gboard"
                                // className="max-w-xs"
    
                                />
                            </Box>
                        </Box>
                    </section>
    
                    {/* config */}
                    <section>
                        <div className='widget_container'>
                            <h2 className='Heading_title'>Standard Installation Approach..</h2>
                        </div>
                        <Box display="grid" gridTemplateColumns={{ xs: "1fr", sm: " 1fr", md: "2fr 4fr" }} gap={2} p={2}>
                                
                            <Box className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4" sx={{ p: 2 }}>
                            <p>Sensor should be installed in the middle of the Tank for batter accuracy. </p>
                                <ul>
                                    <li>Cut 32mm hole in the middle of the tank top.</li>
                                    <li>Measure depth of the tank.</li>
                                    <li>Trim sensor 5mm short to the tank depth</li>
                                    <li>Calibrate sensor Min and  Max level.</li>
                                    <li>Install sensor with all 5 self drilling Screws supplied with the sensor.</li>
                                    <li>Connect power supply </li>
                                    <li>Connect with the GPS device</li>
                                </ul>
                            </Box>
                            <Box className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4" sx={{ p: 2 }}>
                                <Image
                                    height={620}
                                    width={1024}
                                    src="/fuel_sensor_device.png"
                                    alt="config" />
                            </Box>
                        </Box>
                    </section>
                    <section>
                    <div className='widget_container'>
                            <h2 className='Heading_title'>Packaging..</h2>
                        </div>
                        <Box display="grid" gridTemplateColumns={{ xs: "1fr", sm: " 1fr", md: "3fr 3fr" }} gap={2} p={2}>
                                
                            <Box className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4 p-0" sx={{ p: 2 }}>
                                <ul>
                                <li>Sensor packaging is custom designed to protect sensor from bending during transport. Specially designed Corogated hard Pipes with Steel caps are used to pack sensors.</li>
                            <li>Standard packaging is 2 Sensors per Box.</li>
                            <li>Accessories included: 3Meter Long Wire connected with Sensor. Gaskit, Sensor Cap, End cap, Nylon net pouch, Cable tie, Silicon sealant tube, Self drilling screws.</li>    
                                </ul>                            
                            </Box>
                            
                        </Box>
                    </section>
                </div>
            </div>
    </div>);
}


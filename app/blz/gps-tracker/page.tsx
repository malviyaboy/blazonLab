import { Box } from '@mui/material';
import Image from 'next/image';
import BreadCrumb from '@/app/component/BreadCrumb/BreadCrumb';
import { Metadata } from 'next';
import { getPageMetadata } from '@/app/lib/metadata';

export function generateMetadata(): Metadata {
    return getPageMetadata("/blz/gps-tracker");
}


export default function GpsTracker() {
    return (
        <><BreadCrumb title='GPS Tracker-old' />
            <div className="gps min-h-screen  flex justify-center items-center">
                <div className="bg-white rounded-lg md:p-8 w-full max-w-6xl">

                    <section>

                        <div className="elementor-widget-container">
                            <h1 className='text-center'><strong>GPS Tracker (BGT - 1200)</strong></h1>
                        </div>
                        <div className='elementor-widget-container'>
                            <p className='text-center'>BGT-1200 is high end GPS data logger. Designed specially for Heavy Vehicle tracking. Specially designed 6 Hybrid Analog/Digital ports. Big Battery Backup, and Large Flash to store a month of offline data.</p>
                        </div>
                        <Box display="grid" gridTemplateColumns={{ xs: "1fr", sm: " 1fr", md: "1fr 2fr 1fr" }} gap={2} p={2}>

                            <Box className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4" sx={{ p: 2 }}>
                                <div className="bg-white-200 border-2 shadow-xl rounded-full py-2 px-4 mb-2 inline-flex items-center">2G GSM</div>
                                <div className="bg-white-200 border-2 shadow-xl rounded-full py-2 px-4 mb-2 inline-flex items-center">GPS/GNSS</div>
                                <div className="bg-white-200 border-2 shadow-xl rounded-full py-2 px-4 mb-2 inline-flex items-center">10-30 Volt DC</div>
                                <div className="bg-white-200 border-2 shadow-xl rounded-full py-2 px-4 mb-2 inline-flex items-center">12 Wire</div>
                                <div className="bg-white-200 border-2 shadow-xl rounded-full py-2 px-4 mb-2 inline-flex items-center">1500mAh Backup</div>
                                <div className="bg-white-200 border-2 shadow-xl rounded-full py-2 px-4 mb-2 inline-flex items-center">IP65 BOX</div>
                            </Box>
                            {/* center */}
                            <Box sx={{ p: 2 }} className="flex justify-center mb-8 inline center ">
                                <div className='elementor-background-overlay'>
                                    <Image
                                        height={100}
                                        width={355}
                                        src="/Gps_tracker.png" // Replace with your actual image path
                                        alt="Product"
                                        className="max-w-xs Gps_tracker"
                                    // style={{opacity:'1'}}
                                    />
                                </div>
                                <Box className="border-2 shadow-xl rounded-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4 bg-white-200 items-center text-center">
                                    <div className="text-lg font-semibold py-2 px-4 mb-2 ">Pricing: 3000/unit, MOQ: 20</div></Box>
                            </Box>

                            {/* Right Column */}
                            <Box className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4" sx={{ p: 2 }}>
                                <div className="bg-white-200 border-2 shadow-xl rounded-full py-2 px-4 mb-2 inline-flex items-center">6 Analog/Digital</div>
                                <div className="bg-white-200 border-2 shadow-xl rounded-full py-2 px-4 mb-2 inline-flex items-center">1 Wire input</div>
                                <div className="bg-white-200 border-2 shadow-xl rounded-full py-2 px-4 mb-2 inline-flex items-center">BLE 4.0</div>
                                <div className="bg-white-200 border-2 shadow-xl rounded-full py-2 px-4 mb-2 inline-flex items-center">1GB Flash</div>
                                <div className="bg-white-200 border-2 shadow-xl rounded-full py-2 px-4 mb-2 inline-flex items-center">Dual Sim</div>
                                <div className="bg-white-200 border-2 shadow-xl rounded-full py-2 px-4 mb-2 inline-flex items-center">Box Open alert</div>
                            </Box>
                        </Box>
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
                            <h2 className='Heading_title'>Key Highlights..</h2>
                        </div>
                        <Box display="grid" gridTemplateColumns={{ xs: "1fr", sm: " 1fr", md: "1fr 1fr" }} gap={2} p={2}>

                            <Box className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4" sx={{ p: 2 }}>
                                <ol className='list-none'>
                                    <li>BGT-1200 GPS tracker is based on 2G GSM/GPS/GNSS Module (MC60) from Quectel. MC60 gives high accuracy
                                        Geo Coordinates and better GSM connectivity</li>
                                    <li>Tracker is driven by high end 32bit Microcontroller from MicroChip.</li>
                                    <li>1 Giga bit flash can store 524288 records of offline data, this will serve more than a Month of data even at high frequency of collection</li>
                                    <li>16 bit ADC from Microchip provide high accuracy analog input. Will provide better accuracy in reading Analog
                                        sensors.</li>
                                    <li>Protection on input power supply protect device from voltage surge in vehicles.</li>
                                    <li>IR transceiver to detect tracker cover Open/Close. Tracker can alert on such events to cloud and via SMS both.</li>
                                    <li>Dual Sim facility can provide better GSM coverage.</li>
                                </ol>
                            </Box>
                            <Box className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4" sx={{ p: 2 }}>
                                <Image
                                    height={473}
                                    width={527}
                                    src="/gboard.png"
                                    alt="gboard"
                                // className="max-w-xs"

                                />
                            </Box>
                        </Box>
                    </section>

                    {/* config */}
                    <section>
                        <div className='widget_container'>
                            <h2 className='Heading_title'>Configurator App..</h2>
                        </div>
                        <Box display="grid" gridTemplateColumns={{ xs: "1fr", sm: " 1fr", md: "1fr 1fr" }} gap={2} p={2}>

                            <Box className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4" sx={{ p: 2 }}>
                                <ul>
                                    <li>Easy device Configuration with Android app.</li>
                                    <li>Download Blazonlabs Configurator(Single app for all Blazonlabs Devices and Sensors)</li>
                                    <li>Connect device with USB cable and open the App.</li>
                                    <li>Easy to understand config menu.</li>
                                </ul>
                            </Box>
                            <Box className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4" sx={{ p: 2 }}>
                                <Image
                                    height={473}
                                    width={527}
                                    src="/config.png"
                                    alt="config" />
                            </Box>
                        </Box>
                    </section>
                </div>
            </div>

        </>);
}


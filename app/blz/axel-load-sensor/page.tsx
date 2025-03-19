import { Box } from '@mui/material';
import Image from 'next/image';
import BreadCrumb from '@/app/component/BreadCrumb/BreadCrumb';
import { Metadata } from 'next';
import { getPageMetadata } from '@/app/lib/metadata';

export function generateMetadata(): Metadata {
    return getPageMetadata("/blz/axel-load-sensor");
  }

export default function axelLoad() {
    return (<div >
        <BreadCrumb title='Axel Load Sensor-old'/>
        <div className="gps min-h-screen  flex justify-center items-center">
            <div className="bg-white rounded-lg md:p-8 w-full max-w-6xl">

                <section>
                    <div className='my-5 py-5'>
                        <div className="elementor-widget-container">
                            <h1 className='text-center'><strong>Blazonlabs Axel Load Sensor</strong></h1>
                        </div>
                        <div className='elementor-widget-container'>
                            <p className='text-center'>Axel Load sensor is Bluetooth enabled device. installed attached to the rear axel of the vehicle. Continuously monitor vehicle load.</p>
                        </div>
                        <Box display="grid" gridTemplateColumns={{ xs: "1fr", sm: " 1fr", md: "2fr 2fr" }} gap={2} p={2}>

                            <Box className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4" sx={{ p: 2 }}>
                                <div className="bg-white-200 border-2 shadow-xl rounded-full  px-4 mb-2 inline-flex items-center">Digital Output over BLE</div>
                                <div className="bg-white-200 border-2 shadow-xl rounded-full  px-4 mb-2 inline-flex items-center">0-30v Input Voltage</div>
                                <div className="bg-white-200 border-2 shadow-xl rounded-full  px-4 mb-2 inline-flex items-center">High Accuracy</div>
                                <div className="bg-white-200 border-2 shadow-xl rounded-full  px-4 mb-2 inline-flex items-center">Android Calibration App</div>

                            </Box>
                            {/* center */}
                            <Box sx={{ p: 2 }} className="flex justify-center mb-8 inline center ">
                                <div className='elementor-background-overlay'>
                                    <Image
                                        height={100}
                                        width={355}
                                        src="/Axel_load.png" // Replace with your actual image path
                                        alt="Axel_load"
                                        className="max-w-xs Gps_tracker"
                                    // style={{opacity:'1'}}
                                    />
                                </div>
                                <Box className="border-2 shadow-xl rounded-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4 bg-white-200 items-center text-center">
                                    <div className="text-lg font-semibold py-2 px-4 mb-2 ">Pricing: 9000/unit, MOQ:20</div></Box>
                            </Box>
                        </Box>
                    </div>
                </section>
                {/* config */}
                <section>
                    <div className='widget_container'>
                        <h2 className='Heading_title'>Standard Installation Approach..</h2>
                    </div>
                    <Box display="grid" gridTemplateColumns={{ xs: "1fr", sm: " 1fr", md: "2fr 4fr" }} gap={2} p={2}>
                    <Box className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4" sx={{ p: 2 }}>
                            <p className='p-0'>Sensor  is mounted on Vehicle ceiling. Compression of leaf springs change distance between Axel and ceiling. This change is sanded by sensor as resultant change in angle of sensor elbow.</p>
                            <p>Require simple calibration via Mobile application.</p>
                        </Box>
                        <Box className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4" sx={{ p: 2 }}>
                            <Image
                                height={620}
                                width={1024}
                                src="/load-sensor-install.png"
                                alt="load-sensor-install" />
                        </Box>
                    </Box>
                </section>
            </div>
        </div>
    </div>);
}


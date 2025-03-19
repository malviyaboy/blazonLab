import { Box } from '@mui/material';
import Image from 'next/image';
import BreadCrumb from '@/app/component/BreadCrumb/BreadCrumb';
import { Metadata } from 'next';
import { getPageMetadata } from '@/app/lib/metadata';

export function generateMetadata(): Metadata {
    return getPageMetadata("/blz/coming-soon");
  }

export default function comingSoon() {
    return (<div >
        <BreadCrumb title='Coming soon'/>
        
                        <Box display="grid" gridTemplateColumns={{ xs: "1fr", sm: " 1fr", md: "6fr" }} gap={2} p={2}>

                            
                            {/* center */}
                            <Box sx={{ p: 2 }} className="flex justify-center mb-8 inline center ">
                                <div >
                                    <Image
                                        height={100}
                                        width={355}
                                        src="/ComingSoon.gif" // Replace with your actual image path
                                        alt="ComingSoon"
                                        className="max-w-xs Gps_tracker"
                                    // style={{opacity:'1'}}
                                    />
                                </div>
                               
                            </Box>
                        </Box>
    </div>);
}


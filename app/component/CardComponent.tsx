"use client";
import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';


interface Item {
  id: number;
  name: string;
  value:string;
  description: string;
  image: string;
  height:number;
  width:number;
}

const items: Item[] = [
  { id: 1, name: 'GPS Tracker', value:'gps-tracker', description: 'Advance GPS tracker with 12 wire input, 6 hybrid Analog/Digital input, Big size battery backup, open box alert and lot of more features', image: "/Gps_tracker.png",height:556,width:556 },
  { id: 2, name: 'Capacitive Fuel Level Sensor',value:'capacitive-fuel', description: 'High accuracy Capacitive Fuel Level Sensor. Two variants, Analog output (0-5v) and Digital output (over BLE). Work with most GPS devices.', image: "/Fuel_sensor.png" ,height:1000,width:1000},
  { id: 3, name: 'Engine RPM Sensor',value:'engine-rpm', description: 'High accuracy Capacitive Fuel Level Sensor. Two variants, Analog output (0-5v) and Digital output (over BLE). Work with most GPS devices.', image: "/Rpm_sensor.png",height:1000,width:1000 },
  { id: 4, name: 'Axel Load Sensor',value:'axel-load-sensor', description: 'High accuracy Capacitive Fuel Level Sensor. Two variants, Analog output (0-5v) and Digital output (over BLE). Work with most GPS devices.', image: "/Axel_load.png" ,height:1000,width:1000},
  { id: 5, name: 'Angle and Tilt Sensor',value:'angle-and-tilt-sensor', description: 'Angle and Tilt Sensor is Bluetooth enabled battery operated device. easy to install and configure. Monitor angle change of the arm it is attached to.', image: "/Angel.png" ,height:1000,width:1000},
  { id: 6, name: 'TM Drum Rotation Sensor',value:'tm-drum-rotation-sensor', description: 'TM Drum Rotation Sensor is Bluetooth enabled device. specially designed to monitor rotation RPM and Rotation Direction of Transit Mixer.', image: "/Tm.png" ,height:1000,width:1000},
  { id: 7, name: 'Engine Temperature Sensor',value:'coming-soon', description: 'Engine Temperature sensor is specially designed to monitor engine temperature of the machines. can help in health monitoring.', image: "/ComingSoon.png" ,height:1000,width:1000},

];

const CardComponent: React.FC = () => {
  return (
    <div className='c-container'>
    <div className='mb-5' >
      <div className='widget_container'>
    <h2 className='Heading_title mb-5'>Mordern Fleet Management Tools</h2>
    </div>
    <p className='mb-5'><strong>Monitor Key aspects of your machines and get control of your operations.</strong></p>
    <p className='mb-5'>Wether you are running a Construction Fleet or a Transport Fleet or Mining, most precious assets are Time and Fuel. Keeping an eye on Fuel consumption can save millions, and keeping an eye of utilisation of machines can help you get maximum output of machine and also help achieve work completion targets. <br />
    At Blazonlabs we have designed sensors and devices that can help logging valuable data of the operations of machines. This valuable data can give project managers control over schedule and expanses both.</p>
    </div>
    <div className='widget_container'>
    <h2 className='Heading_title'>Our featured Devices</h2>
    </div>
      <Box display="grid" gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr " }} gap={2} p={2} >
        {items.map((item) => (
          <Box key={item.id} >
            <Card className="m-5 productCard">
              <CardContent>
                <Image
                  src={item.image}
                  width={item.width}
                  height={item.height}
                  alt={item.name}
                />
                <Typography variant="h6" component="div" style={{marginBottom:'20px'}}>
                  {item.name}
                </Typography>
                <Typography variant="body2" style={{color:'#cca876',marginBottom:'20px'}}>
                  {item.description}
                </Typography>
                <Link
                // href={item.value}
                  href={`/${item.id}`} 
                  as = {`blz/${item.value}`} 
                  type="button"       
                  style={{backgroundColor:'#5bc0de'}}           
                  className="float-right rounded-sm right-1 text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Learn more...
                </Link>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default CardComponent;
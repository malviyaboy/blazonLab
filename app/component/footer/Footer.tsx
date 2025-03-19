"use client";
import React from 'react';
import Link from 'next/link';
import { Box } from '@mui/material';
import LocationPin from '../Icons/Icons';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

interface KeyItems {
  id: number;
  name: string;
  value:string;
}

const keyItems: KeyItems[] = [
  { id: 31, name: 'GPS Tracker', value:'gps-tracker'},
  { id: 32, name: 'Capacitive Fuel Level Sensor',value:'capacitive-fuel'},
  { id: 33, name: 'Engine RPM Sensor',value:'engine-rpm'},
  { id: 34, name: 'Axel Load Sensor',value:'axel-load-sensor', },
  { id: 35, name: 'Angle and Tilt Sensor',value:'angle-and-tilt-sensor'},
  { id: 36, name: 'TM Drum Rotation Sensor',value:'tm-drum-rotation-sensor'},
  { id: 37, name: 'Engine Temperature Sensor',value:'coming-soon' },

];

// footer legel item

interface LegelItem{
  id:number;
  name:string;
  value:string;
}

const legelItems: LegelItem[] =[
  {id:21,name:"Privacy Policy",value:"privacy-policy"},
  {id:22,name:"Term and Condition",value:"term-and-condition"},
  {id:23,name:"Shipping and Delivery",value:"shipping-and-delivery"},
  {id:24,name:"Cancellation and Refund",value:"cancellation-and-refund"},
]


function Footer() {
  return (
    <section className='footerBottom' style={{ position: 'relative' }}>
      <div className=' container mx-auto px-4'>
        <Box display="grid" gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr 1fr" }} gap={2} p={2}>
          <Box sx={{ p: 2 }}>
            <h3>About Us</h3>
            <p>Blazonlabs is a product focussed
              company. working on Industrial IoT. Working on both electronics
              development and Software development</p>
            <p>Based out in Jaipur, Rajasthan, Serving whole world</p>
            <Link href="/blz/contact" className="footer-btn">Contact Us</Link>
          </Box>
          <Box className='keyProduct' sx={{ p: 2 }}>
            <h3>Key Products</h3>
            <ul>
            {keyItems.map((item) => 
              (<li><Link key={item.id} href={`/${item.value}`} 
                as = {`/blz/${item.value}`}                
                 >{item.name}</Link></li>)
              
                )
                }
            </ul>
          </Box>
          <Box className='' sx={{ p: 2 }}>
            <h3>Contact us</h3>
            <ul>
              <li>We are located in Pink City Jaipur, India. </li>
              <li >
                <ul>
                  <li className='inline-flex'>
                    <div className='IconColor'>
                      <LocationOnOutlinedIcon />
                      </div>
                      <div><strong>Address:</strong> <br /> 
                      D6/302, Chitrakoot Scheme, Jaipur
                      </div>
                      </li>
                </ul>
              </li>
              <li>
                <ul>
                <li className='inline-flex'>
                <div className='IconColor'>
                  <PhoneOutlinedIcon className='IconColor' />
                  </div>
                  <div>
                    <strong>Phone:</strong> <br />+91-7727080606
                  </div>
              </li>
                </ul>
              </li>
              
              <li>
                <ul>
                <li className='inline-flex'>
                <div className='IconColor'>
                  <EmailOutlinedIcon className='IconColor' />
                </div>
                <div>
                  <strong>Email:</strong> <br />info@blazonlabs.com
                </div>
              </li>
                </ul>
              </li>
            </ul>
          </Box>
          <Box className="legel" sx={{ p: 2 }}>
            <h3>Legal </h3>
            <ul>
              {legelItems.map((footerItem)=>(
                <li><Link key={footerItem.id}
                href={`/${footerItem.id}`} 
                as = {`/blz/${footerItem.value}`}
                >{footerItem.name}</Link></li>
              ))}
            </ul>
          </Box>
        </Box>
        <div className='footer_bottom'>
          <p className='text-center'> &#169; Copyright - BLAZONLABS ITECH PRIVATE LIMITED</p>
        </div>
      </div>
    </section>
  )
}

export default Footer
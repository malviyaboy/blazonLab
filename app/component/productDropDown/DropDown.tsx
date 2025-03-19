// not in use till now 



// will use next time 
"use client";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Item {
  id: number;
  name: string;
  value:string;
}

const items: Item[] = [
  { id: 11, name: 'GPS Tracker', value:'gps-tracker'},
  { id: 12, name: 'Capacitive Fuel Level Sensor',value:'capacitive-fuel'},
  { id: 13, name: 'Engine RPM Sensor',value:'engine-rpm' },
  { id: 14, name: 'Axel Load Sensor',value:'axel-load-sensor'},
  { id: 15, name: 'Angle and Tilt Sensor',value:'angle-and-tilt-sensor'},
  { id: 16, name: 'TM Drum Rotation Sensor',value:'tm-drum-rotation-sensor'},
  { id: 17, name: 'Engine Temperature Sensor',value:'coming-soon'},

];

const NavDrop = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <ul className="flex space-x-6">
          <li className="relative group inline-flex ">
            <div className="anchor"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              Product
            </div>

            {/* Dropdown Menu */}
            <div
              className={`absolute top-5 left-0 mt-2 w-48 bg-white text-gray-800 shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 ${
                isOpen ? "opacity-100 translate-y-0" : "translate-y-2 hidden"
              }`}
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
              style={{zIndex:'111'}}
            >
              <ul className="py-2 z-[999]">
                {items.map((item)=>(
                  <li key={item.id} className="py-2 px-1 border-b-1 border-gray-100">
                    <Link href={`/${item.value}`} 
                  as = {`/blz/${item.value}`}
                   >{item.name}</Link></li>
                ))}
                </ul>
            </div>
            <ChevronDown className="dropDownIcon"/>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavDrop;

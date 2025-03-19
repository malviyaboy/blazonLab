import type { Metadata } from 'next';

// Default metadata (fallback)
export const defaultMetadata: Metadata = {
  title: 'My Website',
  description: 'A general description of my website.',
  icons: {
    icon: '/blazonfaviocn.ico',
    shortcut: '/blazonfaviocn.ico',
    apple: '/blazonfaviocn.png',
  },
};

// Metadata for specific pages
export const pageMetadata: { [key: string]: Metadata } = {
  '/': { // Home page
    title: 'Welcome to My Website',
    description: 'The homepage of my website.',
  },
  '/blz/gps-tracker': {
    title: 'GPS Tracker-old -blazonlab',
    description: 'GPS Tracker (BGT - 1200) BGT-1200 is high end GPS data logger. Designed specially for Heavy Vehicle tracking. Specially designed 6 Hybrid Analog/Digital ports. Big Battery Backup, and Large Flash to store a month of offline data. 2G GSM GPS/GNSS 10 - 30 Volt DC 12 Wire 1500mAh Backup IP65 BOX Pricing: 3000/unit, MOQ:20 6".',
    openGraph: {
      images: '/about-og.jpg',
    },
  },
  '/blz/capacitive-fuel': {
    title: 'Fuel Level Sensor-old -blazonlab',
    description: 'Capacitive Fuel Level Sensor (BL-01) BL-01 is Standard Capacitive Fuel Level Sensor with Analog Output. Made with high grade Aluminium Alloy Pipes and Glass Filled Nylon Body. Capacitive Technology 0-5v Analog Output 0-30v Input Voltage 12 WireAccuracy 1mm Android Calibration App Pricing:5200/unit, MOQ:100 Bluetooth Capacitive Fuel Level Sensor (BL-01-BLE) BL-01-BLE is an extension of BL-01.',
  },
  '/blz/engine-rpm-sensor': {
    title: 'Engine RPM Sensor -blazonlab',
    description: 'Engine RPM Sensor (ERS-01) Engine RPM Sensor (ERS-01) is bluetooth enabled device. 3 wire input. Connect with power and Alternator and configure using Blazon configurator app 3 wire connectivity Digital Output via BLE 0-30v Input Voltage High Accuracy Android Calibration App Pricing: 3000/unit, MOQ:20 How it works.. Takes frequency input from alternator wire. Based on',
  },
  '/blz/axel-load-sensor': {
    title: 'Axel Load Sensor-old -blazonlab',
    description: 'Blazonlabs Axel Load Sensor Axel Load sensor is Bluetooth enabled device. installed attached to the rear axel of the vehicle. Continuously monitor vehicle load. Digital Output over BLE 0-30v Input Voltage High Accuracy Android Calibration App Pricing: 9000/unit, MOQ:20 Standard Installation Approach.. Sensor is mounted on Vehicle ceiling. Compression of leaf springs change distance between',
  },
  '/blz/angle-and-tilt-sensor': {
    title: 'Angle and Tilt Sensor -blazonlab',
    description: 'Angle and Tilt Sensor Angle and Tilt Sensor is Bluetooth enabled battery operated device. easy to install and configure. Monitor angle change of the arm it is attached to. Battery Operated Digital Output via BLE Report Angle, Battery level High Accuracy Android configuration App Price: INR 6000/unit, MOQ: 50 How it works.. Sensor rotate with',
  },
  '/blz/tm-drum-rotation-sensor': {
    title: 'TM Drum Rotation Sensor -blazonlab',
    description: 'TM Drum Rotation Sensor TM Drum Rotation Sensor is Bluetooth enabled device. specially designed to monitor rotation RPM and Rotation Direction of Transit Mixer. Battery Operated Digital Output via BLE Report RPM, Battery level High Accuracy Android configuration App Pricing: 6000/unit, MOQ:50 Sample Data Analysis.. Sensor report RPM of drum rotation and direction of rotation.',
  },
  '/blz/coming-soon': {
    title: 'Coming Soon',
    description: 'A revolutionary new development tool designed to streamline your workflow, boost productivity, and empower you to build cutting-edge applications with ease. Stay tuned for an intuitive interface, powerful features, and seamless integration with your existing tech stack.',
  },
  '/blz/privacy-policy': {
    title: 'Privacy Policy',
    description: 'About BLAZONLABS Blazonlabs Itech Pvt Ltd registered under the Companies Act, 1956 and having its registered office at Jaipur. Blazonlabs Services holds the registered brand name Blazonlabs under Registration of Trade Mark Section 23 (2), Rule 56(1) Blazonlabs is engaged in the business of providing a marketplace platform in the physical and/or electronic form, through the.',
  },
  '/blz/term-and-condition': {
    title: 'Term and Condition',
    description: 'Last updated on Jan 16 2024 For the purpose of these Terms and Conditions, The term &quot;we&quot;, &quot;us&quot;, &quot;our&quot; used anywhere on this page shall mean BLAZONLABS ITECH PRIVATE LIMITED, whose registered/operational office is e6/263, chitrakoot scheme, ajmer road Jaipur RAJASTHAN 302021 . &quot;you&quot;, “your”, &quot;user&quot;, “visitor” shall mean any natural or legal person who',
  },
  '/blz/shipping-and-delivery': {
    title: 'Shipping and Delivery',
    description: 'Last updated on Jan 16 2024 For International buyers, orders are shipped and delivered through registered international courier companies (DHL/FedEx) and/or International speed post only. For domestic buyers, orders are shipped through registered domestic courier companies and /or speed post only. Orders are shipped within 3 weeks or as per the delivery date agreed at',
  },
  '/blz/cancellation-and-refund': {
    title: 'Cencellation and Refund',
    description: 'Blazonlabs follows a transparent and no fuss cancellation policy. Here are the terms of the policy:All cancellation requests should be sent to our billing department or communicated to your Account Manager. The cancellation will not be valid until it is confirmed by the respective department.Cancellation requests will be considered only when the request is made within',
  },
  '/blz/products':{
    title: "Product - blazonlabs",
    description: "At Blazonlabs we have designed sensors and devices that can help logging valuable data of the operations of machines.",
  },
  '/contact': {
    title: 'Contact Us',
    description: 'Get in touch with us.',
  },
  // Add metadata for other pages as needed
};

// Function to get metadata based on pathname
export function getPageMetadata(pathname: string): Metadata {
  return pageMetadata[pathname] || defaultMetadata;
}

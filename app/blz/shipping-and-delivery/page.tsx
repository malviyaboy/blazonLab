import BreadCrumb from '@/app/component/BreadCrumb/BreadCrumb';
import { Metadata } from 'next';
import { getPageMetadata } from '@/app/lib/metadata';

export function generateMetadata(): Metadata {
    return getPageMetadata("/blz/shipping-and-delivery");
}


export default function ShippingAndDelivery() {
    return (
        <>
            <BreadCrumb title='Shipping And Delivery' />
            <div className="gps min-h-screen  flex justify-center">
                <div className="bg-white rounded-lg md:p-8 w-full max-w-6xl">
                    <section>
                        <div className='elementor-widget-container'>
                            <p className='mb-5 text-justify'>Last updated on Jan 16 2024</p>
                            <p className='mb-5 text-justify'>For International buyers, orders are shipped and delivered through registered international courier companies (DHL/FedEx) and/or International speed post only. For domestic buyers, orders are shipped through registered domestic courier companies and /or speed post only. Orders are shipped within 3 weeks or as per the delivery date agreed at the time of order confirmation and delivering of the shipment subject to Courier Company / post office norms. BLAZONLABS ITECH PRIVATE LIMITED is not liable for any delay in delivery by the courier company / postal authorities and only guarantees to hand over the consignment to the courier company or postal authorities within 3 weeks from the date of the order and payment or as per the delivery date agreed at the time of order confirmation. Delivery of all orders will be to the address provided by the buyer. Delivery of our services will be confirmed on your mail ID as specified during registration. For any issues in utilizing our services you may contact our helpdesk on 7727080606 or support@blazonlabs.com</p>
                        </div>
                    </section>
                </div>
            </div>
        </>);
}

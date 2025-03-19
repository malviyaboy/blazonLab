import BreadCrumb from '@/app/component/BreadCrumb/BreadCrumb';
import { Metadata } from 'next';
import { getPageMetadata } from '@/app/lib/metadata';

export function generateMetadata(): Metadata {
    return getPageMetadata("/blz/cancellation-and-refund");
  }
  

export default function PrivacyPolicy() {
    return (
        <>
        <BreadCrumb title='Cancellation and Refund' />  
        <div className="gps min-h-screen  flex justify-center">
            <div className="bg-white rounded-lg m:p-8 w-full max-w-6xl">
                <section>
                <div className='elementor-widget-container'>
                    <p className='mb-5 text-justify'><strong>Blazonlabs</strong> follows a transparent and no fuss cancellation policy. Here are the terms of the policy:All cancellation requests should be sent to our billing department or communicated to your Account Manager. The cancellation will not be valid until it is confirmed by the respective department.Cancellation requests will be considered only when the request is made within 12 hours of placing the order and execution of the project has not started already.</p>
                    
                    <p className='mb-5 text-justify'><strong>Blazonlabs</strong> will not be held responsible for any third party services, such as hosting, web development, Installation service </p>
                    <p className='mb-5'>Refund policy</p>
                    <p className='mb-5 text-justify'>Due to the nature of the services, Blazonlabs does not guarantee any refunds upon cancellation. In case of monthly payment, it is understood that payment for next month is released only after reviewing the current month’s performance. Blazonlabs does not make any guarantees.Warranty of any broken or damaged hardware. and will not be held responsible for any refund claims thereof. We only provide IOT hardware and data analytics service , do not provide any installation service for the hardware. If you are not happy with our services you’ll get your refund back according to our above mentioned policies.</p>
                    </div>
                </section>
                </div>
                </div>      
        </>);
}


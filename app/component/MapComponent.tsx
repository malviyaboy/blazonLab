"use client"
// import React, { useState } from "react";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapComponent: React.FC = () => {
    // const [map, setMap] = useState<google.maps.Map | null>(null);

    // const center: google.maps.LatLngLiteral = { lat: 33.44, lng: -112.07 };

    // const onLoad = (mapInstance: google.maps.Map) => {
    //     setMap(mapInstance);
    // };

    return (
        // <LoadScript googleMapsApiKey="AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao" libraries={["places"]}>
        //     <GoogleMap
        //         mapContainerStyle={{ width: "100%", height: "400px" }}
        //         zoom={12}
        //         center={center}
        //         onLoad={onLoad}
        //     >
        // <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.197933466233!2d75.73506727527108!3d26.89721267665639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db49665f3d91d%3A0x7974e2d724f0f32!2sBlazon%20Labs%20Itech%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1742291186119!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                <iframe style={{position:'relative',width:'100%',border:'0'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.197933466233!2d75.73506727527108!3d26.89721267665639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db49665f3d91d%3A0x7974e2d724f0f32!2sBlazon%20Labs%20Itech%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1742291186119!5m2!1sen!2sin" width="600" height="450"  loading="lazy" >iframe</iframe>
        //         <Marker position={center} />
        //     </GoogleMap>
        // </LoadScript>
    );
};

export default MapComponent;

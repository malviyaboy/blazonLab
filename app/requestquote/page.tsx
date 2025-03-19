import FormComponent from "../component/ContactForm";
import {Box } from '@mui/material';
import Carousel from "../component/RequestCarousel/RequestCarousel";
import BreadCrumb from "../component/BreadCrumb/BreadCrumb";

export default function requestquote() {
  return (
    <>

      {/* <BreadCrumb text="Request a Quote" title="Request a Quote"/> */}
      <Box display="grid" gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr" }} gap={2} p={2}>
        <Box sx={{ p: 2 }}>
      <FormComponent/>
      </Box>
      <Box sx={{ p: 2 }}>
      <Carousel/>
      </Box>
      </Box>
    </>
  )
}


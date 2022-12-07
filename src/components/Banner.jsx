import { Box } from "@chakra-ui/react";
import ImageSlider from "./ImageSlider";
import { ImagesSliderData } from "./ImagesSliderData";
import '../components/styles.css'

export default function Banner() {
  return (
    <Box w="100%" p={4} color="white">
      <ImageSlider slides={ImagesSliderData} />
    </Box>
  );
}

import "./styles.css";
import { Box } from "@chakra-ui/react";
import OurTeam from "./OurTeam"
import { ImagesSliderData } from "./ImagesSliderData";

export default function App() {
  return (
    <Box w="100%" p={4} color="white">
      <OurTeam slides={ImagesSliderData} />
    </Box>
  );
}
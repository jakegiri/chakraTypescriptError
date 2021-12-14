import { Box } from "@chakra-ui/react";
import Image from "next/image";
import WhyUsImage from "../../../public/whyUsImage.png";

export default function ImageSection() {
  return (
    <Box position="relative" width="100%" height="100%">
      <Image src={WhyUsImage} layout="fill" objectFit="contain" />
    </Box>
  );
}

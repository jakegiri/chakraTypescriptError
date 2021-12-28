import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Center, Flex, Heading, IconButton, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import useMediaQuery from "../../../lib/hooks/useMediaQuery";
import { icons, services } from "./config";
import IconContainerRound from "./IconContainerRound";

SwiperCore.use([Navigation]);
//###############################################################
//###############################################################
//                      MAIN
//###############################################################
//###############################################################

export default function CardsForLargeScreen({ children, ...restProps }: any) {
  const isMinWidth768px = useMediaQuery("(min-width: 768px)");
  const swiperSlideStyles = {
    paddingTop: !isMinWidth768px ? "42px" : "65px",
    paddingBottom: !isMinWidth768px ? "42px" : "65px",
    minWidth: isMinWidth768px ? "341px" : "none",
  };
  return (
    <Swiper
      navigation={true}
      spaceBetween={28}
      slidesPerView={"auto"}
      className="swiper mySwipper"
    >
      {services.map((service, index) => (
        <SwiperSlide
          style={swiperSlideStyles}
          className={"swiper-slide"}
          key={index}
        >
          <Card {...service} index={index} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

//##############################################################
//##############################################################
//         SUB COMPONENTS ----- CARD CONTENT
//##############################################################
//##############################################################
export function Card({
  heading,
  description,
  index,
}: {
  heading: string;
  description: string;
  index: number;
}) {
  return (
    <Center
      width="387px"
      // minWidth={{ md: "341px" }}
      // maxWidth={{ base: "387px", md: "387px" }}
      py={{ base: "42px", md: "65px" }}
      bgColor="white"
      borderRadius="md"
      border="1px solid #BDCEDF"
      height="100%"
    >
      <Flex flexDirection="column" width="278px" alignItems="center">
        <IconContainerRound
          bgColor={icons[index].color}
          boxShadow={icons[index].boxShadow}
        >
          <Box mr="-3px" mb="-3px">
            <FontAwesomeIcon icon={icons[index].icon} color="white" size="2x" />
          </Box>
        </IconContainerRound>
        <Heading mt={{ base: "30px", md: "48px" }}>{heading}</Heading>
        <Text mt="30px" textAlign="center">
          {description}
        </Text>
        <IconButton
          aria-label="Read More"
          icon={<ArrowForwardIcon color="purple.900" />}
          mt="18px"
          h="45px"
          w="45px"
          bgColor="gray.50"
        ></IconButton>
      </Flex>
    </Center>
  );
}

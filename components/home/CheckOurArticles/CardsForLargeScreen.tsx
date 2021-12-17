import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import blogImage1 from "../../../public/blogs/blogimage1.png";

interface Data {
  heading: string;
  text: string;
  date: string;
}

export default function CardsForLargeScreen() {
  return (
    <Swiper
      spaceBetween={40}
      navigation={true}
      slidesPerView={"auto"}
      className="swiper mySwipper"
    >
      {featuredBlogsCards.map((data) => (
        <SwiperSlide
          className={"swiper-slide"}
          style={{
            paddingBottom: "65px",
          }}
        >
          <Card data={data} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

function Card({ data }: { data: Data }) {
  const { heading, text, date } = data;

  const imageRendered = (
    <Box position="relative" width="100%" height="100%">
      <Image src={blogImage1} layout="fill" objectFit="cover" />
    </Box>
  );

  return (
    <Flex width="800px" bgColor="white" borderRadius="lg">
      <Box width="380px" flexShrink="0" borderRadius="20px" overflow="hidden">
        {imageRendered}
      </Box>
      <Box p="58px 90px 68px 60px">
        <Text>{date}</Text>
        <Heading as="h3" mt="23px" size="sm">
          {heading}
        </Heading>
        <Text mt="28px">{text}</Text>
        <Button mt="36px" boxShadow="xsPurple">
          Read More
        </Button>
      </Box>
    </Flex>
  );
}

const featuredBlogsCards = [
  {
    heading: "Thinks To Know Before Ordering For An Website",
    text: "There are many variations of passages Lorem available, but the majority have",
    date: "12 june 2019",
  },
  {
    heading: "Look Out For These Before Ordering For An Website",
    text: "There are many variations of passages Lorem available, but the majority have",
    date: "12 june 2019",
  },
  {
    heading: "Look Out For These Before Ordering For An Website",
    text: "There are many variations of passages Lorem available, but the majority have",
    date: "12 june 2019",
  },
];

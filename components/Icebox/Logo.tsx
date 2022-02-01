import { Center, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <a>
        <HStack spacing="12px">
          <Center
            bgColor="purple.900"
            w="38px"
            h="38px"
            borderRadius="sm"
            boxShadow="-5px 10px 30px 0 rgba(96,1,211,0.3)"
          >
            <Text fontSize="20px" fontWeight="bold" color="white">
              L
            </Text>
          </Center>
          <Text
            as="h1"
            color="black"
            fontSize={{ base: "27px", md: "30px" }}
            fontWeight="bold"
          >
            Loustrous
          </Text>
        </HStack>
      </a>
    </Link>
  );
}

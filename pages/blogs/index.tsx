import { useQuery } from "@apollo/client";
import { Box, Flex, Heading, useBreakpointValue } from "@chakra-ui/react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import { LContainer } from "../../components/common/ui/Containers";
import { GET_ALL_POSTS } from "../../graphql/queries/blogs";
import renderOptionsForLinkedAssets from "../../lib/contentful/renderOptionsForLinkedAssets";
import blogBanner1 from "../../public/blogBanner1.jpg";
import styles from "./blog.module.css";

export default function Blogs() {
  const { loading, error, data } = useQuery(GET_ALL_POSTS, {
    variables: { skip: 0, limit: 5 },
  });
  const headingHeight = useBreakpointValue({ md: "35size" });

  if (loading) return <p>Loading</p>;
  console.log(data.blogPostCollection);
  return (
    <LContainer as="article" bg="gray" noPadding centerContent={true}>
      <Flex flexDirection="column" alignItems="center" maxWidth="936px">
        <Heading
          as="h2"
          size={headingHeight}
          py="64px"
          mx={{ base: "16px", md: "0" }}
        >
          {data.blogPostCollection.items[0].title}
        </Heading>
        <Box bgColor="white">
          <Box>
            <Image src={blogBanner1} layout="intrinsic"></Image>
          </Box>
          <Box
            padding={{ base: "64px 30px", md: "64px 128px" }}
            width={{ base: "100vw", md: "auto" }}
          >
            <div className={styles.blogContent}>
              {documentToReactComponents(
                data.blogPostCollection.items[0].content.json,
                renderOptionsForLinkedAssets(
                  data.blogPostCollection.items[0].content.links
                )
              )}
            </div>
          </Box>
        </Box>
      </Flex>
    </LContainer>
  );
}

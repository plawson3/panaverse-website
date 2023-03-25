'use client'

import {
  background,
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import NextImage from "next/image";
import Link from "next/link";

import Data from "../utils/CoursesInfo";

export function Course({ _link, _title, _image }) {
  return (
    <Link href={`${_link}`}>
      <Flex
        position="relative"
        maxW={{ base: "full", sm: "xs", md: "xs", lg: "lg" }}
        // mx={[2, 2, 4, 4]}
        my={[4, 4, 6, 1]}
      >
        <Box h={"auto"} w={"auto"}>
          <NextImage
            src={_image}
            alt="image"
            style={{ borderRadius: "20px" }}
          />
        </Box>
        <Text
          position="absolute"
          left="2"
          top={2}
          color="white"
          fontFamily={"sans-serif"}
          fontWeight="bold"
          fontSize={["md", "lg", "xl", "xl"]}
          p="2"
          bg="blackAlpha.500"
          rounded={"2xl"}
          textAlign="start"
          isTruncated={false}
          maxW={"80"}
        >
          {_title}
        </Text>
      </Flex>
    </Link>
  );
}

export default function Courses() {
  return (
    <Flex my={["0", "0", "10", "10"]} gap="10" direction="column">
      <Heading
        fontFamily={"sans-serif"}
        fontSize={["2xl", "2xl", "4xl", "4xl"]}
        textAlign="center"
      >
        Core Courses (Common in All Specializations)
      </Heading>
      <Flex
        mx={["2", "2", "2", "6"]}
        direction={["column", "column", "row", "row"]}
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        gap={[4, 4, 6, 6]}
      >
        {Data.map((item) => {
          return (
            <Course
              key={item.menuTitle}
              _link={item.link}
              _title={item.title}
              _image={item.image}
            />
          );
        })}
      </Flex>
    </Flex>
  );
}

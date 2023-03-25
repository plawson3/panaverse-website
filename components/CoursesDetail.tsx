'use client'

import { InfoOutlineIcon, LinkIcon, TimeIcon } from "@chakra-ui/icons";
import {
  Flex,
  Text,
  Icon,
  HStack,
  Link,
  VStack,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import Data from "../utils/CoursesInfo";

export default function Page() {
  return (
    <>
      <Flex w={"auto"} direction="column">
        <Flex
          as={"section"}
          id=""
          p={"4"}
          bg="gray.100"
          rounded={"2xl"}
          my={"5"}
          mx="5"
          w={"auto"}
          //   h="36"
          direction="column"
          gap="5"
        >
          <Text
            as={"h1"}
            fontSize={["2xl", "2xl", "2xl", "3xl"]}
            fontWeight={"medium"}
            fontFamily="sans-serif"
          >
            Detailed Course Syllabus
          </Text>
          <HStack justify={"space-between"}>
            <Text
              as={"h1"}
              fontSize={["xl", "xl", "xl", "2xl"]}
              fontWeight={"medium"}
              fontFamily="sans-serif"
            >
              - Specialized Tracks
            </Text>
          </HStack>
        </Flex>
        {Data.map((course) => {
          return (
            <Flex
              as={"section"}
              id="cs101"
              p={"4"}
              bg="gray.100"
              rounded={"2xl"}
              my={"5"}
              mx="5"
              w={"auto"}
              //   h="36"
              direction="column"
              gap="5"
              key={course.title}
            >
              <Text
                as={"h1"}
                fontSize={["2xl", "2xl", "2xl", "3xl"]}
                fontWeight={"medium"}
                fontFamily="sans-serif"
              >
                {course.title}
              </Text>

              <Text>{course.text}</Text>
              <VStack alignItems={"start"}>
                {course.quarterLinks.map((courseLink) => {
                  <Link
                    href={courseLink.link}
                    target={"_blank"}
                    color={"blue.600"}
                  >
                    <Icon as={LinkIcon} mx="2" mt={-1} />
                    {courseLink.title}
                  </Link>;
                })}
              </VStack>
            </Flex>
          );
        })}
      </Flex>
    </>
  );
}

'use client'

import {
  InfoIcon,
  InfoOutlineIcon,
  LinkIcon,
  TimeIcon,
} from "@chakra-ui/icons";
import {
  Flex,
  Text,
  Icon,
  Heading,
  HStack,
  Link,
  Box,
  VStack,
  OrderedList,
  ListItem,
  Divider,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";

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
              - Quarter IV Web3 and Metaverse
            </Text>
            <Text
              fontSize={"sm"}
              textAlign={"end"}
              fontWeight="bold"
              alignItems={"baseline"}
            >
              <Icon mt={-1} mr="1" as={TimeIcon} /> Duration: 13 Weeks
            </Text>
          </HStack>
        </Flex>

        {/* MV-361 start */}
        <Flex
          as={"section"}
          id="mv361"
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
            MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse
            Experiences
          </Text>

          <Text>
            <Text fontSize="xl" fontWeight={"medium"} fontFamily="sans-serif">
              Course Description:
            </Text>
            <br />
            The Web is the Metaverse. The metaverse requires an infrastructure
            that connects all of the metaverses so that we can travel between
            them. This is only achievable with open web-based metaverses. The
            internet and its browsers are magical. Federated but linked
            experiences connect pages, people, technology, businesses,
            standards, and nations. It’s unlike anything else. The metaverse
            should replicate the best qualities of the web - it should just be
            the web. We just have to extend online responsive design from mobile
            to desktop to 3D, Augmented Reality, and Virtual Reality. This
            course will teach you how to build the Open Social Spatial Web with
            WebXR and WebGPU technologies.
          </Text>
        </Flex>
        {/* MV-361 end */}

        {/* Course Outline start */}
        <Flex
          as={"section"}
          id="blender3d"
          p={"4"}
          bg="gray.100"
          rounded={"2xl"}
          my={"5"}
          mx="5"
          w={"auto"}
          direction="column"
          gap="5"
        >
          <Text
            as={"h1"}
            fontSize={["2xl", "2xl", "2xl", "3xl"]}
            fontWeight={"medium"}
            fontFamily="sans-serif"
          >
            Course Outline
          </Text>
          <VStack alignItems={"start"}>
            <Text>Open Metaverse Web Development</Text>
            <Link
              href="https://github.com/panaverse/metaverse-web"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Open Metaverse Learning Repo
            </Link>
            <Text>
              Blender 3D asset Creation for the Metaverse (Remote Zoom Class)
            </Text>
            <Text>
              Blender development is being funded by heavyweights in the
              real-time 3D (RT3D) space such as Apple, Unity, AMD, Intel, Meta,
              NVIDIA, AWS, Epic Games, Adobe, Microsoft, and Decentraland. It is
              expected to become the standard asset creation tool for metaverse.
            </Text>
            <Link
              href="https://www.blender.org/download/"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Blender 3+ Download
            </Link>
            <Link
              href="https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Blender 3.0 Beginner Tutorial
            </Link>
            <Link
              href="https://docs.google.com/document/d/1zPBgZAdftWa6WVa7UIFUqW_7EcqOYE0X743RqFuJL3o/edit"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Blender 3.0 Hotkey
            </Link>
            <Link
              href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Blender Projects Textbook: Blender by Example 2nd Edition
            </Link>
            <Link
              href="https://www.amazon.com/Complete-Guide-Blender-Graphics-Animation/dp/103212167X/ref=sr_1_5"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Blender Textbook: The Complete Guide to Blender Graphics: Computer
              Modeling & Animation 7th Edition by John M. Blain
            </Link>
            <Link
              href="https://www.youtube.com/watch?v=H7T0SzdFHwg&ab_channel=MaxTech"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Best Hardware Performance for Blender Rendering
            </Link>
          </VStack>
        </Flex>
        {/* Course Outline end */}

        {/* Assignment  start */}
        <Flex
          as={"section"}
          id="assignment"
          p={"4"}
          bg="gray.100"
          rounded={"2xl"}
          my={"5"}
          mx="5"
          w={"auto"}
          direction="column"
          gap="5"
        >
          <Text
            as={"h1"}
            fontSize={["2xl", "2xl", "2xl", "3xl"]}
            fontWeight={"medium"}
            fontFamily="sans-serif"
          >
            Assignments
          </Text>
          <Divider />
          <VStack alignItems={"start"}>
            <Text fontSize="xl" fontWeight={"medium"} fontFamily="sans-serif">
              Assignment 1:
            </Text>
            <Link
              href="https://github.com/panaverse/metaverse-web"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Build a 3D Donut using Blender 3 as shown in these video tutorials
            </Link>
          </VStack>
          <VStack alignItems={"start"}>
            <Text fontSize="xl" fontWeight={"medium"} fontFamily="sans-serif">
              Assignment 2:
            </Text>
            <Link
              href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Build a Viking Scene using Blender 3 as shown in chapter 2 of the
              Book [Blender by Example 2nd Edition]
            </Link>
          </VStack>
          <VStack alignItems={"start"}>
            <Text fontSize="xl" fontWeight={"medium"} fontFamily="sans-serif">
              Assignment 3:
            </Text>
            <Link
              href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Modeling a Time Machine using Blender 3 as shown in chapters 3 and
              4 of the Book Blender by Example 2nd Edition
            </Link>
          </VStack>
          <VStack alignItems={"start"}>
            <Text fontSize="xl" fontWeight={"medium"} fontFamily="sans-serif">
              Assignment 4:
            </Text>
            <Link
              href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Build a Modern Kitchen using Blender 3 as shown in chapters 5, 6,
              and 7 of the Book Blender by Example 2nd Edition
            </Link>
          </VStack>
          <VStack alignItems={"start"}>
            <Text fontSize="xl" fontWeight={"medium"} fontFamily="sans-serif">
              Assignment 5:
            </Text>
            <Link
              href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Illustrating an Alien Hero with Grease Pencil as shown in chapter
              8 of the Book Blender by Example 2nd Edition
            </Link>
          </VStack>
          <VStack alignItems={"start"}>
            <Text fontSize="xl" fontWeight={"medium"} fontFamily="sans-serif">
              Assignment 6:
            </Text>
            <Link
              href="https://www.youtube.com/watch?v=bpvh-9H8S1g"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Build a 3D Sword in the Stone using Blender 3 as shown in these
              video tutorials
            </Link>
          </VStack>
        </Flex>
        {/* Assignment  end */}
      </Flex>
    </>
  );
}

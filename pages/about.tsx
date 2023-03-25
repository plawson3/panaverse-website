'use client'

import {
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
  Image,
  Box,
  Button,
  Stack,
} from "@chakra-ui/react";
import aboutLogo from "../public/about.jpg";
import React from "react";

import NextImage from "next/image";
import { motion } from "framer-motion";

const AnimatedBox = motion(Box);
import Layout from "../components/Layout";
import Footer from "../components/Footer";

const AboutPage = () => (
  <Layout title="About">
    <Flex
      gap={["5", "5", "10", "10"]}
      my={10}
      mx={["4", "4", "28", "32"]}
      direction={["column", "column", "column", "row", "row"]}
    >
      <Flex>
        <NextImage src={aboutLogo} alt="Team Image" />
      </Flex>
      <Flex direction="column" gap={"5"} alignSelf="center">
        <Heading fontSize={["2xl", "3xl", "5xl", "5xl"]}>About Us</Heading>
        <Text fontSize={["sm", "lg", "lg", "lg"]}>
          The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
          Panaverse DAO is a movement to spread these technolgies globally. It
          is community of Web 3 and Metaverse developers, designers, trainers,
          startup founders and service providers.
        </Text>
      </Flex>
    </Flex>
    <Footer />
  </Layout>
);

export default AboutPage;

'use client'

import {
  ButtonGroup,
  Flex,
  //   Container,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import p_logo from "../public/p_logo.png";

import NextImage from "next/image";

export const Footer = () => (
  <>
    <Flex
      w={["full", "full", "full", "full"]}
      // bg="whiteAlpha.900"
      justify={"space-around"}
      py="4"
      px={[5, 0, 0, 0]}
    >
      <Flex direction={"column"}>
        <NextImage
          src={p_logo}
          alt="Panaverse DAO Logo"
          width={100}
          height={100}
        />
        <Text fontSize="sm" color="subtle">
          &copy; {new Date().getFullYear()} Haris Rehman. All rights reserved.
        </Text>
      </Flex>
      <Flex>
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            href="#"
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="GitHub"
            icon={<FaGithub fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="Twitter"
            icon={<FaTwitter fontSize="1.25rem" />}
          />
        </ButtonGroup>
      </Flex>
    </Flex>
  </>
);

export default Footer;

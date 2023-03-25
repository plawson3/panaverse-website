"use client";

import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Button,
  Icon,
  Flex,
  List,
  ListItem,
  VStack,
  Box,
  LinkBox,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";
import Layout from "./Layout";
import { QuarterMenu } from "../utils/QuarterMenu";

const MenuItem = ({ menu, submenus }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  function toggleList() {
    setIsExpanded(!isExpanded);
  }

  return (
    <LinkBox
      fontSize={"md"}
      fontFamily="sans-serif"
      cursor={"pointer"}
      onClick={toggleList}
      color="gray.700"
      p="1"
      justifyContent={"left"}
      textAlign="left"
    >
      {isExpanded ? (
        <Text>
          <Icon as={ChevronDownIcon} />
          {menu}
        </Text>
      ) : (
        <Text>
          <Icon as={ChevronRightIcon} />
          {menu}
        </Text>
      )}
      {isExpanded && (
        <List as={"ul"} textAlign={"start"}>
          {submenus.map((submenu) => (
            <ListItem my={"2"} key={submenu} ml="8">
              {submenu}
            </ListItem>
          ))}
        </List>
      )}
    </LinkBox>
  );
};

export default function DocsLayout({children}) {
  const [isExpanded, setIsExpanded] = useState(false);

  function toggleList() {
    setIsExpanded(!isExpanded);
  }

  return (
    <Layout title="Documentation">
      <Flex
        mt={"28"}
        // border={"1px solid black"}
        gap={24}
        direction="row"
        mx={"36"}
      >
        <Flex w="96" maxH={"84vh"} overflowY="scroll" p={"5"}>
          <VStack>
            {QuarterMenu.map((item) => {
              return (
                <MenuItem
                  key={item.menu}
                  menu={item.menu}
                  submenus={item.subMenu}
                />
              );
            })}
          </VStack>
        </Flex>
        <Flex border={"1px solid black"} w="full">
          Main Content
          {children}
        </Flex>
      </Flex>
    </Layout>
  );
}

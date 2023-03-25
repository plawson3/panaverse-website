'use client'

import {
  Icon,
  Box,
  Divider,
  Flex,
  Link,
  LinkBox,
  ListItem,
  Text,
  UnorderedList,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
  Button,
  useDisclosure,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerOverlay,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { useState } from "react";

import { QuarterMenu } from "../utils/QuarterMenu";
import CoursesMenu from "../utils/CoursesInfo";

// Menu Items for Quarter
const MenuItem = ({ menu, menuLink, submenus }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  function toggleList() {
    setIsExpanded(!isExpanded);
  }

  return (
    <LinkBox
      minW={"52"}
      fontFamily="sans-serif"
      onClick={toggleList}
      color="gray.700"
      p="1"
      justifyContent={"left"}
      textAlign="left"
      transition="all 0.2s ease-in-out"
    >
      <Box fontSize={"md"}>
        {isExpanded ? (
          <Text>
            <Icon as={ChevronDownIcon} />
            <NextLink href={`/docs/${menuLink}`}>{menu}</NextLink>
          </Text>
        ) : (
          <Text>
            <Icon as={ChevronRightIcon} />
            <NextLink href={`/docs/${menuLink}`}>{menu}</NextLink>
          </Text>
        )}
      </Box>
      {isExpanded && (
        <UnorderedList as={"ul"} textAlign={"start"}>
          {submenus.map((submenu) => (
            <ListItem
              my={"2"}
              fontSize="sm"
              fontFamily={"sans-serif"}
              key={submenu}
              ml="5"
            >
              <Link _hover={{ color: "blue.500" }} href={submenu.link}>
                {submenu.title}
              </Link>
            </ListItem>
          ))}
        </UnorderedList>
      )}
    </LinkBox>
  );
};

// Menu Items for Courses
const MenuItemCourses = ({ menu, menuLink, quarterLinks }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  function toggleList() {
    setIsExpanded(!isExpanded);
  }

  return (
    <LinkBox
      minW={"52"}
      fontFamily="sans-serif"
      onClick={toggleList}
      color="gray.700"
      p="1"
      justifyContent={"left"}
      textAlign="left"
      transition="all 0.2s ease-in-out"
    >
      <Box fontSize={"md"}>
        {isExpanded ? (
          <Text>
            <Icon as={ChevronDownIcon} />
            <NextLink href={`${menuLink}`}>{menu}</NextLink>
          </Text>
        ) : (
          <Text>
            <Icon as={ChevronRightIcon} />
            <NextLink href={`${menuLink}`}>{menu}</NextLink>
          </Text>
        )}
      </Box>
      {isExpanded && (
        <UnorderedList as={"ul"} textAlign={"start"}>
          {quarterLinks.map((quarter) => (
            <ListItem
              my={"2"}
              fontSize="sm"
              fontFamily={"sans-serif"}
              key={quarter.title}
              ml="5"
            >
              <Link _hover={{ color: "blue.500" }} href={quarter.link}>
                {quarter.title}
              </Link>
            </ListItem>
          ))}
        </UnorderedList>
      )}
    </LinkBox>
  );
};

export default function SideBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        w={"64"}
        maxH={"67vh"}
        
        display={["none", "none", "flex", "flex"]}
        overflowY="scroll"
        p={"5"}
        overflowX={"hidden"}
        position="fixed"
        zIndex="10"
        direction={"column"}
        gap="4"
      >
        <VStack id="sidebar_course">
          <Text
            justifyContent={"flex-start"}
            ml={"-28"}
            as={"h1"}
            fontSize="3xl"
            fontWeight={"hairline"}
            fontFamily="sans-serif"
          >
            Courses
          </Text>
          <Divider />
          {CoursesMenu.map((item) => {
            return (
              <MenuItemCourses
                key={item.menuTitle}
                menu={item.menuTitle}
                menuLink={item.link}
                quarterLinks={item.quarterLinks}
              />
            );
          })}
        </VStack>
        {/* <Divider /> */}
        <VStack id="sidebar_quarter">
          <Text
            justifyContent={"flex-start"}
            ml={"-32"}
            as={"h1"}
            fontSize="3xl"
            fontWeight={"hairline"}
            fontFamily="sans-serif"
          >
            Quarter
          </Text>
          <Divider />
          {QuarterMenu.map((item) => {
            return (
              <MenuItem
                key={item.menu}
                menu={item.menu}
                menuLink={item.menuLink}
                submenus={item.subMenu}
              />
            );
          })}
        </VStack>
      </Flex>
      <Accordion
        w="full"
        position="fixed"
        top="24"
        left="0"
        display={["flex", "flex", "none", "none"]}
        maxH={"64"}
        overflowY="scroll"
        p={"5"}
        zIndex="20"
        gap="4"
        allowToggle
        bg={"white"}
      >
        <AccordionItem>
          {/* <h2> */}
          <AccordionButton as={"a"} w={"90vw"} bg="gray.100">
            <AccordionIcon />
            <Box as="span" flex="1" textAlign="left">
              Menu
            </Box>
          </AccordionButton>
          {/* </h2> */}
          <AccordionPanel gap="4" w={"64"}>
            <VStack id="sidebar_quarter">
              <Text
                justifyContent={"flex-start"}
                ml={"-32"}
                as={"h1"}
                fontSize="3xl"
                fontWeight={"hairline"}
                fontFamily="sans-serif"
              >
                Quarter
              </Text>
              <Divider />
              <Box>
                {QuarterMenu.map((item) => {
                  return (
                    <MenuItem
                      key={item.menu}
                      menu={item.menu}
                      menuLink={item.menuLink}
                      submenus={item.subMenu}
                    />
                  );
                })}
              </Box>
            </VStack>
            <VStack id="sidebar_course">
              <Text
                justifyContent={"flex-start"}
                ml={"-28"}
                as={"h1"}
                fontSize="3xl"
                fontWeight={"hairline"}
                fontFamily="sans-serif"
              >
                Courses
              </Text>
              <Divider />
              <Box>
                {CoursesMenu.map((item) => {
                  return (
                    <MenuItemCourses
                      key={item.menuTitle}
                      menu={item.menuTitle}
                      menuLink={item.link}
                      quarterLinks={item.quarterLinks}
                    />
                  );
                })}
              </Box>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}

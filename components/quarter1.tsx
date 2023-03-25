'use client'

import { InfoOutlineIcon, LinkIcon, TimeIcon } from "@chakra-ui/icons";
import {
  Flex,
  Text,
  Icon,
  HStack,
  Link,
  VStack,
  OrderedList,
  ListItem,
} from "@chakra-ui/react";
import Footer from "./Footer";

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
          <HStack justify={["space-between"]}>
            <Text
              as={"h1"}
              fontSize={["xl", "xl", "xl", "2xl"]}
              fontWeight={"medium"}
              fontFamily="sans-serif"
            >
              - Quarter I (Core)
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

        {/* CS-101 start */}
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
        >
          <Text
            as={"h1"}
            fontSize={["2xl", "2xl", "2xl", "3xl"]}
            fontWeight={"medium"}
            fontFamily="sans-serif"
          >
            CS-101: Object-Oriented Programming using TypeScript
          </Text>

          <Text>
            <Text fontSize="xl" fontWeight={"medium"} fontFamily="sans-serif">
              Course Description:
            </Text>
            <br />
            We will start the program by learning the fundamentals of
            Object-Oriented programming using JavaScript and TypeScript. We will
            also understand the latest Web trends i.e. Web 3.0 and Metaverse
            concepts and try to understand their working from the perspective of
            the users.
          </Text>
        </Flex>
        {/* CS-101 end */}

        {/* HTML and CSS (Homework) start */}
        <Flex
          as={"section"}
          id="html_css"
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
            HTML and CSS (Homework)
          </Text>

          <VStack alignItems={"start"}>
            <Link
              href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Learn HTML by Hira Khan (Watch Recorded Videos)
            </Link>
            <Link
              href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Learn CSS Intro by Hira Khan (Watch Recorded Videos)
            </Link>
          </VStack>
        </Flex>
        {/* HTML and CSS (Homework) end */}

        {/* Web 3.0 and Metaverse Theory start */}
        <Flex
          as={"section"}
          id="web3"
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
            Web 3.0 and Metaverse Theory
          </Text>

          <VStack alignItems={"start"}>
            <Link
              href="https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Introduction to Panaverse DAO
            </Link>
            <Link
              href="https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Web 3.0 User Guide
            </Link>
            <Text>
              <Icon as={InfoOutlineIcon} mx="2" mt={-1} />
              Complete Web 3 Assignments included in the Web 3 User Guide
            </Text>
            <Link
              href="https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Virtual and Augmented Metaverse User Guide
            </Link>
          </VStack>
        </Flex>
        {/* Web 3.0 and Metaverse Theory end */}

        {/* Fundamentals of JavaScript start */}
        <Flex
          as={"section"}
          id="javascript"
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
            Fundamentals of JavaScript (ECMAScript 2022 Language Specification)
          </Text>

          <VStack alignItems={"start"}>
            <Link
              href="https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Learn JavaScript by Zeeshan Hanif (Watch Recorded Videos)
            </Link>
            <Link
              href="https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Chapters 2-6, 13 of JavaScript from Beginner to Professional:
              Learn JavaScript quickly by building fun, interactive, and dynamic
              web apps, games, and pages
            </Link>
            <Link
              href="https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              JavaScript Book Code
            </Link>
            <Link
              href="https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Getting Started Exercises with JavaScript and Node.js
            </Link>
            <br />
            <Text>
              <Text fontSize="xl" fontWeight={"medium"} fontFamily="sans-serif">
                Fundamentals of JavaScript and Node.js Quiz
              </Text>
              <br />
              <Text fontWeight={"bold"}>Topics Covered in the Quiz:</Text>
              <Text my={2}>
                Background of JavaScript and How to use JavaScript in Browser
                Variables, Primitive data types Analyzing and modifying data
                types, and Operators (Chapter 2 of JavaScript from Beginner to
                Professional)
              </Text>
              <OrderedList>
                <ListItem ml={3}>
                  Intro to Node.js, .mjs files, Modules, NPM, import, export,
                  and using external modules with npm:
                  <Link
                    href="https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing"
                    target={"_blank"}
                    color={"blue.600"}
                  >
                    <Icon as={LinkIcon} mx="2" mt={-1} />
                  </Link>
                  {/* https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing */}
                  How to accept user input in your Node.js JavaScript programs,
                  this will allow us to create interactive Node.js console
                  programs using prompt-sync library. The last example in this
                  presentation shows you how to use prompt-sync library in your
                  Node.js programs:
                  <Link
                    href="https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing"
                    target={"_blank"}
                    color={"blue.600"}
                  >
                    <Icon as={LinkIcon} mx="2" mt={-1} />
                  </Link>
                  {/* https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing */}
                  Note: After this point, we will do all our class work and
                  exercises using Node.js in .mjs files. We will also be able to
                  develop interactive Node.js console programs which will
                  greatly help the students to learn.
                </ListItem>
                <ListItem ml={3}>
                  Using Arrays and Objects in Node.js Programs (chapter 3 of
                  JavaScript from Beginner to Professional)
                </ListItem>
                <ListItem ml={3}>
                  Using if and if else statements, else if statements,
                  Conditional ternary operators, and switch statements in
                  Node.js programs (chapter 4 of JavaScript from Beginner to
                  Professional)
                </ListItem>
                <ListItem ml={3}>
                  Using while loop, do while loop, for loop, for in, and for of
                  loop in Node.js (chapter 5 of JavaScript from Beginner to
                  Professional)
                </ListItem>
                <ListItem ml={3}>
                  Using Concurrency, Callbacks, Promises, async / await, and
                  Event loop (chapter 13 of JavaScript from Beginner to
                  Professional)
                </ListItem>
                <ListItem ml={3}>
                  JavaScript promises, mastering the asynchronous
                </ListItem>
              </OrderedList>
            </Text>
            <br />
            <Link
              href="https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              What is Asynchronous Javascript
            </Link>
            <Link
              href="https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2022-with-examples-4nhg"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              New JavaScript Features in ECMAScript 2022 and 2021
            </Link>
          </VStack>
        </Flex>
        {/* Fundamentals of JavaScript end */}

        {/* OOP with TypeScript start */}
        <Flex
          as={"section"}
          id="typescript"
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
            Object-Oriented Programming with TypeScript
          </Text>
          <VStack alignItems={"start"}>
            <Link
              href="https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1_1"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Chapters 1-11 of Learning TypeScript: Enhance Your Web Development
              Skills Using Type-Safe JavaScript
            </Link>
            <Link
              href="https://github.com/panaverse/learn-typescript"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Learning Repository
            </Link>
            <Link
              href="https://www.learningtypescript.com/"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              In Class Companion projects and articles for Learning TypeScript
            </Link>
            <Link
              href="https://github.com/panaverse/typescript-node-projects"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Homework Project
            </Link>
          </VStack>
        </Flex>
        {/* OOP with TypeScript end */}

        {/* TypeScript for React start */}
        <Flex
          as={"section"}
          id="react"
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
            TypeScript for React
          </Text>
          <VStack alignItems={"start"}>
            <Link
              href="https://profy.dev/article/react-typescript"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Minimal TypeScript Crash Course For React With Interactive Code
              Exercises
            </Link>
          </VStack>
          <Text
            as={"h1"}
            fontSize={["2xl", "2xl", "2xl", "3xl"]}
            fontWeight={"medium"}
            fontFamily="sans-serif"
          >
            TypeScript Quizzes
          </Text>
          <VStack alignItems={"start"}>
            <Text>
              <Icon as={InfoOutlineIcon} mx="2" mt={-1} />
              Fundamentals of TypeScript Quiz
            </Text>
            <Text>
              <Icon as={InfoOutlineIcon} mx="2" mt={-1} />
              TypeScript Professional Proficiency Quiz
            </Text>
          </VStack>
        </Flex>
        {/* TypeScript for React end */}

        {/* Git  start */}
        <Flex
          as={"section"}
          id="git"
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
            Fundamentals of Version Control with Git (Recorded Videos)
          </Text>
          <VStack alignItems={"start"}>
            <Link
              href="https://www.youtube.com/playlist?list=PLKueo-cldy_HjRnPUL4G3pWHS7FREAizF"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Version Control using Git and GitHub By Sir Zeeshan Hanif (Watch
              Recorded Videos)
            </Link>
            <Text>
              <Icon
                as={InfoOutlineIcon}
                mx="2"
                mt={-1}
                query="Tobias Günther"
              />
              Chapters 1, 2, 3, and 4 Learn Version Control with Git: A
              step-by-step course for the complete beginner by Tobias Günther
            </Text>
          </VStack>
        </Flex>
        {/* Git  end */}
      </Flex>
    </>
  );
}

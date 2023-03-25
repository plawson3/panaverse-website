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
              - Quarter II (Core)
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

        {/* W2-201 start */}
        <Flex
          as={"section"}
          id="w2201"
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
            W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Apps and
            APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform
          </Text>

          <Text>
            <Text fontSize="xl" fontWeight={"medium"} fontFamily="sans-serif">
              Course Description:
            </Text>
            <br />
            The objective of this course is to teach participants to develop
            customer-facing planet-scale Websites, Full-Stack Apps and
            templates, Dashboards, and Muti-Cloud Serverless APIs. By the end of
            the quarter, the participants will be able to develop and deploy web
            platforms like Facebook, Shopify, etc. The technologies covered in
            this course will include Next.js 13, Figma, Tailwind CSS, Chakra UI,
            tRPC, QraphQL, Prisma, Cockroachdb Serverless (PostgreSQL
            Compatible), AWS Serverless Technologies, and Cloud Development Kit
            for Terraform (CDKTF).
          </Text>
        </Flex>
        {/* W2-201 end */}

        {/* Next.js 13 Web Development start */}
        <Flex
          as={"section"}
          id="web-dev"
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
            Next.js 13 Web Development
          </Text>

          <VStack alignItems={"start"}>
            <Link
              href="https://beta.nextjs.org/docs"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Next 13 Official Documentation
            </Link>
            <Link
              href="https://beta.reactjs.org/learn"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Latest Learn React Official Website
            </Link>
            <Link
              href="https://github.com/panaverse/learn-nextjs"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Learn Next.js 13 Learning Repo
            </Link>
          </VStack>
        </Flex>
        {/* Next.js 13 Web Development end */}

        {/* Next.js 13 using Chakra UI (Remote Zoom Class) start */}
        <Flex
          as={"section"}
          id="chakra-ui"
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
            Next.js 13 using Chakra UI (Remote Zoom Class)
          </Text>

          <VStack alignItems={"start"}>
            <Link
              href="https://chakra-ui.com/getting-started"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Chakra UI Docs
            </Link>
            <Link
              href="https://www.freecodecamp.org/news/css-flexbox-complete-guide/"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              CSS Flexbox Explained – Complete Guide to Flexible Containers and
              Flex Items
            </Link>
          </VStack>
        </Flex>
        {/* Next.js 13 using Chakra UI (Remote Zoom Class) end */}

        {/* UI/UX Design with Figma, TailwindCSS, and Chakra UI (Remote Zoom Class) start */}
        <Flex
          as={"section"}
          id="uiux-figma"
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
            UI/UX Design with Figma, TailwindCSS, and Chakra UI (Remote Zoom
            Class)
          </Text>

          <VStack alignItems={"start"}>
            <Link
              href="https://www.amazon.com/Designing-Prototyping-Interfaces-Figma-interactive/dp/180056418X/ref=sr_1_1_sspa"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Designing and Prototyping Interfaces with Figma: Learn essential
              UX/UI design principles by creating interactive prototypes for
              mobile, tablet, and desktop by Fabio Staiano
            </Link>
            <Link
              href="https://www.figma.com/community/file/768809027799962739"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Figma Design Kit for TailwindCSS
            </Link>
            <Link
              href="https://www.figma.com/community/file/971408767069651759"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Chakra UI Figma Kit
            </Link>
          </VStack>
        </Flex>
        {/* UI/UX Design with Figma, TailwindCSS, and Chakra UI (Remote Zoom Class) end */}

        {/* API Routes with Next.js start */}
        <Flex
          as={"section"}
          id="api-routes"
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
            API Routes with Next.js
          </Text>
          <VStack alignItems={"start"}>
            <Link
              href="https://nextjs.org/docs/api-routes/introduction"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              API Routes
            </Link>
            <Text>
              <Icon as={InfoOutlineIcon} mx="2" mt={-1} />
              APIs with Next.js and tRPC
            </Text>
            <Link
              href="https://codevoweb.com/build-a-trpc-crud-api-example-with-next-js/"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Build a tRPC CRUD API Example with Next.js
            </Link>
            <Link
              href="https://brockherion.dev/blog/posts/stop-building-rest-apis-for-your-next-apps/"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Stop building REST APIs for your Next.js apps, use tRPC instead
            </Link>
          </VStack>
        </Flex>
        {/* API Routes with Next.js end */}

        {/* SQL and Prisma start */}
        <Flex
          as={"section"}
          id="sql-prisma"
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
            SQL and Prisma
          </Text>
          <VStack alignItems={"start"}>
            <Link
              href="https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Start from scratch with relational databases Exercises
            </Link>
            <Link
              href="https://www.youtube.com/watch?v=5hzZtqCNQKk&ab_channel=Amigoscode"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              SQL For Beginners Video Tutorial
            </Link>
            <Link
              href="https://www.freecodecamp.org/news/dbms-and-sql-basics/"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Database Management Systems and SQL – Tutorial for Beginners
            </Link>
          </VStack>
          <Text
            as={"h1"}
            fontSize={["2xl", "2xl", "2xl", "3xl"]}
            fontWeight={"medium"}
            fontFamily="sans-serif"
          >
            Next.js 13 using TailwindCSS (Remote Zoom Class)
          </Text>
          <VStack alignItems={"start"}>
            <Link
              href="https://pragprog.com/titles/tailwind2/modern-css-with-tailwind-second-edition/"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Modern CSS with Tailwind, Second Edition by Noel Rappin
            </Link>
          </VStack>
        </Flex>
        {/* SQL and Prisma end */}

        {/* AWS   start */}
        <Flex
          as={"section"}
          id="aws"
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
            AWS Application Composer (Remote Zoom Class)
          </Text>
          <VStack alignItems={"start"}>
            <Link
              href="https://www.youtube.com/watch?v=BujE_tik5r8&ab_channel=GaryJennings"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              What is AWS Application Composer?
            </Link>
            <Link
              href="https://www.youtube.com/watch?v=p411uh363jQ&ab_channel=GaryJennings"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Event-driven apps with AWS Application Composer
            </Link>
            <Link
              href="https://aws.amazon.com/application-composer/"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Visually design and build serverless applications quickly
            </Link>
            <Text>
              <Icon
                as={InfoOutlineIcon}
                mx="2"
                mt={-1}
                query="Tobias Günther"
              />
              Must Have: Create Free AWS Account
            </Text>
            <Link
              href="https://aws.amazon.com/free/"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              AWS Free Tier
            </Link>
            <Text>
              Note: For AWS Free Tier you will need a credit or debit card. The
              easiest way for Pakistani students is to open a bank account with
              Meezan Bank. Open a Meezan Aasan Account if you have no earning
              proof. Meezan Bank will charge Rs. 1100 for ATM Debit Card and
              there is a requirement of Rs. 100 minimum deposit. The card will
              be delivered in a few weeks. Our students have reported that this
              Debit card works with AWS.
            </Text>
            <Text>
              Now you can create a virtual VISA Debit card through the NayaPay
              app (https://www.nayapay.com/ ) which can be used to create
              AWS/GCP/Azure accounts. This is good news for those students who
              find it difficult to create physical debit and credit cards from
              banks.
            </Text>
            <Link
              href="https://pages.awscloud.com/adoptf90d_GLOBAL_POC-credits.html"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              You can also get a $300 credit
            </Link>
          </VStack>
        </Flex>
        {/* AWS   end */}

        {/* GraphQL    start */}
        <Flex
          as={"section"}
          id="multi-cloud-graphql"
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
            Multi-Cloud GraphQL Serverless API Development with Cloud
            Development Kit for Terraform (CDKTF) (Remote Zoom Class)
          </Text>
          <VStack alignItems={"start"}>
            <Link
              href="https://github.com/panaverse/learn-multicloud-api-development"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Learn Multicloud Serverless API Development using CDK Terraform in
              Baby Steps
            </Link>
            <Text fontWeight={"bold"} fontFamily="sans-serif">
              <Icon
                as={InfoOutlineIcon}
                mx="2"
                mt={-1}
                query="Tobias Günther"
              />
              Web 2.0 Projects
            </Text>
            <Link
              href="https://github.com/panaverse/nextjs-projects"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Next.js Projects
            </Link>
            <Link
              href="https://github.com/panaverse/styling-nextjs-projects"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Styling Next.js Projects using TailwindCSS and Chakra UI
            </Link>
            <Link
              href="https://github.com/ogzhanolguncu/min-todo"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Todo Full-Stack App
            </Link>
            <Link
              href="https://www.youtube.com/watch?v=nzJsYJPCc80&ab_channel=TomDoesTech"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Build a Twitter Clone
            </Link>
          </VStack>
        </Flex>
        {/* GraphQL    end */}

        {/* Jamstack Templates start */}
        <Flex
          as={"section"}
          id="jamstack"
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
            Earn While You Learn Projects
          </Text>
          <Divider orientation="horizontal" />
          <Text>
            <Text fontSize="xl" fontWeight={"medium"} fontFamily="sans-serif">
              Build Full-Stack Next.js 13 Jamstack Templates
            </Text>
            <br />
            You will be assigned to build a template which we will sell on Theme
            Forest and Panaverse DAO marketplace. The Panaverse DAO will receive
            25% share on the sale of the template which will be used to manage
            the platform. An additional 15% will be spent on marketing the
            template. 60% of the revenues will be distributed to the developer
            through the Panaverse DAO in the form of Panaverse tokens.
          </Text>
          <Link
            href="https://github.com/panaverse/panaverse-template-standard"
            target={"_blank"}
            color={"blue.600"}
          >
            <Icon as={LinkIcon} mx="2" mt={-1} />
            The Panaverse Full-Stack Template Standard
          </Link>
        </Flex>
        {/* Jamstack Templates end */}

        {/* QraphQL APIs start */}
        <Flex
          as={"section"}
          id="qraphql-api"
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
            Build QraphQL APIs
          </Text>
          <Text>
            You will be assigned to build APIs for which you will sell
            subscriptions on the Panaverse DAO Marketplace. The Panaverse DAO
            will receive 25% share on the sale of the template which will be
            used to manage the platform. An additional 15% will be spent on
            marketing the template. 60% of the revenues will be distributed to
            the developer through the Panaverse DAO in the form of Panaverse
            tokens.
          </Text>
        </Flex>
        {/* QraphQL APIs end */}
      </Flex>
    </>
  );
}

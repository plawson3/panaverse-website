"use client";

import { Flex } from "@chakra-ui/react";
import Layout from "../../components/Layout";
import SideBar from "../../components/SideBar";
import Footer from "../../components/Footer";

export default function DocsLayout({ children }) {
  return (
    <Layout title="Documentation">
      <Flex
        mt={["40", "40", "28", "28"]}
        // mb={"24"}
        // gap={[24,24,24,0]}
        direction={["row", "row", "column", "column"]}
        mx={["0", "0", "1", "20"]}
      >
        <SideBar />
        <Flex
          w="auto"
          h={"auto"}
          marginLeft={["0", "0", "64", "80"]}
          zIndex="10"
        >
          {children}
        </Flex>
      </Flex>
      <Footer />
    </Layout>
  );
}

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
            Web 3 and Metaverse Specialization
          </Text>
          <HStack justify={"space-between"}>
            <Text
              as={"h1"}
              fontSize={["xl", "xl", "xl", "2xl"]}
              fontWeight={"medium"}
              fontFamily="sans-serif"
            >
              - Quarter III Web3 and Metaverse
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

        {/* W3-351 start */}
        <Flex
          as={"section"}
          id="w3351"
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
            W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps
          </Text>

          <Text>
            <Text fontSize="xl" fontWeight={"medium"} fontFamily="sans-serif">
              Course Description:
            </Text>
            <br />
            In this course you will learn how to develop Web 3.0 DApps, create a
            project, deploy it in production, write smart contracts, unit test
            them, and create user interfaces for them. We will also learn to
            develop ERC-20 and NFT tokens, DAOs, Oracles, etc. Please note that
            in order to develop Web 3 applications you also need to build on top
            of Web 2.0 technologies which we have already covered in the
            previous quarters.
          </Text>
          <Link
            href="https://javascript.plainenglish.io/why-you-should-learn-web-2-0-before-getting-into-web-3-0-d251625990db"
            target={"_blank"}
            color={"blue.600"}
          >
            <Icon as={LinkIcon} mx="2" mt={-1} />
            The reasons for learning Web 2 before Web 3
          </Link>
        </Flex>
        {/* W3-351 end */}

        {/* Blockchain and Metaverse Theory start */}
        <Flex
          as={"section"}
          id="blockchain"
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
            Blockchain and Metaverse Theory
          </Text>

          <VStack alignItems={"start"}>
            <Link
              href="https://www.amazon.com/Metaverse-How-Will-Revolutionize-Everything/dp/1324092033/ref=tmm_hrd_swatch_0"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              The Metaverse: And How It Will Revolutionize Everything by Matthew
              Ball
            </Link>
            <Link
              href="https://www.packtpub.com/product/mastering-blockchain-fourth-edition/9781803241067"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Mastering Blockchain - Fourth Edition by Imran Bashir
            </Link>
          </VStack>
        </Flex>
        {/* Blockchain and Metaverse Theory end */}

        {/* Solidity and Dapp start */}
        <Flex
          as={"section"}
          id="solidity"
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
            Smart Contract Development in Solidity
          </Text>

          <VStack alignItems={"start"}>
            <Link
              href="https://www.packtpub.com/product/solidity-programming-essentials-second-edition/9781803231181"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Solidity Programming Essentials - Second Edition By Ritesh Modi
            </Link>
            <Link
              href="https://github.com/panaverse/defi-dapps-solidity-smart-contracts"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Solidity Learning Repo
            </Link>
          </VStack>
          <Divider />
          <Text
            as={"h1"}
            fontSize={["2xl", "2xl", "2xl", "3xl"]}
            fontWeight={"medium"}
            fontFamily="sans-serif"
          >
            Dapp Development using Ethers.js and Next.js 13
          </Text>

          <VStack alignItems={"start"}>
            <Link
              href="https://github.com/panaverse/dapps-nextjs"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Dapp Learning Repo
            </Link>
          </VStack>
        </Flex>
        {/* Solidity and Dapp end */}

        {/* Tokennomics  start */}
        <Flex
          as={"section"}
          id="tokennomics"
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
            Tokennomics
          </Text>
          <VStack alignItems={"start"}>
            <Text>
              <Text fontSize="xl" fontWeight={"medium"} fontFamily="sans-serif">
                Blockchain Project: Create a Token and Launch ICO/IEO/IDO
              </Text>
              As you probably know, the ICO (“Initial Coin Offering”) industry
              has been booming, and it’s completely reinventing the way new
              startups kickstart themselves. In fact, have a look at Wikipedia’s
              list of highest crowdfunding projects
              <Link
                href="https://en.wikipedia.org/wiki/List_of_highest-funded_crowdfunding_projects"
                target={"_blank"}
                color={"blue.600"}
              >
                <Icon as={LinkIcon} mx="2" mt={-1} />
              </Link>
              and you’ll notice that blockchain projects absolutely dominate the
              list.
            </Text>
            <Link
              href="https://en.wikipedia.org/wiki/List_of_highest-funded_crowdfunding_projects"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Understand the difference between IDO vs. IEO vs. ICO
            </Link>
          </VStack>
          <VStack alignItems={"start"}>
            <Text fontSize="xl" fontWeight={"medium"} fontFamily="sans-serif">
              Also check these links for latest listings:
            </Text>
            <Link
              href="https://icodrops.com"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              ICO list at ICO Drops
            </Link>
            <Link
              href="https://topicolist.com/"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              ICO List of Best New Initial Coin Offerings
            </Link>
            <Link
              href="https://cryptototem.com/ico-list/"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Top-Rated Crypto Token Sales: List of New ICOs, STOs, IEOs and
              IDOsTop-Rated Crypto Token Sales: List of New ICOs, STOs, IEOs and
              IDOs
            </Link>
            <Link
              href="https://www.icolistingonline.com"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              ICO List Online
            </Link>
            <Link
              href="https://coincodex.com/ieo-list/binance/"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Binance IEO List
            </Link>
            <Link
              href="https://www.coinspeaker.com/ieo/platform/binance-launchpad/"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Binance Launchpad
            </Link>
            <Link
              href="https://icomarks.com/ieo"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              IEO List
            </Link>
            <Link
              href="https://polkastarter.com"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Polkastarter
            </Link>
          </VStack>
          <VStack alignItems={"start"}>
            <Text fontSize="xl" fontWeight={"medium"} fontFamily="sans-serif">
              Project Part 1: How to Launch a IEO on Binance Launchpad
            </Text>
            <Link
              href="https://appinventiv.com/blog/how-to-launch-an-ieo/"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Read How to Launch an IEO
            </Link>
            <Link
              href="https://www.binance.com/en/support/faq/94ed108ce89d44ab8602aa3c476dfb04"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Your first task of the project is to make a google slides
              presentation on how to start a IEO on the Binance Launch Pad
            </Link>
            <Text>
              <Icon as={InfoOutlineIcon} mx="2" mt={-1} />
              Note: Also document the alternatives to Binance Launchpad.
            </Text>
          </VStack>
          <VStack alignItems={"start"}>
            <Text fontSize="xl" fontWeight={"medium"} fontFamily="sans-serif">
              Project Part 2: How to Launch a IDO on Polkastarter
            </Text>
            <Link
              href="https://cryptorank.io/fundraising-platforms"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Review the list of top fundraising platforms
            </Link>
            <Link
              href="https://polkastarter.com/"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Your second task of the project is to make a google slides
              presentation on how to start a IDO on the Polkastarter
            </Link>
          </VStack>
          <Flex direction="column" alignItems={"start"} gap="2">
            <Text fontSize="xl" fontWeight={"medium"} fontFamily="sans-serif">
              Project Part 3: Create a Pako Token
            </Text>
            <UnorderedList alignItems={"start"} ml="5">
              <ListItem>
                {/* <Icon as={InfoOutlineIcon} mx="2" mt={-1} /> */}
                By creating a token and related contracts, you’ll also learn how
                to handle money sent to your contracts, which should come in
                handy if you want to create some kind of paid decentralized
                service in the future.
              </ListItem>
              <ListItem>
                {/* <Icon as={InfoOutlineIcon} mx="2" mt={-1} /> */}
                Therefore, for the sake of this chapter, let’s imagine that our
                Pako DApp uses its own coin – the Pako Token. We will create two
                contracts – one for the token itself and one for the token crowd
                sale (the ICO).
              </ListItem>
              <ListItem>
                {/* <Icon as={InfoOutlineIcon} mx="2" mt={-1} /> */}
                Now Create your own Pako ERC20 Token and deploy it on a testnet.
                The Token should be to use OpenZeppelin contracts. You will use
                the Hardhat development environment. Also, write at least twenty
                automated tests. We will be using Solidity and Typescript for
                development.
              </ListItem>
            </UnorderedList>
          </Flex>
          <Flex direction="column" alignItems={"start"} gap="2">
            <Text fontSize="xl" fontWeight={"medium"} fontFamily="sans-serif">
              Project Part 4: Develop Crowd Sale Contract
            </Text>
            <UnorderedList alignItems={"start"} ml="5">
              <ListItem>
                {/* <Icon as={InfoOutlineIcon} mx="2" mt={-1} /> */}
                This contract will be responsible for allowing users to exchange
                ETH for our Pako Token. In order to do that we need to set a
                price for our token (1 ETH = 100 Pako Token)
              </ListItem>
              <ListItem>Implement a payable buyToken() function. </ListItem>
              <ListItem>
                Emit a BuyTokens event that will log who’s the buyer, the amount
                of ETH sent and the amount of Token bought
              </ListItem>
              <ListItem>
                Transfer 75% of the Tokens to the Crowd Sale contract at
                deployment time. i.e. Right after the contract is deployed, we
                want the token contract to send 75% of our token supply to it.
                While 25% remain in our personal “owner” account.
              </ListItem>
              <ListItem>
                Transfer the ownership of the Crowd Sale contract (at deploy
                time) to our frontend address so that we are able to withdraw
                the ETH.
              </ListItem>
              <ListItem>
                You can use the openzeppelin crowd sale contracts
                <Link
                  href="https://docs.openzeppelin.com/contracts/4.x/crowdsales"
                  target={"_blank"}
                  color={"blue.600"}
                >
                  <Icon as={LinkIcon} mx="2" mt={-1} />
                </Link>
                however you will have to update the code to the latest solidity
                version.
              </ListItem>
              <ListItem>
                Also write extensive tests, for example we will simply send a
                transaction of 1 ETH from a random account to the contract.
                After the transaction, we should expect the account to have
                received Pako, while the contract’s balance should have been
                reduced.
              </ListItem>
              <ListItem>
                Note: Before you get started writing the token contract we
                suggest you review access control
                <Link
                  href="https://docs.openzeppelin.com/contracts/4.x/access-control"
                  target={"_blank"}
                  color={"blue.600"}
                >
                  <Icon as={LinkIcon} mx="2" mt={-1} />
                </Link>
              </ListItem>
            </UnorderedList>
          </Flex>
          <Flex direction="column" alignItems={"start"} gap="2">
            <Text fontSize="xl" fontWeight={"medium"} fontFamily="sans-serif">
              Project Part 5: Trying it with MetaMask
            </Text>
            <UnorderedList alignItems={"start"} ml="5">
              <ListItem>
                While it’s always good to test your code, it’s often more
                satisfying to see the results of your work wrapped in a nice UI.
                Let’s see how we can deploy our contracts and get some Pako
                tokens into our MetaMask wallet!
              </ListItem>
              <ListItem>
                We start by running our deployment scripts for the test network
                so that the new token contracts are uploaded and deployed.
              </ListItem>
              <ListItem>
                When it’s done, take note of what addresses the contracts were
                uploaded to and copy it!
              </ListItem>
              <ListItem>
                Now head to MetaMask, and send a transaction of 1 ETH to the
                crowd sale contract address. If your MetaMask wallet doesn’t
                have any ethers, remember that you can use any faucet.
              </ListItem>
              <ListItem>
                After the transaction has been confirmed, you might be confused
                about why you can’t see any tokens in your wallet. It turns out
                that you need to manually add the token address in MetaMask in
                order to “register” it – after all, there are so many tokens out
                there, there’s no way MetaMask could list them all by default!
              </ListItem>
              <ListItem>
                To do this, open the side menu and click on the “Add token”
                button to get started:
              </ListItem>
              <ListItem>
                Once you’re on the token page, click on “Add custom token” and
                paste in the token contract’s address in the address field.
              </ListItem>
              <ListItem>
                After confirming that you want to add the token, you should be
                able to see your Pako balance right next to your ETH balance in
                the wallet. How cool!
              </ListItem>
            </UnorderedList>
          </Flex>
          <VStack alignItems={"start"}>
            <Text fontSize="xl" fontWeight={"medium"} fontFamily="sans-serif">
              Project Part 6: Trying it with Multisignature Wallets
            </Text>
            <Link
              href="https://www.coindesk.com/tech/2020/11/10/multisignature-wallets-can-keep-your-coins-safer-if-you-use-them-right/"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Read Multi Signature Wallets can keep your Coins Safer
            </Link>
            <Link
              href="https://gnosis-safe.io/"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Now use Gnosis Safe with multi-sigs to do what you did in the last
              part.
            </Link>
          </VStack>
          <VStack alignItems={"start"}>
            <Text fontSize="xl" fontWeight={"medium"} fontFamily="sans-serif">
              Project Part 7: Sending Tokens using Ethers.js
            </Text>
            <Text>
              <Icon as={InfoOutlineIcon} mx="2" mt={-1} />
              Write a Typescript program to send Pako Token to some friend’s
              address using Ethers.js.
            </Text>
            <Link
              href="https://www.coindesk.com/tech/2020/11/10/multisignature-wallets-can-keep-your-coins-safer-if-you-use-them-right/"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Tutorial
            </Link>
          </VStack>
          <VStack alignItems={"start"}>
            <Text fontSize="xl" fontWeight={"medium"} fontFamily="sans-serif">
              Project Part 8 Advance: Create, Deploy, Mint, and Sell a NFT
            </Text>
            <Link
              href="https://ethereum.org/en/developers/tutorials/how-to-write-and-deploy-an-nft/"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Read this NFT tutorial series
            </Link>
            <Link
              href="https://docs.openzeppelin.com/contracts/4.x/erc721"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Create a NFT contract using the OpenZepplen ERC721 NFT Standard
            </Link>
            <Link
              href="https://docs.openzeppelin.com/contracts/4.x/erc721#Presets"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              You may use the Preset ERC721 contract
            </Link>
            <Link
              href="https://opensea.io/ "
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Deploy your NFT contract on a testnet, mint it, and view it on the
              MetaMask wallet and list it on OpenSea Marketplace for sale.
            </Link>
            <Link
              href="https://ethereum.org/en/developers/tutorials/how-to-implement-an-erc721-market/"
              target={"_blank"}
              color={"blue.600"}
            >
              <Icon as={LinkIcon} mx="2" mt={-1} />
              Implement a ERC721 Market
            </Link>
          </VStack>
        </Flex>
        {/* Tokennomics  end */}
      </Flex>
    </>
  );
}

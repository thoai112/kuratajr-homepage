import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Coin Of the World">
    <Container>
      <Title>
        Coin Of the World (COW) <Badge>2026</Badge>
      </Title>
      <P>
        Coin Of the World (COW) is a next-generation stablecoin designed to be a global utility currency. Unlike traditional stablecoins pegged to a single fiat currency, COW&apos;s value is derived from the average value of 155 popular fiat currencies in circulation globally.
      </P>
      <P>
        By utilizing the Principle of Average, COW aims to resist financial manipulation by institutions or governments, providing a neutral, fair, and transparent monetary system that brings financial autonomy to individuals worldwide without borders.
      </P>

      <Heading as="h4" fontSize={16} my={3}>
        <Badge colorScheme="blue">Core Features</Badge>
      </Heading>
      <List ml={4} my={2}>
        <ListItem>• Principle of Average value calculation across 155 fiat currencies</ListItem>
        <ListItem>• Resistant to single-currency inflation and manipulation</ListItem>
        <ListItem>• Decentralized and borderless transaction utility</ListItem>
        <ListItem>• Global equality and financial autonomy for all users</ListItem>
        <ListItem>• Real-time transparency of the 155-currency base unit calculation</ListItem>
      </List>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://coinofworld.com" target="_blank">
            https://coinofworld.com <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web / Wallet App</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Web3, Blockchain, Fintech Infrastructure</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/coin_of_world_01.png" alt="COW Wallet" />
      <WorkImage src="/images/works/coin_of_world_02.png" alt="COW Value Analysis" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

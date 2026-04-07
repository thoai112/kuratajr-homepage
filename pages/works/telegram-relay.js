import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Telegram Relay">
    <Container>
      <Title>
        Telegram Relay <Badge>2024</Badge>
      </Title>
      <P>
        Telegram Relay is a powerful bridging service designed to connect WordPress sites directly with the Telegram ecosystem. It enables real-time synchronization and notification relaying from your web platform to individual users or groups.
      </P>
      <P>
        Whether it's for e-commerce order alerts, security notifications, or content updates, this project provides a robust API and webhook system to ensure your messages reach your Telegram audience instantly and reliably.
      </P>

      <Heading as="h4" fontSize={16} my={3}>
        <Badge colorScheme="green">Key Features</Badge>
      </Heading>
      <List ml={4} my={2}>
        <ListItem>• Real-time notification relaying from WordPress hooks</ListItem>
        <ListItem>• Secure API authentication for external integrations</ListItem>
        <ListItem>• Support for rich formatting, bot commands, and media uploads</ListItem>
        <ListItem>• Easy-to-configure webhooks for custom event triggers</ListItem>
        <ListItem>• Message queueing system to handle high traffic volumes</ListItem>
      </List>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/thoai112/telegram-relay" target="_blank">
            https://github.com/thoai112/telegram-relay <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web / Node.js Engine</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Node.js, Telegram Bot API, Express, WordPress API</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

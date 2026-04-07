import {
  Container,
  Badge,
  Link,
  List,
  ListItem
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
        A relay API service built for WordPress to handle notifications and communications seamlessly via Telegram.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/thoai112/telegram-relay">
            https://github.com/thoai112/telegram-relay <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web, PHP, WordPress</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Node.JS, Telegram API, WordPress Hooks</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

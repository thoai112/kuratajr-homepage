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
  <Layout title="XTPro">
    <Container>
      <Title>
        XTPro <Badge>2024</Badge>
      </Title>
      <P>
        XTPro is a high-performance, lightweight tunneling solution designed for developers and power users who need to expose local development environments or private services to the public internet securely.
      </P>
      <P>
        Engineered for speed and reliability, XTPro supports a wide range of protocols including TCP, UDP, and HTTP/HTTPS, making it ideal for everything from web development and testing to hosting game servers or remote access to internal tools.
      </P>

      <Heading as="h4" fontSize={16} my={3}>
        <Badge colorScheme="blue">Key Features</Badge>
      </Heading>
      <List ml={4} my={2}>
        <ListItem>• Multi-protocol support (TCP/UDP/HTTP/HTTPS)</ListItem>
        <ListItem>• Built-in end-to-end encryption for secure data transfer</ListItem>
        <ListItem>• High-performance architecture with minimal latency</ListItem>
        <ListItem>• Easy-to-use CLI and flexible configuration options</ListItem>
        <ListItem>• Custom subdomains and persistent public endpoints</ListItem>
      </List>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/thoai112/proxvn" target="_blank">
            https://github.com/thoai112/proxvn <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows / macOS / Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Go (Golang), Networking Stack, Cryptography</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/xtpro_01.png" alt="XTPro CLI" />
      <WorkImage src="/images/works/xtpro_02.png" alt="XTPro Dashboard" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

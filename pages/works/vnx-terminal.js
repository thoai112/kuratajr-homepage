import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="VNX Terminal">
    <Container>
      <Title>
        VNX Terminal <Badge>2023</Badge>
      </Title>
      <P>
        VNX Terminal is a powerful, lightweight, and modern web-based terminal emulator designed for developers who need a quick and accessible command-line interface on the web. It provides a familiar interactive terminal environment with high performance and low latency.
      </P>
      <P>
        Built using the latest web technologies including React and Vite, it is optimized for speed and efficiency. The project is designed to be easily deployable via Cloudflare Workers, making it a robust serverless utility for various web-based automation and remote management tasks.
      </P>

      <Heading as="h4" fontSize={16} my={3}>
        <Badge colorScheme="cyan">Key Features</Badge>
      </Heading>
      <List ml={4} my={2}>
        <ListItem>• Responsive and professional terminal UI built with React</ListItem>
        <ListItem>• Lightning-fast development and build process powered by Vite</ListItem>
        <ListItem>• Fully written in TypeScript for enhanced reliability and maintenance</ListItem>
        <ListItem>• Serverless deployment capability using Cloudflare Workers</ListItem>
        <ListItem>• Customizable command sets and interactive feedback</ListItem>
        <ListItem>• Dark mode optimized for long-duration technical tasks</ListItem>
      </List>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://vnx-terminal.huongmya53.workers.dev/" target="_blank">
            https://vnx-terminal.huongmya53.workers.dev/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/kuratajr/vnx-terminal" target="_blank">
            https://github.com/kuratajr/vnx-terminal <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web Browser / Cloudflare Workers</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>TypeScript, React, Vite, Cloudflare Workers</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/vnx_terminal_eyecatch.png" alt="VNX Terminal Interface" />
      <WorkImage src="/images/works/vnx_terminal_01.png" alt="VNX Terminal Usage" />
      <WorkImage src="/images/works/vnx_terminal_02.png" alt="VNX Terminal Features" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

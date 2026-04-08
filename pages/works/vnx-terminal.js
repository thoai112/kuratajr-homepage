import {
  Container,
  Badge,
  Link,
  List,
  ListItem
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
        A modern web-based terminal interface built with React, Vite, and TypeScript.
        VNX Terminal provides a sleek and interactive command-line experience directly within the browser.
      </P>

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
          <span>Web Browser</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>TypeScript, React, Vite</span>
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

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
  <Layout title="Nezha Monitoring">
    <Container>
      <Title>
        Nezha Monitoring <Badge>2023-</Badge>
      </Title>
      <P>
        An enhanced version of the popular Nezha Monitoring tool, designed for comprehensive server and website observability. This project extends the original open-source core with specialized features for better resource management and real-time alerting.
      </P>
      <P>
        Nezha provides a lightweight, self-hostable dashboard that monitors system performance (CPU, RAM, Disk, Network) across distributed clusters. It supports multiple notification protocols including Telegram, Discord, and Webhooks, ensuring administrators are immediately notified of any service disruptions.
      </P>

      <Heading as="h4" fontSize={16} my={3}>
        <Badge colorScheme="cyan">Advanced Features</Badge>
      </Heading>
      <List ml={4} my={2}>
        <ListItem>• Real-time system status monitoring for unlimited server nodes</ListItem>
        <ListItem>• Website availability tracking (HTTP, TCP, Ping, SSL expiration)</ListItem>
        <ListItem>• Integrated Web Terminal for secure remote O&M directly from the browser</ListItem>
        <ListItem>• Custom notification rules with multi-channel alerting support</ListItem>
        <ListItem>• Automated scheduled tasks and batch script execution</ListItem>
        <ListItem>• Optimized agent performance for low-resource environments</ListItem>
      </List>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/kuratajr/nezha" target="_blank">
            https://github.com/kuratajr/nezha <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Linux / Windows / macOS / Docker</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Go, TypeScript, React, Shell</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/nezha_eyecatch.png" alt="Nezha Monitoring Dashboard" />
      <WorkImage src="/images/works/nezha_01.png" alt="Server node statistics and health metrics" />
      <WorkImage src="/images/works/nezha_02.png" alt="Integrated web terminal and task management" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

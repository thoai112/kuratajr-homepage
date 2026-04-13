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
  <Layout title="Stream Logs">
    <Container>
      <Title>
        Stream Logs <Badge>2023</Badge>
      </Title>
      <P>
        Stream Logs is an advanced infrastructure monitoring and log streaming platform designed to handle real-time data from distributed systems. It provides a robust pipeline for collecting, filtering, and routing logs to centralized storage and alerting systems.
      </P>
      <P>
        Built with heavy emphasis on Infrastructure as Code (IaC) and automation, the project leverages Terraform for cloud provisioning, Ansible for node configuration, and custom Python scripts for high-performance log processing and intelligent alerting.
      </P>

      <Heading as="h4" fontSize={16} my={3}>
        <Badge colorScheme="cyan">Key Features</Badge>
      </Heading>
      <List ml={4} my={2}>
        <ListItem>• Real-time, low-latency log collection and streaming</ListItem>
        <ListItem>• Automated cloud infrastructure provisioning via Terraform (HCL)</ListItem>
        <ListItem>• Multi-node configuration management with Ansible Playbooks</ListItem>
        <ListItem>• Intelligent alerting system built with Python-based logic</ListItem>
        <ListItem>• Scalable architecture designed for high-throughput distributed logging</ListItem>
      </List>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/thoai112/stream-logs" target="_blank">
            https://github.com/thoai112/stream-logs <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Cloud Infrastructure / Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Terraform (HCL), Ansible, Python, AWS/Cloud</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/stream_logs_eyecatch.png" alt="Stream Logs Visualization" />
      <WorkImage src="/images/works/stream_logs_01.png" alt="Real-time log monitoring dashboard" />
      <WorkImage src="/images/works/stream_logs_02.png" alt="Infrastructure as Code configuration" />
      <WorkImage src="/images/works/stream_logs_03.png" alt="Intelligent alerting system interface" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

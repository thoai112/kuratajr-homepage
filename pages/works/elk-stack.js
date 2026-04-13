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
  <Layout title="ELK Stack">
    <Container>
      <Title>
        ELK Stack Logging Infrastructure <Badge>2024</Badge>
      </Title>
      <P>
        A professional-grade centralized logging and monitoring system built using the ELK Stack (Elasticsearch, Logstash, Kibana). This project demonstrates an automated infrastructure for aggregating, analyzing, and visualizing logs from multiple application servers in real-time.
      </P>
      <P>
        The infrastructure is orchestrated using Docker Swarm across distributed EC2 instances, with automated resource provisioning via CloudFormation. It features a robust data pipeline where Filebeat shippers forward logs to a centralized Logstash ingestion service, which then processes and indexes the data into Elasticsearch for powerful searching and Kibana dashboarding.
      </P>

      <Heading as="h4" fontSize={16} my={3}>
        <Badge colorScheme="blue">Infrastructure Components</Badge>
      </Heading>
      <List ml={4} my={2}>
        <ListItem>• Elasticsearch: Distributed search and analytics engine for log data</ListItem>
        <ListItem>• Logstash: Data processing pipeline for ingesting logs from multiple sources</ListItem>
        <ListItem>• Kibana: Visualization platform for creating real-time dashboards</ListItem>
        <ListItem>• Filebeat: Lightweight shipper for forwarding logs from edge servers</ListItem>
        <ListItem>• Docker Swarm & CloudFormation: Scalable orchestration and automated IaC</ListItem>
      </List>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/thoai112/elkstack" target="_blank">
            https://github.com/thoai112/elkstack <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>AWS (EC2), Docker Swarm, Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ELK Stack, CloudFormation, Docker, Shell Scripting</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/elk_stack_01.png" alt="Kibana Dashboard" />
      <WorkImage src="/images/works/elk_stack_02.png" alt="Infrastructure Architecture" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

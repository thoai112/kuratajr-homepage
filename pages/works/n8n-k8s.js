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
  <Layout title="n8n-k8s">
    <Container>
      <Title>
        n8n-k8s <Badge>2023</Badge>
      </Title>
      <P>
        n8n-k8s is a production-grade deployment architecture for the n8n workflow automation platform on Kubernetes. It transforms n8n from a single-server tool into a highly scalable, distributed enterprise system.
      </P>
      <P>
        Designed for reliability, this setup allows for horizontal scaling of worker nodes, enabling the processing of thousands of complex workflows simultaneously while ensuring high availability through Kubernetes native features.
      </P>

      <Heading as="h4" fontSize={16} my={3}>
        <Badge colorScheme="orange">Key Features</Badge>
      </Heading>
      <List ml={4} my={2}>
        <ListItem>• Scalable worker architecture for heavy workflow processing</ListItem>
        <ListItem>• High availability with distributed execution nodes</ListItem>
        <ListItem>• Automated backups and persistent storage management</ListItem>
        <ListItem>• Resource isolation and limits specifically tuned for n8n workers</ListItem>
        <ListItem>• Comprehensive monitoring of workflow queues and healthy checks</ListItem>
      </List>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/thoai112/n8n-k8s" target="_blank">
            https://github.com/thoai112/n8n-k8s <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Kubernetes (K8s)</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>n8n, Docker, Kubernetes, PostgreSQL, Redis</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/n8n_k8s_01.png" alt="n8n-k8s Canvas" />
      <WorkImage src="/images/works/n8n_k8s_02.png" alt="n8n-k8s Workers" />
      <WorkImage src="/images/works/n8n_k8s_03.png" alt="n8n-k8s Flow" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

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
  <Layout title="n8n-k8s">
    <Container>
      <Title>
        n8n-k8s <Badge>2023</Badge>
      </Title>
      <P>
        Deployment and automation of n8n workflows on a Kubernetes cluster, enabling scalable and reliable business automation.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/thoai112/n8n-k8s">
            https://github.com/thoai112/n8n-k8s <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Kubernetes</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>n8n, Docker, Kubernetes, DevOps</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

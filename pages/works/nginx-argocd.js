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
  <Layout title="Nginx ArgoCD">
    <Container>
      <Title>
        Nginx ArgoCD <Badge>2023</Badge>
      </Title>
      <P>
        Nginx ArgoCD is a GitOps-based infrastructure management system for Kubernetes Ingress. It automates the lifecycle of Nginx Controllers, from initial deployment to complex traffic routing configurations.
      </P>
      <P>
        By leveraging ArgoCD, this project ensures that your ingress configurations are always in sync with your Git repository, providing a declarative, version-controlled approach to network management in production clusters.
      </P>

      <Heading as="h4" fontSize={16} my={3}>
        <Badge colorScheme="purple">Key Features</Badge>
      </Heading>
      <List ml={4} my={2}>
        <ListItem>• Declarative Ingress management via GitOps</ListItem>
        <ListItem>• Automated Nginx controller scaling and updates</ListItem>
        <ListItem>• Integration with cert-manager for automated SSL/TLS certificates</ListItem>
        <ListItem>• Version-controlled traffic rules and routing policies</ListItem>
        <ListItem>• Self-healing infrastructure: automatically reverts manual overrides</ListItem>
      </List>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/thoai112/nginx-argocd" target="_blank">
            https://github.com/thoai112/nginx-argocd <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Kubernetes Cluster</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Helm, ArgoCD, Nginx Ingress, YAML, Kubernetes</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

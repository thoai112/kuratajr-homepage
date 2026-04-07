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
  <Layout title="Nginx ArgoCD">
    <Container>
      <Title>
        Nginx ArgoCD <Badge>2023</Badge>
      </Title>
      <P>
        Advanced GitOps configuration for managing Nginx ingress controllers and infrastructure using ArgoCD for continuous delivery.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/thoai112/nginx-argocd">
            https://github.com/thoai112/nginx-argocd <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Kubernetes</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Helm, ArgoCD, Nginx, GitOps</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

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
  <Layout title="Argo Grafana HA">
    <Container>
      <Title>
        Argo Grafana HA <Badge>2022</Badge>
      </Title>
      <P>
        Implementation of a High Availability architecture for both ArgoCD and Grafana to ensure continuous monitoring and delivery.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/thoai112/argo-grafana-ha">
            https://github.com/thoai112/argo-grafana-ha <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Cloud Infrastructure</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ArgoCD, Grafana, High Availability, AWS/GCP</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

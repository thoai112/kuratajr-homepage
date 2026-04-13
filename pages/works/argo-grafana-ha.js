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
  <Layout title="Argo Grafana HA">
    <Container>
      <Title>
        Argo Grafana HA <Badge>2022</Badge>
      </Title>
      <P>
        Argo Grafana HA is a reference architecture for deploying Top-tier High Availability (HA) monitoring stacks using GitOps principles. It ensures that your observability platform is as resilient as the infrastructure it monitors.
      </P>
      <P>
        By utilizing shared state databases and persistent storage backends, this setup allows for zero-downtime upgrades and multi-replica Grafana deployments, all synchronized automatically via ArgoCD from a central Git repository.
      </P>

      <Heading as="h4" fontSize={16} my={3}>
        <Badge colorScheme="red">Key Features</Badge>
      </Heading>
      <List ml={4} my={2}>
        <ListItem>• Multi-replica Grafana deployment for High Availability</ListItem>
        <ListItem>• Shared database backend (PostgreSQL/MySQL) for session persistence</ListItem>
        <ListItem>• Dashboard and datasource synchronization via GitOps (ArgoCD)</ListItem>
        <ListItem>• Automated horizontal pod autoscaling based on traffic</ListItem>
        <ListItem>• Disaster recovery readiness with version-controlled state</ListItem>
      </List>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/thoai112/argo-grafana-ha" target="_blank">
            https://github.com/thoai112/argo-grafana-ha <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Kubernetes / Cloud Native</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ArgoCD, Grafana, PostgreSQL, PersistentVolumes</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/argo_grafana_ha_01.png" alt="Argo Grafana HA Dashboard" />
      <WorkImage src="/images/works/argo_grafana_ha_02.png" alt="Argo Grafana HA Sync" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

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
  <Layout title="VPS METAlink">
    <Container>
      <Title>
        VPS METAlink <Badge>2024</Badge>
      </Title>
      <P>
        VPS METAlink is a high-performance orchestration and monitoring system for VPS clusters, built on Cloudflare Workers and KV Storage. It provides a centralized, premium interface to manage node configurations, shell templates, and real-time health monitoring.
      </P>
      <P>
        The system features a sophisticated dashboard that tracks total nodes, active groups, and KV entries at a glance. It offers direct management tools for IP addresses, Cloud-init metadata, and global security settings, all wrapped in a modern, dark-themed Glassmorphism UI.
      </P>

      <Heading as="h4" fontSize={16} my={3}>
        <Badge colorScheme="cyan">Key Features</Badge>
      </Heading>
      <List ml={4} my={2}>
        <ListItem>• **Inventory & Registry:** Centralized node management and tracking</ListItem>
        <ListItem>• **Group Mappings:** Hierarchical organization of VPS instances</ListItem>
        <ListItem>• **Shell Templates:** Reusable initialization and setup scripts</ListItem>
        <ListItem>• **KV Configs:** Real-time JSON editing via Cloudflare KV</ListItem>
        <ListItem>• **IP & Cloud-init Management:** Automated provisioning and tracking</ListItem>
        <ListItem>• **Action Control:** Proxy-based Start, Shutdown, and Destroy functions</ListItem>
      </List>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/kuratajr/meta" target="_blank">
            https://github.com/kuratajr/meta <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Cloudflare Workers / VPS Nodes</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>TypeScript, JavaScript, Cloudflare KV, GitHub (Static Configs)</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/meta_eyecatch.png" alt="VPS METAlink Dashboard" />
      <WorkImage src="/images/works/meta_01.png" alt="Node health monitoring interface" />
      <WorkImage src="/images/works/meta_02.png" alt="Configuration management and shell templates" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

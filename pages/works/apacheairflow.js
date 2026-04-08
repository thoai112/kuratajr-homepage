import {
    Container,
    Badge,
    Link,
    List,
    ListItem
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, Meta, WorkImage } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  
  const Work = () => (
    <Layout title="ApacheAirflow">
      <Container>
        <Title>
          ApacheAirflow <Badge>2023-</Badge>
        </Title>
        <P>
          Building Business intelligence datapipeline using Apache Airflow.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.inkdrop.app/">
              https://www.inkdrop.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NodeJS, Electron, React Native</span>
          </ListItem>  
        </List>
        <WorkImage src="/images/works/apacheairflow_01.png" alt="Apache Airflow DAG" />
        <WorkImage src="/images/works/apacheairflow_02.png" alt="Apache Airflow Gantt Chart" />
        <WorkImage src="/images/works/apacheairflow_03.png" alt="Apache Airflow Dashboard" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  

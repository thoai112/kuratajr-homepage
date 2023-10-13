import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  // SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
// import { GridItem } from '../components/grid-item'
import { IoLogoLinkedin, IoLogoFacebook, IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
// import thumbYouTube from '../public/images/links/youtube.png'
// import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an indie app developer based in Vietnam!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title" fontSize={32}>
            Xuan Thoai (Kuratajr)
          </Heading>
          <p>Digital Craftsman ( Devops / Developer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/avatar.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          <p>Greetings,</p>
          <p>My name is Xuan Thoai (Kuratajr), and I am both an AWS Community Builder and a passionate DevOps Engineer with a strong
            focus on serverless architecture, Kubernetes, and CDK Typescript. Additionally, I possess expertise in
            automation using Python and Bash shell.</p>
          <p>With a deep understanding of developing and operating applications on AWS Cloud Services and
            containerization, I bring a wealth of experience in automation, CI/CD pipelines (Gitlab-CI, ArgoCD,
            Jenkins, Azure DevOps), monitoring, and security implementation. I excel in creating infrastructure as
            code using Cloud Development Toolkit (CDK) and CDK8S for Kubernetes manifests as code.</p>
          <p>Let’s approach our work with simplicity, intelligence, and a determination to drive real change and
            innovation.</p>{' '}
          
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2001</BioYear>
          Born in Phu Yen, Viet Nam.
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Completed the Master&apos;s Program in the Graduate School of
          Posts and Telecommunications Institute of Technology
          (PTIT)
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Worked at FPT (System Engineer)
        </BioSection>
        <BioSection>
          <BioYear>2023 to present</BioYear>
          Working as a freelancer
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Programming languages
        </Heading>
        <Paragraph>
          Python, Bash Shell, Typescript, Java
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Frameworks
        </Heading>
        <Paragraph>
          <ul>
            <li>AWS Cloud Development Kit (AWS CDK) - Infrastructure as code</li>
            <li>CDK8S - Generate Kubernetes manifests as code</li>
            <li>Apache Airflow - Fundamental and DAG Authoring</li>
            <li>Boto3, psycopg2, clickhouse-driver, pandas, airflow, slackbot, redis, kubernetes, pyinotify,
              lxml, kafka, flask, smtplib, threading, requests, etc.</li>
          </ul>
        </Paragraph>
      </Section>

      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          Tools
        </Heading>
        <Paragraph>
          <ul>
            <li>Kubernetes, Karpenter, Keda, Kyverno, Vcluster, Docker, Docker Compose, Vagrant, KVM,
              Virtualbox, Vault Postgresql, Redis, Cassandra, pgAdmin, pgbarman, MongoDB</li>
            <li>Argo-CD, Gitlab, Github, Gerrit, Jenkins, Ansible, Portainer, HAProxy, Nginx, Fast Reserve Proxy
              (FRP), GoAccess</li>
            <li>OpenSearch/ElasticSearch, Kibana, Fluentd, Datadog, Grafana, Monitoror, SQLPad
              Zookeper, Kafka, SorlCloud, SystemD Jira</li>
          </ul>
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music,{' '}
          <Link href="https://illust.odoruinu.net/" target="_blank">
            Drawing
          </Link>
          , Playing Drums,{' '}
          <Link href="https://500px.com/" target="_blank">
            Photography
          </Link>
          , Leica, Machine Learning
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/thoai112" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @thoai112
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/xuanthoaingo/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @XuanThoai.Ngo
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.facebook.com/thoai.ngoxuan" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoFacebook />}
              >
                @Kuratajr
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/ngothoai3" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @kuratajr
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/kuratajr" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @kuratajr
              </Button>
            </Link>
          </ListItem>
        </List>


        <Heading as="h3" variant="section-title">
          Newsletter
        </Heading>
        <p>
          Join me on a behind-the-scenes coding journey. Weekly updates on
          projects, tutorials
        </p>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="https://xuanthoai.id.vn/"
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="teal"
          >
            Sign up my newsletter here
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'

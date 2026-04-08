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
  <Layout title="Hackintosh Legion">
    <Container>
      <Title>
        Hackintosh Legion <Badge>2024</Badge>
      </Title>
      <P>
        Hackintosh Legion is a specialized OpenCore EFI configuration project designed to bring macOS to the Lenovo Legion 5 15ARH05H (AMD Ryzen 7 4800H version). It allows users to run macOS Sonoma and other versions on their gaming hardware with high stability and performance.
      </P>
      <P>
        This project focuses on optimizing the AMD Ryzen mobile platform for macOS, leveraging cutting-edge kexts like NootedRed for graphics acceleration and specialized ACPI patches for laptop-specific hardware like battery management and trackpad stability.
      </P>

      <Heading as="h4" fontSize={16} my={3}>
        <Badge colorScheme="purple">Key Features</Badge>
      </Heading>
      <List ml={4} my={2}>
        <ListItem>• High-performance macOS support on AMD Ryzen 7 4800H</ListItem>
        <ListItem>• Modern graphics acceleration via NootedRed (AMD Radeon Graphics)</ListItem>
        <ListItem>• Optimized power management and thermal control for Legion hardware</ListItem>
        <ListItem>• Full wireless and Bluetooth support via OpenIntelWireless kexts</ListItem>
        <ListItem>• Custom ACPI patches for battery, keyboard, and trackpad functionality</ListItem>
      </List>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/thoai112/Hackintosh-Legion-15ARH05H-R74800H" target="_blank">
            https://github.com/thoai112/Hackintosh-Legion... <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>PC / Laptop (Lenovo Legion)</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>OpenCore, macOS, Kexts, ACPI (ASL), AMD Ryzen</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/hackintosh_legion_01.png" alt="Hackintosh Legion System Info" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

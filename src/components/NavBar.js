import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher';


function NavBar() {
  return (
    <Tabs isLazy>
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
        <Tab>Three</Tab>
        <ColorModeSwitcher justifySelf="flex-end" />
      </TabList>

      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default NavBar;

import { ChatIcon, CheckCircleIcon, EmailIcon, StarIcon, WarningIcon } from '@chakra-ui/icons'
import { List, ListIcon, ListItem, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'


const Profile = () => {
  return (
  
    // <Tabs>
    //   <Text>Hello</Text>
    // </Tabs>
    <Tabs mt="40px" colorScheme='purple' variant="enclosed" >
      <TabList>
        <Tab _selected={{color: 'white', bg: 'purple.400'}} >Account Info</Tab>
        <Tab _selected={{color: 'white', bg: 'purple.400'}}>Task History</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
        <List spacing={4}>
          <ListItem>
            <ListIcon as={EmailIcon} />
            Email: mario@netninja.dev
          </ListItem>
          <ListItem>
            <ListIcon as={ChatIcon} />
            Lorem ipsum dolor sit amet consectetur.
          </ListItem>
          <ListItem>
            <ListIcon as={StarIcon} />
            Lorem ipsum dolor sit amet.
          </ListItem>
        </List>
        </TabPanel>
        <TabPanel>
        <List spacing={4}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="teal.400"/>
            Email: mario@netninja.dev
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="teal.400" />
            Lorem ipsum dolor sit amet consectetur.
          </ListItem>
          <ListItem>
            <ListIcon as={WarningIcon} color="teal.400" />
            Lorem ipsum dolor sit amet.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="teal.400" />
            Lorem ipsum dolor sit amet consectetur.
          </ListItem>
          <ListItem>
            <ListIcon as={WarningIcon} color="teal.400" />
            Lorem ipsum dolor sit amet.
          </ListItem>
        </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
   )
}

export default Profile


import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  HStack,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";

export default function Dashboard() {
  const [taskData, setTaskData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const taskLoader = async () => {
    const res = await axios.get("http://localhost:3000/tasks");
    //   console.log(res);
    setTaskData(res.data);
    setLoading(false);
  };

  useEffect(() => {
    setTimeout(() => {
      taskLoader().catch((error) => {
        console.log(error);
        setError("Ooops Something went wrong");
      });
      setLoading(false);
    }, 2000);
  }, []);

  console.log(taskData);
  // const mapData = ()=>{
  //     taskData.map((taskdatum)=>{
  //         return

  //     })
  // }

  return (
    <SimpleGrid padding="10px" spacing={10} minChildWidth="300px">
      {loading && <Text>Loading...</Text>}
      {taskData &&
        taskData.map((taskDatum) => (
          <Card key={taskDatum.id} borderTop="8px" borderColor="purple.400" bg="white" >
            <CardHeader>
              <Flex gap={5}>
                <Box w="50px" h="50px">
                  <Text>AV</Text>
                </Box>
                <Box>
                  <Heading as="h3" size="sm">
                    {taskDatum.title}
                  </Heading>
                  <Text>By{taskDatum.author}</Text>
                </Box>
              </Flex>
            </CardHeader>
            <CardBody color="gray.500">
              <Text>{taskDatum.description}</Text>
            </CardBody>
            <Divider borderColor="gray.200"/>
            <CardFooter>
              <HStack>
                <Button variant="ghost" leftIcon={<ViewIcon />}>Watch</Button>
                <Button variant="ghost"  leftIcon={<EditIcon />}>Comment</Button>
              </HStack>
            </CardFooter>
          </Card>
        ))}
      {error && <Text>{error}</Text>}
    </SimpleGrid>
  );
}

// server-json -w ./data/db.json

// const boxStyles = {
//     p: "10px",
//     bg: 'blue.300',
//     my: '10px',
//     textAlign: 'center',
//     filter: 'blur(2px)',
//     ':hover': {
//         color: 'black',
//         bg: 'blue.200',
//         filter: 'none'
//     }
// }

// <Container as='section'maxWidth="4xl" py="20px">
//     <Heading mt="30px" p="10px">Chakra Ui Components</Heading>
//     <Text p='10px' color='blue.400' fontWeight='bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, aperiam?</Text>
//     <Box  p='10px' bg='cyan'>
//         This is a box
//     </Box>

//     <Box sx={boxStyles}>
//         Hello Ninja
//     </Box>
// </Container>

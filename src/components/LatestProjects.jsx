import React from 'react'
import { Card,Flex, CardHeader, CardBody, CardFooter, Box,Stack,StackDivider } from '@chakra-ui/react';
import { SimpleGrid,Heading,Text,Button } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useColorModeValue,
  } from '@chakra-ui/react'

import { useDisclosure } from '@chakra-ui/react';
import image1 from './images/new.jpg'

import '../../src/styles.css';



function SizeExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [size, setSize] = React.useState('full')
  
    const handleSizeClick = (newSize) => {
      setSize(newSize)
      onOpen()
    }
  
    const sizes = ['full']
  
    return (
      <>
        {sizes.map((size) => (
          <Button
            onClick={() => handleSizeClick(size)}
            key={size}
            m={4}
          >{`Open ${size} Modal`}</Button>
        ))}
  
        <Modal onClose={onClose} size={size} isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {/* <Lorem count={2} /> */}
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
  }
  const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };

const LatestProjects = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [size, setSize] = React.useState('md')
    
    const handleSizeClick = (newSize) => {
        setSize(newSize)
        onOpen()
      }
    const sizes = ['full']
  return (
    <Box className='latest'>
      <Container maxW='100%' color='#262626' bg='black'centerContent>
        <SimpleGrid className='wrap'  maxW='80%' py={12} spacing={4} templateColumns='repeat(auto-fill, minmax(300px, 2fr))'>
             <Card className='eachCard'>
               <Box>
               <CardHeader>
                <Heading size='md'> Customer dashboard</Heading>
                </CardHeader>
                <CardBody>
                <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>
                <CardFooter>
                {sizes.map((size) => (
                <Button
                    onClick={() => handleSizeClick(size)}
                    key={size}
                    m={4}
                >{`See More Details`}</Button>
                ))}
                <Modal onClose={onClose} size={size} isOpen={isOpen}>
                    <ModalOverlay />
                    <ModalContent>
                    <ModalHeader>OKUNOLA VILLA</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    <Box className='container zoom-anim-dialogue w-100'>
                  <img className='w-100' src={image1} alt="" />
                  <Stack spacing={4}>
            
            <Heading color={'gray.500'} mt='20'>Triangle Concrete House On
            <span style={{
              color:'pink',
              fontWeight:'800'
            }}
            >  Lake</span> </Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
                For each project, we establish relationships with partners who we know will  help us create added value for your project. 
                As well as bringing together the public and private sectors, we make sector-overarching links to gather knowledge and to learn from each other.
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
              <ul class="project-detail-list text-dark">
                        <li>
                        <span class="left">Clients:</span>
                        <span class="right">Ethan Hunt, John Doe</span>
                        </li>
                        <li>
                        <span class="left">Completion:</span>
                        <span class="right">February 5th, 2019</span>
                        </li>
                        <li>
                        <span class="left">Project Type:</span>
                        <span class="right">Villa, Residence</span>
                        </li>
                        <li>
                        <span class="left">Architects:</span>
                        <span class="right">Logan Cee, Paul</span>
                        </li>
                        <li>
                        <span class="left">Budget:</span>
                        <span class="right">$1 200 000</span>
                        </li>
                    </ul>
            </Stack>
          </Stack>
                  </Box>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                    </ModalContent>
                </Modal>
                </CardFooter>
               </Box>
            </Card>
            {/* <Card className='eachCard'>
               <Box>
               <CardHeader>
                <Heading size='md'> Customer dashboard</Heading>
                </CardHeader>
                <CardBody>
                <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>
                <CardFooter>
                <Button>View here</Button>
                </CardFooter>
               </Box>
            </Card>
            <Card className='eachCard'>
               <Box>
               <CardHeader>
                <Heading size='md'> Customer dashboard</Heading>
                </CardHeader>
                <CardBody>
                <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>
                <CardFooter>
                <Button>View here</Button>
                </CardFooter>
               </Box>
            </Card>
            <Card className='eachCard'>
               <Box>
               <CardHeader>
                <Heading size='md'> Customer dashboard</Heading>
                </CardHeader>
                <CardBody>
                <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>
                <CardFooter>
                <Button>View here</Button>
                </CardFooter>
               </Box>
            </Card>  
            <Card className='eachCard'>
               <Box>
               <CardHeader>
                <Heading size='md'> Customer dashboard</Heading>
                </CardHeader>
                <CardBody>
                <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>
                <CardFooter>
                <Button>View here</Button>
                </CardFooter>
               </Box>
            </Card>  
            <Card className='eachCard'>
               <Box>
               <CardHeader>
                <Heading size='md'> Customer dashboard</Heading>
                </CardHeader>
                <CardBody>
                <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>
                <CardFooter>
                <Button>View here</Button>
                </CardFooter>
               </Box>
            </Card>        */}
            
        </SimpleGrid>
      </Container>
    </Box>
    
  )
}

export default LatestProjects
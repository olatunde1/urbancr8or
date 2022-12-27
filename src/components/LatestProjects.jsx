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


  const Feature = ({ text, icon, iconBg }) => {
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
    <Box id='LatestProject' className='latest' data-overlay-dark='6'>
      <Container maxW='100%' color='#262626' centerContent>
        <SimpleGrid className='wrap'  maxW='80%' py={12} spacing={8} templateColumns='repeat(auto-fill, minmax(300px, 2fr))'>
            <Card className='eachCard'>
               <Box>
               <CardHeader>
                <Heading size='md'> Triangle Concrete House On Lake</Heading>
                </CardHeader>
                <CardBody>
                <Text>Project Type: &nbsp; Villa Residence</Text>
                </CardBody>
                <CardFooter>
                {sizes.map((size) => (
                <Button
                    onClick={() => handleSizeClick(size)}
                    key={size}
                    m={4}
                    color={'#c5a47e'}
                    bgColor={'White'}
                >{`See More Details`}</Button>
                ))}
                <Modal onClose={onClose} size={size} isOpen={isOpen}>
                    <ModalOverlay />
                    <ModalContent>
                    <ModalHeader style={{
                        fontWeight:'800',
                    }}>OKUNOLA VILLA</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    <Box className='container zoom-anim-dialogue w-100'>
                  <img className='w-100' src={image1} alt="" />
                  <Stack spacing={4}>
            
            <Heading color={'gray.500'} mt='20'><span style={{
              color:'pink',
              fontWeight:'800'
            }}>Triangle Concrete House</span> On Lake</Heading>
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
                        <marquee>Contemporary imaginations into <span style={{
                                color:'pink',
                                fontWeight:'800'
                                }}>REALITY</span></marquee>
                    </ModalFooter>
                    </ModalContent>
                </Modal>
                </CardFooter>
               </Box>
            </Card>
            <Card className='eachCard'>
               <Box>
               <CardHeader>
                <Heading size='md'> Triangle Concrete House On Lake</Heading>
                </CardHeader>
                <CardBody>
                <Text>Project Type: &nbsp; Villa Residence</Text>
                </CardBody>
                <CardFooter>
                {sizes.map((size) => (
                <Button
                    onClick={() => handleSizeClick(size)}
                    key={size}
                    m={4}
                    color={'#c5a47e'}
                    bgColor={'White'}
                >{`See More Details`}</Button>
                ))}
                <Modal onClose={onClose} size={size} isOpen={isOpen}>
                    <ModalOverlay />
                    <ModalContent>
                    <ModalHeader style={{
                        fontWeight:'800',
                    }}>OKUNOLA VILLA</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    <Box className='container zoom-anim-dialogue w-100'>
                  <img className='w-100' src={image1} alt="" />
                  <Stack spacing={4}>
            
            <Heading color={'gray.500'} mt='20'><span style={{
              color:'pink',
              fontWeight:'800'
            }}>Triangle Concrete House</span> On Lake</Heading>
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
                        <marquee>Contemporary imaginations into <span style={{
                                color:'pink',
                                fontWeight:'800'
                                }}>REALITY</span></marquee>
                    </ModalFooter>
                    </ModalContent>
                </Modal>
                </CardFooter>
               </Box>
            </Card>
            <Card className='eachCard'>
               <Box>
               <CardHeader>
                <Heading size='md'> Triangle Concrete House On Lake</Heading>
                </CardHeader>
                <CardBody>
                <Text>Project Type: &nbsp; Villa Residence</Text>
                </CardBody>
                <CardFooter>
                {sizes.map((size) => (
                <Button
                    onClick={() => handleSizeClick(size)}
                    key={size}
                    m={4}
                    color={'#c5a47e'}
                    bgColor={'White'}
                >{`See More Details`}</Button>
                ))}
                <Modal onClose={onClose} size={size} isOpen={isOpen}>
                    <ModalOverlay />
                    <ModalContent>
                    <ModalHeader style={{
                        fontWeight:'800',
                    }}>OKUNOLA VILLA</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    <Box className='container zoom-anim-dialogue w-100'>
                  <img className='w-100' src={image1} alt="" />
                  <Stack spacing={4}>
            
            <Heading color={'gray.500'} mt='20'><span style={{
              color:'pink',
              fontWeight:'800'
            }}>Triangle Concrete House</span> On Lake</Heading>
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
                        <marquee>Contemporary imaginations into <span style={{
                                color:'pink',
                                fontWeight:'800'
                                }}>REALITY</span></marquee>
                    </ModalFooter>
                    </ModalContent>
                </Modal>
                </CardFooter>
               </Box>
            </Card>
            <Card className='eachCard'>
               <Box>
               <CardHeader>
                <Heading size='md'> Triangle Concrete House On Lake</Heading>
                </CardHeader>
                <CardBody>
                <Text>Project Type: &nbsp; Villa Residence</Text>
                </CardBody>
                <CardFooter>
                {sizes.map((size) => (
                <Button
                    onClick={() => handleSizeClick(size)}
                    key={size}
                    m={4}
                    color={'#c5a47e'}
                    bgColor={'White'}
                >{`See More Details`}</Button>
                ))}
                <Modal onClose={onClose} size={size} isOpen={isOpen}>
                    <ModalOverlay />
                    <ModalContent>
                    <ModalHeader style={{
                        fontWeight:'800',
                    }}>OKUNOLA VILLA</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    <Box className='container zoom-anim-dialogue w-100'>
                  <img className='w-100' src={image1} alt="" />
                  <Stack spacing={4}>
            
            <Heading color={'gray.500'} mt='20'><span style={{
              color:'pink',
              fontWeight:'800'
            }}>Triangle Concrete House</span> On Lake</Heading>
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
                        <marquee>Contemporary imaginations into <span style={{
                                color:'pink',
                                fontWeight:'800'
                                }}>REALITY</span></marquee>
                    </ModalFooter>
                    </ModalContent>
                </Modal>
                </CardFooter>
               </Box>
            </Card>
            <Card className='eachCard'>
               <Box>
               <CardHeader>
                <Heading size='md'> Triangle Concrete House On Lake</Heading>
                </CardHeader>
                <CardBody>
                <Text>Project Type: &nbsp; Villa Residence</Text>
                </CardBody>
                <CardFooter>
                {sizes.map((size) => (
                <Button
                    onClick={() => handleSizeClick(size)}
                    key={size}
                    m={4}
                    color={'#c5a47e'}
                    bgColor={'White'}
                >{`See More Details`}</Button>
                ))}
                <Modal onClose={onClose} size={size} isOpen={isOpen}>
                    <ModalOverlay />
                    <ModalContent>
                    <ModalHeader style={{
                        fontWeight:'800',
                    }}>OKUNOLA VILLA</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    <Box className='container zoom-anim-dialogue w-100'>
                  <img className='w-100' src={image1} alt="" />
                  <Stack spacing={4}>
            
            <Heading color={'gray.500'} mt='20'><span style={{
              color:'pink',
              fontWeight:'800'
            }}>Triangle Concrete House</span> On Lake</Heading>
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
                        <marquee>Contemporary imaginations into <span style={{
                                color:'pink',
                                fontWeight:'800'
                                }}>REALITY</span></marquee>
                    </ModalFooter>
                    </ModalContent>
                </Modal>
                </CardFooter>
               </Box>
            </Card>
            <Card className='eachCard'>
               <Box>
               <CardHeader>
                <Heading size='md'> Triangle Concrete House On Lake</Heading>
                </CardHeader>
                <CardBody>
                <Text>Project Type: &nbsp; Aso Villa Residence</Text>
                </CardBody>
                <CardFooter>
                {sizes.map((size) => (
                <Button
                    onClick={() => handleSizeClick(size)}
                    key={size}
                    m={4}
                    color={'#c5a47e'}
                    bgColor={'White'}
                >{`See More Details`}</Button>
                ))}
                <Modal onClose={onClose} size={size} isOpen={isOpen}>
                    <ModalOverlay />
                    <ModalContent>
                    <ModalHeader style={{
                        fontWeight:'800',
                    }}>OKUNOLA VILLA</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    <Box className='container zoom-anim-dialogue w-100'>
                  <img className='w-100' src={image1} alt="" />
                  <Stack spacing={4}>
            
            <Heading color={'gray.500'} mt='20'><span style={{
              color:'pink',
              fontWeight:'800'
            }}>Triangle Concrete House</span> On Lake</Heading>
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
                        <marquee>Contemporary imaginations into <span style={{
                                color:'pink',
                                fontWeight:'800'
                                }}>REALITY</span></marquee>
                    </ModalFooter>
                    </ModalContent>
                </Modal>
                </CardFooter>
               </Box>
            </Card>
         
            
            
        </SimpleGrid>
      </Container>
    </Box>
    
  )
}

export default LatestProjects
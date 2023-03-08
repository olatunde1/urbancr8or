import {
    Container,
    SimpleGrid,
    Flex,
    Box,
    Text,
    Stack,
    StackDivider,
    useColorModeValue,
  } from '@chakra-ui/react';
import { Rotate } from 'react-reveal';
  import Bounce from 'react-reveal/Bounce';
  import Slide from 'react-reveal/Slide';


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
  
  export default function SplitWithImage() {
    return (
      <Box id='About' >
        
        <Container maxW={'7xl'} py={24}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack  spacing={2}>
          <Bounce up cascade>
            <Text
                className='arch'
                color={'#c5a47e'}
                fontSize={{base:'4xl', md:'6xl'}}
                py={4}
                >
                Architecture <br /> and Design
              </Text>
          </Bounce>
            
          <Slide left>
            <Text
                fontFamily={'Roboto Slab , serif'}
                lineHeight={'1.8'}
                color={'white'} fontSize={'xl'}>
                  For each project, we establish relationships with partners who we know will  help us create added value for your project. 
                  As well as bringing together the public and private sectors, we make sector-overarching links to gather knowledge and to learn from each other.
            </Text>
          </Slide>
           
            <Stack
              color={'#f2f2f2'}
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
                <Slide right>
                    <Feature
                    text={'Architecture'}
                  />
                </Slide>
              <Slide left>
                <Feature
                  text={'Real Estate Investment'}
                />
              </Slide>
              <Slide right>
                <Feature
                  text={'Design and Build'}
                />
              </Slide>
              <Slide left> 
                <Feature
                  text={'Investment'}
                />
              </Slide>
              
              
            </Stack>
          </Stack>
          <Flex>
            
          </Flex>
        </SimpleGrid>
        
      </Container>
      </Box>
      
    );
  }
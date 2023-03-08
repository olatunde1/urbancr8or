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
               Urbancr8ors
              </Text>
          </Bounce>
            
          <Slide left>
            <Text
                fontFamily={'Roboto Slab , serif'}
                lineHeight={'1.8'}
                color={'white'} fontSize={{base:'13px', md:'xl'}}
                textAlign='justify'>
                  Urbancr8ors ltd is a team of built environment professionals who are determined to take the industry to next levels using contemporary innovations and 21st century creativities. We are experts in designing and building smart homes, hotels, resorts and sport complexes and more. We are a team trained in construction management, land development and real estate. With the oldest member having over 12 years of experience in the field. At Urbancr8ors, We offer premium Avant guard construction services in the contemporary way. To generate your building project idea, we use post modern design tools such as Autodesk suite, google sketchup, Rhinocerous and Artificial Intelligence (AI). This includes 5D and 3D details of what your building will actually look like, From the façade, interior design, painting, and landscape. At Urban vr8ors ltd, you dream it, we build it..........
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
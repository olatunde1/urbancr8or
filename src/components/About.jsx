import React, {useState} from 'react';
import {
    Container,
    SimpleGrid,
    Flex,
    Box,
    Text,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Image,
    Stack,
    StackDivider,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { MinusIcon,AddIcon } from '@chakra-ui/icons';
// import { Rotate } from 'react-reveal';
import image1 from './images/slide/D17.png'
  import Bounce from 'react-reveal/Bounce';
  import Slide from 'react-reveal/Slide';


  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      
      <p>
        {isReadMore ? text.slice(0, 450) : text}
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "...read more" : " show less"}
        </span>
      </p>
      
    );
  };

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
                color={'white'} fontSize={{base:'14px', md:'xl'}}
                textAlign='justify'>
                  <ReadMore>
                  Urbancr8ors ltd is a team of built environment professionals who are determined to take the industry to next levels using contemporary innovations and 21st century creativities. We are experts in designing and building smart homes, hotels, resorts and sport complexes and more. We are a team trained in construction management, land development and real estate. With the oldest member having over 12 years of experience in the field. At Urbancr8ors, We offer premium Avant guard construction services in the contemporary way. To generate your building project idea, we use post modern design tools such as Autodesk suite, google sketchup, Rhinocerous and Artificial Intelligence (AI). This includes 5D and 3D details of what your building will actually look like, From the façade, interior design, painting, and landscape. At Urban vr8ors ltd, you dream it, we build it..........

                  </ReadMore>
            </Text>
          </Slide>
           
            <Stack>
              <Accordion allowMultiple color={'#ffffff'}>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                      Architecture
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} textAlign='justify'>
                We are Architects with out team leaders been fully registered with Architect 
                registration council of Nigeria. We use pragmatic design tools to design vanguard
                 buildings with postmodern innovations and creativities. Our design philosophy 
                 incorporates the use of modern and postmodern architectural characters in designing 
                 comfortable, functional, and beautiful spaces. Our facades exhibit contemporary design 
                 elements with a feel of the formalism and international style. we design residential, 
                 industrials, commercial, mixed use, religious and assembly buildings. We also prepare 
                 master plans and landscape design.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                       Design and build
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} textAlign='justify'>
                Design and build: At Urbancr8ors, we design, we build, we install and we manage. 
                We provide support in land acquisition, design and construction till we give you 
                the keys to your new house. Meaning, all you have to do is tell us your dream location
                 and we will handle the rest. From land acquisition to rigorous land survey processing... 
                 then building design / approval and construction. When we work with you, we give a detailed 
                 calculation of how much your project will cost. This is possible because of our up to date market
                  survey and years of trusted relationship with our suppliers.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                    Investment
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} textAlign='justify'>
                You can enjoy our fast-rising international network by investing in Urbancr8ors. 
                We are opened to land banking investment, property and proptech development, 
                realestate and JV with High return on your investment.  at Urbancr8ors, 
                we make profits all year round and we always put money in efficient use. 
                The good news is that your money is completely safe with us. If all hell breaks loose, 
                your principal investment is safe. This is to ensure that our investors are protected 
                from any unfortunate events.
                </AccordionPanel>
              </AccordionItem>

            </Accordion>
            </Stack>
          </Stack>
          <Flex>
            <Image src={image1} width={'100%'} />
          </Flex>
        </SimpleGrid>
        
      </Container>
      </Box>
      
    );
  }
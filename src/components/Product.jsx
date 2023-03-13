import React, {useState} from 'react';
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Image,
  Icon,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';

import team from './images/abayomi-removebg-preview.png'
import team3 from './images/ismael-removebg-preview.png'


const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    
    <p className="text" >
      {isReadMore ? text.slice(0, 220) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
    
  );
};

const ReadMore2 = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 264) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
    
  );
};

const ReadMore3 = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 264) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
    
  );
};

export default function CallToActionWithVideo() {
  return (
    
    <Container maxW={'6xl'}>
        <Heading
        
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '4xl', sm: '4xl', lg: '6xl' }}
            textAlign={'center'}
            >
            <Text
           
              id='our-team'
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: '#c5a47e',
                zIndex: -1,
              }}>
              Meet Our Team
            </Text>
        </Heading>

      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
          <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          <Blob
            w={'150%'}
            h={'150%'}
            position={'absolute'}
            top={'-20%'}
            left={0}
            zIndex={-1}
            color={useColorModeValue('red.50', 'red.400')}
          />
          <Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}>
            
            <IconButton
              aria-label={'Play Button'}
              variant={'ghost'}
              _hover={{ bg: 'transparent' }}
              // icon={<PlayIcon w={12} h={12} />}
              size={'lg'}
              color={'white'}
              position={'absolute'}
              left={'50%'}
              top={'50%'}
              transform={'translateX(-50%) translateY(-50%)'}
            />
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'400px'}
              src={team}
            />
           
          </Box>
        </Flex>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', lg: '3xl', md:'12px' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                zIndex: -1,
              }}>
              ARC Obafemi,
            </Text>
            <br />
            <Text as={'span'} color={'#c5a47e'}>
              Ibitoye (Bsc,MED (Arch.),Arcon)
            </Text>
            <p style={{
              fontSize:'18px',
              lineHeight:'1.9'
            }}>CEO of Urbancr8ors</p>
        
          </Heading>
          <Text color={'gray.500'} textAlign={'justify'} lineHeight={'8'}>
            <ReadMore>Arc Obafemi A. Ibitoye (F4689), is a 35 year old goal-driven architect. He has had his fair share of humble beginnings and steady progress.
                He holds a B.Tech in Architecture from Ladoke Akintola University of Technology, Ogbomoso. And a Masters of Environmental Design in Architecture, from the University of Lagos.
                He is a registered architect with the Architect Registration Council of Nigeria (ARCON). A badge only a few of his colleagues carry with pride.
                He is a proactive AEC (Architecture, Engineering, Construction) professional. With 12 years of experience in the built environment industry and also in academics. It is no wonder he is a mentor to many younger architects.
                He worked with PRODECO International; a subsidiary of Intel's oil and gas. In Portharcourt and Lagos State Nigeria, he coordinated the development of housing and hospitality projects. At PRODECO he contributed to auditing the concept design of Eko Energy Estate, Eko Atlantic City.
                He teaches Architectural Conceptualization, Architectural Design and Building Construction Methodology at both B.Sc and M.Sc Levels at Caleb University, Lagos.
                He was an Ag. Head, Department of Architecture, Redeemers College of Technology (RECTEM). Ibitoye is a PhD Candidate at Caleb University, Lagos, Nigeria.
                All these sum him up to be a professional whose sole interest is to use architecture to solve social needs. And in so doing, create sustainable functional spaces. He has shown dedication to his work with a rich portfolio containing at least 500 designs. With over 50 completed across Nigeria and a lot more still under construction. You can reach him HERE
            </ReadMore>
          
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}>
            {/* <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              border={'1px solid #c5a47e'}
              color={'black'}
              colorScheme={'red'}
              bg={'white'}
              _hover={{ bg: '#c5a47e', color:'white' }}>
              Connect
            </Button> */}
            {/* <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              leftIcon={<PlayIcon h={4} w={4} color={'gray.300'} />}>
              How It Works
            </Button> */}
          </Stack>
        </Stack>
        
      </Stack>
   
      {/* <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 2, md: 2 }}
        direction={{ base: 'column', md: 'row' }}>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          <Blob
            w={'150%'}
            h={'150%'}
            position={'absolute'}
            top={'-20%'}
            left={0}
            zIndex={-1}
            color={useColorModeValue('red.50', 'red.400')}
          />
          <Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}>
            
            <IconButton
              aria-label={'Play Button'}
              variant={'ghost'}
              _hover={{ bg: 'transparent' }}
              size={'lg'}
              color={'white'}
              position={'absolute'}
              left={'50%'}
              top={'50%'}
              transform={'translateX(-50%) translateY(-50%)'}
            />
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'400px'}
              src={team}
            />
          </Box>
        </Flex>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', lg: '3xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                zIndex: -1,
              }}>
              Arc Awosejo,
            </Text>
            <br />
            <Text as={'span'} color={'#c5a47e'}>
              Abayomi
            </Text>
        
          </Heading>
          <Text color={'gray.500'} textAlign={'justify'} lineHeight={'8'}>
            <ReadMore2>
            Abayomi is a dedicated, resourceful and proactive AEC (Architecture, Engineering, construction) professional with years of experience from various projects. Interested in using architecture to solve social needs and create sustainable space, functional and unique.
            He holds both Bachelor of Technology and Masters of Technology in Architecture from Federal University of Technology, Akure.
            He has appreciable knowledge and experience of Architectural project designs, including conceptual and  schematic design, skilled in visualization and design development.
            </ReadMore2>
         
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}>
            
          </Stack>
        </Stack>
        
      </Stack> */}
    
      {/* <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
         <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          <Blob
            w={'150%'}
            h={'150%'}
            position={'absolute'}
            top={'-20%'}
            left={0}
            zIndex={-1}
            color={useColorModeValue('red.50', 'red.400')}
          />
          <Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}>
            
            <IconButton
              aria-label={'Play Button'}
              variant={'ghost'}
              _hover={{ bg: 'transparent' }}
              size={'lg'}
              color={'white'}
              position={'absolute'}
              left={'50%'}
              top={'50%'}
              transform={'translateX(-50%) translateY(-50%)'}
            />
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{base:'150%', md:'620px'}}
              src={team3}
            />
          </Box>
        </Flex>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', lg: '3xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                zIndex: -1,
              }}>
              Arc Opadokun,
            </Text>
            <br />
            <Text as={'span'} color={'#c5a47e'}>
              Ismael ( Principal Partner )
            </Text>
        
          </Heading>
          <Text color={'gray.500'} textAlign={'justify'} lineHeight={'8'}>
          <ReadMore3>
          Ismail is a hardworking, friendly, respectful, motivated Architect filled with enthusiasm and passion in the world of Architecture, having clarity of vision to take Architecture to the future through matchless and unique sustainable designs with 21st century creativities.
          Since graduating from Federal University of Technology Akure, Ondo State Nigeria with a Master of Technology Degree in Architecture, He have worked on projects such as Design and Construction of Buildings, Urban Designs, Landscaping and Beautification which made him discreet in disposition. Ismail is furthering his knowledge in Construction Waste Minimization Research as an aspect of ensuring Architecture solves the problem of sustainability in Construction Industry.
          </ReadMore3>
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}>
           
          </Stack>
        </Stack>
       
      </Stack> */}
      
    </Container>
  );
}



export const Blob = (props) => {
  return (
    <Icon
      width={'100%'}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};
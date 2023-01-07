import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    useColorModeValue,
  } from '@chakra-ui/react';
  
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
      <Container id='About' maxW={'7xl'} py={8}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={'white'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('#c5a47e', '#c5a47e')}
              px={8}
              py={4}
              mb={4}
              alignSelf={'flex-start'}
              rounded={'md'}>
              ABOUT US
            </Text>
            <Heading>We Are The Leader In <br /> The
            <span style={{
              color:'#c5a47e',
              fontWeight:'800'
            }}
            > Architectural</span> </Heading>
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
              <Feature
                text={'Architecture'}
              />
              <Feature
                text={'Real Estate Investment'}
              />
              <Feature
                text={'Design and Build'}
              />
              <Feature
                text={'Investment'}
              />
            </Stack>
          </Stack>
          <Flex>
            <Image
              className='aboutImg'
              rounded={'md'}
              alt={'feature image'}
              src={
                'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
              }
              objectFit={'cover'}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    );
  }
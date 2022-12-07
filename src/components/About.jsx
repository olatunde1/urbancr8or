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
  
  // import {
  //   IoAnalyticsSharp,
  //   IoLogoBitcoin,
  //   IoSearchSharp,
  // } from 'react-icons'
  // import { ReactElement } from 'react';
  
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
  
  export default function SplitWithImage() {
    return (
      <Container maxW={'7xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={'white'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('pink.400', 'pink.400')}
              p={2}
              mb={4}
              alignSelf={'flex-start'}
              rounded={'md'}>
              ABOUT US
            </Text>
            <Heading>We Are The Leader In <br /> The
            <span style={{
              color:'pink',
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
                // icon={
                //   <Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />
                // }
                // iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'Architecture'}
              />
              <Feature
                // icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
                // iconBg={useColorModeValue('green.100', 'green.900')}
                text={'Real Estate Investment'}
              />
              <Feature
                // icon={
                //   <Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />
                // }
                // iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'Design and Build'}
              />
              <Feature
                // icon={
                //   <Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />
                // }
                // iconBg={useColorModeValue('purple.100', 'purple.900')}
                text={'Investment'}
              />
            </Stack>
          </Stack>
          <Flex>
            <Image
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
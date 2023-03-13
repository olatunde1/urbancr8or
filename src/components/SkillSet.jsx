import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Text,
    Box,
    Stack,
  } from '@chakra-ui/react'
// import { Card, CardHeader, CardBody, CardFooter,Text,Center,Image } from '@chakra-ui/react'

const SkillSet = () => {
  return (

    <Box
        width={{base:'100%', md:'90%'}}
        margin={'5rem auto'}
    >
            <Text
                textAlign={'center'}
                fontSize={'32px'}
                fontWeight={'700'}
                paddingBottom={'50px'}
            >Our Skill Set</Text>
            <Accordion allowMultiple color={'#000000'}>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left' fontSize={'20px'}
                        paddingTop={'16px'}
                        paddingBottom={'16px'}
                    >
                      Architecture
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} textAlign='justify' letterSpacing={'normal'}>
                We are Architects without team leaders been fully registered with Architect 
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
                    <Box as="span" flex='1' textAlign='left' fontSize={'20px'}
                        paddingTop={'16px'}
                        paddingBottom={'16px'}
                    >
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
                    <Box as="span" flex='1' textAlign='left' fontSize={'20px'}
                        paddingTop={'16px'}
                        paddingBottom={'16px'}
                    >
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
            </Box>


    // <Center>
    //       <Card
    //         className='cardSkillSet'
    //         direction={{ base: 'column', sm: 'row' }}
    //         overflow='hidden'
            
    //         variant="unstyled">

    //         <Card 
    //         className='card1'
    //         textAlign={'center'} spacing={4} >
    //             <CardHeader>
    //                 <Image src={image} />
    //             </CardHeader>
    //             <CardBody>
    //                 <Text fontSize={'3xl'}>Architecture</Text>
    //             </CardBody>
    //             <CardFooter>
    //                 <Text>We are Architects with out team leaders been fully registered with Architect registration council of Nigeria. We use pragmatic design tools to design vanguard buildings with postmodern innovations and creativities. Our design philosophy incorporates the use of modern and postmodern architectural characters in designing comfortable, functional, and beautiful spaces. Our facades exhibit contemporary design elements with a feel of the formalism and international style. we design residential, industrials, commercial, mixed use, religious and assembly buildings. We also prepare master plans and landscape design.</Text>
    //             </CardFooter>
    //         </Card>
    //         <Card className='card1' textAlign={'center'}>
    //             <CardHeader>
    //             <Image src={image} />
    //             </CardHeader>
    //             <CardBody>
    //                 <Text fontSize={'3xl'}>Design and Build</Text>
    //             </CardBody>
    //             <CardFooter>
    //                 <Text>At Urbancr8ors, we design, we build, we install and we manage. We provide support in land acquisition, design and construction till we give you the keys to your new house. Meaning, all you have to do is tell us your dream location and we will handle the rest. From land acquisition to rigorous land survey processing... then building design / approval and construction. When we work with you, we give a detailed calculation of how much your project will cost. This is possible because of our up to date market survey and years of trusted relationship with our suppliers.</Text>
    //             </CardFooter>
    //         </Card>
    //         <Card className='card1' textAlign={'center'}>
    //             <CardHeader>
    //             <Image src={image} />
    //             </CardHeader>
    //             <CardBody>
    //                 <Text fontSize={'3xl'}>Investment</Text>
    //             </CardBody>
    //             <CardFooter>
    //                 <Text></Text>
    //             </CardFooter>
    //         </Card>
           
        
    //     </Card>
    // </Center>
       

   
  )
}

export default SkillSet
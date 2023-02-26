import React from 'react'
import { Card, CardHeader, CardBody, CardFooter,Text,Center,Image } from '@chakra-ui/react'
import image from './images/architecture.png'

const SkillSet = () => {
  return (
   <Center>
         <Card
            className='cardSkillSet'
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            
            variant="unstyled">

            <Card 
            className='card1'
            textAlign={'center'} spacing={4} >
                <CardHeader>
                    <Image src={image} />
                </CardHeader>
                <CardBody>
                    <Text fontSize={'3xl'}>Architecture</Text>
                </CardBody>
                <CardFooter>
                    <Text>We address requirements and constraints with the right mix of analytical thinking, creativity and artistry — designing buildings that make a statement, conserve natural resources and enrich our experience.</Text>
                </CardFooter>
            </Card>
            <Card className='card1' textAlign={'center'}>
                <CardHeader>
                <Image src={image} />
                </CardHeader>
                <CardBody>
                    <Text fontSize={'3xl'}>Design and Build</Text>
                </CardBody>
                <CardFooter>
                    <Text>Our master plans provide a comprehensive look at where an organization is today and what it’s going to take to make its ideal future a reality. Our process is intensely collaborative, involving experts.</Text>
                </CardFooter>
            </Card>
            <Card className='card1' textAlign={'center'}>
                <CardHeader>
                <Image src={image} />
                </CardHeader>
                <CardBody>
                    <Text fontSize={'3xl'}>Interior Design</Text>
                </CardBody>
                <CardFooter>
                    <Text>Across every market we serve, our team designs thoughtful interior environments by engaging key stakeholders through proprietary and proven processes to enhance culture and achieve goals.</Text>
                </CardFooter>
            </Card>
           
        
        </Card>
   </Center>
  )
}

export default SkillSet
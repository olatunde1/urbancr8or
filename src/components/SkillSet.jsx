import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Heading,Text,Button,Center,Image } from '@chakra-ui/react'
import image from './images/architecture.png'

const SkillSet = () => {
  return (
   <Center>
         <Card
            className='CardSkillSet'
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            marginTop={'90px'}
            marginBottom={'90px'}
            >

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
    
    // <container className='skill'>
    //     <div>
    //         <p>1</p>
    //         <h1>Architecture</h1>
    //         <p>We address requirements and constraints with the right mix of analytical thinking, creativity and artistry — designing buildings that make a statement, conserve natural resources and enrich our experience.</p>

    //     </div>
    //     <div>
    //         <p>1</p>
    //         <h1>Architecture</h1>
    //         <p>We address requirements and constraints with the right mix of analytical thinking, creativity and artistry — designing buildings that make a statement, conserve natural resources and enrich our experience.</p>

    //     </div>
    //     <div>
    //         <p>1</p>
    //         <h1>Architecture</h1>
    //         <p>We address requirements and constraints with the right mix of analytical thinking, creativity and artistry — designing buildings that make a statement, conserve natural resources and enrich our experience.</p>

    //     </div>
    // </container>
  )
}

export default SkillSet
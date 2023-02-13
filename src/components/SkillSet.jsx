import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Heading,Text,Button,Center } from '@chakra-ui/react'

const SkillSet = () => {
  return (
   <Center>
         <Card
        className='CardSkillSet'
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'>

        <Card>
            <CardHeader>
                <Heading size='md'> Customer dashboard</Heading>
            </CardHeader>
            <CardBody>
                <Text>View a summary of all your customers over the last month.</Text>
            </CardBody>
            <CardFooter>
                <Button colorScheme='blue'>View here</Button>
            </CardFooter>
        </Card>
        <Card>
            <CardHeader>
                <Heading size='md'> Customer dashboard</Heading>
            </CardHeader>
            <CardBody>
                <Text>View a summary of all your customers over the last month.</Text>
            </CardBody>
            <CardFooter>
                <Button colorScheme='blue'>View here</Button>
            </CardFooter>
        </Card>
        <Card>
            <CardHeader>
                <Heading size='md'> Customer dashboard</Heading>
            </CardHeader>
            <CardBody>
                <Text>View a summary of all your customers over the last month.</Text>
            </CardBody>
            <CardFooter>
                <Button colorScheme='blue'>View here</Button>
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
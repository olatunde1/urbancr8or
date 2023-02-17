import React from 'react'
import {Image, Stack,Heading,Text, Card, CardBody, Show,Hide} from '@chakra-ui/react'
import banner from './images/interior.jpg'
const ImageSlider = () => {
  return (
    <div  className='int'>
      <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
      border={'none'}
      borderRadius='none'
    >
  <Image
  
    objectFit='cover'
    maxW={{ base: 'block', sm: '1034px' }}
    src={banner}
    alt='Caffe Latte'
    maxWidth={'100%'}
  />

  <Stack>
    <CardBody className='interior' alignContent={'center'}>
      <Heading
      fontSize={'32px'}
      paddingBottom={8}
      size='md'>Interior Design</Heading>
      <Text
      
      >
        Complexity represents intricacy of framework, stored information on how the system really works as well its very own make-up.
      </Text>
    </CardBody>
  </Stack>
    </Card> 
    </div>
    
  )
}

export default ImageSlider

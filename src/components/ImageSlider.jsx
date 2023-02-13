import React from 'react'
import {Box} from '@chakra-ui/react'
import {Image, Stack,Heading,Text,Button, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import banner from './images/interior.jpg'
const ImageSlider = () => {
  return (
    <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '1034px' }}
    src={banner}
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody className='interior' alignContent={'center'}>
      <Heading
      fontSize={'32px'}
      // paddingLeft={16}
      paddingBottom={8}
      size='md'>Interior Design</Heading>
      <Text
      // paddingLeft={16}
      // paddingTop={6}
      >
        Complexity represents intricacy of framework, stored information on how the system really works as well its very own make-up.
      </Text>
    </CardBody>
  </Stack>
</Card>

  )
}

export default ImageSlider

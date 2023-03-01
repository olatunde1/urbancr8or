import React from 'react'
import pic1 from './images/2.jpg'
import pic2 from './images/3.jpg'
import pic3 from './images/5.jpg'
import pic4 from './images/7.png'
import pic5 from './images/slid3.jpg'
import pic6 from './images/slide3.jpg'
import pic7 from './images/8.png'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,

  } from '@chakra-ui/react'

  
    const CustomModal = ({ showModalButtonText, modalHeader, modalBody }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
    <div className='container'>
        <h1 className='project-highlights'>Projects Highlights</h1>
        <div id='gallery' class="galleryMain">
            {/* <div class="pics"><img src={pic1} alt="galleryImages" /></div> */}
            <div class="pics">
                <div className="overlayText">
                </div>
                <div class="css-1gzxeik">
                    <img src={pic1} alt="galleryImages" class=""  />
                </div>
                <div className="text-details fadeIn-bottom fadeIn-left">
                    <h1>Bullidion Pent</h1>
                    <p>Price: $4,000,000,000</p>
                    <button  onClick={onOpen}> {showModalButtonText}</button>
                    <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
    
  
                    <ModalContent>
                    <ModalHeader>{modalHeader}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    {modalBody}
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                    </ModalContent> 
                </Modal>

                </div>
            </div>
            <div class="pics">
                <div className="overlayText">
                </div>
                <div class="css-1gzxeik">
                    <img src={pic2} alt="galleryImages" class=""  />
                </div>
                <div className="text-details fadeIn-bottom fadeIn-left">
                    <h1>Bullidion Pent</h1>
                    <p>Price: $4,000,000,000</p>
                    <button  onClick={onOpen}> {showModalButtonText}</button>
                    <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
    
  
                    <ModalContent>
                    <ModalHeader>{modalHeader}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    {modalBody}
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                    </ModalContent> 
                </Modal>

                </div>
            </div>
            <div class="pics">
                <div className="overlayText">
                </div>
                <div class="css-1gzxeik">
                    <img src={pic5} alt="galleryImages" class=""  />
                </div>
                <div className="text-details fadeIn-bottom fadeIn-left">
                    <h1>Bullidion Pent</h1>
                    <p>Price: $4,000,000,000</p>
                    <button  onClick={onOpen}> {showModalButtonText}</button>
                    <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
    
  
                    <ModalContent>
                    <ModalHeader>{modalHeader}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    {modalBody}
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                    </ModalContent> 
                </Modal>

                </div>
            </div>   
            <div class="pics">
                <div className="overlayText">
                </div>
                <div class="css-1gzxeik">
                    <img src={pic6} alt="galleryImages" class=""  />
                </div>
                <div className="text-details fadeIn-bottom fadeIn-left">
                    <h1>Bullidion Pent</h1>
                    <p>Price: $4,000,000,000</p>
                    <button  onClick={onOpen}> {showModalButtonText}</button>
                    <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
    
  
                    <ModalContent>
                    <ModalHeader>{modalHeader}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    {modalBody}
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                    </ModalContent> 
                </Modal>

                </div>
            </div>   
            <div class="pics">
                <div className="overlayText">
                </div>
                <div class="css-1gzxeik">
                    <img src={pic3} alt="galleryImages" class=""  />
                </div>
                <div className="text-details fadeIn-bottom fadeIn-left">
                    <h1>Bullidion Pent</h1>
                    <p>Price: $4,000,000,000</p>
                    <button  onClick={onOpen}> {showModalButtonText}</button>
                    <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
    
  
                    <ModalContent>
                    <ModalHeader>{modalHeader}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    {modalBody}
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                    </ModalContent> 
                </Modal>

                </div>
            </div>   
            <div class="pics">
                <div className="overlayText">
                </div>
                <div class="css-1gzxeik">
                    <img src={pic4} alt="galleryImages" class=""  />
                </div>
                <div className="text-details fadeIn-bottom fadeIn-left">
                    <h1>Bullidion Pent</h1>
                    <p>Price: $4,000,000,000</p>
                    <button  onClick={onOpen}> {showModalButtonText}</button>
                    <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
    
  
                    <ModalContent>
                    <ModalHeader>{modalHeader}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    {modalBody}
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                    </ModalContent> 
                </Modal>

                </div>
            </div>   
          
            <div class="pics">
                <div className="overlayText">
                </div>
                <div class="css-1gzxeik">
                    <img src={pic7} alt="galleryImages" class=""  />
                </div>
                <div className="text-details fadeIn-bottom fadeIn-left">
                    <h1>Bullidion Pent</h1>
                    <p>Price: $4,000,000,000</p>
                    <button  onClick={onOpen}> {showModalButtonText}</button>
                    <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
    
  
                    <ModalContent>
                    <ModalHeader>{modalHeader}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    {modalBody}
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                    </ModalContent> 
                </Modal>

                </div>
            </div>                
        </div>
    </div>
  )
}





    
export default function Gallery() {
    return (
      <div className="App" >
        <CustomModal
          showModalButtonText="View"
          modalHeader="Edit Modal"
          modalBody="Edit Modal"
        />
        {/* <CustomModal
          showModalButtonText="Delete"
          modalHeader="Delete Shipping Address"
          modalBody="Are you sure you want to delete the shipping address?"
        />
        <CustomModal
          showModalButtonText="mr"
          modalHeader="Delete Shipping Address"
          modalBody="Are you sure you want to delete the shipping address?"
        /> */}

      </div>
    );
  }
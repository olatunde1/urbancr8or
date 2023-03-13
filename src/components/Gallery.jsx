import React from 'react'
import pic1 from './images/Gallery/G1.jpg'
import pic2 from './images/Gallery/G2.jpg'
import pic3 from './images/Gallery/G3.jpg'
import pic4 from './images/Gallery/G4.jpg'
import pic5 from './images/Gallery/G5.jpg'
import pic6 from './images/Gallery/G6.jpg'
import pic7 from './images//Gallery/G7.jpg'
import pic8 from './images//Gallery/G8.jpg'
import pic9 from './images//Gallery/G9.jpg'
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
            <div class="pics">
                <div className="overlayText">
                </div>
                <div class="css-1gzxeik">
                    <img src={pic1} alt="galleryImages" class=""  />
                </div>
                <div className="text-details fadeIn-bottom fadeIn-left">
                    <h1>Bullidion Pent</h1>
                    <p>Price: $4,000,000,000</p>
                    {/* <button  onClick={onOpen}> {showModalButtonText}</button> */}
                    <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
    
  
                    <ModalContent>
                    <ModalHeader>{modalHeader}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                   
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                        </Button>
                      
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
                    <h1>Eagles Pent</h1>
                    <p>Price: $4,000,000,000</p>
                    {/* <button  onClick={onOpen}> {showModalButtonText}</button> */}
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
                    {/* <button  onClick={onOpen}> {showModalButtonText}</button> */}
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
                    {/* <button  onClick={onOpen}> {showModalButtonText}</button> */}
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
                       
                    </ModalFooter>
                    </ModalContent> 
                </Modal>

                </div>
            </div>  
            <div class="pics">
                <div className="overlayText">
                </div>
                <div class="css-1gzxeik">
                    <img src={pic9} alt="galleryImages" class=""  />
                </div>
                <div className="text-details fadeIn-bottom fadeIn-left">
                    <h1>Bullidion Pent</h1>
                    <p>Price: $4,000,000,000</p>
                    {/* <button  onClick={onOpen}> {showModalButtonText}</button> */}
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
                    {/* <button  onClick={onOpen}> {showModalButtonText}</button> */}
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
                    {/* <button  onClick={onOpen}> {showModalButtonText}</button> */}
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
                    {/* <button  onClick={onOpen}> {showModalButtonText}</button> */}
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
                       
                    </ModalFooter>
                    </ModalContent> 
                </Modal>

                </div>
            </div>
            <div class="pics">
                <div className="overlayText">
                </div>
                <div class="css-1gzxeik">
                    <img src={pic8} alt="galleryImages" class=""  />
                </div>
                <div className="text-details fadeIn-bottom fadeIn-left">
                    <h1>Bullidion Pent</h1>
                    <p>Price: $4,000,000,000</p>
                    {/* <button  onClick={onOpen}> {showModalButtonText}</button> */}
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
        //   showModalButtonText="View Details"
          modalHeader="Design Full Details"
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
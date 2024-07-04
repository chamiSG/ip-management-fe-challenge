import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
const BaseModal = (props: { [x: string]: any }) => {
  const { isOpen, onClose, title, children, ...rest } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody {...rest}>
            {children}
          </ModalBody>
        </ModalContent>
      </Modal>
  );
}

export default BaseModal;
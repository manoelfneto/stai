import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
  Text,
  FormLabel,
  Input,
  Button,
  Select,
  HStack,
} from '@chakra-ui/react'

type AddUserProps = {
  isOpen: boolean
  onClose: () => void
}

export const AddUserModal = ({ isOpen, onClose }: AddUserProps) => {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Text>Adicionar Usuário</Text>
        </ModalHeader>
        <ModalBody>
          <VStack alignItems='start' spacing={2}>
            <FormLabel>Nome</FormLabel>
            <Input></Input>
            <FormLabel>E-mail</FormLabel>
            <Input></Input>
            <FormLabel>Cargo</FormLabel>
            <Input></Input>
            <FormLabel>Setor</FormLabel>
            <Select placeholder='Selecione o setor'>
              <option>Europa</option>
              <option>Asia</option>
            </Select>
          </VStack>
        </ModalBody>
        <ModalFooter mt={4}>
          <HStack>
            <Button size='sm'>Cancelar</Button>
            <Button size='sm' colorScheme='red'>
              Confirmar
            </Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

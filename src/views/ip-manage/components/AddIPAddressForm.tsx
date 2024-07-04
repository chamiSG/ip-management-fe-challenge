import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  useToast,
} from '@chakra-ui/react'
import { useState } from 'react'
import axios from '@/utils/axios'

export default function AddIPAddressForm({ onClose }: any) {
  const toast = useToast()
  const [ipAddress, setIpAddress] = useState('')
  const [label, setLabel] = useState('')
  const [comment, setComment] = useState('')
  const [error, setError] = useState({
    isValidIP: true,
    message: ""
  })

  const ipv4Pattern = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

  const validateIPAddress = () => {
    if (!ipv4Pattern.test(ipAddress)) {
      setError({
        isValidIP: false,
        message: "Invaild IP Address"
      })
    } else {
      setError({
        isValidIP: true,
        message: ""
      })
    }
  }

  const onSubmit = async () => {
    validateIPAddress()
    if (error.isValidIP) {
      console.log(ipAddress, label, comment)
      try {
        const res = await axios.post("/api/ip-address", {
          ip: ipAddress,
          label: label,
          comment: comment
        });
        if (res.data !== undefined) {
          toast({
            title: 'IP Address',
            description: res.data.message,
            status: 'success',
            position: 'top-right',
            duration: 3000,
            isClosable: true,
          })
          onClose()
          return;
        }
      } catch (e) {
        console.log(e);
      }
    }

  }

  return (
    <>
      <FormControl isInvalid={!error?.isValidIP}>
        <FormLabel htmlFor='ipAddr'>IP Address</FormLabel>
        <Input
          id='ipAddr'
          isRequired={true}
          value={ipAddress}
          onChange={(e: any) => setIpAddress(e.target.value)}
        />
        {!error.isValidIP ? (
          <FormErrorMessage>
            {error.message}
          </FormErrorMessage>
        ) : null}

      </FormControl>
      <FormLabel htmlFor='label'>Label</FormLabel>
      <Input
        id='label'
        value={label}
        onChange={(e: any) => setLabel(e.target.value)}
      />

      <FormLabel htmlFor='comment'>Comment</FormLabel>
      <Input
        id='comment'
        value={comment}
        onChange={(e: any) => setComment(e.target.value)}
      />
      <Button mt={4} colorScheme='brand' onClick={onSubmit}>
        Save
      </Button>
    </>
  )
}
import {
  FormLabel,
  FormControl,
  Input,
  Button,
} from '@chakra-ui/react'
import { useState } from 'react'

export default function EditIPAddressForm({ data, onSubmit }: any) {
  const [ipAddress] = useState(data.ip)
  const [label, setLabel] = useState(data.label)
  const [comment, setComment] = useState(data.comment)

  return (
    <>
      <FormControl>
        <FormLabel htmlFor='ipAddr'>IP Address</FormLabel>
        <Input
          id='ipAddr'
          isRequired={true}
          value={ipAddress}
          disabled={true}
          />
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
      <Button mt={4} colorScheme='brand' onClick={() => onSubmit({ip: ipAddress, label, comment})}>
        Update
      </Button>
    </>
  )
}
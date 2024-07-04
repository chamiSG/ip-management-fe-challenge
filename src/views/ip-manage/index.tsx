import AddIPAddressForm from './components/AddIPAddressForm';
import BaseModal from '@/components/BaseModal';
import DataTable from '@/components/datatable';
import axios from '@/utils/axios';
import { ipTableColumns } from '@/utils/datatables';
import { Box, Button, Card, Flex, Text, useColorModeValue, useDisclosure, useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import EditIPAddressForm from './components/EditIPAddressForm';

const IPManage = () => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const { isOpen: isEditOpen, onClose: onEditClose, onOpen: onEditOpen } = useDisclosure()
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const toast = useToast()
  const [data, setData] = useState([])
  const [id, setId] = useState('')


  const handleEdit = (id: any) => {
    setId(id)
    onEditOpen()
  }

  const fetchIpAddress = async () => {
    try {
      const res = await axios.get("/api/ip-address");
      if (res.data !== undefined) {
        setData(res.data.data)
        return;
      }
    } catch (e) {
      console.log(e);
    }
  }

  const handleUpdate = async (data: any) => {
    try {
      const res = await axios.put(`/api/ip-address/${id}`, data);
      if (res.data !== undefined) {
        toast({
          title: 'IP Address',
          description: res.data.message,
          status: 'success',
          position: 'top-right',
          duration: 3000,
          isClosable: true,
        })
        onEditClose()
        await fetchIpAddress()
        return;
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchIpAddress();
  }, [])
  return (
    <Box>
      <Card flexDirection='column' w='100%' p='20px' overflowX={{ sm: 'scroll', lg: 'hidden' }}>
        <Flex px='25px' mb="8px" justifyContent='space-between' align='center'>
          <Text color={textColor} fontSize='22px' mb="4px" fontWeight='700' lineHeight='100%'>
            IP Manage
          </Text>
          <Box>
            <Button size={'sm'} variant={'brand'} onClick={onOpen}>Add IP</Button>
          </Box>
        </Flex>

        <Box>
          <DataTable cols={ipTableColumns} data={data} onChange={handleEdit} />
        </Box>
      </Card>
      <BaseModal isOpen={isOpen} onClose={onClose} title="Add IP Address">
        <AddIPAddressForm onClose={onClose} />
      </BaseModal>
      <BaseModal isOpen={isEditOpen} onClose={onEditClose} title="Add IP Address">
        <EditIPAddressForm data={data.find((item: any) => item.id === id)} onSubmit={handleUpdate} />
      </BaseModal>
    </Box>
  );
}

export default IPManage;
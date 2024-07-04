import AddIPAddressForm from '@/components/AddIPAddressForm';
import BaseModal from '@/components/BaseModal';
import DataTable from '@/components/datatable';
import axios from '@/utils/axios';
import { ipTableColumns } from '@/utils/datatables';
import { Box, Button, Card, Flex, Text, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const IPManage = () => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const [data, setData] = useState([])

  useEffect(() => {
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
          <DataTable cols={ipTableColumns} data={data} />
        </Box>

      </Card>
      <BaseModal isOpen={isOpen} onClose={onClose} title="Add IP Address">
        <AddIPAddressForm onClose={onClose} />
      </BaseModal>
    </Box>
  );
}

export default IPManage;
import DataTable from '@/components/datatable';
import axios from '@/utils/axios';
import { auditTableColumns } from '@/utils/datatables';
import { Box, Card, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const Audit = () => {
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const res = await axios.get("/api/audit");
        if (res.data !== undefined) {
          setData(res.data.data)
          return;
        }
      } catch (e) {
        console.log(e);
      }
    }
    fetchLogs();
  }, [])
  return (
    <Box>
      <Card flexDirection='column' w='100%' p='20px' overflowX={{ sm: 'scroll', lg: 'hidden' }}>
        <Flex px='25px' mb="8px" justifyContent='space-between' align='center'>
          <Text color={textColor} fontSize='22px' mb="4px" fontWeight='700' lineHeight='100%'>
            Log History
          </Text>
        </Flex>
        <Box>
          <DataTable cols={auditTableColumns} data={data} />
        </Box>
      </Card>
    </Box>
  );
}

export default Audit;
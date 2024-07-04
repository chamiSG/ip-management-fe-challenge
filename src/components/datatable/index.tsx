import {
  Box,
  Button,
  Flex,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  Divider,
  useColorModeValue,
  Badge,
} from "@chakra-ui/react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Status } from "@/types";
import { formatDate } from "@/utils";

const columnHelper = createColumnHelper<any>();

const DataTable = (props: { data: any, cols: any, onChange?: (id: any) => void }) => {
  const { data, cols, onChange } = props;
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");

  const columns = cols?.map((col: any) => columnHelper.accessor(col.id, {
    id: col.id,
    header: () => (
      <Text
        justifyContent="space-between"
        align="center"
        fontSize={{ sm: "10px", lg: "12px" }}
        color="gray.400"
      >
        {col.label}
      </Text>
    ),
    cell: (info: any) => {
      let variant = 'brand';
      switch (info.getValue()) {
        case Status.LOGIN:
          variant = 'success';
          break;
        case Status.IP:
          variant = 'brand';
          break;
        default:
          variant = 'brand';
      }
      const parsingElement = (label: string) => {
        if (label === "Type") {
          return (
            <Badge
              variant={variant}
              fontSize="sm"
              fontWeight="500"
              whiteSpace={"nowrap"}
              textOverflow={"ellipsis"}
              overflow={"hidden"}
              width={"fit"}
            >
              {info.getValue()}
            </Badge>
          )
        } else if (label === "Date") {
          return (
            <Text color={textColor} fontSize="sm" fontWeight="500" whiteSpace={'nowrap'} textOverflow={'ellipsis'} overflow={'hidden'} width={'full'}>
              {formatDate(info.getValue())}
            </Text>
          )
        } else if (label === "Edit" && onChange) {
          return(
            <Button variant={'brand'} onClick={() => onChange(info.getValue())}>
              Edit
            </Button>
          )
        } else {
          return (
            <Text color={textColor} fontSize="sm" fontWeight="500" whiteSpace={'nowrap'} textOverflow={'ellipsis'} overflow={'hidden'} width={'full'}>
              {info.getValue()}
            </Text>
          )
        }
      }
      return (
        <Flex align="center">
          {parsingElement(col.label)}
        </Flex>
      )
    },
  }))

  const table = useReactTable({
    data: data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
  });

  return (
    <Box>
      <Box overflow={'auto'}>
        <Table variant="simple" color="gray.500" mb="24px" mt="12px">
          <Thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <Th
                      key={header.id}
                      colSpan={header.colSpan}
                      pe="10px"
                      borderColor={borderColor}
                      cursor="pointer"
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      <Flex
                        justifyContent="space-between"
                        align="center"
                        fontSize={{ sm: "10px", lg: "12px" }}
                        color="gray.400"
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: "",
                          desc: "",
                        }[header.column.getIsSorted() as string] ?? null}
                      </Flex>
                    </Th>
                  );
                })}
              </Tr>
            ))}
          </Thead>
          <Tbody>
            {table.getRowModel().rows.length !== 0 && table.getRowModel().rows.slice(0, 11)
              .map((row: any) => {
                return (
                  <Tr key={row.id}>
                    {row.getVisibleCells().map((cell: any) => {
                      return (
                        <Td
                          key={cell.id}
                          fontSize={{ sm: "14px" }}
                          minW={{ sm: "150px", md: "200px", lg: "auto" }}
                          borderColor="transparent"
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </Td>
                      );
                    })}
                  </Tr>
                );
              })}
            {table.getRowModel().rows.length === 0 && (
              <Tr>
                <Td borderColor="transparent" colSpan={table.getHeaderGroups()[0].headers.length} py={20} w={'full'} justifyContent={'center'}>
                  <Text textAlign={'center'}>No Data</Text>
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </Box>

      <Divider orientation="horizontal" />
      <Flex justifyContent={"space-between"} px={5} pt={5}>
        <Flex w={"full"}>
          <Text>
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </Text>
        </Flex>
        <Flex gap={2}>
          <Button
            variant="outline"
            borderRadius={12}
            padding={2}
            fontSize={"14px"}
            onClick={() => table.previousPage()}
            isDisabled={!table.getCanPreviousPage()}
          >
            <FaChevronLeft />
          </Button>
          <Button
            variant="outline"
            borderRadius={12}
            padding={2}
            fontSize={"14px"}
          >
            {table.getState().pagination.pageIndex + 1}
          </Button>
          <Button
            variant="outline"
            borderRadius={12}
            padding={2}
            fontSize={"14px"}
            onClick={() => table.nextPage()}
            isDisabled={!table.getCanNextPage()}
          >
            <FaChevronRight />
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
export default DataTable

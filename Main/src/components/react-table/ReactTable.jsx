import React from 'react';
import { useState,useEffect,useMemo } from 'react';
import axios from 'axios';
import {useTable} from "react-table";

import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Center,
    Spinner,
  } from '@chakra-ui/react'


const url = "https://fakestoreapi.com/products";

const rows = [
    {
      reg_id : "2019-117-793",
      name : "Shamik Shafkat",
      roll : "AE-10",
      year : "2nd",
      semester : "2nd",
      session : "2019-2020",
    },
    {
      reg_id : "2019-117-793",
      name : "Shamik Shafkat",
      roll : "AE-10",
      year : "2nd",
      semester : "2nd",
      session : "2019-2020", 
    },
    {
      reg_id : "2019-117-793",
      name : "Shamik Shafkat",
      roll : "AE-10",
      year : "2nd",
      semester : "2nd",
      session : "2019-2020",
    }
  ];

const tableColumn = [
    {
        Header : "Reg_ID",
        accessor : "reg_id",
    },
    {
        Header : "Name",
        accessor : "name",
    },
    {
        Header : "Roll",
        accessor : "roll"
    },
    {
        Header : "Year",
        accessor : "year"
    },
    {
        Header : "Semester",
        accessor : "semester"
    },
    {
        Header : "Session",
        accessor : "session"
    }
] ;


const ReactTable = () => {
    const [students,setStudents] = useState([]);

    const columns = useMemo(() => tableColumn, []);
    const data = useMemo(() => students, [students]);

    const {getTableProps,getTableBodyProps,headerGroups,rows,prepareRow} = useTable({
        columns : columns,
        data : data,
    });

    useEffect(()=>{
        const fetchStudents = async()=>{
            try {
                const {data} = await axios.get(url);
                setStudents(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchStudents();
    },[])

    if(students.length===0) return (
        <Center>
            <Spinner/>
        </Center>
    );


  return (
    <>
    <TableContainer>
  <Table {...getTableProps()}>
    <TableCaption>Student List</TableCaption>
    <Thead>
        {
            headerGroups.map((headerGroup)=>(    
            <Tr {...headerGroup.getHeaderGroupProps()}>
                {
                    headerGroup.headers.map((column)=>(
                        <Th {...column.getHeaderProps()}>
                            {
                                column.render("Header")
                            }
                        </Th>
                    ))
                }
            </Tr>
            ))
        }
    </Thead>
    <Tbody {...getTableBodyProps()}>
      {
        rows.map((row,i)=>{
            prepareRow(row);
            return <Tr {...row.getRowProps()}> 
            {
                row.cells.map((cell)=>(
                    <Td {...cell.getCellProps()}>
                        {
                            cell.render("Cell")
                        }

                    </Td>
                ))
            }

            </Tr>
        })
      }
    </Tbody>
  </Table>
</TableContainer>
      
</>
  );
}

export default ReactTable;

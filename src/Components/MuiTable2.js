import React from 'react'
import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper
} from '@mui/material'


const MuiTable2 = ()=>{
    
    const tableData = [{
        "id": 1,
        "first_name": "Wilone",
        "last_name": "Droghan",
        "gender": "Bigender",
        "ip_address": "85.104.92.99"
      }, {
        "id": 2,
        "first_name": "Renard",
        "last_name": "Pirazzi",
        "gender": "Male",
        "ip_address": "87.207.45.15"
      }, {
        "id": 3,
        "first_name": "Levi",
        "last_name": "Duinkerk",
        "gender": "Male",
        "ip_address": "236.58.235.156"
      }, {
        "id": 4,
        "first_name": "Rowe",
        "last_name": "Lampett",
        "gender": "Female",
        "ip_address": "249.59.122.246"
      }, {
        "id": 5,
        "first_name": "Laurie",
        "last_name": "Drains",
        "gender": "Bigender",
        "ip_address": "12.88.185.193"
      }, {
        "id": 6,
        "first_name": "Tildy",
        "last_name": "Tissell",
        "gender": "Bigender",
        "ip_address": "174.33.149.121"
      }, {
        "id": 7,
        "first_name": "Bambi",
        "last_name": "Fearnehough",
        "gender": "Female",
        "ip_address": "148.15.48.103"
      }, {
        "id": 8,
        "first_name": "Luis",
        "last_name": "Lamcken",
        "gender": "Male",
        "ip_address": "61.158.47.56"
      }, {
        "id": 9,
        "first_name": "Augusto",
        "last_name": "Goom",
        "gender": "Male",
        "ip_address": "20.175.254.243"
      }, {
        "id": 10,
        "first_name": "Josephine",
        "last_name": "Peacher",
        "gender": "Female",
        "ip_address": "66.69.216.55"
    }]

    return (
        <>
            Use React Tables package for better exp<br/><br/><br/>
            <TableContainer component={Paper} sx={{maxHeight: '400px'}}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>Gender</TableCell>
                            <TableCell align='center'>IP Address</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            tableData.map((row)=>{
                                return (
                                    <TableRow
                                        key={row.id}
                                        sx={{ '&:last-child td, &:last-child th': {border: 0}}}
                                    >
                                        <TableCell>{row.id}</TableCell>
                                        <TableCell>{row.first_name}</TableCell>
                                        <TableCell>{row.last_name}</TableCell>
                                        <TableCell>{row.gender}</TableCell>
                                        <TableCell align='center'>{row.ip_address}</TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default MuiTable2

import React from "react"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { MonthlyPurchasesQuery } from 'generated/graphql'

type PurchasesType = {
  data: MonthlyPurchasesQuery
}

const parseDate = (dateString: string) => {
  const date = new Date(dateString)
  const month = Number(date.getMonth()) + 1
  return (date.getFullYear() + '/' + String(month) + '/' + date.getDate())
}

const PurchasesTable: React.FC<PurchasesType> = ({data}) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>date</TableCell>
            <TableCell align="right">menu</TableCell>
            <TableCell align="right">store</TableCell>
            <TableCell align="right">cafe/bean</TableCell>
            <TableCell align="right">volume</TableCell>
            <TableCell align="right">price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.monthlyPurchases?.map((row: any) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {parseDate(row.purchaseDate)}
              </TableCell>
              <TableCell align="right">{row.menu}</TableCell>
              <TableCell align="right">{row.store?.name}</TableCell>
              <TableCell align="right">{row.coffeeType}</TableCell>
              <TableCell align="right">{row.volume}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default PurchasesTable
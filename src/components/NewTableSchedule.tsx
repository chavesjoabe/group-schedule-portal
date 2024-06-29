import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { data, GroupScheduleResponse } from '../data';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
  price: number,
) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  };
}

function Row(props: { row: GroupScheduleResponse }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  console.log(row);
  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.serviceDayName}
        </TableCell>
        <TableCell align="right">{row.weekDayName}</TableCell>
        <TableCell align="right">{row.ministry}</TableCell>
        <TableCell align="right">{10}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Participantes
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Ministro</TableCell>
                    <TableCell align="right">Vocal 1</TableCell>
                    <TableCell align="right">Vocal 2</TableCell>
                    <TableCell align="right">Vocal 3</TableCell>
                    <TableCell align="right">Guitarra</TableCell>
                    <TableCell align="right">Baixo</TableCell>
                    <TableCell align="right">Teclado</TableCell>
                    <TableCell align="right">Bateria</TableCell>
                    <TableCell align="right">Trompete</TableCell>
                    <TableCell align="right">Sax</TableCell>
                    <TableCell align="right">Extra</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableCell component="th" scope="row"> {row.ministry} </TableCell>
                  <TableCell align="right">{row.vocal_soprano}</TableCell>
                  <TableCell align="right">{row.vocal_alto}</TableCell>
                  <TableCell align="right"> {row.vocal_tenor} </TableCell>
                  <TableCell align="right"> {row.guitar_player} </TableCell>
                  <TableCell align="right"> {row.bassist} </TableCell>
                  <TableCell align="right"> {row.pianist} </TableCell>
                  <TableCell align="right"> {row.drummer} </TableCell>
                  <TableCell align="right"> {row.horn_player} </TableCell>
                  <TableCell align="right"> {row.sax_player} </TableCell>
                  <TableCell align="right"> {row.extra} </TableCell>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
//   createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
//   createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
//   createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
// ];
const rows = data;

export const NewTableSchedule = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Dia</TableCell>
            <TableCell align="right">Dia Semana</TableCell>
            <TableCell align="right">Ministro</TableCell>
            <TableCell align="right">Total Participantes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.serviceDayName} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


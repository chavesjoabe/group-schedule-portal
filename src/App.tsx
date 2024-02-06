import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { data, GroupScheduleResponse } from './data';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const createTableHeaders = (groupSchedule: GroupScheduleResponse[]): string[] => {
  const [data] = groupSchedule;
  return Object.keys(data);
};

const getHeaderDescription = (key: string) => {
  const headerMapper: Record<string, string> = {
    serviceDayName: 'Dia',
    weekDayName: 'Dia - Semana',
    drummer: 'Bateria',
    pianist: 'Teclado',
    guitar_player: 'Guitarra',
    bassist: 'Baixo',
    acoustic_guitar_player: 'Violão',
    vocal_alto: 'Contralto',
    vocal_soprano: 'Soprano',
    vocal_tenor: 'Tenor',
    ministry: 'Ministro',
    horn_player: 'Trompete',
    sax_player: 'Sax',
    extra: 'Extra',
  };

  return headerMapper[key];
}

const createTableRow = (groupSchedule: GroupScheduleResponse): string[] => {
  const tableHeaders = createTableHeaders([groupSchedule]);

  const response = tableHeaders.map((header) => {
    return groupSchedule[header as keyof GroupScheduleResponse];
  });

  return response;
}

export default function App() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow style={{ fontWeight: 'bold' }}>
            {createTableHeaders(data).map(item => (
              <StyledTableCell style={{ fontWeight: 'bold' }}>{getHeaderDescription(item)}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <StyledTableRow key={item.serviceDayName}>
              {createTableRow(item).map(row => (
                <StyledTableCell>{row}</StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

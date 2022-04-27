import React, {useEffect, useRef} from 'react';
import {
  Box, Container, Table,
  TableBody, TableCell, TableHead,
  TableRow, Typography,
} from '@mui/material';
import {IUser} from '../../models/IUser';
import {table} from './DataTableStyle';

interface IDataTable {
  users: IUser [],
  filter: string,
  scrollHandler: () => void,
}

function DataTable({users, filter, scrollHandler}: IDataTable) {
  const ref = useRef<HTMLTableSectionElement | null>(null);

  function checkBottom() {
    if (ref.current) {
      if ((ref.current.scrollHeight - (ref.current.scrollTop + ref.current.clientHeight)) < 30) {
        scrollHandler();
      }
    }
  }
  return (
    <Box>
      <Container
        sx={{p: 2}}
      >
        {users.some((user) => user.name.includes(filter)) ?
          <Table sx={table}>
            <TableHead>
              <TableRow>
                <TableCell>Пользователь</TableCell>
                <TableCell align="right">Телефон</TableCell>
              </TableRow>
            </TableHead>
            <TableBody ref={ref} onScroll={checkBottom}>
              {users.map((user) => {
                return user.name.includes(filter) && (
                  <TableRow
                    key={user.id}
                  >
                    <TableCell>{user.name}</TableCell>
                    <TableCell align="right">{user.phone}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table> :
          <Typography>
            По указанным фильтрам записей не найдено
          </Typography>
        }
      </Container>
    </Box>
  );
}

export default DataTable;

import React from 'react';
import {
  Box, Container, Table,
  TableBody, TableCell, TableHead,
  TableRow, Typography,
} from '@mui/material';
import {IUser} from '../../models/IUser';

interface IDataTable {
  users: IUser [],
  filter: string,
}

function DataTable({users, filter}: IDataTable) {
  return (
    <Box>
      <Container
        sx={{p: 2}}
      >
        {users.some((user) => user.name.includes(filter)) ?
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Пользователь</TableCell>
                <TableCell align="right">Телефон</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
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

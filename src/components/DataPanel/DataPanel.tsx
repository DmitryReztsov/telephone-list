import React, {useEffect, useState} from 'react';
import {Box, Skeleton} from '@mui/material';
import DataFilter from '../DataFilter/DataFilter';
import DataTable from '../DataTable/DataTable';
import {api} from '../../service/api';
import {IUser} from '../../models/IUser';

function DataPanel() {
  const [filter, setFilter] = useState<string>('');
  const [newUsers, setNewUsers] = useState<IUser []>([]);
  const {data: users, isLoading, error} = api.useGetUsersQuery(10);

  function scrollHandler() {
    // меняем местами первые две записи
    setNewUsers((prev) => {
      return prev.slice(2).concat(...prev.slice(0,2));
    })
  };

  useEffect(() => {
    users && setNewUsers(users);
  }, [users])

  if (error) {
    return <Box>Произошла ошибка!</Box>
  }

  return (
    <Box
      component={'main'}
    >
      <DataFilter
        filter={filter}
        change={(e: React.ChangeEvent<HTMLInputElement>) => setFilter(e.target.value)}
      />
      {isLoading ?
        <Skeleton
          variant="rectangular"
          animation="wave"
          width={'100%'}
          height={200}
        /> :
        <DataTable
          users={newUsers || []}
          filter={filter}
          scrollHandler={scrollHandler}
        />
      }
    </Box>
  );
}

export default DataPanel;

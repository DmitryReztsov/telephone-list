import React, {useEffect, useState} from 'react';
import {Box, Skeleton} from '@mui/material';
import DataFilter from '../DataFilter/DataFilter';
import DataTable from '../DataTable/DataTable';
import {api} from '../../service/api';

function DataPanel() {
  const [limit, setLimit] = useState<number>(1);
  const [filter, setFilter] = useState<string>('');
  const [isBottom, setIsBottom] = useState<boolean>(false);
  const {data: users, isLoading, error} = api.useGetUsersQuery(limit);

  // не понял какой именно тип ивента нужно указать
  function scrollHandler(e: any) {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
      setIsBottom(true);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return () => document.removeEventListener('scroll', scrollHandler);
  }, [])

  // если изначально нету скролла, дополняем список
  useEffect(() => {
    if (document.body.scrollHeight <= window.innerHeight) {
      setLimit(prev => prev + 2);
    }
  }, [users])

  useEffect(() => {
    if (isBottom) {
      setLimit(prev => prev + 2);
      setIsBottom(false);
    }
  }, [isBottom])

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
          users={users || []}
          filter={filter}
        />
      }
    </Box>
  );
}

export default DataPanel;

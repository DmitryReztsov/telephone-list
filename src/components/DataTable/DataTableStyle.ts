import {flex, flexbox} from '../../style/templates/flex';

export const table = {
  tableLayout: 'fixed',
  ...flexbox('stretch', 'stretch', 'column'),
  '& thead': {
    ...flex(),
    borderBottom: '1px solid rgba(224, 224, 224, 1)',
    '& tr': {
      ...flexbox('space-between', 'stretch'),
    },
  },
  '& tbody': {
    height: '300px',
    overflow: 'auto',
    ...flex(),
    ...flexbox('stretch', 'stretch', 'column'),
    '&::-webkit-scrollbar': {
      width: '2px',
    },
    '&::-webkit-scrollbar-track': {
      border: '1px solid rgba(224, 224, 224, 1)',
    },
    '&::-webkit-scrollbar-thumb': {
      width: '2px',
      borderRadius: '2px',
      backgroundColor: 'rgb(161,160,160)',
    },
    '& tr': {
      ...flexbox('space-between', 'stretch'),
      borderBottom: '1px solid rgba(224, 224, 224, 1)',
    },
  },
  '& th,td': {
    borderBottom: 'none',
  }
};

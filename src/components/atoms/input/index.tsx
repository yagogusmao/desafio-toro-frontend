import * as React from 'react';
import TextField from '@mui/material/TextField';

const _Input = ({children}: {children: String}) => {
  return (
      <TextField id="standard-basic" label={children} variant="standard" />
  );
}

export {_Input};
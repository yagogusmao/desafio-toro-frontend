import * as React from 'react';
import Typography from '@mui/material/Typography';

const _Title = ({children}: {children: String}) => {
  return (
    <Typography variant="h4" component="div" gutterBottom>
        {children}
    </Typography>
  );
}

const _SubTitle = ({children}: {children: String}) => {
  return (
    <Typography variant="h6" component="div" gutterBottom>
        {children}
    </Typography>
  );
}

const _Text = ({children}: {children: String}) => {
    return (
      <Typography component="div" gutterBottom>
          {children}
      </Typography>
    );
  }

export {_Title, _SubTitle, _Text};
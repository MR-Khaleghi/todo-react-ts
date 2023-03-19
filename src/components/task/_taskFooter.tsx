import React, { FC } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Typography,
  Switch,
  FormControlLabel,
  Button,
} from '@mui/material';
import { ITaskFooter } from '../taskCounter/interfaces/ITaskFooter';

const TaskFooter: FC<ITaskFooter> = (props) => {
  const {
    onClick = (e) => console.log(e),
    onStatusChange = (e) => console.log(e),
  } = props;
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mt={4}>
      <FormControlLabel
        label="in Progress"
        control={<Switch onChange={onStatusChange} color="warning" />}
      />

      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{ color: '#ffffff' }}
        onClick={onClick}>
        Mark Complete
      </Button>
    </Box>
  );
};

TaskFooter.propTypes = {
  onClick: PropTypes.func,
  onStatusChange: PropTypes.func,
};

export default TaskFooter;

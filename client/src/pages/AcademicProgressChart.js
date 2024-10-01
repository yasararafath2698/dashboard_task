import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const dataset = [
  { task: 'Assignment 1', completed: 25, pending: 75 },
  { task: 'Assignment 2', completed: 50, pending: 50 },
  { task: 'Quiz 1', completed: 90, pending: 10 },
  { task: 'Quiz 2', completed: 75, pending: 25 },
  { task: 'Quiz 3', completed: 50, pending: 50 },
  { task: 'Presentation 1', completed: 70, pending: 30 },
  { task: 'Presentation 2', completed: 40, pending: 60 },
  { task: 'Lab 1', completed: 50, pending: 50 },
  { task: 'Lab 2', completed: 80, pending: 20 },
  { task: 'Viva', completed: 95, pending: 5 },
];

const BarSegment = ({ width, color }) => (
  <Box
    sx={{
      height: 30,
      width: `${width}%`,
      backgroundColor: color,
      transition: 'width 0.3s ease',
    }}
  />
);

const AcademicProgressChart = () => {
  return (
    <Box sx={{ width: '100%', maxWidth: 800, margin: 'auto' }}>
      <Typography variant="h6" align="center" gutterBottom>
        Academic Progress Chart
      </Typography>
      <Paper elevation={3} sx={{ p: 2, position: 'relative' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {dataset.map((item, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="body2" sx={{ width: 120, flexShrink: 0 }}>
                {item.task}
              </Typography>
              <Box sx={{ flexGrow: 1, display: 'flex' }}>
                <BarSegment width={item.completed} color="#4caf50" />
                <BarSegment width={item.pending} color="#bdbdbd" />
              </Box>
              <Typography variant="caption" sx={{ width: 60, textAlign: 'right' }}>
                {item.completed}%
              </Typography>
            </Box>
          ))}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
            <Box sx={{ width: 20, height: 20, backgroundColor: '#4caf50', mr: 1 }} />
            <Typography variant="caption">Completed</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: 20, height: 20, backgroundColor: '#bdbdbd', mr: 1 }} />
            <Typography variant="caption">Pending</Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default AcademicProgressChart;
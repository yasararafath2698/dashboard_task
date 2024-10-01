import React, { useContext } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
// import { ApiContext } from '../layout/MainLayout';

function AssessmentProgressChart() {
    // const { assessmentProgress } = useContext(ApiContext);
    const dataset = [
        {
            assessment: 'Assignment',
            completed: 60,
            pending: 40,
        },
        {
            assessment: 'Quiz',
            completed: 80,
            pending: 20,
        },
        {
            assessment: 'Presentation',
            completed: 55,
            pending: 45,
        },
        {
            assessment: 'Lab',
            completed: 85,
            pending: 15,
        },
        {
            assessment: 'Viva',
            completed: 100,
            pending: 0,
        },
    ];
    // Add a fallback if assessmentProgress is null or undefined
    // if (!assessmentProgress || assessmentProgress.length === 0) {
    //     return <p>Loading chart data...</p>; // You can display a loading indicator here
    // }

    const chartSetting = {
        yAxis: [
            {
                label: 'Progress (%)',
            },
        ],
        width: 600,
        height: 300,
        sx: {
            [`.${axisClasses.left} .${axisClasses.label}`]: {
                transform: 'translate(-10px, 0)',
            },
        },
    };

    return (
        <BarChart
            dataset={dataset}
            xAxis={[{ scaleType: 'band', dataKey: 'assessment', label: 'Assessments' }]}
            series={[
                {
                    dataKey: 'completed',
                    label: 'Completed',
                    color: '#90b17c', 
                },

                {
                    dataKey: 'pending',  
                    label: 'Pending',
                    color: '#e8e8e8', 
                },
            ]}
            {...chartSetting}
        />
    );
}

export default AssessmentProgressChart;

import React, { useContext } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { ApiContext } from '../layout/MainLayout';

function AssessmentProgressChart() {
    const { assessmentProgress } = useContext(ApiContext);

    if (!assessmentProgress || assessmentProgress.length === 0) {
        return <p>Loading chart data...</p>;    
    }

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
            dataset={assessmentProgress}
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

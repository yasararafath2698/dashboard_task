import React, { useContext } from 'react';
import { LineChart, Line, PointElement, LinearScale, CategoryScale } from '@mui/x-charts';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { ApiContext } from '../layout/MainLayout';
const AttendanceChart = () => {
    const{studentAttendance}=useContext(ApiContext);

    
    if (!studentAttendance || studentAttendance.length === 0) {
        return <p>Loading chart data...</p>;    
    }


    // console.log("chart2",studentAttendance)
    // const dataset = [
    //     { week: '1/7', attendance: 29 },
    //     { week: '8/7', attendance: 57 },
    //     { week: '15/7', attendance: 20 },
    //     { week: '22/7', attendance: 84 },
    //     { week: '29/7', attendance: 52 },
    //     { week: '5/8', attendance: 64 },
    //     { week: '12/8', attendance: 87 },
    //     { week: '19/8', attendance: 58 },
    //     { week: '26/8', attendance: 90 },
    //     { week: '2/9', attendance: 97 },
    //     { week: '9/9', attendance: 78 },
    //     { week: '16/9', attendance: 55 },
    //     { week: '23/9', attendance: 75 },
    //     { week: '30/9', attendance: 53 },
    //     { week: '14/10', attendance: null },
    //     { week: '21/10', attendance: null }
    // ];
    // console.log("chart Attendance",dataset)

    return (
        <LineChart
            width={800}
            height={300}
            series={[
                {
                    data: studentAttendance.map(item => item.attendance),
                    area: false,
                    showMark: true,
                    color: '#682487',
                    curve: 'linear'
                },
            ]}
            xAxis={[
                {
                    scaleType: 'point',
                    data: studentAttendance.map(item => item.week),
                    tickLabelStyle: { fontSize: 10 },
                    label: 'Weeks',
                },
            ]}
            yAxis={[
                {
                    min: 0,
                    max: 100,
                    tickNumber: 5,
                    tickLabelStyle: { fontSize: 10 },
                    label: 'Attendance',
                    valueFormatter: (value) => `${value}%`,
                },
            ]}
            sx={{
                '.MuiLineElement-root': {
                    strokeWidth: 2,
                },
                '.MuiMarkElement-root': {
                    stroke: '#8884d8',
                    scale: '0.6',
                    fill: '#000',
                    strokeWidth: 2,
                },
                '.MuiChartsAxis-label ': {
                    transform: 'translate(-10px, 0px)',
                },

            }}
            disableAxisListener
        />
    );
};

export default AttendanceChart;

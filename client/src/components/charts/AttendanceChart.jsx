import React, { useContext } from 'react';
import { LineChart} from '@mui/x-charts';
import { ApiContext } from '../layout/MainLayout';
const AttendanceChart = () => {
    const { studentAttendance } = useContext(ApiContext);
    if (!studentAttendance || studentAttendance.length === 0) {
        return <p>Loading chart data...</p>;
    }
    return (
        <LineChart
            width={600}
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
                '.MuiChartsAxis-label': {
                    transform: 'translate(-10px, 0)'
                }

            }}
            disableAxisListener

        />
    );
};

export default AttendanceChart;

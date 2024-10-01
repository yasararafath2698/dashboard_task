import React, { useContext } from 'react'
import { Box, Paper, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import AssessmentProgressChart from '../charts/AssessmentProgressChart';
import AttendanceChart from '../charts/AttendanceChart'
import { ApiContext } from '../layout/MainLayout';

function Dashboard() {
    const { course } = useContext(ApiContext);

    const StyledCard = styled(Paper)(({ theme }) => {
        return {
            backgroundColor: '#d6d9de',
            padding: '20px',
            boxShadow: 'none',

            [theme.breakpoints.down('sm')]: {

                flex: 1,
            },
        }
    })
    return (
        <Box>
            <Stack mb={3} direction={'row'} spacing={{ xs: 1, md: 2 }} flexWrap={'wrap'} useFlexGap >
                <StyledCard>
                    <Stack direction={'row'} spacing={{ xs: 1, md: 2 }} alignItems={'center'} flexWrap={'nowrap'} useFlexGap >
                        <Typography component={'span'} display={'inline-block'} width={'100%'}>Total Students</Typography>
                        <Typography component={'span'} color='text.secondary' fontSize={20} fontWeight={600}>{course && course.totalStudents}</Typography>
                    </Stack>
                </StyledCard>
                <StyledCard>
                    <Stack direction={'row'} spacing={{ xs: 1, md: 2 }} alignItems={'center'} flexWrap={'nowrap'} useFlexGap >
                        <Typography component={'span'} display={'inline-block'} width={'100%'}>Course Average Mark</Typography>
                        <Typography component={'span'} color='text.secondary' fontSize={20} fontWeight={600}>{course && course.
courseAverageMark}</Typography>
                    </Stack>
                </StyledCard>
            </Stack>
            <Box my={3}>
                <Typography mb={2} variant='h5'>Assessment Progresss</Typography>
                <AssessmentProgressChart></AssessmentProgressChart>
            </Box>
            <Box my={3}>
                <Typography mb={2} variant='h5'>Student Attendance</Typography>
                <AttendanceChart></AttendanceChart>

            </Box>
        </Box>
    )
}

export default Dashboard
import React, { createContext, useEffect, useState } from 'react'
import { Box } from '@mui/material'
import CourseDetails from '../courseDetails/CourseDetails'
import Course from '../courses/Course';
import axios from 'axios';

export const ApiContext = createContext(null);

function MainLayout() {

    const [course, setCourse] = useState(null);
    const [credicts, setCredicts] = useState(null);
    const [outcomes, setOutcomes] = useState(null);
    const [mapCourse, setMapCourse] = useState(null);
    const [assessmentProgress, setassessmentProgress] = useState(null);
    const [studentAttendance, setstudentAttendance] = useState(null);

    useEffect(() => {
        axios.all([
            axios.get('http://localhost:3004/courseInfo'),
            axios.get('http://localhost:3004/credits'),
            axios.get('http://localhost:3004/courseOutcomes'),
            axios.get('http://localhost:3004/mappedToCourse'),
            axios.get('http://localhost:3004/assessmentProgress'),
            axios.get('http://localhost:3004/studentAttendance'),

        ])
            .then(axios.spread((courseInfoResponse, creditsResponse, outcomeResponse, mapCourseResponse,assessmentProgressResponse,studentAttendanceResponse) => {
                setCourse(courseInfoResponse.data);
                setCredicts(creditsResponse.data);
                setOutcomes(outcomeResponse.data);
                setMapCourse(mapCourseResponse.data);
                setassessmentProgress(assessmentProgressResponse.data);
                setstudentAttendance(studentAttendanceResponse.data);

            }))
            .catch((error) => {
                alert("No data found, Make sure api connection in server");
                if (error.response) {
                    console.log('Response error:', error.response.data);
                    console.log('Status code:', error.response.status);
                } else if (error.request) {
                    console.log('Request error:', error.request);
                } else {
                    console.log('Error:', error.message);
                }
            });
    }, []);

    return (
        <>
            <ApiContext.Provider value={{course,credicts,outcomes,mapCourse,assessmentProgress,studentAttendance}}>
                <Box component={'section'}>
                    <Box p={2} display={'flex'} flexWrap={'wrap'} gap={2} >
                        <Box p={1.5} component={'sidebar'} width={{ xs: '100%', md: '240px' }} border={'1px solid'} borderColor={'divider'} borderRadius={2}>
                            <Course />
                        </Box>
                        <Box p={1.5} component={'main'} flex={1}>
                            <CourseDetails />
                        </Box>
                    </Box>
                </Box >
            </ApiContext.Provider>

        </>
    )

}

export default MainLayout
import React, { useContext } from 'react'
import { styled } from '@mui/material/styles';
import { Box, Chip, Divider, Stack, Typography } from '@mui/material';
import { ApiContext } from '../layout/MainLayout';


function Course() {
    const {course,credicts,outcomes,mapCourse} = useContext(ApiContext);

    const StyledPrimaryChip = styled(Chip)(({ theme, color }) => {
        return {
            borderRadius: theme.shape.borderRadius,
            color: color === 'primary' ? theme.palette.text.primary : theme.palette.common.white,
            fontWeight: 600,
        }
    });

    return (
        <Box>
            <Stack >
                <Box mb={0.7}>
                    <Typography variant='h6' color='text.secondary'>Course Code</Typography>
                    <Typography variant='fs_13'>{course && course.courseCode}</Typography>
                </Box>
                <Divider orientation='horizontal' flexItem />
                <Box my={0.7}>
                    <Typography variant='h6' color='text.secondary'>Course Name</Typography>
                    <Typography variant='fs_13'>{course && course.courseName}</Typography>
                </Box>
                <Divider orientation='horizontal' flexItem />
                <Box my={0.7}>
                    <Typography variant='h6' color='text.secondary'>Course Type</Typography>
                    <Typography variant='fs_13'>{course && course.courseType}</Typography>
                </Box>

                <Divider orientation='horizontal' flexItem />
                <Box my={0.7}>
                    <Typography variant='h6' color='text.secondary'>Course Period</Typography>
                    <Typography variant='fs_13'>{course && course.coursePeriod}</Typography>
                </Box>
                <Divider orientation='horizontal' flexItem />
                <Box my={0.7}>
                    <Typography mb={0.5} variant='h6' color='text.secondary'>Credits({credicts && credicts.total})</Typography>
                    <Typography variant='fs_13' display={'block'} >lecture - <Typography component={'span'} fontWeight={600}>{credicts && credicts.breakdown.Lecture}</Typography> </Typography>
                    <Typography variant='fs_13' display={'block'} >Tutorial - <Typography component={'span'} fontWeight={600}>{credicts && credicts.breakdown.Tutorial}</Typography> </Typography>
                    <Typography variant='fs_13' display={'block'} >Pratical - <Typography component={'span'} fontWeight={600}>{credicts && credicts.breakdown.Practical}</Typography> </Typography>
                    <Typography variant='fs_13' display={'block'} >Project - <Typography component={'span'} fontWeight={600}>{credicts && credicts.breakdown.Project}</Typography> </Typography>
                </Box>
                <Divider orientation='horizontal' flexItem />
                <Box my={0.7} mb={1.4}>
                    <Typography mb={0.5} variant='h6' color='text.secondary'>Course Outcomes (COs)</Typography>
                    <Stack direction={'row'} spacing={1.5} flexWrap={'wrap'} useFlexGap>
                        {outcomes && outcomes.map((courseOutcome, i) => (
                            <StyledPrimaryChip key={i} label={courseOutcome.outcome} color='primary' />
                        ))}
                    </Stack>
                </Box>
                <Divider orientation='horizontal' flexItem />
                <Box my={0.7}>
                    <Typography mb={0.5} variant='h6' color='text.secondary'>Mapped to this Course</Typography>
                    <Stack direction={'row'} spacing={1.5} flexWrap={'wrap'} useFlexGap>
                        {mapCourse && mapCourse.map((courseMap, i) => (
                            <StyledPrimaryChip key={i} label={courseMap.mappedTo} color='secondary' />
                        ))}
                    </Stack>
                </Box>
            </Stack>
        </Box>
  
    )
}

export default Course
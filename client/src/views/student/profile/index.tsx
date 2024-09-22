import {Box, Chip, Typography} from "@mui/material";
import {observer} from "mobx-react";
import {studentStore} from "../../../mobx/student";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import {useNavigate} from "react-router-dom";

export const StudentProfile = observer(() => {
    const {profile} = studentStore
    const navigate = useNavigate()
    return (
        <Box sx={{display: 'flex', flexDirection: 'row', gap: '2rem'}} className={'container'}>
            <img src={'../../../../public/imgs/profile.png'}
                 alt={'register'}
                 style={{
                     position: 'absolute',
                     width: '98.5vw',
                     height: '10wh',
                     zIndex: '-100',
                     top: 0,
                     left: 0,
                     overflow: 'hidden'
                 }}/>
            <Box sx={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                <Box>
                    <img src={'../../../../public/imgs/emma.png'}/>
                </Box>

                <Box>
                    <Typography color={'secondary'} sx={{fontWeight: '500'}} variant={'body2'}>О себе</Typography>
                    <Typography>{profile.about}</Typography>
                </Box>
                <Box>
                    <Typography color={'secondary'} sx={{fontWeight: '500'}} variant={'body2'}>Теги</Typography>
                    {profile?.tags?.map((tag) => <Chip label={tag} variant={'outlined'} color={'primary'}/>)}
                </Box>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                <Box sx={{display: 'flex', flexDirection: 'row', gap: '1rem'}}>
                    <Typography variant={'h5'}>Профиль</Typography>
                    <EditOutlinedIcon onClick={() =>navigate('edit')} sx={{cursor: 'pointer'}}/>
                </Box>
                <Box>
                    <Typography color={'secondary'} sx={{fontWeight: '500'}} variant={'body2'}>ФИО</Typography>
                    <Typography>{profile.name}</Typography>
                </Box>
                <Box>
                    <Typography color={'secondary'} sx={{fontWeight: '500'}} variant={'body2'}>Почта</Typography>
                    <Typography>{profile.email}</Typography>
                </Box>
                <Box>
                    <Typography color={'secondary'} sx={{fontWeight: '500'}} variant={'body2'}>Номер</Typography>
                    <Typography>{profile.phone}</Typography>
                </Box>
                <Box>
                    <Typography color={'secondary'} sx={{fontWeight: '500'}} variant={'body2'}>Пол</Typography>
                    <Typography>{profile.sex}</Typography>
                </Box>
                <Box>
                    <Typography color={'secondary'} sx={{fontWeight: '500'}} variant={'body2'}>ВУЗ/СПО</Typography>
                    <Typography>{profile.university}</Typography>
                </Box>
                <Box>
                    <Typography color={'secondary'} sx={{fontWeight: '500'}} variant={'body2'}>Институт</Typography>
                    <Typography>{profile.institute}</Typography>
                </Box>
                <Box>
                    <Typography color={'secondary'} sx={{fontWeight: '500'}} variant={'body2'}>Направление</Typography>
                    <Typography>{profile.specialization}</Typography>
                </Box>
                <Box>
                    <Typography color={'secondary'} sx={{fontWeight: '500'}} variant={'body2'}>Курс</Typography>
                    <Typography>{profile.year}</Typography>
                </Box>
                <Box>
                    <Typography color={'secondary'} sx={{fontWeight: '500'}} variant={'body2'}>Группа</Typography>
                    <Typography>{profile.group}</Typography>
                </Box>
                <Box>
                    <Typography color={'secondary'} sx={{fontWeight: '500'}} variant={'body2'}>Резюме</Typography>
                    <Typography>{profile.group}</Typography>
                </Box>

            </Box>
        </Box>
    )
})
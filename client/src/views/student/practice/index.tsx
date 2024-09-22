import {observer} from "mobx-react";
import {Box, Button, Chip, Typography} from "@mui/material";
import {studentStore} from "../../../mobx/student";
import OutboundIcon from '@mui/icons-material/Outbound';

export const Practice = observer(() => {
    const {practice} = studentStore
    return (
        <Box className={'container'} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <img src={'../../../../public/imgs/practice.png'}
                 alt={'practices'}
                 style={{
                     position: 'absolute',
                     width: '98.9vw',
                     height: '10wh',
                     zIndex: '-100',
                     overflow: 'hidden'
                 }}/>
            <Box sx={{width: '50rem'}}>
                <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Box sx={{display: 'flex', flexDirection: 'row', marginBottom: '1rem'}}>
                        <Typography variant={'h4'} sx={{fontWeight: '500'}}
                                    color={'primary'}>{practice.name}, </Typography>
                        <Typography variant={'h4'} sx={{fontWeight: '700'}}
                                    color={'primary'}> {practice.company}</Typography>
                        <OutboundIcon color={'primary'}/>
                    </Box>
                    <Button variant={'contained'} color={'primary'}
                            sx={{borderRadius: 10}}>откликнуться</Button>
                </Box>

                <Box sx={{
                    padding: '1rem',
                    borderRadius: '20px',
                    backgroundColor: '#F2F6FA',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    justifyContent: 'space-between'
                }}>
                    <Box>
                        <Typography sx={{fontWeight: '700'}} color={'primary'}>Описание:</Typography>
                        <Typography color={'primary'}>{practice.description}</Typography>
                    </Box>
                    <Box>
                        <Typography sx={{fontWeight: '700'}} color={'primary'}>Количество свободных мест:</Typography>
                        <Typography color={'primary'}>{practice.quantity}</Typography>
                    </Box>
                    <Box>
                        <Typography sx={{fontWeight: '700'}} color={'primary'}>Подать документы необходимо
                            до:</Typography>
                        <Typography color={'primary'}>{practice.dateSubmission}</Typography>
                    </Box>
                    <Box>
                        <Typography sx={{fontWeight: '700'}} color={'primary'}>Даты прохождения практики:</Typography>
                        <Typography color={'primary'}>{practice.datePractice}</Typography>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                        <Box sx={{display: 'flex', flexDirection: 'row', gap: '0.5rem', flexWrap: 'wrap'}}>
                            {practice.tags?.map((tag) =>
                                <Chip label={tag} variant={'outlined'} color={'primary'}/>)}
                        </Box>
                    </Box>
                    <Box >
                        <Typography sx={{fontWeight: '700', marginBottom: '1rem'}} color={'primary'}>Тестовое задание:</Typography>
                        <Box sx={{display: 'flex', flexDirection: 'row', gap: '1rem'}}>
                            <Button variant={'contained'} color={'secondary'}
                                    sx={{borderRadius: 10}}>Скачать задание</Button>
                            <Button variant={'contained'} color={'primary'}
                                    sx={{borderRadius: 10}}>Прикрепить задание</Button>
                        </Box>

                    </Box>

                </Box>

            </Box>
        </Box>
    )
})
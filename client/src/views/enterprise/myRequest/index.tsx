import {observer} from "mobx-react";
import {Box, Button, Chip, Typography} from "@mui/material";
import {enterpriseStore} from "../../../mobx/enterprise";
import {useNavigate} from "react-router-dom";

export const Request = observer(() => {
    const {request} = enterpriseStore
    const navigate = useNavigate()
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
                <Box
                    sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Box sx={{display: 'flex', flexDirection: 'row', marginBottom: '1rem'}}>
                        <Typography variant={'h4'} sx={{fontWeight: '500'}}
                                    color={'primary'}>{request.name}, </Typography>
                        <Typography variant={'h4'} sx={{fontWeight: '500'}}
                                    color={'primary'}> {request.company}</Typography>

                    </Box>
                    <Button variant={'contained'} color={'primary'}
                            sx={{borderRadius: 10}}>редактировать</Button>
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
                        <Typography color={'primary'}>{request.description}</Typography>
                    </Box>
                    <Box>
                        <Typography sx={{fontWeight: '700'}} color={'primary'}>Количество свободных мест:</Typography>
                        <Typography color={'primary'}>{request.quantity}</Typography>
                    </Box>
                    <Box>
                        <Typography sx={{fontWeight: '700'}} color={'primary'}>Подать документы необходимо
                            до:</Typography>
                        <Typography color={'primary'}>{request.dateSubmission}</Typography>
                    </Box>
                    <Box>
                        <Typography sx={{fontWeight: '700'}} color={'primary'}>Даты прохождения практики:</Typography>
                        <Typography color={'primary'}>{request.datePractice}</Typography>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                        <Box sx={{display: 'flex', flexDirection: 'row', gap: '0.5rem', flexWrap: 'wrap'}}>
                            {request.tags?.map((tag) =>
                                <Chip label={tag} variant={'outlined'} color={'primary'}/>)}
                        </Box>
                    </Box>
                    <Box>
                        <Typography sx={{fontWeight: '700', marginBottom: '1rem'}} color={'primary'}>Тестовое
                            задание:</Typography>
                        <Box sx={{display: 'flex', flexDirection: 'row', gap: '1rem', justifyContent: 'space-between'}}>
                            <Button variant={'contained'} color={'secondary'}
                                    sx={{borderRadius: 10}}>задание</Button>


                        </Box>
                        <Box sx={{display: 'flex', flexDirection: 'row', gap: '1rem', justifyContent: 'end'}}>
                            <Button variant={'contained'} color={'primary'}
                                    sx={{borderRadius: 10}} onClick={() =>navigate('/enterprise/responses') }>отклики</Button>
                            <Button variant={'contained'} color={'primary'}
                                    sx={{borderRadius: 10}}>подходящие вузы</Button>
                        </Box>
                    </Box>

                </Box>

            </Box>
        </Box>
    )
})
import {observer} from "mobx-react";
import {Box, Button, Card, Chip, Typography} from "@mui/material";
import {enterpriseStore} from "../../../mobx/enterprise";
import {useNavigate} from "react-router-dom";

export const MyRequests = observer(() => {
    const {myRequests} = enterpriseStore
    const navigate = useNavigate()
    return (
        <Box sx={{margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
             className={'container'}>
            <img src={'../../../../public/imgs/practices.png'}
                 alt={'practices'}
                 style={{
                     position: 'absolute',
                     width: '98.9vw',
                     height: '10wh',
                     zIndex: '-100',
                     overflow: 'hidden'
                 }}/>
            <Box>
                <Box
                    sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Typography variant={'h4'} sx={{fontWeight: '700', marginBottom: '1rem'}} color={'primary'}>Мои
                        заявки</Typography>
                    <Button variant={'contained'} color={'secondary'}
                            sx={{borderRadius: 10}}>создать заявку</Button>
                </Box>

                <Box sx={{display: 'flex', flexDirection: 'row', gap: '3rem'}}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem'
                    }}>
                        {myRequests.map((request) =>
                            <Box sx={{
                                padding: '1rem',
                                borderRadius: '20px',
                                borderColor: '#013A72',
                                borderStyle: 'dashed',
                                borderWidth: '2px',
                                /*backgroundColor: '#F2F6FA',*/
                                display: 'flex',
                                flexDirection: 'row',
                                gap: '1rem',
                                justifyContent: 'space-between'
                            }}>
                                <Box>
                                    <Box sx={{display: 'flex', flexDirection: 'row'}}>
                                        <Typography variant={'h5'} sx={{fontWeight: '500'}}
                                                    color={'primary'}>{request.name}, </Typography>
                                        <Typography variant={'h5'} sx={{fontWeight: '700'}}
                                                    color={'primary'}> {request.company}</Typography>
                                    </Box>

                                    <Typography>{request.description}</Typography>
                                </Box>
                                <Box sx={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                                    <Box sx={{display: 'flex', flexDirection: 'row', gap: '0.5rem', flexWrap: 'wrap'}}>
                                        {request.tags?.map((tag) =>
                                            <Chip label={tag} variant={'outlined'} color={'primary'}/>)}
                                    </Box>

                                    <Button variant={'contained'} color={'secondary'}
                                            sx={{borderRadius: 10}}
                                            onClick={() => navigate('/enterprise/enterpriseRequest')}>подробнее</Button>
                                </Box>
                            </Box>
                        )}
                    </Box>
                </Box>
            </Box>


        </Box>
    )
})
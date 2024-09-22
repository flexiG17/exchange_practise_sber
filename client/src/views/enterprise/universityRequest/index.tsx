import {observer} from "mobx-react";
import {Box, Button,  Typography} from "@mui/material";
import {enterpriseStore} from "../../../mobx/enterprise";
import OutboundIcon from "@mui/icons-material/Outbound";

export const Request = observer(() => {
    const {universityRequest} = enterpriseStore
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
                                    color={'primary'}>{universityRequest.name}</Typography>
                        <OutboundIcon color={'primary'}/>

                    </Box>

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
                    <Box sx={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                        <Typography sx={{fontWeight: '700'}} color={'primary'}>Направления подготовки:</Typography>
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: '0.5rem', flexWrap: 'wrap'}}>
                            {universityRequest.specializations?.map((tag) =>
                                <Typography color={'primary'}>{tag}</Typography>)}
                        </Box>
                    </Box>
                    <Box>
                        <Typography sx={{fontWeight: '700'}} color={'primary'}>Количество свободных мест:</Typography>
                        <Typography color={'primary'}>{universityRequest.quantity}</Typography>
                    </Box>
                    <Box>
                        <Typography sx={{fontWeight: '700'}} color={'primary'}>Подать документы необходимо
                            до:</Typography>
                        <Typography color={'primary'}>{universityRequest.dateSubmission}</Typography>
                    </Box>
                    <Box>
                        <Typography sx={{fontWeight: '700'}} color={'primary'}>Даты прохождения практики:</Typography>
                        <Typography color={'primary'}>{universityRequest.datePractice}</Typography>
                    </Box>

                    <Box>

                        <Box sx={{display: 'flex', flexDirection: 'row', gap: '1rem', justifyContent: 'space-between'}}>
                            <Button variant={'contained'} color={'secondary'}
                                    sx={{borderRadius: 10}}>Условия сотрудничества</Button>
                            <Button variant={'contained'} color={'primary'}
                                    sx={{borderRadius: 10}}>Откликнуться</Button>
                        </Box>
                    </Box>

                </Box>

            </Box>
        </Box>
    )
})
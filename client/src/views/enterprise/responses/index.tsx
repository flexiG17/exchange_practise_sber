import {observer} from "mobx-react";
import {enterpriseStore} from "../../../mobx/enterprise";
import {Box, Button, Tab, Tabs, Typography} from "@mui/material";
import {useState} from "react";

export const EnterpriseUniversitiesResponses = observer(() => {
    const {checkingResponses, agreedResponses, newResponses} = enterpriseStore
    const [value, setValue] = useState(0);

    const handleChange = (_: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        console.log(value)
    };
    return (
        <Box className={'container'} sx={{ display: 'flex', flexDirection: 'column'}}>
            <img src={'../../../../public/imgs/responses.png'}
                 alt={'practices'}
                 style={{
                     position: 'absolute',
                     width: '98.9vw',
                     height: '10wh',
                     zIndex: '-100',
                     overflow: 'hidden'
                 }}/>
            <Typography variant={'h4'} sx={{fontWeight: '700', marginBottom: '1rem'}}
                        color={'primary'}>Отклики</Typography>
            <Tabs value={value} onChange={handleChange}>
                <Tab label="Новые" sx={{fontWeight: '700'}}/>
                <Tab label="На проверке" sx={{fontWeight: '700'}}/>
                <Tab label="Согласовано" sx={{fontWeight: '700'}}/>
            </Tabs>
            {value === 0 && <Box sx={{display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem'}}>
                {checkingResponses.map((response) => <Box sx={{
                    padding: '1rem',
                    borderRadius: '20px',
                    backgroundColor: '#F2F6FA',
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '1rem',
                    justifyContent: 'space-between'
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row', gap: '2rem'
                    }}>
                        <Typography sx={{fontWeight: '500'}} color={'primary'}>{response.name}</Typography>
                        <Typography sx={{fontWeight: '500'}} color={'primary'}>{response.quantity} мест</Typography>
                    </Box>

                    <Box sx={{display: 'flex', flexDirection: 'row', gap: '1rem'}}>
                        <Button variant={'contained'} color={'primary'}
                                sx={{borderRadius: 10}}>принять</Button>
                        <Button variant={'outlined'} color={'error'}
                                sx={{borderRadius: 10}}>отклонить</Button>
                    </Box>
                </Box>)}
            </Box>}
            {value === 1 && <Box sx={{display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem'}}>
                {agreedResponses.map((response) => <Box sx={{
                    padding: '1rem',
                    borderRadius: '20px',
                    backgroundColor: '#F2F6FA',
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '1rem',
                    justifyContent: 'space-between',
                    width: '20rem'
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row', gap: '2rem'
                    }}>
                        <Typography sx={{fontWeight: '500'}} color={'primary'}>{response.name}</Typography>
                        <Typography sx={{fontWeight: '500'}} color={'primary'}>{response.quantity} мест</Typography>
                    </Box>


                </Box>)}
            </Box>}
            {value === 2 && <Box sx={{display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem'}}>
                {newResponses.map((response) => <Box sx={{
                    padding: '1rem',
                    borderRadius: '20px',
                    backgroundColor: '#F2F6FA',
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '1rem',
                    justifyContent: 'space-between',
                    width: '20rem'
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row', gap: '2rem',
                    }}>
                        <Typography sx={{fontWeight: '500'}} color={'primary'}>{response.name}</Typography>
                        <Typography sx={{fontWeight: '500'}} color={'primary'}>{response.quantity} мест</Typography>
                    </Box>

                </Box>)}
            </Box>}

        </Box>
    )
})
import {Box, Typography} from "@mui/material";

export const Footer = () => {
    return (<Box sx={{
        height: '4rem',
        backgroundColor: '#014270',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBlock: '2rem'
    }}>
        <Box sx={{display: 'flex', flexDirection: 'row', gap: '1rem'}}>
            <Typography color={'#FFF'}>О нас</Typography>
            <Typography color={'#FFF'}>Контакты</Typography>
            <Typography color={'#FFF'}>Оставить обратную связь</Typography>
            <Typography color={'#FFF'}>Подать заявку</Typography>
        </Box>
        <Typography color={'#FFF'}>© code.practice, 3865 | Код Практики </Typography>
    </Box>)
}
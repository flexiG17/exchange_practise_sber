import {Box, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate()
    return (<Box sx={{
        height: '4rem',
        backgroundColor: '#014270',
        position: 'sticky',
        top: 0,
        left: 0,
        width: '99vw',
        paddingLeft: '5rem',
        paddingBlock: '0.5rem',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }}>
        <img src={'../../../../public/imgs/logo.png'} alt={'logo'}/>
        <Box sx={{display: 'flex',
            flexDirection: 'row', gap:'1rem', marginLeft: '1rem'}}>
            <Typography onClick={() => navigate('/enterprise/myRequests')} color={'white'} sx={{cursor: 'pointer'}}>Заявки</Typography>
            <Typography color={'white'}>Студенты</Typography>
        </Box>
    </Box>)
}
import {observer} from "mobx-react";
import {Box, Button, Card, Chip, Typography} from "@mui/material";
import {studentStore} from "../../../mobx/student";
import {Filters} from "./components/Filters.tsx";

export const Practices = observer(() => {
    const {practices} = studentStore
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
                <Typography variant={'h4'} sx={{fontWeight: '700', marginBottom: '1rem'}} color={'primary'}>Рекомендуемые
                    практики</Typography>
                <Box sx={{display: 'flex', flexDirection: 'row', gap: '3rem'}}>
                    <Filters/>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem'
                    }}>
                        {practices.map((practice) =>
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
                                                    color={'primary'}>{practice.name}, </Typography>
                                        <Typography variant={'h5'} sx={{fontWeight: '700'}}
                                                    color={'primary'}> {practice.company}</Typography>
                                    </Box>

                                    <Typography>{practice.description}</Typography>
                                </Box>
                                <Box sx={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                                    <Box sx={{display: 'flex', flexDirection: 'row', gap: '0.5rem', flexWrap: 'wrap'}}>
                                        {practice.tags?.map((tag) =>
                                            <Chip label={tag} variant={'outlined'} color={'primary'}/>)}
                                    </Box>

                                    <Button variant={'contained'} color={'primary'}
                                            sx={{borderRadius: 10}}>ОТКЛИКНУТЬСЯ</Button>
                                </Box>
                            </Box>
                        )}
                    </Box>
                </Box>
            </Box>


        </Box>
    )
})
import {observer} from "mobx-react";
import {Autocomplete, Box, Card, Checkbox, FormControlLabel, TextField, Typography} from "@mui/material";

export const Filters = observer(() => {

    const tagsOptions = [{value: 'back', label: 'back'}, {value: 'front', label: 'front'}]
    const sityOptions = [{value: 'Екатеринбург', label: 'Екатеринбург'}, {value: 'Челябинск', label: 'Челябинск'}]
    return (
        <Box sx={{
            display: 'flex', flexDirection: 'column', padding: '1rem', borderRadius: '20px',
            width: '20rem', gap: '1rem', borderColor: '#013A72',
            borderStyle: 'dashed',
            borderWidth: '2px', height: '20rem'
        }}>
            <Typography variant={'h6'} color={'primary'}>Фильтры</Typography>
            <Autocomplete multiple={true} size={'small'} renderInput={params => (
                <TextField
                    {...params}
                    label={'Теги'}
                />
            )} options={tagsOptions}/>
            <Autocomplete multiple={true} size={'small'} renderInput={params => (
                <TextField
                    {...params}
                    label={'Город'}
                />
            )} options={sityOptions}/>
            <FormControlLabel control={<Checkbox/>} label="Оплачивается"/>
            <FormControlLabel control={<Checkbox/>} label="Трудоустройство"/>
            <FormControlLabel control={<Checkbox/>} label="Наличие тестовоого задания"/>
        </Box>
    )
})
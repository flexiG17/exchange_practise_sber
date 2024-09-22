import {Box, Button, Chip, Typography} from "@mui/material";
import {observer} from "mobx-react";
import {studentStore} from "../../../mobx/student";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {TextInput} from "../../../components/controls/TextInputControl.tsx";
import {useCallback} from "react";
import {AutocompleteInput} from "../../../components/controls/AutocompleteInputControl.tsx";
import {TextAreaInput} from "../../../components/controls/TexAreatInputControl.tsx";

export const StudentEditProfile = observer(() => {
    const {profile, isLoading} = studentStore
    const navigate = useNavigate()

    const {handleSubmit, control, watch, reset} = useForm({
        defaultValues: {
            name: profile.name,
            birthDay: profile.birthDay,
            phone: profile.phone,
            email: profile.email,
            group: profile.group,
            sex: profile.sex,
            year: profile.year,
            university: {label: profile.university, value: profile.university},
            institute: {label: profile.institute, value: profile.institute},
            specialization: {label: profile.specialization, value: profile.specialization},
            about: ''
        }
    });

    const universityOptions = [{label: 'УрФУ', value: 'УрФУ'}, {label: 'УрГЭУ', value: 'УрГЭУ'}]

    const instituteOptions = [{label: 'ИРИТ-РТФ', value: 'ИРИТ-РТФ'}, {label: 'ИнЭУ', value: 'ИнЭУ'}]

    const specializationOptions = [{
        label: '09.03.03 Прикладная информатика',
        value: 1
    }, {label: '09.03.04 Программная инженерия', value: 2}]

    const submitHandler = useCallback((values) => {
        console.log(values)
    }, [])

    return (!isLoading &&
        <Box className={'container'}>
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
            <form onSubmit={handleSubmit(submitHandler)}>
                <Box sx={{display: 'flex', flexDirection: 'row', gap: '10rem', justifyContent: 'center'}}>
                    <Box sx={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                        <Box>
                            <img src={'../../../../public/imgs/emma.png'}/>
                        </Box>


                        <TextAreaInput name={'about'} control={control} label={'О себе'}/>

                        {/*<Box>
                        <Typography color={'secondary'} sx={{fontWeight: '500'}} variant={'body2'}>Теги</Typography>
                        {profile?.tags?.map((tag) => <Chip label={tag} variant={'outlined'} color={'primary'}/>)}
                    </Box>*/}
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '30rem'}}>
                        <Box sx={{display: 'flex', flexDirection: 'row', gap: '1rem'}}>
                            <Typography variant={'h5'} sx={{fontWeight: '500'}}>Редактировать профиль</Typography>
                        </Box>
                        <TextInput name={'name'} control={control} label={'О себе'}/>
                        <TextInput name={'email'} control={control} label={'Email'}/>
                        <TextInput name={'phone'} control={control} label={'Телефон'}/>
                        <TextInput name={'sex'} control={control} label={'Пол'}/>
                        <AutocompleteInput name={'university'} control={control} label={'ВУЗ'}
                                           options={universityOptions}/>
                        <AutocompleteInput name={'institute'} control={control} label={'Институт (при наличии)'}
                                           options={instituteOptions}/>
                        <AutocompleteInput name={'institute'} control={control} label={'Направление подготовки'}
                                           options={specializationOptions}/>

                        <TextInput name={'year'} control={control} label={'Курс'}/>
                        <TextInput name={'group'} control={control} label={'Группа'}/>

                        <Box sx={{display: 'flex', flexDirection: 'row', gap:'1rem', justifyContent: 'end'}}>
                            <Button variant={'outlined'} color={'error'} type={'reset'}>ОТМЕНИТЬ</Button>
                            <Button variant={'contained'} color={'primary'} type={'submit'}>СОХРАНИТЬ</Button>
                        </Box>
                    </Box>
                </Box>

            </form>

        </Box>
    )
})
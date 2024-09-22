import {Box, Button, Typography} from "@mui/material";
import {TextInput} from "../../../components/controls/TextInputControl.tsx";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useCallback} from "react";
import {AutocompleteInput} from "../../../components/controls/AutocompleteInputControl.tsx";

export const Register = () => {
    const navigate = useNavigate()
    const {handleSubmit, control} = useForm({
        defaultValues: {
            name: '',
            birthDay: '',
            phone: '',
            email: '',
            group: '',
            year: '',
            university: '',
            institute: '',
            specialization: '',
            password: ''
        }
    });

    const submitHandler = useCallback((values) => {
        navigate('/login')
        console.log(values)
    }, [navigate])

    const universityOptions = [{label: 'УрФУ', value: 1}, {label: 'УрГЭУ', value: 2}]

    const insituteOptions = [{label: 'ИРИТ-РТФ', value: 1}, {label: 'ИнЭУ', value: 2}]

    const specializationOptions = [{
        label: '09.03.03 Прикладная информатика',
        value: 1
    }, {label: '09.03.04 Программная инженерия', value: 2}]
    return (
        <Box sx={{ margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center'}} className={'container'}>
            <img src={'../../../../public/imgs/register.png'}
                 alt={'register'}
                 style={{
                     position: 'absolute',
                     width: '98.5vw',
                     height: '10wh',
                     zIndex: '-100',

                     overflow: 'hidden'
                 }}/>
            <Box sx={{
                margin: 'auto',
                padding: '3rem',
                width: '24rem',
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingBottom: '2rem'
                }}>
                    <Typography variant={'h4'} sx={{fontWeight: 'bold', cursor: 'pointer'}} color={'textDisabled'} onClick={() => navigate('/login')}>Вход</Typography>
                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'right', alignItems: 'end'}}>
                        <Typography variant={'h4'} sx={{fontWeight: 'bold', cursor: 'pointer'}} color={'primary'} onClick={() => navigate('/register')}>Регистрация</Typography>
                        <Typography color={'primary'}>только для студентов</Typography>
                    </Box>
                </Box>
                <form onSubmit={handleSubmit(submitHandler)}
                      style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}
                >
                    <TextInput name={'name'} control={control} label={'ФИО'}/>
                    <TextInput name={'birthDay'} control={control} label={'Дата рождения'}/>
                    <TextInput name={'phone'} control={control} label={'Номер телефона'}/>
                    <TextInput name={'email'} control={control} label={'Email'}/>
                    <TextInput name={'year'} control={control} label={'Курс'}/>
                    <TextInput name={'group'} control={control} label={'Группа'}/>
                    <AutocompleteInput name={'university'} control={control} label={'ВУЗ'} options={universityOptions}/>
                    <AutocompleteInput name={'institute'} control={control} label={'Институт (при наличии)'}
                                       options={insituteOptions}/>
                    <AutocompleteInput name={'institute'} control={control} label={'Направление подготовки'}
                                       options={specializationOptions}/>
                    <TextInput name={'password'} control={control} label={'Пароль'}/>
                    {/*<LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker', 'DatePicker']}>
                            <DateInput name={'phone'} control={control} label={'Дата рождения'} />
                        </DemoContainer>
                    </LocalizationProvider>*/}
                    <Button variant={'contained'} color={'primary'} type={'submit'}>Зарегистрироваться</Button>
                </form>
            </Box>
        </Box>
    )
}
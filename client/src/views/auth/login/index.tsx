import {Box, Button, Typography} from "@mui/material";
import {TextInput} from "../../../components/controls/TextInputControl.tsx";
import {useForm} from "react-hook-form";
import {useCallback} from "react";
import { useNavigate } from 'react-router-dom'

export const Login = () => {
const navigate = useNavigate()
    const {handleSubmit, control} = useForm({
        defaultValues: {email: '', password: ''}
    });

    const submitHandler = useCallback(() => {
        navigate('/student/practices')
    }, [navigate])

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '5rem',
            paddingInline: '7rem',
            paddingBlock: '5rem'
        }}>
            <img src={'/imgs/login.png'}/>
            <Box sx={{
                borderColor: 'secondary',
                borderRadius: '10px',
                borderStyle: 'dashed',
                borderWidth: '5px',
                padding: '3rem',
                width: '22rem',
            }}>
                <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingBottom: '1rem'}}>
                    <Typography variant={'h4'} sx={{fontWeight: 'bold'}} color={'primary'}>Вход</Typography>
                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'right', alignItems: 'end'}}>
                        <Typography variant={'h4'} sx={{fontWeight: 'bold', cursor: 'pointer'}} color={'textDisabled'} onClick={() => navigate('/register')}>Регистрация</Typography>
                        <Typography color={'textDisabled'}>только для студентов</Typography>
                    </Box>
                </Box>
                <form onSubmit={handleSubmit(submitHandler)} style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}
                >
                    <TextInput name={'email'} control={control} label={'Email'}/>
                    <TextInput name={'password'} control={control} label={'Пароль'}/>
                    <Button variant={'contained'} color={'primary'} type={'submit'}>Войти</Button>
                </form>
            </Box>

        </Box>
    )
}
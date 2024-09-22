import {CircularProgress, Typography} from "@mui/material";
import {observer} from "mobx-react";
import {studentStore} from "../../../mobx/student";
import {useEffect} from "react";
import {Practices} from "../../../views/student/practices";

export const StudentPracticesPage = observer(() => {
    const {isLoading} = studentStore
    useEffect(() => {
        studentStore.fetchPractices()
    }, []);
    return (isLoading ? <CircularProgress/> : <Practices/>)
})
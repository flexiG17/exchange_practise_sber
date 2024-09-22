import {CircularProgress} from "@mui/material";
import {StudentProfile} from "../../../views/student/profile";
import {useEffect} from "react";
import {studentStore} from "../../../mobx/student";
import {observer} from "mobx-react";

export const StudentProfilePage = observer(() => {
    const {isLoading} = studentStore
    useEffect(() => {
        studentStore.fetchStudent()
    }, []);
    return (isLoading ? <CircularProgress/> : <StudentProfile/>)
})
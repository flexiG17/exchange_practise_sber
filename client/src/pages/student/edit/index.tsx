import {StudentEditProfile} from "../../../views/student/edit";
import {studentStore} from "../../../mobx/student";
import {useEffect} from "react";
import {observer} from "mobx-react";
import {CircularProgress} from "@mui/material";

export const StudentEditProfilePage = observer(() => {
    const {isLoading} = studentStore
    useEffect(() => {
        studentStore.fetchStudent()
    }, []);
    return (isLoading ? <CircularProgress /> : <StudentEditProfile/>)
})
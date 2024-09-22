import {observer} from "mobx-react";
import {Practice} from "../../../views/student/practice";
import {studentStore} from "../../../mobx/student";
import {useEffect} from "react";
import {CircularProgress} from "@mui/material";

export const PracticePage = observer(() => {
    const {isLoading} = studentStore
    useEffect(() => {
        studentStore.fetchPractice()
    }, []);
    return (isLoading ? <CircularProgress /> : <Practice/>)
})
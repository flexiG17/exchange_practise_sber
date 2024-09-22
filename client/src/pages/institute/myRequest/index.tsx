import {CircularProgress} from "@mui/material";
import {useEffect} from "react";
import {Request} from "../../../views/institute/myRequest";
import {observer} from "mobx-react";
import {instituteStore} from "../../../mobx/institute";

export const InstituteRequestPage = observer(() => {
    const {isLoading} = instituteStore
    useEffect(() => {
        instituteStore.fetchMyRequest()
    }, []);
    return (isLoading ? <CircularProgress /> : <Request/>)
})
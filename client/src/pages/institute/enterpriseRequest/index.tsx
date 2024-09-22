import {CircularProgress} from "@mui/material";
import {useEffect} from "react";
import {Request} from "../../../views/institute/enterpriseRequest";
import {observer} from "mobx-react";
import {instituteStore} from "../../../mobx/institute";

export const InstituteEnterpriseRequestPage = observer(() => {
    const {isLoading} = instituteStore
    useEffect(() => {
        instituteStore.fetchEnterpriseRequest()
    }, []);
    return (isLoading ? <CircularProgress /> : <Request/>)
})
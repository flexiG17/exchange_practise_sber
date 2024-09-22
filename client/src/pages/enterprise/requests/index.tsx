import {CircularProgress, Typography} from "@mui/material";
import {enterpriseStore} from "../../../mobx/enterprise";
import {useEffect} from "react";
import {observer} from "mobx-react";
import {MyRequests} from "../../../views/enterprise/Requests";

export const EnterpriseMyRequestsPage = observer(() => {
    const {isLoading} = enterpriseStore
    useEffect(() => {
        enterpriseStore.fetchMyRequests()
    }, []);
    return (isLoading ? <CircularProgress /> : <MyRequests/>)
})
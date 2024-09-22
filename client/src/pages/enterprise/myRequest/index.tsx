import {CircularProgress} from "@mui/material";
import {useEffect} from "react";
import {Request} from "../../../views/enterprise/myRequest";
import {observer} from "mobx-react";
import {enterpriseStore} from "../../../mobx/enterprise";

export const EnterpriseRequestPage = observer(() => {
    const {isLoading} = enterpriseStore
    useEffect(() => {
        enterpriseStore.fetchRequest()
    }, []);
    return (isLoading ? <CircularProgress /> : <Request/>)
})
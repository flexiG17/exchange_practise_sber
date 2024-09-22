import {CircularProgress} from "@mui/material";
import {useEffect} from "react";
import {Request} from "../../../views/enterprise/universityRequest";
import {observer} from "mobx-react";
import {enterpriseStore} from "../../../mobx/enterprise";

export const EnterpriseUniversityRequestPage = observer(() => {
    const {isLoading} = enterpriseStore
    useEffect(() => {
        enterpriseStore.fetchUniversityRequest()
    }, []);
    return (isLoading ? <CircularProgress /> : <Request/>)
})
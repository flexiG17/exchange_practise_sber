import {CircularProgress, Typography} from "@mui/material";
import {enterpriseStore} from "../../../mobx/enterprise";
import {useEffect} from "react";
import {observer} from "mobx-react";
import {MyRequests} from "../../../views/enterprise/Requests";
import {UniversityRequests} from "../../../views/enterprise/universityRequests";

export const EnterpriseUniversityRequestsPage = observer(() => {
    const {isLoading} = enterpriseStore
    useEffect(() => {
        enterpriseStore.fetchUniversityRequests()
    }, []);
    return (isLoading ? <CircularProgress /> : <UniversityRequests/>)
})
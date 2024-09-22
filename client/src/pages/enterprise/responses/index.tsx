import {observer} from "mobx-react";
import {enterpriseStore} from "../../../mobx/enterprise";
import {useEffect} from "react";
import {CircularProgress} from "@mui/material";
import {EnterpriseUniversitiesResponses} from "../../../views/enterprise/responses";

export const EnterpriseUniversitiesResponsesPage = observer(() => {
    const {isLoading} = enterpriseStore
    useEffect(() => {
        enterpriseStore.fetchAgreedResponses()
        enterpriseStore.fetchNewResponses()
        enterpriseStore.fetchСheckingResponses()
    }, []);
    return (isLoading ? <CircularProgress /> : <EnterpriseUniversitiesResponses/>)
})
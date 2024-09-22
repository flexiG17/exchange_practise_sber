import './App.css'
import {Route, Routes} from "react-router-dom";
import {StudentProfilePage} from "./pages/student/profile";
import {StudentEditProfilePage} from "./pages/student/edit";
import {StudentPracticesPage} from "./pages/student/practices";
import {InstituteProfilePage} from "./pages/institute/profile";
import {InstituteEditProfilePage} from "./pages/institute/edit";
import {InstituteRequestsPage} from "./pages/institute/requests";
import {InstituteAddRequestPage} from "./pages/institute/addRequest";
import {EnterpriseProfilePage} from "./pages/enterprise/profile";
import {EnterpriseEditProfilePage} from "./pages/enterprise/edit";
import {EnterpriseMyRequestsPage} from "./pages/enterprise/requests";
import {EnterpriseAddRequestPage} from "./pages/enterprise/addRequest";
import {LoginPage} from "./pages/auth/login";
import {RegisterPage} from "./pages/auth/register";
import {Header} from "./views/layout/header.tsx";
import {Footer} from "./views/layout/footer.tsx";
import {PracticePage} from "./pages/student/practice";
import {InstituteEnterpriseRequestPage} from "./pages/institute/enterpriseRequest";
import {EnterpriseRequestPage} from "./pages/enterprise/myRequest";
import {EnterpriseUniversityRequestPage} from "./pages/enterprise/universityRequest";
import {InstituteRequestPage} from "./pages/institute/myRequest";
import {EnterpriseUniversityRequestsPage} from "./pages/enterprise/universityRequests";
import {EnterpriseUniversitiesResponsesPage} from "./pages/enterprise/responses";

function App() {

    return (
        <>
            <Header/>
            <Routes>
                <Route path={'login'} element={<LoginPage/>}/>
                <Route path={'register'} element={<RegisterPage/>}/>

                <Route path={'student'} element={<StudentProfilePage/>}/>
                <Route path={'student/edit'} element={<StudentEditProfilePage/>}/>
                <Route path={'student/practices'} element={<StudentPracticesPage/>}/>
                <Route path={'student/practice'} element={<PracticePage/>}/>

                <Route path={'institute'} element={<InstituteProfilePage/>}/>
                <Route path={'institute/edit'} element={<InstituteEditProfilePage/>}/>
                <Route path={'institute/requests'} element={<InstituteRequestsPage/>}/>
                <Route path={'institute/enterpriseRequest'} element={<InstituteEnterpriseRequestPage/>}/>

                <Route path={'institute/myRequest'} element={<InstituteRequestPage/>}/>
                <Route path={'institute/requests/add'} element={<InstituteAddRequestPage/>}/>

                <Route path={'enterprise'} element={<EnterpriseProfilePage/>}/>
                <Route path={'enterprise/edit'} element={<EnterpriseEditProfilePage/>}/>
                <Route path={'enterprise/myRequests'} element={<EnterpriseMyRequestsPage/>}/>
                <Route path={'enterprise/universityRequests'} element={<EnterpriseUniversityRequestsPage/>}/>
                <Route path={'enterprise/enterpriseRequest'} element={<EnterpriseRequestPage/>}/>
                <Route path={'enterprise/universityRequest'} element={<EnterpriseUniversityRequestPage/>}/>
                <Route path={'enterprise/requests/add'} element={<EnterpriseAddRequestPage/>}/>
                <Route path={'enterprise/responses'} element={<EnterpriseUniversitiesResponsesPage/>}/>
            </Routes>
            <Footer/>
        </>
    )
}

export default App

import { StateMachineProvider } from 'little-state-machine'
import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { AuthContextProvder } from './context/AuthContext'
import GlobalContextProvider from './context/JobContext'
import Auth from './hoc/Auth'
import ConfirmSignup from './pages/ConfirmSignup'
import Detail from './pages/Detail'
import ResetPassword from './pages/ResetPassword'
import ForgotPassword from './pages/ForgotPassword'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import MainDashBoardEmployer from './pages/recruiter/dashboard/MainDashboardEmployer'
import JobOffersPanel from './pages/recruiter/dashboard/jobOffers/JobOffersPanel'
import MainPanel from './pages/recruiter/dashboard/main/MainPanel'
import checkExpiryDate from './utils/checkExpiryData'

function App() {


    useEffect(() => {
        let isNotExpired = checkExpiryDate()
        let userObj = localStorage.getItem("user");
        let userId = userObj && JSON.parse(userObj).id

        async function revalidateToken(id: string) {
            const response = await fetch('http://localhost:8000/refresh', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: id 
                }),
                credentials: 'include'
            })

            return response
        }
        if (isNotExpired) {
            revalidateToken(userId).then(res => res.json()).then(data => console.log(data))
        }

    }, [])

    return (
        <BrowserRouter>
            <StateMachineProvider>
                <AuthContextProvder>
                    <GlobalContextProvider>
                        <main className="relative min-h-full">
                            <Navbar />
                            <Routes>
                                <Route index element={<Home />} />
                                <Route path="job/:id" element={<Detail />} />
                                <Route path="login" element={<Login />} />
                                <Route path="signup" element={<SignUp />} />
                                <Route path="forgot-password" element={<ForgotPassword />} />
                                <Route path="reset-password/:resetKey" element={<ResetPassword />} />
                                <Route
                                    path="confirm-signup"
                                    element={<ConfirmSignup />}
                                />
                                {/*these routes are protected */}
                                <Route
                                    element={
                                        <Auth allowedRoles={['EMPLOYER']} />
                                    }
                                >
                                    <Route
                                        path="dashboard"
                                        element={<MainDashBoardEmployer />}
                                    >
                                        <Route path="main" element={<MainPanel/>} />
                                        <Route path="job-offers" element={<JobOffersPanel/>}>
                                        
                                        
                                        </Route>

                                    </Route>
                                </Route>
                                <Route path="/*" element={<h1>404</h1>} />
                            </Routes>
                        </main>
                    </GlobalContextProvider>
                </AuthContextProvder>
            </StateMachineProvider>
        </BrowserRouter>
    )
}

export default App

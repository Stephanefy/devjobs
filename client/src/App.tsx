import { StateMachineProvider, createStore } from 'little-state-machine'
import { initialState } from './store/globalStore'
import './App.css'
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
import MainDashBoard from './pages/dashboard/MainDashboard'
import JobOffersPanel from './pages/dashboard/jobOffers/JobOffersPanel'
import MessagePanel from './pages/dashboard/messages/MessagePanel';
import MessageFormPage from './pages/dashboard/messages/MessageFormPage'
import ApplicationsPanel from './pages/dashboard/applications/ApplicationsPanel'
import JobApplicationFormPage from './pages/jobApplications/JobApplicationFormPage'
import MainPanel from './pages/dashboard/main/MainPanel'
import checkExpiryDate from './utils/checkExpiryData'
import { QueryClient, QueryClientProvider } from 'react-query'
import ApplicationDetails from './components/ApplicationDetails'
import ApplicationTable from './components/ApplicationTable'


const sessionData = sessionStorage.getItem("__LSM__")

console.log(sessionData)

createStore(sessionData ? JSON.parse(sessionData) : initialState, {
    name: 'devjob-store',
    persist: 'action',
})

function App() {
    const client = new QueryClient()

    useEffect(() => {
        let isNotExpired = checkExpiryDate()
        let userObj = localStorage.getItem('user')
        let userId = userObj && JSON.parse(userObj).id

        async function revalidateToken(id: string) {
            const response = await fetch('http://localhost:8000/refresh', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: id,
                }),
                credentials: 'include',
            })

            return response
        }
        if (isNotExpired) {
            revalidateToken(userId)
                .then((res) => res.json())
                .then((data) => console.log(data))
        }
    }, [])

    return (
        <BrowserRouter>
            <QueryClientProvider client={client}>
                <StateMachineProvider>
                    <AuthContextProvder>
                        <GlobalContextProvider>
                            <main className="relative min-h-full w-[100vw] flex justify-center flex-col">
                                <Navbar />
                                <Routes>
                                    <Route index element={<Home />} />
                                    <Route
                                        path="job/:id"
                                        element={<Detail/>}
                                    />
                                    <Route path="login" element={<Login />} />
                                    <Route path="signup" element={<SignUp />} />
                                    <Route
                                        path="forgot-password"
                                        element={<ForgotPassword />}
                                    />
                                    <Route
                                        path="reset-password/:resetKey"
                                        element={<ResetPassword />}
                                    />
                                    <Route
                                        path="confirm-signup"
                                        element={<ConfirmSignup />}
                                    />
                                    {/*these routes are protected */}
                                    <Route
                                        element={
                                            <Auth
                                                allowedRoles={[
                                                    'EMPLOYER',
                                                    'JOB_SEEKER',
                                                ]}
                                            />
                                        }
                                    >
                                        <Route
                                            path="dashboard"
                                            element={<MainDashBoard />}
                                        >
                                            <Route
                                                path="main"
                                                element={<MainPanel />}
                                            />

                                            <Route
                                                path="job-offers"
                                                element={<JobOffersPanel />}
                                            />
                                            <Route
                                                path="messages"
                                                element={<MessagePanel />}
                                            />
                                            <Route
                                                path="applications"
                                                element={<ApplicationsPanel />}
                                            >
                                                <Route 
                                                    path="listing"
                                                    element={<ApplicationTable/>}
                                                />
                                                <Route
                                                    path=":applicationId"
                                                    element={<ApplicationDetails/>}
                                                />
                                            
                                            </Route>
                                        </Route>
                                        <Route
                                            path="job-applications"
                                            element={<JobApplicationFormPage />}
                                        />
                                        <Route
                                            path="contact-message"
                                            element={<MessageFormPage />}
                                        />

                                    </Route>
                                    <Route path="/*" element={<h1>404</h1>} />
                                </Routes>
                            </main>
                        </GlobalContextProvider>
                    </AuthContextProvder>
                </StateMachineProvider>
            </QueryClientProvider>
        </BrowserRouter>
    )
}

export default App

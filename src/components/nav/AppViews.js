import { Routes, Route } from "react-router-dom"
import App from "../../App"
import Dashboard from "../dashboard/Dashboard"
import Quiz from "../dashboard/Quiz"
import Profile from "../user/Profile"


export const AppViews = () => {
  return (
    <>
      <Routes>

        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/profile" element={<Profile />} />

      </Routes>
    </>
  )
}
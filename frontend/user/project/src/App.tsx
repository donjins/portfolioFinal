import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FaUser } from "react-icons/fa";


// Portfolio Pages
// ✅ Correct

import HomePage from "./components/HomePage";
import AdminPage from "./components/AdminPage";

// Admin Pages
// Ensure this file exists
// ✅ Import correctly
import Login from "./components/Login";
import Chatbot from "./components/Chatbot";
import Message from "./components/Message";
import Project from "./components/Project";
import { ProjectsPage } from "./components/ProjectsPageUser";
// import CustomLink from "./components/Link"; // ✅ Renamed to avoid conflicts

function AppRoutes() {
    return (
        <Router>
            <Routes>
                {/* Portfolio Routes */}
                <Route path="/" element={<HomePage />} /> 
                <Route path='/bot' element={<Chatbot />} />
                <Route path="/projects" element={<ProjectsPage />} />
               
                {/* Admin Routes */}
               
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/Message" element={<Message />} />
                <Route path="/project" element={<Project />} /> 

                
            </Routes>
        </Router>
    );
}

export default AppRoutes;

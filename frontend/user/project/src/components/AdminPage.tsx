import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import DashboardCard from "./DashboardCard";
import { FaUser, FaProjectDiagram, FaEye, FaEnvelope, FaClock } from "react-icons/fa";
const backendURL = import.meta.env.REACT_APP_BACKEND_URL;


function AdminPage() {
  const navigate = useNavigate();
  const [messageCount, setMessageCount] = useState(0);
  const token = localStorage.getItem("token"); // Check if admin is logged in

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    const fetchMessageCount = async () => {
      try {
        const response = await fetch(`${backendURL}api/messages/count`);
        const data = await response.json();
        if (response.ok) {
          setMessageCount(data.count); // ✅ Update state with count
        } else {
          console.error("Failed to fetch message count:", data.error);
        }
      } catch (error) {
        console.error("Error fetching message count:", error);
      }
    };
  
    fetchMessageCount();
  }, []);
  
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard Overview</h1>
          {token ? (
            <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md">
              Logout
            </button>
          ) : (
            <button onClick={() => navigate("/login")} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md">
              Login
            </button>
          )}
        </div>
  
        {/* Dashboard Cards */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <DashboardCard title="Total Projects" value={12} icon={FaProjectDiagram} description="Active portfolio projects" />
          <Link to="/message" className="block">
            <DashboardCard title="Messages" value={messageCount} icon={FaEnvelope} description="Unread contact messages" />
          </Link>
          <DashboardCard title="Page Views" value="2.4K" icon={FaEye} description="Views this month" />
          <DashboardCard title="Last Updated" value="2" icon={FaClock} description="Days ago" />
        </div>
  
        {/* Recent Activity Section */}
        <div className="mt-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
            <div className="mt-6 border-t border-gray-100">
              <div className="divide-y divide-gray-100">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="py-4">
                    <div className="flex items-center space-x-4">
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-gray-900">Updated Project Description</p>
                        <p className="text-sm text-gray-500">Modified the description of Project {item}</p>
                      </div>
                      <div className="text-sm text-gray-500">{item} hour ago</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}  

export default AdminPage;

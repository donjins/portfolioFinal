import React from "react";
import { 
  User, 
  Mail, 
  Briefcase, 
  Home, 
  FolderGit2,
  LayoutDashboard
} from "lucide-react";
import { Link } from "react-router-dom"; // ✅ Correct import

const navigation = [
  { name: "Dashboard", to: "/", icon: LayoutDashboard },
  { name: "About", to: "/about", icon: User },
  { name: "Contact", to: "/contact", icon: Mail },
  { name: "Experience", to: "/experience", icon: Briefcase },
  { name: "Hero", to: "/hero", icon: Home },
  { name: "Projects", to: "/project", icon: FolderGit2 },
];

export default function Sidebar() {
  return (
    <div className="flex h-screen w-64 flex-col bg-white border-r border-gray-200">
      <div className="flex h-16 items-center px-6 border-b border-gray-200">
        <h1 className="text-xl font-semibold text-gray-900">My Portfolio Admin</h1>
      </div>
      <nav className="flex-1 space-y-1 px-4 py-4">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.to} // ✅ Change href to to
            className="flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 group"
          >
            <item.icon className="mr-3 h-5 w-5" />
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}

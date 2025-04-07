import React, { useState } from 'react';
import { Routes, Route, useNavigate, NavLink } from 'react-router-dom';
import DashboardContent from './content/DashboardContent';
import BookingsContent from './content/BookingsContent';
import RoomsContent from './content/RoomsContent';
import EmployeesContent from './content/EmployeesContent';
import CustomersContent from './content/CustomersContent';
import SettingsContent from './content/SettingsContent';
import ServicesContent from './content/ServicesContent';
import RoomTypesContent from './content/RoomTypesContent';
import HeaderAdmin from './header-footer/HeaderAdmin';
import FooterAdmin from './header-footer/FooterAdmin';
import Menu from './slidebar/Menu';

const AdminDashboard = () => {

    const [sidebarOpen, setSidebarOpen] = useState(true);




    return (
        <div>


            {/* Main content */}
            <div >
                {/* Header */}
                <HeaderAdmin sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />


                {/* Sidebar */}
                <Menu />

                {/* Footer */}
                <FooterAdmin />
            </div>
        </div>
    );
};

export default AdminDashboard;





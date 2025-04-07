import React, { useState } from "react";
import DashboardContent from "../content/DashboardContent";
import BookingsContent from "../content/BookingsContent";
import RoomsContent from "../content/RoomsContent";
import EmployeesContent from "../content/EmployeesContent";
import CustomersContent from "../content/CustomersContent";
import ServicesContent from "../content/ServicesContent";
import SettingsContent from "../content/SettingsContent";
interface MenuProps {
    sidebarOpen: boolean;
    setSidebarOpen: (value: boolean) => void;
    activeTab: string;
    setActiveTab: (tab: string) => void;

}
const Menu = () => {
    const [activeTab, setActiveTab] = useState("dashboard");
    const [sidebarOpen, setSidebarOpen] = useState(true);



    return (
        <div >
            <main className="pb-5 d-flex">

                <div className={`bg-dark text-white ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`} >
                    <div className="d-flex justify-content-between align-items-center p-3 border-bottom border-secondary">
                        {sidebarOpen && <h5 className="m-0">Khách sạn Lộc Hải</h5>}
                        <button
                            className="btn btn-sm btn-dark"
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                        >
                            <i className={`bi bi-${sidebarOpen ? 'arrow-bar-left' : 'arrow-bar-right'}`}></i>
                        </button>
                    </div>
                    <div className="p-2">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <button
                                    className={`nav-link text-white ${activeTab === 'dashboard' ? 'active bg-primary bg-opacity-25' : ''}`}

                                    onClick={() => setActiveTab('dashboard')}
                                >
                                    <i className="bi bi-speedometer2 me-2"></i>
                                    {sidebarOpen && "Bảng điều khiển"}
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className={`nav-link text-white ${activeTab === 'bookings' ? 'active bg-primary bg-opacity-25' : ''}`}

                                    onClick={() => setActiveTab('bookings')}
                                >
                                    <i className="bi bi-calendar-check me-2"></i>
                                    {sidebarOpen && "Đặt phòng"}
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className={`nav-link text-white ${activeTab === 'rooms' ? 'active bg-primary bg-opacity-25' : ''}`}

                                    onClick={() => setActiveTab('rooms')}
                                >
                                    <i className="bi bi-door-closed me-2"></i>
                                    {sidebarOpen && "Quản lý phòng"}
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className={`nav-link text-white ${activeTab === 'employees' ? 'active bg-primary bg-opacity-25' : ''}`}

                                    onClick={() => setActiveTab('employees')}
                                >
                                    <i className="bi bi-people me-2"></i>
                                    {sidebarOpen && "Nhân viên"}
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className={`nav-link text-white ${activeTab === 'customers' ? 'active bg-primary bg-opacity-25' : ''}`}

                                    onClick={() => setActiveTab('customers')}
                                >
                                    <i className="bi bi-person-vcard me-2"></i>
                                    {sidebarOpen && "Khách hàng"}
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className={`nav-link text-white ${activeTab === 'servicesContent' ? 'active bg-primary bg-opacity-25' : ''}`}

                                    onClick={() => setActiveTab('servicesContent')}
                                >
                                    <i className="bi bi-gear me-2"></i>
                                    {sidebarOpen && "Dịch vụ"}
                                </button>
                            </li>



                            <li className="nav-item">
                                <button
                                    className={`nav-link text-white ${activeTab === 'roomTypesContent' ? 'active bg-primary bg-opacity-25' : ''}`}

                                    onClick={() => setActiveTab('roomTypesContent')}
                                >
                                    <i className="bi bi-gear me-2"></i>
                                    {sidebarOpen && "Loại phòng"}
                                </button>
                            </li>

                            <li className="nav-item">
                                <button
                                    className={`nav-link text-white ${activeTab === 'settings' ? 'active bg-primary bg-opacity-25' : ''}`}

                                    onClick={() => setActiveTab('settings')}
                                >
                                    <i className="bi bi-gear me-2"></i>
                                    {sidebarOpen && "Cài đặt"}
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                {activeTab === 'dashboard' && <DashboardContent />}
                {activeTab === 'bookings' && <BookingsContent />}
                {activeTab === 'rooms' && <RoomsContent />}
                {activeTab === 'employees' && <EmployeesContent />}
                {activeTab === 'customers' && <CustomersContent />}
                {activeTab === 'servicesContent' && <ServicesContent />}
                {activeTab === 'roomTypesContent' && <EmployeesContent />}
                {activeTab === 'settings' && <SettingsContent />}



            </main>
        </div>
    );
}

export default Menu;
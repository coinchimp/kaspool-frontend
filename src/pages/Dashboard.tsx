import { useState } from 'react'
import MobileNav from '../components/MobileNav'
import MobileSidebar from '../components/MobileSidebar'

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)
    const toogleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    return (
        <div className="relative w-full md:w-[75%]">
            <MobileNav toogleSidebar={toogleSidebar} />
            <MobileSidebar isOpen={isSidebarOpen} />
            <p>Dashboard</p>
        </div>
    )
}

export default Dashboard

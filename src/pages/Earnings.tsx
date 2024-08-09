import { useState } from 'react'
import MobileNav from '../components/MobileNav'
import MobileSidebar from '../components/MobileSidebar'

const Earnings = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)
    const toogleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    return (
        <div className="relative w-full md:w-[80%] bg-gray-100 h-screen overflow-y-scroll">
            <MobileNav toogleSidebar={toogleSidebar} />
            <MobileSidebar isOpen={isSidebarOpen} />
            <p>Earnings Report</p>
        </div>
    )
}

export default Earnings

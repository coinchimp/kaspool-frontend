import { useState } from 'react'
import { Card } from '@tremor/react'
import MobileNav from '../components/MobileNav'
import MobileSidebar from '../components/MobileSidebar'

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)
    const toogleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    return (
        <div className="relative w-full md:w-[75%] bg-gray-100">
            <MobileNav toogleSidebar={toogleSidebar} />
            <MobileSidebar isOpen={isSidebarOpen} />
            <p>Miner Dashboard</p>
            <div>
                <div className="flex flex-col md:flex-row">
                    <Card className="mx-auto rounded-md shadow-lg">
                        <p className="text-center text-slate-400">Card</p>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Dashboard

import { useState } from 'react'
import { IoIosGlobe } from 'react-icons/io'
import { GiMining } from 'react-icons/gi'
import { FaUsers } from 'react-icons/fa'
import { AiOutlineClockCircle } from 'react-icons/ai'
import MobileNav from '../components/MobileNav'
import MobileSidebar from '../components/MobileSidebar'
import CardStat from '../components/CardStat'

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)
    const toogleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    return (
        <div className="relative w-full md:w-[80%] bg-gray-100 px-6">
            <MobileNav toogleSidebar={toogleSidebar} />
            <MobileSidebar isOpen={isSidebarOpen} />
            <p>Miner Dashboard</p>
            <div>
                <div className="grid gap-4 md:grid-cols-4">
                    <CardStat
                        title="Network Hashrate"
                        data="523 PH/s"
                        time={'1 min ago'}
                        icon={
                            <IoIosGlobe className="h-8 w-8 ml-auto font-semibold text-[#308274]" />
                        }
                        lastUpdated={true}
                    />
                    <CardStat
                        title="Your Hashrate (48h)"
                        data="270 TH/s"
                        time={'1 min ago'}
                        icon={
                            <GiMining className="h-8 w-8 ml-auto font-semibold text-[#308274]" />
                        }
                        lastUpdated={true}
                    />
                    <CardStat
                        title="Pool Hashrate"
                        data="2.3 PH/s"
                        time={'1 min ago'}
                        icon={
                            <FaUsers className="h-8 w-8 ml-auto font-semibold text-[#308274]" />
                        }
                        lastUpdated={true}
                    />
                    <CardStat
                        title="Pending Balance"
                        data="380 KAS"
                        time={'1 min ago'}
                        icon={
                            <AiOutlineClockCircle className="h-8 w-8 ml-auto font-semibold text-[#308274]" />
                        }
                        lastUpdated={true}
                    />
                </div>
            </div>
        </div>
    )
}

export default Dashboard

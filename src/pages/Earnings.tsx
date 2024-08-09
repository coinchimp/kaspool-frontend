import { useState } from 'react'
import { AiOutlineWallet } from 'react-icons/ai'
import { CiMoneyBill } from 'react-icons/ci'
import { FaCalendarDay } from 'react-icons/fa'
import { FaCalendarWeek } from 'react-icons/fa'
import MobileNav from '../components/MobileNav'
import MobileSidebar from '../components/MobileSidebar'
import CardStat from '../components/CardStat'

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

            <div className="p-4">
                <div className="grid gap-4 md:grid-cols-4">
                    <CardStat
                        title="Total Earned (KAS)"
                        data="171876.2"
                        footer={'All time'}
                        icon={
                            <AiOutlineWallet className="h-8 w-8 ml-auto font-semibold text-[#308274]" />
                        }
                    />
                    <CardStat
                        title="Total Paid (KAS)"
                        data="427.875"
                        footer={'All time'}
                        icon={
                            <CiMoneyBill className="h-8 w-8 ml-auto font-semibold text-[#308274]" />
                        }
                    />
                    <CardStat
                        title="Daily Average"
                        data="432.11"
                        footer={'Last 7 days (KAS/day)'}
                        icon={
                            <FaCalendarDay className="h-8 w-8 ml-auto font-semibold text-[#308274]" />
                        }
                    />
                    <CardStat
                        title="Weekly Average"
                        data="3024.77"
                        footer={'Last 30 days (KAS/week)'}
                        icon={
                            <FaCalendarWeek className="h-8 w-8 ml-auto font-semibold text-[#308274]" />
                        }
                    />
                </div>
            </div>
        </div>
    )
}

export default Earnings

import { useState } from 'react'
import { IoIosGlobe } from 'react-icons/io'
import { GiMining } from 'react-icons/gi'
import { FaUsers } from 'react-icons/fa'
import { AiOutlineClockCircle } from 'react-icons/ai'
import MobileNav from '../components/MobileNav'
import MobileSidebar from '../components/MobileSidebar'
import CardStat from '../components/CardStat'
import WorkerTable from '../components/WorkerTable'
import { Worker } from '../@types'

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)
    const toogleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    const dataOne: Worker[] = [
        {
            name: 'Viola Amherd',
            hashRateOne: '10 TH/s',
            hashRateTwo: '9 TH/s',
            hashRateThree: '9 TH/s',
            status: 'active',
        },
        {
            name: 'Albert Rösti',
            hashRateOne: '10 TH/s',
            hashRateTwo: '9 TH/s',
            hashRateThree: '9 TH/s',
            status: 'active',
        },
        {
            name: 'Beat Jans',
            hashRateOne: '10 TH/s',
            hashRateTwo: '9 TH/s',
            hashRateThree: '9 TH/s',
            status: 'inactive',
        },
        {
            name: 'Ignazio Cassis',
            hashRateOne: '10 TH/s',
            hashRateTwo: '9 TH/s',
            hashRateThree: '11 TH/s',
            status: 'inactive',
        },
        {
            name: 'Karin Keller-Sutter',
            hashRateOne: '10 TH/s',
            hashRateTwo: '9 TH/s',
            hashRateThree: '9 TH/s',
            status: 'inactive',
        },
        {
            name: 'Guy Parmelin',
            hashRateOne: '10 TH/s',
            hashRateTwo: '9 TH/s',
            hashRateThree: '7 TH/s',
            status: 'inactive',
        },
        {
            name: 'Elisabeth Baume-Schneider',
            hashRateOne: '10 TH/s',
            hashRateTwo: '9 TH/s',
            hashRateThree: '9 TH/s',
            status: 'inactive',
        },
    ]

    return (
        <div className="relative w-full md:w-[80%] bg-gray-100 h-screen overflow-y-scroll">
            <MobileNav toogleSidebar={toogleSidebar} />
            <MobileSidebar isOpen={isSidebarOpen} />
            <p>Miner Dashboard</p>
            <div className="p-4">
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
                <div className="mt-4">
                    <WorkerTable data={dataOne} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard

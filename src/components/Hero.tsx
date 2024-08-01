const Hero = () => {
    return (
        <div className="h-[90vh] bg-[#308274] text-white">
            <div className="px-8 max-w-2xl py-8">
                <div className="px-4 py-2 rounded-full inline-block text-white border-2 border-[#9fdfd4] mt-14">
                    <p className="text-semibold">
                        Premier Mining Pool for Kaspa
                    </p>
                </div>
                <p className="text-6xl font-bold hero-text my-4">
                    Welcome to KasPool
                </p>
                <p className="max-w-lg">
                    Join the most reliable and efficient mining pool dedicated
                    to Kaspa. Kaspool offers you the best mining experience with
                    optimized performance, low fees, and instant payouts.
                    Maximize your earnings and be part of a thriving mining
                    community.
                </p>
                <button className="rounded-full bg-[#77c2b6] py-3 mt-6 text-white px-5 hover:bg-opacity-80 transition ease-in-out duration-200">
                    Search an address
                </button>
            </div>
        </div>
    )
}

export default Hero



const PerfectTrip = () => {
    return (
        <div className="bg-[#113065] my-10">
            <div className="lg:flex mx-auto container p-12 lg:gap-10">
                <div className="flex items-center mx-auto my-4 gap-5">
                    <img className="h-[100px] w-[100px]" src="/WishlistQucklist.png" alt="" />
                    <div>
                        <p className="text-xl font-medium text-white">Build your perfect trip</p>
                        <p className="text-gray-400">Book the best flights, stays and more – all in one place</p>
                    </div>
                </div>
                <div className="flex items-center mx-auto my-4 gap-5">
                    <img className="h-[100px] w-[100px]" src="/FreeCancellation.png" alt="" />
                    <div>
                        <p className="text-xl font-medium text-white">Stay flexible</p>
                        <p className="text-gray-400">Keep your travel plans flexible with free cancellation options</p>
                    </div>
                </div>
                <div className="flex items-center mx-auto gap-5">
                    <img className="h-[100px] w-[100px]" src="/CustomerService.png" alt="" />
                    <div>
                        <p className="text-xl font-medium text-white">Get 24/7 support</p>
                        <p className="text-gray-400">Contact us anytime and get support in multiple languages</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PerfectTrip;
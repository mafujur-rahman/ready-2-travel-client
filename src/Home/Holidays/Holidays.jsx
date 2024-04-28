
const Holidays = () => {
    return (
        <div className="bg-[#113065] mb-16 ">
            <div className="flex gap-16 mx-auto container justify-around">
                {/* left side */}
                <div className=" mt-10 p-10">
                    <h2 className="text-3xl font-bold text-white">Holidays in Tours: things to know</h2>
                    <div className="grid grid-cols-2 gap-5 mt-6">
                        <div className="p-5 bg-white rounded-lg">
                            <p className="text-xl font-medium">Small car</p>
                            <p>Most booked car type</p>
                        </div>
                        <div className="p-5 bg-white rounded-lg">
                            <p className="text-xl font-medium">BDT 6,629 per day</p>
                            <p>Avg. daily price for Small car</p>
                        </div>
                        <div className="p-5 bg-white rounded-lg">
                            <p className="text-xl font-medium">BDT 10,840 per night</p>
                            <p>Avg. cost of stay</p>
                        </div>
                        <div className="p-5 bg-white rounded-lg">
                            <p className="text-xl font-medium">August and July</p>
                            <p>Best time to visit</p>
                        </div>
                    </div>
                </div>
                {/* right side */}
                <div className="grid grid-cols-2 p-10">
                    <img className="h-[200px] w-[200px]" src="/public/deadsea.jpg" alt="" />
                    <img className="h-[200px] w-[200px]" src="/public/doha.jpg" alt="" />
                    <img className="col-span-2 w-[400px] h-[200px]" src="/public/fujairah.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Holidays;
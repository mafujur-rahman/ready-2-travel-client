

const Banner = () => {
    return (
        <div className="absolute">
            <div className="carousel w-full h-[300px] md:h-[500px] lg:h-[700px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="/deadsea.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="/doha.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="/fujairah.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="/macca.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div className="relative bottom-20 md:bottom-36 left-2 md:left-5">
                <h2 className="text-3xl md:text-4xl font-bold md:font-extrabold text-white">BEST IN TRAVEL 2024</h2>
                <h3 className="text-2xl md:text-3xl font-semibold md:font-bold text-white">Ready, set, see the world</h3>
            </div>
        </div>
    );
};

export default Banner;
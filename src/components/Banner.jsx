import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <a href="#slide3" className="btn btn-circle absolute bottom-72 left-3">❮</a>
                    <a href="#slide2" className="btn btn-circle absolute right-3 bottom-72">❯</a>
                    <div
                        className="hero h-[600px]"
                        style={{
                            backgroundImage:
                                "url(https://i.ibb.co/5W4bFSp5/man-walks-along-road-forest-fog-view-from-back-generative-al.jpg)",
                        }}
                    >
                        <div className="hero-overlay"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Welcome to HobbyHub</h1>
                                <p className="mb-5">
                                    Discover like-minded individuals, explore your passions, and join thriving hobby communities near you.
                                </p>
                                <button className="btn btn-primary">Join Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="slide2" className="carousel-item relative w-full">
                    <a href="#slide1" className="btn btn-circle absolute bottom-72 left-3">❮</a>
                    <a href="#slide3" className="btn btn-circle absolute right-3 bottom-72">❯</a>
                    <div
                        className="hero h-[600px]"
                        style={{
                            backgroundImage:
                                "url(https://i.ibb.co/93mSnJrH/vintage-old-rustic-cutlery-dark.jpg)",
                        }}
                    >
                        <div className="hero-overlay"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Find Your People</h1>
                                <p className="mb-5">
                                    Whether it's painting, coding, or hiking—connect with groups that share your interests and grow together.
                                </p>
                                <button className="btn btn-primary">Explore Groups</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="slide3" className="carousel-item relative w-full">
                    <a href="#slide2" className="btn btn-circle absolute bottom-72 left-3">❮</a>
                    <a href="#slide1" className="btn btn-circle absolute right-3 bottom-72">❯</a>
                    <div
                        className="hero h-[600px]"
                        style={{
                            backgroundImage:
                                "url(https://i.ibb.co/0RLnNhhc/silhouette-tree-cliff-reflecting-moonlight-tranquil-waters-generated-by-artificial-intelligence.jpg)",
                        }}
                    >
                        <div className="hero-overlay "></div>
                        <div className="hero-content text-neutral-content text-center ">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Start Something New</h1>
                                <p className="mb-5">
                                    Turn your curiosity into a hobby and your hobby into a lifestyle. It's time to do more of what you love.
                                </p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

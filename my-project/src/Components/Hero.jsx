import React from 'react';

// Hero section for the homepage.
const Hero = () => {
    return (
        <section id="home" className="min-h-[90vh] flex items-center justify-center text-center bg-[#191414]">
            <div className="animate-fadeIn">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Hello, I'm Manisha Dhankhar</h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-300">
                    I'm a passionate <span className="text-white font-semibold">Web Developer</span>
                </p>
                <a href="#projects" className="bg-[#1DB954] text-white font-bold py-3 px-8 rounded-full hover:bg-[#1AA34A] transition-all transform hover:scale-105">
                    View My Profile
                </a>
            </div>
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </section>
    );
};

export default Hero;

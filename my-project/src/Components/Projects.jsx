import React from 'react';
import SectionTitle from './SectionTitle';
import Student from './studentdb.png';
import waterfoot from './waterfootprint.png'
// Data for projects
const projectsData = [
    {
        title: 'Student Dashboard',
        description: 'A responsive front-end project for a student profile dashboard page, built using HTML and CSS. This project features a detailed user information form within a modern, clean interface',
        image:Student,
        githubLink: 'https://github.com/ManishaDhankhar',
        liveLink: 'https://github.com/ManishaDhankhar/Student-DashBoard',
    },
    {
        title: 'Water FootPrint',
        description: 'A web-based tool to monitor and reduce personal water usage, built for a Microsoft hackathon',
        image: waterfoot,
        githubLink: 'https://github.com/ManishaDhankhar',
        liveLink: 'https://github.com/ManishaDhankhar',
    },
];

// Projects section showcasing portfolio work
const Projects = () => (
    <section id="projects" className="bg-[#282828] py-20">
        <div className="container mx-auto px-4">
            <SectionTitle>Projects</SectionTitle>
            <div className="grid md:grid-cols-2 gap-8">
                {projectsData.map(project => (
                    <div key={project.title} className="bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:shadow-black/30 hover:-translate-y-2 transition-all">
                        <img src={project.image} alt={`Screenshot of ${project.title}`} className="w-full h-56 object-cover"/>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                            <p className="text-gray-300 mb-4">{project.description}</p>
                            <div className="space-x-4">
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#1DB954] hover:underline">GitHub</a>
                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#1DB954] hover:underline">Live Demo</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Projects;

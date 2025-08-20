import React from 'react';
import SectionTitle from './SectionTitle';

// Data for skills
const skillsData = [
    { name: 'HTML5', icon: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png' },
    { name: 'Tailwind', icon: 'https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo.png' },
    { name: 'JavaScript', icon: 'https://www.svgrepo.com/show/349419/javascript.svg' },
     { name: 'React', icon: 'https://www.svgrepo.com/show/452092/react.svg' },
     { name: 'Express.js', icon: 'https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png' },
      { name: 'Node.js', icon: 'https://www.svgrepo.com/show/354119/nodejs-icon.svg' },
       { name: 'Bootstrap', icon: 'https://e7.pngegg.com/pngimages/162/309/png-clipart-bootstrap-responsive-web-design-web-development-logo-django-others-miscellaneous-purple-thumbnail.png' },
];

// Skills section displaying tech stack.
const Skills = () => (
    <section id="skills" className="py-20 bg-[#191414]">
        <div className="container mx-auto px-4">
            <SectionTitle>My Skills</SectionTitle>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center">
                {skillsData.map(skill => (
                    <div key={skill.name} className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl hover:shadow-black/30 hover:-translate-y-2 transition-all">
                        <img src={skill.icon} alt={`${skill.name} icon`} className="h-12 mx-auto mb-4"/>
                        <p className="font-semibold text-white">{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Skills;

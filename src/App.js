import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

import { 
  BookOpenIcon, 
  CodeBracketIcon, 
  AcademicCapIcon, 
  RocketLaunchIcon, 
  CheckBadgeIcon, 
  UsersIcon, 
  DocumentTextIcon,
  ServerIcon,
  TableCellsIcon,
  DevicePhoneMobileIcon,
  Cog6ToothIcon,
  WrenchScrewdriverIcon,
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon
} from '@heroicons/react/24/outline';

const ManipulLandingPage = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      title: "Faculty Management System",
      description: "Streamlined administrative tool for comprehensive faculty data management.",
      image: "./Faculty.png",
      technologies: ["ReactJS", "DBMS", "Kubernetes"],
      // link: "#"
    },
    {
      title: "Student AI Chatbot Support",
      description: "AI-powered support system to assist students with real-time queries.",
      image: "/Messaging.png",
      technologies: ["GenAI", "Docker", "PostgreSQL"],
      // link: "#"
    },
    {
      title: "AI Powered Student Attendance System",
      description: "Automated attendance tracking using advanced AI technologies.",
      image: "/Attendance.png",
      technologies: ["Python", "TensorFlow", "React"],
      // link: "#"
    }
  ];

  const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };
  
    return (
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative">
          {/* Mobile Layout */}
          <div className="md:hidden flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <img 
                src="/Manipal.png" 
                alt="PDC Logo" 
                className="h-10 w-auto rounded-lg"
              />
              <div className="text-lg font-medium text-gray-800 tracking-wide">
                PDC, MIT Manipal
              </div>
            </div>
            
            {/* Mobile Menu Toggle */}
            <button 
              onClick={toggleMobileMenu} 
              className="text-gray-600 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
  
          {/* Mobile Dropdown Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50">
              <nav className="flex flex-col items-center py-4 space-y-4">
                <a 
                  href="#about" 
                  className="text-gray-600 hover:text-[#CF7500]"
                  onClick={toggleMobileMenu}
                >
                  About
                </a>
                <a 
                  href="#projects" 
                  className="text-gray-600 hover:text-[#CF7500]"
                  onClick={toggleMobileMenu}
                >
                  Projects
                </a>
                <a 
                  href="#benefits" 
                  className="text-gray-600 hover:text-[#CF7500]"
                  onClick={toggleMobileMenu}
                >
                  Benefits
                </a>
                <a 
                  href="https://forms.gle/yourGoogleFormLink" 
                  target="_blank" 
                  className="bg-[#CF7500] text-white px-4 py-2 rounded-full hover:bg-[#A55800] transition-colors"
                  onClick={toggleMobileMenu}
                >
                  Apply Now
                </a>
              </nav>
            </div>
          )}
  
          {/* Desktop Layout */}
          <div className="hidden md:flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <img 
                src="/Manipal.png" 
                alt="PDC Logo" 
                className="h-12 w-auto rounded-lg"
              />
              <div className="text-xl font-medium text-gray-800 tracking-wide">
                Product Development Cell, MIT Manipal
              </div>
            </div>
            <nav className="space-x-4">
              <a href="#about" className="text-gray-600 hover:text-[#CF7500]">About</a>
              <a href="#projects" className="text-gray-600 hover:text-[#CF7500]">Projects</a>
              <a href="#benefits" className="text-gray-600 hover:text-[#CF7500]">Benefits</a>
              <a 
                href="https://forms.gle/yourGoogleFormLink" 
                target="_blank" 
                className="bg-[#CF7500] text-white px-4 py-2 rounded-full hover:bg-[#A55800] transition-colors"
              >
                Apply Now
              </a>
            </nav>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#F4F4F4] antialiased">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src="/Manipal.png" 
              alt="PDC Logo" 
              className="h-12 w-auto rounded-lg "
              // border-2 border-[#CF7500]

            />
        <div className="text-xl font-medium text-gray-800 tracking-wide">
          Product Development Cell, MIT Manipal
        </div>

          </div>
          <nav className="space-x-4">
            <a href="#about" className="text-gray-600 hover:text-[#CF7500]">About</a>
            <a href="#projects" className="text-gray-600 hover:text-[#CF7500]">Projects</a>
            <a href="#benefits" className="text-gray-600 hover:text-[#CF7500]">Benefits</a>
            <a 
              href="https://forms.gle/yourGoogleFormLink" 
              target="_blank" 
              className="bg-[#CF7500] text-white px-4 py-2 rounded-full hover:bg-[#A55800] transition-colors"
            >
              Apply Now
            </a>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Empowering Student Innovation
          <span className="block text-[#CF7500] mt-2">Through Practical Technology Projects</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          An initiative by the Department of Computer Science & Engineering to enhance student learning through hands-on product creation.
        </p>
        {/* <div className="mt-8">
          <a 
            href="https://forms.gle/yourGoogleFormLink" 
            target="_blank" 
            className="bg-[#CF7500] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#A55800] transition-colors"
          >
            Apply for Projects
          </a>
        </div> */}
      </div>


      {/* About Section */}
      <div id="about" className="bg-[#F4F4F4] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">About Us</h2>
          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            <div className="md:w-1/2">
              <img 
                src="/Building.jpg" 
                alt="About Image" 
                className="rounded-lg shadow-md w-full object-cover"
              />
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <p className="text-lg text-gray-700 mb-4">
                The <strong>Product Development Centre</strong> (PDC) is an initiative by the 
                <strong> Department of Computer Science & Engineering of MIT Manipal</strong>, it offers opportunities to work on real-time projects 
                under faculty mentorship, aligned with industry standards and technological advancements.
              </p>
              <p className="text-lg text-gray-700 mb-4">
              To foster an environment where students are introduced to cutting-edge technology platforms and tools, 
              focusing on skill development by guiding them to shape their innovative ideas into viable and impactful products.
              </p>
              {/* <p className="text-lg text-gray-700">
                From full-stack development to AI-powered applications, we offer a variety of opportunities for 
                students to contribute, learn, and grow in a collaborative environment.
              </p> */}
            </div>
          </div>
        </div>
      </div>


      {/* Key Benefits Section */}
      <div id="benefits" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Key Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#F4F4F4] p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300">
              <RocketLaunchIcon className="w-12 h-12 mx-auto text-[#CF7500] mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Real-world Experience</h3>
              <p className="text-gray-600">
                Gain hands-on experience in full-stack development and project management methodologies.
              </p>
            </div>
            <div className="bg-[#F4F4F4] p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300">
              <CheckBadgeIcon className="w-12 h-12 mx-auto text-[#CF7500] mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Industry-Relevant Skills</h3>
              <p className="text-gray-600">
              Develop industry relevant skills in building modern technologies.
              </p>
            </div>
            <div className="bg-[#F4F4F4] p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300">
              <AcademicCapIcon className="w-12 h-12 mx-auto text-[#CF7500] mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Professional Recognition</h3>
              <p className="text-gray-600">
              On Completion, Students will get experience certificate useful for thier summer internships.
              (Projects can be considered as part of their ITR*)             </p>
            </div>
            <div className="bg-[#F4F4F4] p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300">
              <DocumentTextIcon className="w-12 h-12 mx-auto text-[#CF7500] mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Recommendation Letters</h3>
              <p className="text-gray-600">
                Receive experience certificates and potential letters of recommendation, from the CSE department on successful completion*
              </p>
              </div>
              <div className="bg-[#F4F4F4] p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300">
              <UsersIcon className="w-12 h-12 mx-auto text-[#CF7500] mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Connections</h3>
              <p className="text-gray-600">
              Regular connect with Industry experts and opportunity to participate in workshops
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="py-16 bg-[#F4F4F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Upcoming Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
                onMouseEnter={() => setActiveProject(index)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover"
                  />
                  {/* {activeProject === index && (
                    // <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    //   <a 
                    //     href={project.link} 
                    //     className="bg-white text-[#CF7500] px-4 py-2 rounded-full hover:bg-[#FFF4E6]"
                    //   >
                    //     View Details
                    //   </a>
                    // </div>
                  )} */}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex space-x-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech Stacks Section */}
<div id="tech-stack" className="bg-gray-50 py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Tech Stacks</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-center">
      {/* JavaScript and TypeScript */}
      <div className="flex flex-col items-center">
        <CodeBracketIcon className="w-14 h-14 text-blue-600 mb-4" />
        <h3 className="text-lg font-semibold text-gray-800">Languages</h3>
        <p className="text-gray-600">JavaScript, TypeScript</p>
      </div>

      {/* ReactJS and ReactNative */}
      <div className="flex flex-col items-center">
        <DevicePhoneMobileIcon className="w-14 h-14 text-green-600 mb-4" />
        <h3 className="text-lg font-semibold text-gray-800">Front-End</h3>
        <p className="text-gray-600">ReactJS, React Native</p>
      </div>

      {/* Spring Boot and Microservices */}
      <div className="flex flex-col items-center">
        <ServerIcon className="w-14 h-14 text-purple-600 mb-4" />
        <h3 className="text-lg font-semibold text-gray-800">Back-End</h3>
        <p className="text-gray-600">Spring Boot, Microservices, DDD</p>
      </div>

      {/* PostgreSQL */}
      <div className="flex flex-col items-center">
        <TableCellsIcon className="w-14 h-14 text-yellow-600 mb-4" />
        <h3 className="text-lg font-semibold text-gray-800">Database</h3>
        <p className="text-gray-600">PostgreSQL</p>
      </div>

      {/* Jenkins, Docker, Kubernetes */}
      <div className="flex flex-col items-center">
        <Cog6ToothIcon className="w-14 h-14 text-red-600 mb-4" />
        <h3 className="text-lg font-semibold text-gray-800">DevOps</h3>
        <p className="text-gray-600">Jenkins, Docker, Kubernetes</p>
      </div>

      {/* Additional Tools */}
      <div className="flex flex-col items-center">
        <WrenchScrewdriverIcon className="w-14 h-14 text-indigo-600 mb-4" />
        <h3 className="text-lg font-semibold text-gray-800">Additional Tools</h3>
        <p className="text-gray-600">Figma, Git, VS Code, Postman</p>
      </div>
    </div>
  </div>
</div>


      {/* Eligibility Section */}
      <div id="eligibility" className="py-16 bg-[#F4F4F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Eligibility Criteria</h2>
          <div className="max-w-3xl mx-auto bg-white py-16 p-8 rounded-xl">
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <CheckBadgeIcon className="w-6 h-6 text-[#CF7500] mr-3 mt-1" />
                Open to B.Tech students from 4th, 6th, and 8th Semesters, No backs.
              </li>
              <li className="flex items-start">
                <CheckBadgeIcon className="w-6 h-6 text-[#CF7500] mr-3 mt-1" />
                Familiarity with HTML, CSS, and JavaScript, basic understanding of Java and OOP concepts.
              </li>
              <li className="flex items-start">
                <CheckBadgeIcon className="w-6 h-6 text-[#CF7500] mr-3 mt-1" />
                Willingness to learn and adapt to new technologies, frameworks and dedicate sufficient time. 
              </li>
              <li className="flex items-start">
                <CheckBadgeIcon className="w-6 h-6 text-[#CF7500] mr-3 mt-1" />
                Good communication skills and the ability to work effectively in a team environment.
              </li>
            </ul>
          </div>
        </div>
      </div>



    <div id="contact" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Contact Us</h2>
        <div className="max-w-3xl mx-auto py-16 bg-[#F4F4F4] py-16 rounded-xl p-8 shadow-md">
          <div className="space-y-6">
            <div className="flex items-center">
              <EnvelopeIcon className="w-8 h-8 text-[#CF7500] mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                <a 
                  href="mailto:manoj.r@manipal.edu" 
                  className="text-gray-600 hover:text-[#CF7500] transition-colors"
                >
                  manoj.r@manipal.edu
                </a>
              </div>
            </div>
            
            <div className="flex items-center">
              <PhoneIcon className="w-8 h-8 text-[#CF7500] mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Mobile</h3>
                <a 
                  href="tel:+919740288939" 
                  className="text-gray-600 hover:text-[#CF7500] transition-colors"
                >
                  +91 9740288939
                </a>
              </div>
            </div>
            
            <div className="flex items-center">
              <MapPinIcon className="w-8 h-8 text-[#CF7500] mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Location</h3>
                <p className="text-gray-600">
                  Manipal Institute of Technology, Manipal, Karnataka 576104
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 italic">
              * For any inquiries related to the Product Development Cell
            </p>
          </div>
        </div>
      </div>
    </div>
          {/* Contact CTA */}
          <div className="bg-[#CF7500] py-16 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Join the Product Development Centre
        </h2>
        <p className="text-white text-xl mb-8">
          Transform your learning experience with real-world projects</p>
          {/* <p className="font-bold text-white mb-2">A programming test may be conducted based on the number of applications*</p> */}
        <a 
          href="https://forms.gle/yourGoogleFormLink" 
          target="_blank"
          className="bg-white text-[#CF7500] px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#FFF4E6] transition-colors"
        >
          Apply Now
        </a>
        
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-6 text-center">
        <p>© 2024 Department of Computer Science & Engineering,MIT Manipal</p>
        <p className="text-sm text-gray-400 mt-2">*Conditions Apply</p>
      </footer>
    </div>
  );
};

export default ManipulLandingPage;
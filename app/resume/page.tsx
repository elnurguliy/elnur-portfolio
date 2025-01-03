"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data
const about = {
    title: "About Me",
    description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quos.",
    info: [
        {
            filedName: "Name",
            fieldvalue: "Elnur Guliyev",
        },
        {
            filedName: "Phone",
            fieldvalue: "(+46) xxxxxxxxx",
        },
        {
            filedName: "Email",
            fieldvalue: "elnur@example.com",
        },
        {
            filedName: "Experience",
            fieldvalue: "10+ Years",
        },
        {
            filedName: "Nationality",
            fieldvalue: "Azerbaijan",
        },
        {
            filedName: "Languages",
            fieldvalue: "Azerbaijan, Turkish, English, Swedish",
        },
        {
            filedName: "Freelance",
            fieldvalue: "Available",
        },
    ]
};

// experience data
const experience = {
    icon: "/",
    title: "My experience",
    description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quos.",
    items: [
        {
            company: "It Tech",
            position: "Front-end Developer",
            duration: "2020 - present",
        },
        {
            company: "Web Tech",
            position: "Web Developer",
            duration: "2019 - 2020",
        },
        {
            company: "Sigma IT",
            position: "Intern",
            duration: "2018 - 2019",
        },
        {
            company: "Volvo AB",
            position: "Intern",
            duration: "2017 - 2018",
        },
        {
            company: "Zenseact AB",
            position: "UX/UI Designer",
            duration: "2015 - 2017",
        },
    ],
};

// education data
const education = {
    icon: "/",
    title: "My education",
    description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quos.",
    items: [
        {
            institution: "Medieinstitutet",
            degree: "Front-End Development and Web Programming",
            duration: "2024 - present",
        },
        {
            institution: "Jönköping University",
            degree: "Science in Information Technology",
            duration: "2022 - 2023",
        },
        {
            institution: "Online Course Platform",
            degree: "C++ Course Certification",
            duration: "2023",
        },
        {
            institution: "International IT College of Sweden",
            degree: "High School Diploma",
            duration: "2017 - 2019",
        },

    ],
};

// skills data
const skills = {
    title: "My skills",
    description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quos.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "HTML5",
        },

        {
            icon: <FaCss3 />,
            name: "CSS3",
        },

        {
            icon: <FaJs />,
            name: "JavaSript",
        },

        {
            icon: <FaReact />,
            name: "React",
        },

        {
            icon: <FaFigma />,
            name: "Figma",
        },
        {
            icon: <SiNextdotjs />,
            name: "Next.js",
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwind CSS",
        },
        {
            icon: <FaNodeJs />,
            name: "Node.js",
        },
    ],
};


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-16"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className="min-h-[70vh] w-full">

                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl 
                                                    flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px]
                                                    text-center lg:text-left">{item.position}
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>

                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* education */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] h-[184px] py-2 px-10 rounded-xl 
                                                    flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[360px] min-h-[60px]
                                                    text-center lg:text-left">{item.degree}
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.institution}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>

                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {skills.description}
                                    </p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill, index) => {
                                        return (
                                            <li key={index}>

                                                {/* Provides context for the tooltip, managing its behavior and settings like delay before showing the tooltip. */}
                                                <TooltipProvider delayDuration={100}>
                                                    {/* The container for the tooltip logic. Wraps the trigger and content components. */}
                                                    <Tooltip>
                                                        {/* The element that triggers the tooltip to show when hovered or focused. */}
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                        </TooltipTrigger>
                                                        {/* Defines the content that appears in the tooltip when triggered. */}
                                                        <TooltipContent>
                                                            <p>{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        {/* about */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className="flex items-center justify-center xl:justify-start gap-4"
                                            >
                                                <span className="text-white/60">{item.filedName}</span>
                                                <span className="text-xl">{item.fieldvalue}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;
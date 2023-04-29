import React, { useEffect, useState } from "react";
import projectData from "../Project/Projects.json";

export default function Projects() {
    const [projects,setProjects]=useState([])
    useEffect(()=>{
     setProjects(projectData.projects)
    },[])
    console.log(projects)
    return (
        <div className="flex  justify-center">
            <div className="overflow-x-auto  ">
                <div className="p-1.5 w-full inline-block align-middle">
                    <div className="overflow-hidden border rounded-lg">
                        <table className="min-w-80 divide-y divide-gray-200  bg-green-50	">
                            <thead className="bg-gray-50">
                                <tr className="my-5">
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-sm font-bold text-left bg-gray-50 uppercase "
                                    >
                                        Project Code
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3  text-sm font-bold text-left bg-gray-50 uppercase "
                                    >
                                        Project Location
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3  text-sm font-bold text-left bg-gray-50 uppercase "
                                    >
                                     Project Capacity
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3  text-sm font-bold text-left bg-gray-50 uppercase "
                                    >
                                     PPA Duration
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3  text-sm font-bold text-left bg-gray-50 uppercase "
                                    >
                                     Project Status
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3  text-sm font-bold text-right bg-gray-50 uppercase "
                                    >
                                        PPA Rate
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3  text-sm font-bold text-right bg-gray-50 uppercase "
                                    >
                                        Buy Project/Sold Out.
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                    {
                                        projects.map((project,index)=><tr key={index}> <td className="px-12 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                        {project.projectcode}
                                    </td>
                                    <td className="px-12 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                        {project.projectlocation}
                                    </td>
                                    <td className="px-14 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                        {project.projectcapacity}
                                    </td>
                                    <td className="px-14 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                        {project.ppaduration}
                                    </td>
                                    <td className="px-9 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                        {project.projectstatus}
                                    </td>
                                    <td className="px-10 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                        {project.pparate}
                                    </td>
                                    <td className="px-20 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                        {project.buyproject}
                                    </td>
                                    </tr>)
                                    }
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
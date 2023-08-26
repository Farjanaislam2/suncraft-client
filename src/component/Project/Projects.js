import React, { useEffect, useState } from "react";
import projectData from "../Project/Projects.json";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import PrivateRoute from "../../Routes/PrivateRoute";

export default function Projects() {
  //     const [projects,setProjects]=useState([])
  //     useEffect(()=>{
  //
  //             fetch('https://suncraft-server-avh2.vercel.app/getTableData')
  //             .then(res => res.json())
  //             .then(data=>setProjects(data ))
  //                 } ,[])
  //
  //     console.log(projects)
  return (
    // <div className="flex mt-10 mb-10 justify-center ">
    //     <div className="overflow-x-auto ">
    //         <div className="p-1.5 w-full inline-block align-middle">
    //             <div className="overflow-hidden border rounded-lg">
    //                 <table className="min-w-80 divide-y divide-gray-200  bg-green-50 table table-zebra w-full	">
    //                     <thead className="bg-gray-50">
    //                         <tr className="my-5">
    //                             <th
    //                                 scope="col"
    //                                 className="px-6 py-3 text-sm font-bold text-left bg-gray-50 uppercase "
    //                             >
    //                                 Project Code
    //                             </th>
    //                             <th
    //                                 scope="col"
    //                                 className="px-6 py-3  text-sm font-bold text-left bg-gray-50 uppercase "
    //                             >
    //                                 Project Location
    //                             </th>
    //                             <th
    //                                 scope="col"
    //                                 className="px-6 py-3  text-sm font-bold text-left bg-gray-50 uppercase "
    //                             >
    //                              Project Capacity
    //                             </th>
    //                             <th
    //                                 scope="col"
    //                                 className="px-6 py-3  text-sm font-bold text-left bg-gray-50 uppercase "
    //                             >
    //                              PPA Duration
    //                             </th>
    //                             <th
    //                                 scope="col"
    //                                 className="px-6 py-3  text-sm font-bold text-left bg-gray-50 uppercase "
    //                             >
    //                              Project Status
    //                             </th>
    //                             <th
    //                                 scope="col"
    //                                 className="px-6 py-3  text-sm font-bold text-right bg-gray-50 uppercase "
    //                             >
    //                                 PPA Rate
    //                             </th>
    //                             <th
    //                                 scope="col"
    //                                 className="px-6 py-3  text-sm font-bold text-right bg-gray-50 uppercase "
    //                             >
    //                                 Buy Project/Sold Out.
    //                             </th>
    //                         </tr>
    //                     </thead>
    //                     <tbody className="divide-y divide-gray-200">
    //                             {
    //                                 projects.map((project,index)=><tr key={index}> <td className="px-12 py-4 text-sm font-medium text-gray-800 whitespace-nowrap ">
    //                                 {index+1}
    //                             </td>
    //                             <td className="px-12 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
    //                                 {project.location}
    //                             </td>
    //                             <td className="px-14 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
    //                                 {project.capasity}
    //                             </td>
    //                             <td className="px-14 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
    //                                 {project.duration}
    //                             </td>
    //                             <td className="px-9 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
    //                                 {project.status}
    //                             </td>
    //                             <td className="px-10 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
    //                                 {project.rate}
    //                             </td>
    //                             <td className="px-20 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
    //                                 {project.avalable}
    //                             </td>
    //                             </tr>)
    //                             }
    //
    //                     </tbody>
    //                 </table>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    <section>
      <div className="flex justify-center mt-16">
        <video
          className="w-[500px] "
          src="https://res.cloudinary.com/dhs0i1svy/video/upload/v1687484862/videos/1687484857751.mp4"
        ></video>
      </div>
      <div className="flex justify-evenly mt-[100px] mb-16">
        <div>
          <h1 className="text-green-500 bg-gray-200 text-[30px] p-4 rounded-md flex gap-5">
            Capex
          </h1>
          <PrivateRoute>
          <Link to="/capex">
            <h1 className="text-green-500 mt-5 bg-gray-200 text-[20px] p-4 rounded-md flex gap-5">
              Show Your Interest{" "}
              <HiArrowNarrowRight className="mt-3"></HiArrowNarrowRight>
            </h1>
          </Link>
          </PrivateRoute>
        </div>

        <Link to="/resco">
          <h1 className="text-green-500 bg-gray-200 text-[30px] p-4 rounded-md flex gap-5">
            Resco <HiArrowNarrowRight className="mt-3"></HiArrowNarrowRight>
          </h1>
        </Link>
      </div>
    </section>
  );
}

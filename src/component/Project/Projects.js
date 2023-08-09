import React, { useEffect, useState } from "react";
import projectData from "../Project/Projects.json";

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
      <div>
        <form action="">
      <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
      </form>
      </div>

      <div></div>
    </section>
  );
}

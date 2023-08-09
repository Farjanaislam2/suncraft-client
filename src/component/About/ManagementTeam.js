import React from 'react'

export default function ManagementTeam() {
const teams=[
    {
      id:1,
        img:"https://www.scholarlabfoundation.tech/tech/assets/img/team/anjan.jpg",
        name:"Anjan Ghosh",
        post:"Managing Director",
        mail:"anjan.g@scholarlabfoundation.tech",
        description: "Aanjan completed his B.Tech in Electrical Engineering from IIT Kharagpur and obtained his MBA in General Management from XLRI, Jamshedpur. He has close to 40 years of rich industrial experience in power sector and non conventional energy. He had in past served in various"
    },
    {
      id:2,
        img:"https://www.scholarlabfoundation.tech/tech/assets/img/team/partha.jpg",
        name:"Dr. Partha Mitra",
        post:"Director : Strategy",
        mail:"partha.m@scholarlabfoundation.tech",
        description: "Partha completed his M.Sc in Geophysics from IIT Kharagpur, M.Tech in Geophysical Instrumentation from IIT (ISM) Dhanbad and PhD in Oil field development from NGRI-OU, Hyderabad. He has over two decades of corporate experience in Energy business. Partha has"
    },
    {
      id:3,
        img:"https://www.scholarlabfoundation.tech/tech/assets/img/team/nirmal.jpg",
        name:"Nirmal Agarwal",
        post:"Director : IT Ecosystem Development",
        mail:"nirmal.a@scholarlabfoundation.tech",
        description: "Nirmal did his B.Tech in Computer Science from IIT Kharagpur and specialises in application and development of IT ecosystem. He has over three decades of experience in industrial research in IT and related fields, entrepreneurship"
    },
    {
      id:4,
        img:"https://www.scholarlabfoundation.tech/tech/assets/img/team/avijit.jpg",
        name:"Avijit Jana",
        post:"Advisor : Technology",
        mail:"avijit.j@scholarlabfoundation.tech",
        description: "Avijit did his BE in Mechanical Engineering from Jadavpur University, followed by M.Tech in Quality Reliability and Operation Research from ISI Kolkata and MBA in Finance from VGSOM, IIT Kharagpur. He has worked both in public and private sector and brings with him over 25"
    },
    {
      id:5,
        img:"https://www.scholarlabfoundation.tech/tech/assets/img/team/ritwik.jpg",
        name:"Ritwik Mukherjee",
        post:"Director : Public Relation",
        mail:"ritwik.m@scholarlabfoundation.tech",
        description: "Ritwik did his Graduation & Post Graduation in Economics from Calcutta University followed by PGDB on Journalism from Calcutta University. He has more than 25 years of experiences on journalism business. He led more than one renowned news agencies in India."
    },
    {
      id:6,
        img:"https://www.scholarlabfoundation.tech/tech/assets/img/team/rabin.jpg",
        name:"Rabin Roy",
        post:"Director:Technology & CPDO Founder",
        mail:"rabin.r@scholarlabfoundation.tech",
        description: "Rabin completed his B.Tech in Mechanical Engineering from IIT Kharagpur and MBA in Finance from VGSOM, IIT Kharagpur. He worked in public as well as in private sector before starting of his own in energy industry. He is"
    },
]


  return (
    <div className='grid lg:grid-cols-3 gap-10 mt-[100px] mb-[50px]'>
      {
        teams.map(team =>
          <div key={team.id} className="card w-96 bg-gray-200 shadow-xl">
  <figure className="px-8 pt-10">
    <img src={team.img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{team.name}</h2>
    <h3>{team.post}</h3>
    <h4 className='text-blue-600'>Email: {team.mail}</h4>
    <p>{team.description}</p>
   
  </div>
</div>
          
          )
      }
    </div>
  )
}

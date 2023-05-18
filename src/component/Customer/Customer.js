import React, { useEffect, useState } from 'react';

const Customer = () => {
 
  const [logo, setlogo] = useState([])



  useEffect(() => {
    fetch('http://localhost:5000/getLogo')
      .then(res => res.json())
      .then(data => setlogo(data))
  }, [])

  console.log(logo[0])

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4 py-2 text-cyan-500">Our Customers</h1>
      <div className="grid grid-cols-4 gap-8 px-5 ">
        {logo.map((customer) => (
          <div key={customer.id}>
            <div className="max-w-full overflow-y-auto">
              <img src={logo[0]?.image?.url} alt='#' />
            </div>
            {/* <div className="max-w-full overflow-y-auto">
              <map name={`map-${customer.id}`}>
                {customer.mapAreas.map((area, index) => (
                  <area
                    key={index}
                    shape={area.shape}
                    coords={area.coords}
                    href={area.href}
                    alt={area.alt}
                  />
                ))}
              </map>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customer;

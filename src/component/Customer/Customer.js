import React, { useEffect, useState } from 'react';

const Customer = () => {
 
  const [logo, setlogo] = useState([])



  useEffect(() => {
    fetch('https://suncraft-server-avh2.vercel.app/getCustomerLogo')
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
              <img src={customer?.image?.url} alt='#' />
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customer;

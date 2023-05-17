import React from 'react';

const Customer = () => {
  const customers = [
    {
      id: 1,
      name: 'Customer 1',
      imageUrl: 'https://1000logos.net/wp-content/uploads/2020/10/Aegon-Logo.png',
      mapAreas: [
        { shape: 'rect', coords: '0,0,200,200', href: '#', alt: 'Area 1' },
        { shape: 'rect', coords: '200,0,400,200', href: '#', alt: 'Area 2' },
      ],
    },
    {
      id: 2,
      name: 'Customer 2',
      imageUrl: 'https://1000logos.net/wp-content/uploads/2018/01/Airtel-Logo.png',
      mapAreas: [
        { shape: 'rect', coords: '0,0,300,200', href: '#', alt: 'Area 1' },
        { shape: 'rect', coords: '300,0,600,200', href: '#', alt: 'Area 2' },
      ],
    },
    {
      id: 3,
      name: 'Customer 3',
      imageUrl: 'https://1000logos.net/wp-content/uploads/2021/12/Bflix-Movies-Logo.png',
      mapAreas: [
        { shape: 'rect', coords: '0,0,300,200', href: '#', alt: 'Area 1' },
        { shape: 'rect', coords: '300,0,600,200', href: '#', alt: 'Area 2' },
      ],
    },
    {
      id: 4,
      name: 'Customer 4',
      imageUrl: 'https://1000logos.net/wp-content/uploads/2021/02/Bharat-Petroleum-logo.png',
      mapAreas: [
        { shape: 'rect', coords: '0,0,300,200', href: '#', alt: 'Area 1' },
        { shape: 'rect', coords: '300,0,600,200', href: '#', alt: 'Area 2' },
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4 py-2 text-cyan-500">Our Customers</h1>
      <div className="grid grid-cols-4 gap-8 px-5 ">
        {customers.map((customer) => (
          <div key={customer.id}>
            <div className="max-w-full overflow-y-auto">
              <img src={customer.imageUrl} alt={customer.name} />
            </div>
            <div className="max-w-full overflow-y-auto">
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customer;

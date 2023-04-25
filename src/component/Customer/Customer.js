import React from 'react';


function Customer(props) {
    return (
        <div>
              <div className="flex flex-col items-center justify-center h-screen ">
      <h1 className="text-4xl font-bold mb-8">Know Our Customer</h1>
      <div className="max-w-md">
        <p className="text-lg mb-4">At our company, we believe that understanding our customers is key to providing the best possible service. Here are some things we know about our customers:</p>
        <ul className="list-disc ml-8">
          <li className="mb-2">They value quality over quantity</li>
          <li className="mb-2">They prioritize sustainability</li>
          <li className="mb-2">They value transparency and honesty</li>
          <li className="mb-2">They are interested in learning more about our company and our values</li>
        </ul>
        <p className="text-lg mt-8">We're always looking for ways to better serve our customers and meet their needs. If you have any feedback or suggestions, please don't hesitate to reach out to us!</p>
      </div>
    </div>
        </div>
    );
}

export default Customer;
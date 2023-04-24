import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';

function App() {
  return (
    <div className="text-black">
      <RouterProvider router={router}></RouterProvider>
       
    </div>
  );
}

export default App;


import { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import DashBoard from './Components/DashBoard/DashBoard';
import SideBar from './Components/Header/SideBar';

function App() {
  const [navOpen, setnavOpen] = useState(false);
  const [getAddress, setgetAddress] = useState("")




  return (
    <div className="App">
      <div id="root">
        <div className="flex h-screen bg-gray-50 dark:bg-gray-900 ">
          <SideBar navOpen={navOpen} />

          <div className="flex flex-col flex-1 w-full">
            <Header setnavOpen={setnavOpen} setgetAddress={setgetAddress} />

            <DashBoard getAddress={getAddress} />
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;

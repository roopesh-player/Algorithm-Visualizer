import { Route, Routes } from 'react-router-dom';
import BinarySearch from './Sub-Apps/BinarySearch';
import Interface from './Sub-Apps/Interface';
import Sieve from './Sub-Apps/Sieve';
import SortingApp from "./Sub-Apps/Sorting/SortingApp";

function App() {
  return (
    <div>
    <Routes>
      <Route exact path='/' element={<Interface key="interface" />}/>   
      <Route exact path='/sorting' element={<SortingApp key="sortingapp" />}/>
      <Route exact path='/sieve' element={<Sieve key="sieve"/>}/>
      <Route exact path='/binarysearch' element={<BinarySearch key="binarysearch"/>}/>
      {/* <Navigate to="/interface" /> */}
    </Routes>
    </div>
  );
}

export default App;

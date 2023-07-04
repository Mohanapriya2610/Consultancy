import './App.css';
import Sidebar from './components/Layouts/Sidebar';
import Login from './components/Auth/Login';
import OverView from './components/Layouts/OverView';
import { Routes, Route } from 'react-router-dom'
import CoordinatorInsert from './components/admin/Coordinator/CoordinatorInsert';
import CoordinatorTable from './components/admin/Coordinator/CoordinatorTable';
import CoordinatorUpdate from './components/admin/Coordinator/CoordinatorUpdate';
import ProtectedRoute from './ProtectedRoutes';

import WorkersInsert from './components/admin/Workers/WorkersInsert';
import WorkerTable from './components/admin/Workers/WorkersTable';
import WorkersUpdate from './components/admin/Workers/WorkersUpdate';


import ProductInsert from './components/admin/Products/Erode/ProductInsert';
import ProductsTable from './components/admin/Products/Erode/ProductsTable';
import ProductUpdate from './components/admin/Products/Erode/ProductsUpdate';

import CproductInsert from './components/admin/Products/Coimbatore/ProductInsert';
import CproductsTable from './components/admin/Products/Coimbatore/ProductsTable';
import CproductUpdate from './components/admin/Products/Coimbatore/ProductsUpdate'

import NproductInsert from './components/admin/Products/Nammakal/ProductInsert'
import NproductsTable from './components/admin/Products/Nammakal/ProductsTable';
import NproductUpdate from './components/admin/Products/Nammakal/ProductsUpdate'

import PproductInsert from './components/admin/Products/Pollachi/ProductInsert'
import PproductsTable from './components/admin/Products/Pollachi/ProductsTable';
import PproductUpdate from './components/admin/Products/Pollachi/ProductsUpdate'

import TproductInsert from './components/admin/Products/Tiruppur/ProductInsert'
import TproductsTable from './components/admin/Products/Tiruppur/ProductsTable';
import TproductUpdate from './components/admin/Products/Tiruppur/ProductsUpdate'

import TrproductInsert from './components/admin/Products/Trichy/ProductInsert'
import TrproductsTable from './components/admin/Products/Trichy/ProductsTable';
import TrproductUpdate from './components/admin/Products/Trichy/ProductsUpdate'
import { loadUser } from './actions/AuthAction';
import store from './store';
import { useEffect } from 'react';

function App() {

  useEffect(()=>{      
    store.dispatch(loadUser)
  })
  return (
    <div className="App">
      <Sidebar/>
      <Routes>
        <Route path='/overview' element={<ProtectedRoute><OverView/></ProtectedRoute>}/>
        <Route path='/' element={<Login/>}/>
        {/* Coordinator Routes */}
        <Route path='/admin/co' element={<ProtectedRoute><CoordinatorInsert/></ProtectedRoute>}/>
        <Route path='/admin/co/get' element={<ProtectedRoute><CoordinatorTable/></ProtectedRoute>}/>
        <Route path='/admin/co/update/:id' element={<ProtectedRoute><CoordinatorUpdate/></ProtectedRoute>}/>
  
        {/* Wrokers Routes */}
        <Route path='/admin/wo' element={<ProtectedRoute><WorkersInsert/></ProtectedRoute>}/>
        <Route path='/admin/wo/get' element={<ProtectedRoute><WorkerTable/></ProtectedRoute>}/>
        <Route path='/admin/wo/update/:id' element={<ProtectedRoute><WorkersUpdate/></ProtectedRoute>}/>

{/* Products Route for all districts 1st level routes*/}
        {/* District Routes */}
        {/* Erode District */}
        <Route path='/admin/di' element={<ProtectedRoute><ProductInsert/></ProtectedRoute>}/>
        <Route path='/admin/di/get' element={<ProtectedRoute><ProductsTable/></ProtectedRoute>}/>
        <Route path='/admin/di/update/:id' element={<ProtectedRoute><ProductUpdate/></ProtectedRoute>}/>

        {/* Coimbatore District */}
        <Route path='/admin/di/co' element={<ProtectedRoute><CproductInsert/></ProtectedRoute>}/>
        <Route path='/admin/di/co/get' element={<ProtectedRoute><CproductsTable/></ProtectedRoute>}/>
        <Route path='/admin/di/co/update/:id' element={<ProtectedRoute><CproductUpdate/></ProtectedRoute>}/>

        {/* Nammakal District */}
        <Route path='/admin/di/na' element={<ProtectedRoute><NproductInsert/></ProtectedRoute>}/>
        <Route path='/admin/di/na/get' element={<ProtectedRoute><NproductsTable/></ProtectedRoute>}/>
        <Route path='/admin/di/na/update/:id' element={<ProtectedRoute><NproductUpdate/></ProtectedRoute>}/>

        {/* Pollachi District */}
        <Route path='/admin/di/po' element={<ProtectedRoute><PproductInsert/></ProtectedRoute>}/>
        <Route path='/admin/di/po/get' element={<ProtectedRoute><PproductsTable/></ProtectedRoute>}/>
        <Route path='/admin/di/po/update/:id' element={<ProtectedRoute><PproductUpdate/></ProtectedRoute>}/>
        
        {/* Trichy District */}
        <Route path='/admin/di/tr' element={<ProtectedRoute><TrproductInsert/></ProtectedRoute>}/>
        <Route path='/admin/di/tr/get' element={<ProtectedRoute><TrproductsTable/></ProtectedRoute>}/>
        <Route path='/admin/di/tr/update/:id' element={<ProtectedRoute><TrproductUpdate/></ProtectedRoute>}/>

        {/* Tiruppur District */}
        <Route path='/admin/di/ti' element={<ProtectedRoute><TproductInsert/></ProtectedRoute>}/>
        <Route path='/admin/di/ti/get' element={<ProtectedRoute><TproductsTable/></ProtectedRoute>}/>
        <Route path='/admin/di/ti/update/:id' element={<ProtectedRoute><TproductUpdate/></ProtectedRoute>}/>        
      </Routes>

    </div>
  );
}

export default App;

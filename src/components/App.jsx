import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Verify from './Verify'
import Table from './Table'


function App(){
    return(
        <div>
            
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Verify />} ></Route>
                    <Route path='/table' element={<Table />} ></Route>
                </Routes>
            </BrowserRouter>
            
        </div>
    )
}


export default App;
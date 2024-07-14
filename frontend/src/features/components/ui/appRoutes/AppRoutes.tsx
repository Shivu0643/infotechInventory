import { Box } from 'grommet'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../home/component/Home'
import ProductManagementPage from '../../productManagement/pages/productManagementPage/ProductManagementPage'
import NewProductPage from '../../productManagement/pages/newProduct/NewProductPage'


const AppRoutes = () => {
  return (
    <Box fill>
        <Routes>
            <Route path='/'>
                <Route index={true} element={<Home/>}/>
                <Route path='product-management' element={<ProductManagementPage/>}/>
                <Route path='product-management/New-Product' element={<NewProductPage/>}/>
            </Route>
        </Routes>
    </Box>
  )
}   

export default AppRoutes
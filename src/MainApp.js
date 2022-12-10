import React from 'react';
import { Navegacion } from './Navegacion'
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom'
import { Buscar } from './Buscar'
import { NuevoRestaurante } from './NuevoRestaurante'
import {Inicio} from './Inicio'


export const MainApp = () => {

    return (<BrowserRouter>

        <Navegacion />
        <Routes>
            <Route path='Inicio' element={ <Inicio />} />
            <Route path='buscar' element={ <Buscar />} />
            <Route path='nuevorestaurante' element={ <NuevoRestaurante />} />



        </Routes>

        

        
    </BrowserRouter>)
};

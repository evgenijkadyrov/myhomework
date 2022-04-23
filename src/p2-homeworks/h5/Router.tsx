import React from 'react'
import { Route, Routes} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import Junior from "./pages/Junior";
import JuniorOld from "./pages/JuniorOld";
export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_OLD: '/junior+',
    // add paths
}

function Router() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            <Routes>

            {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
            {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
            <Route path={'/'}  element={<PreJunior/>}/>

            <Route path={PATH.PRE_JUNIOR} element={ <PreJunior/>}/>
            <Route path={PATH.JUNIOR} element={ <Junior/>}/>
            <Route path={PATH.JUNIOR_OLD} element={ <JuniorOld/>}/>
                // add routes

            {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
            <Route path={'/*'} element={ <Error404/>}/>

            </Routes>
        </div>
    )
}

export default Router
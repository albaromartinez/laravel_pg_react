import { FC, Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";

const menuRoutes: FC = () => {
    return (
        <Fragment>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home/>
                    }

                />
            </Routes>
        </Fragment>
    )
}

export default menuRoutes
import React from "react";
import { Routes, Route } from "react-router-dom";

import NotFound from "../NotFound";
import Index from "../products";

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/*" element= {<NotFound/>}></Route>
            </Routes>
        </div>
    );
};

export default Router;

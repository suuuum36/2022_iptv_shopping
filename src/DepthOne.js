import React from "react";
import SetNowPlay_1 from "./SetNowPlay_1";
import SetNowPlay_2 from "./SetNowPlay_2";
import SetNowPlay_3 from "./SetNowPlay_3";
import { Route, Routes } from "react-router-dom";

function DepthOne() {
  require('./reset.css');
  return (
    <article className="now_play">
            <Routes>
              <Route path={`1`} element={<SetNowPlay_1 />}></Route>
              <Route path={`2`} element={<SetNowPlay_2 />}></Route>
              <Route path={`3`} element={<SetNowPlay_3 />}></Route>
            </Routes>
    </article>
  );
}

export default DepthOne;

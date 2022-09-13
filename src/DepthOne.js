import React from "react";

import Gnb from './Gnb';
import ModulePlay from './ModulePlay';
import ModuleItem from './ModuleItem';

function DepthOne() {
  return (
    <article className="now_play">
        <section>
            <Gnb></Gnb>
            <ModulePlay></ModulePlay>
            <ModuleItem></ModuleItem>
        </section>
    </article>
  );
}

export default DepthOne;

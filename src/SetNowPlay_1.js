import React from "react";

import Gnb from './Gnb';
import ModulePlay from './ModulePlay';
import ModuleItem from './ModuleItem';

function SetNowPlay_1() {
  return (
    <section className="home_1">
      <Gnb></Gnb>
      <div>
        <ModulePlay></ModulePlay>
        <ModuleItem></ModuleItem>
      </div>
    </section>
  );
}

export default SetNowPlay_1;

import React from "react";

import Gnb from './Gnb';
import ModulePlay from './ModulePlay';
import ModuleItem from './ModuleItem';

function SetNowPlay_1() {
  return (
    <>
      <Gnb></Gnb>
      <div>
        <ModulePlay></ModulePlay>
        <ModuleItem></ModuleItem>
      </div>
    </>
  );
}

export default SetNowPlay_1;

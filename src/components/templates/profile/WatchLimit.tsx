"use client";
import React, { useState } from "react";
import Ages from "./Ages";
import TimeLimit from "./TimeLimit";
import Lock from "./Lock";
import Actions from "./Actions";
import EditProfile from "./EditProfile";
import TitleLimit from "./TitleLimit";

function WatchLimit({ profile }: any) {
  const [age, setAge] = useState(3);
  return (
    <>
      <EditProfile profile={profile} />
      <Ages setAge={setAge} age={age} />
      <Lock />
      {age < 12 && <TimeLimit />}
      <TitleLimit />
      <Actions />
    </>
  );
}

export default WatchLimit;

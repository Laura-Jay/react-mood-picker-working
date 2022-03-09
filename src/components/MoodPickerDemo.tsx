import { useState } from "react";

function MoodPickerDemo(): JSX.Element {
  const [moodValueFromCurrentRender, queueRerenderWithNewMoodValue] =
    useState("confused");

  const handleMoodChangeToHappy = () => {
    queueRerenderWithNewMoodValue("happy");
  };

  const handleMoodChangeToConfused = () => {
    queueRerenderWithNewMoodValue("confused");
  };

  const handleMoodChangeToSad = () => {
    queueRerenderWithNewMoodValue("sad");
  };

  const handleMoodChangeToAnxious = () => {
    queueRerenderWithNewMoodValue("anxious");
  };

  const handleMoodChangeToAngry = () => {
    queueRerenderWithNewMoodValue("angry");
  };

  const handleMoodChangeToScared = () => {
    queueRerenderWithNewMoodValue("scared");
  };


  return (
    <>
      <h1>Mood Picker Demo</h1>
      <p>Chosen mood: {moodValueFromCurrentRender.toUpperCase()}</p>
      <button onClick={handleMoodChangeToHappy}>😀</button>
      <button onClick={handleMoodChangeToConfused}>🤔</button>
      <button onClick={handleMoodChangeToSad}>😢</button>
      <button onClick={handleMoodChangeToAnxious}>😅</button>
      <button onClick={handleMoodChangeToAngry}>🤬</button>
      <button onClick={handleMoodChangeToScared}>😱</button>
      <button onClick={() => queueRerenderWithNewMoodValue("cool")}>😎</button>
    </>
  );
}

export default MoodPickerDemo;

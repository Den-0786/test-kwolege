'use client'

import Activity from "@components/Activity/Activity";
import NewActivity from "@components/NewActivity/NewActivity";
import { useState } from "react";


const DUMMY_ACTIVITY = [
    {
      id: "a1",
      title: "Coding",
      hours: 3.3,
      date: new Date(2025, 3, 30),
    },
    {
      id: "a2",
      title: "Cooking",
      hours: 2,
      date: new Date(2023, 3, 30),
    },
    {
      id: "a3",
      title: "Sleeping",
      hours: 2.3,
      date: new Date(2021, 3, 30),
    },
    {
      id: "a4",
      title: "Eating",
      hours: 1,
      date: new Date(2024, 3, 30),
    },
    {
      id: "a5",
      title: "Coding",
      hours: 5.3,
      date: new Date(2022, 3, 30),
    },
  ]

export default function Home() {
  const [activity, setActivity] = useState(DUMMY_ACTIVITY);
  const addActivityHandler = (activity) => {
    setActivity((prevActivity) => {
      return [activity, ...prevActivity];
    });
  
  }

  return (
    <div>
      <h2 className="text-lg flex justify-center mt-4 mb-5">
        My Daily Routine
      </h2>
      <NewActivity onAddActivity={addActivityHandler}></NewActivity>
      <div className="bg-white shadow-md rounded-xl p-4 max-w-lg mx-auto space-y-4">
          <Activity items={activity}></Activity>
      </div>
      
    </div>
  );
}

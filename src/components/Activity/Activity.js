'use client'

import { useState } from "react";

import ActivityFilter from "@components/Activity/ActivityFilter";
import ActivityList from "@components/Activity/ActivityList";
import ActivityChart from "./ActivityChart";

export default function Activity(props) {
  const [filteredYear, setFilterYear] = useState(2025);
  
  const filteredChangeHandler = selectedYear => {
      setFilterYear(selectedYear);
  };

  const filterActivity = props.items.filter(activity => {
    return activity.date.getFullYear().toString() === filteredYear
  });

  return(
    <div>
      <ActivityFilter selected={filteredYear} onFilterChange={filteredChangeHandler}></ActivityFilter>
      <ActivityChart activity={filterActivity}></ActivityChart>
      <ActivityList items={filterActivity}></ActivityList>
    </div>
  )
}

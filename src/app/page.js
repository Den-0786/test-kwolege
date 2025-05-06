import Activity from "@/components/Activity/Activity";
import NewActivity from "@/components/NewActivity/NewActivity";

export default function Home() {
  const activity = [
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
      date: new Date(2025, 3, 30),
    },
    {
      id: "a3",
      title: "Sleeping",
      hours: 2.3,
      date: new Date(2025, 3, 30),
    },
    {
      id: "a4",
      title: "Eating",
      hours: 1,
      date: new Date(2025, 3, 30),
    },
    {
      id: "a5",
      title: "Coding",
      hours: 5.3,
      date: new Date(2025, 3, 30),
    },
  ];
  return (
    <div className="bg-white shadow-md rounded-xl p-4 max-w-xl mx-auto space-y-4">
      <h2 className="text-lg flex justify-center mt-4 mb-5">
        My Daily Routine
      </h2>
      <NewActivity></NewActivity>
      <Activity
        id={activity[0].id}
        title={activity[0].title}
        hours={activity[0].hours}
        date={activity[0].date}
      ></Activity>
      <Activity
        id={activity[1].id}
        title={activity[1].title}
        hours={activity[1].hours}
        date={activity[1].date}
      ></Activity>
      <Activity
        id={activity[2].id}
        title={activity[2].title}
        hours={activity[2].hours}
        date={activity[2].date}
      ></Activity>
      <Activity
        id={activity[3].id}
        title={activity[3].title}
        hours={activity[3].hours}
        date={activity[3].date}
      ></Activity>
      <Activity
        id={activity[4].id}
        title={activity[4].title}
        hours={activity[4].hours}
        date={activity[4].date}
      ></Activity>
    </div>
  );
}

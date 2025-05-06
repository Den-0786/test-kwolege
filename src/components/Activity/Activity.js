import ActivityDate from "@/components/Activity/ActivityDate";

export default function Activity(props) {
  const hours = Math.floor(props.hours);
  const minutes = Math.round((props.hours - hours) * 60);
  const timeFormatted = `${hours}:${minutes.toString().padStart(2, "0")}`;

  return (
    <div className="flex items-center justify-between bg-gray-700 rounded-xl p-4 mb-5 shadow-md">
      <div className="">
        <h3>{props.id}</h3>
      </div>
      <div className="text-gray-900 font-medium">
        <ActivityDate date={props.date}></ActivityDate>
      </div>
      <div className="flex-1 flex justify-between items-center ml-6">
        <h2 className="text-lg font-semibold text-gray-200">{props.title}</h2>
        <div className="bg-violet-950 border-2 border-white rounded-md font-sans text-white px-4 py-1">
          {timeFormatted}
        </div>
      </div>
    </div>
  );
}

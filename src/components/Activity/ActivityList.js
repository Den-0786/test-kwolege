import ActivityItem from "./ActivityItems";

export default function ActivityList(props) {
        
    if(props.items.length === 0) {
        return <h2 className="text-center text-gray-900">Found no Activity</h2>
    }
    return (
        <ul>
            {props.items.map((activity) => (
                <ActivityItem
                key = {activity.id}
                title = {activity.title}
                date = {activity.date}
                hours = {activity.hours}>
                </ActivityItem>
            ))};
        </ul>
    )
}
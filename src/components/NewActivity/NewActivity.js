import ActivityForm from "@components/NewActivity/ActivityForm";

export default function NewActivity(props) {

    const saveActivityDataHandler = (enteredActivityData) => {
        const activityData = {
            ...enteredActivityData,
            id: Math.random().toString()
        };
        props.onAddActivity(activityData);
        console.log(activityData);
    }

    return (
        <div className="bg-purple-300 p-6 rounded-xl shadow-md mb-5 mt-4 max-w-lg mx-auto">
            <ActivityForm onSaveActivityData={saveActivityDataHandler} />
        </div>
    );
}

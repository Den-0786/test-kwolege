'use client'

import {useState} from 'react';

import ActivityDate from "@components/Activity/ActivityDate"

export default function ActivityItem  (props) {
        
        const [title, setTitle] = useState(props.title);
        const clickHandler = () => {
            setTitle("updated");
        }

    return (
        <div className="flex items-center justify-between rounded-xl mb-4 p-4 shadow-mb  bg-gray-800">
            <div className='text-gray-900 font-medium'>
                <ActivityDate date={props.date}></ActivityDate>
            </div>
            <div className="flex-1 flex justify-between items-center ml-6">
                <h2 className="text-lg font-semibold text-gray-200">{title}</h2>
                <div className="bg-violet-950 border-2 border-white rounded-md font-sans text-white px-4 py-1">
                    {props.hours}
                </div>
            </div>
            <button onClick={clickHandler}></button>
        </div>
    )
}
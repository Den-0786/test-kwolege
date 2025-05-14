'use client';

import { useState } from "react";

export default function ActivityForm(props) {
    
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredHours, setEnteredHours] = useState('');
    const [enteredDate, setEnteredDate] = useState('');



        const titleChangeHandler = (event) => {
            setEnteredTitle(event.target.value);
    }
        const hoursChangeHandler = (event) => {
            setEnteredHours(event.target.value);
        }
        const dateChangeHandler = (event) => {
            setEnteredDate(event.target.value);
        }
        
        const submitHandler = (event) => {
            event.preventDefault();
            setEnteredDate(event.target.value);
        

        const activityData = {
            title: enteredTitle,
            hours: parseFloat(enteredHours),
            date: new Date(enteredDate)
        }
        
            props.onSaveActivityData(activityData);
            setEnteredTitle('');
            setEnteredHours('');
            setEnteredDate('');
        };

        const numericHours = parseFloat(enteredHours) || 0;
        const hours = Math.floor(numericHours);
        const minutes = Math.round((numericHours - hours) * 60);
        const timeFormatted = `${hours}:${minutes.toString().padStart(2, "0")}`;


    return (
        <form onSubmit={submitHandler}>
            <div className='flex flex-wrap gap-4'>
                <div className="flex flex-col flex-1 min-w-[150px]">
                    <label className="font-semibold text-sm mb-1 text-gray-800">Title:</label>
                    <input onChange={titleChangeHandler}
                    type="text"
                    className="p-2 text-sm rounded-md text-gray-800 bg-white focus:outline-none focus:ring-purple-500"
                    />
                </div>
                <div className="flex flex-col flex-1 min-w-[150px]">
                    <label className="font-semibold text-sm mb-1 text-gray-800">Hours:</label>
                    <input onChange={hoursChangeHandler}
                    type="number"
                    min="1"
                    step="0.01"
                    value={enteredHours}
                    className="p-2 text-sm rounded-md text-gray-800 bg-white focus:outline-none focus:ring-purple-500"
                    />
                    {enteredHours && (
                        <p className="text-xs text-gray-600 mt-1">
                            {timeFormatted} hrs
                        </p>
                    )}
                </div>
                <div className="flex flex-col flex-1 min-w-[150px]">
                    <label className="font-semibold text-sm mb-1 text-gray-800">Date:</label>
                    <input onChange={dateChangeHandler}
                    type="date"
                    min="2022-01-01"
                    max="2025-12-31"
                    className="p-2 text-sm rounded-md text-gray-800 bg-white focus:outline-none focus:ring-purple-500"
                    />
                </div>
            </div>
            <div className=' mt-2'>
                <button 
                type='submit'
                className="bg-purple-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-800 transition"
                >
                Add Activity</button>
            </div>
        </form>
    )

}
export default function ActivityDate({date}) {
    const month = date.toLocaleString('en-US', {month:'long'});
    const year = date.toLocaleString('en-US', {year: 'numeric'});
    const day = date.toLocaleString('en-US', {day: '2-digit'});


    return (
        <div className="flex flex-col items-center justify-center bg-gray-800 text-white border-1 border-white rounded-xl px-4 py-2 w-16 h-16 ml-2 shadow">
            <div className="text-sms font-semibold">{month}</div>
            <div className="text-xs">{day}</div>
            <div className="text-xs font-bold">{year}</div>
            
        </div>
    )
}
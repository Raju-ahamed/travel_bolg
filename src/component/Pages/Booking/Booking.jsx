import React from 'react';
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import 'react-day-picker/dist/style.css';

const Booking = ({ blog }) => {
    const [date, setDate] = useState();
    return (
        <div>
            <div
                className="hero min-h-screen transition-all duration-1000"
                style={{
                    backgroundImage: `url("${blog.img}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="hero-overlay"></div>
                <div className='flex items-center'>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">{blog.name}</h1>
                            <p className="mb-5">
                                {
                                    blog.desc
                                }
                            </p>
                        </div>
                    </div>
                    <div className="card-body rounded bg-white text-black">
                        <fieldset className="fieldset">
                            <label className="label font-bold">Origin</label>
                            <input type="text" className="border-2 bg-gray-300 rounded p-1" placeholder="your area" />
                            <label className="label font-bold">Destination</label>
                            <input type="text" className="border-2 bg-gray-300 rounded p-1" placeholder="where to go" />
                            <div className='flex justify-between gap-2'>
                                <div className="flex flex-col gap-2">
                                    <label className="font-bold">Select Date</label>
                                    <div className="relative">
                                        <button
                                            popoverTarget="rdp-popover"
                                            className="input input-bordered w-full text-left bg-gray-100"
                                        >
                                            {date ? date.toLocaleDateString() : "Pick a date"}
                                        </button>
                                        <div
                                            popover="auto"
                                            id="rdp-popover"
                                            className="p-4 bg-white shadow-2xl rounded-xl border border-gray-200 mt-2"
                                        >
                                            <DayPicker
                                                mode="single"
                                                selected={date}
                                                onSelect={(selectedDate) => {
                                                    setDate(selectedDate);
                                                    // Optional: Close popover after selection
                                                    document.getElementById('rdp-popover').hidePopover();
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="font-bold">Select Date</label>
                                    <div className="relative">
                                        <button
                                            popoverTarget="rdp-popover"
                                            className="input input-bordered w-full text-left bg-gray-100"
                                        >
                                            {date ? date.toLocaleDateString() : "Pick a date"}
                                        </button>
                                        <div
                                            popover="auto"
                                            id="rdp-popover"
                                            className="p-4 bg-white shadow-2xl rounded-xl border border-gray-200 mt-2"
                                        >
                                            <DayPicker
                                                mode="single"
                                                selected={date}
                                                onSelect={(selectedDate) => {
                                                    setDate(selectedDate);
                                                    // Optional: Close popover after selection
                                                    document.getElementById('rdp-popover').hidePopover();
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-info mt-4">Start Booking</button>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
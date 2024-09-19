import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom'

const events = [
  {
    image: 'https://ts-production.imgix.net/images/mobile-cover-uploaded/2fb49a35-11fa-4064-8011-a9c641f59e36.jpg?auto=compress,format&w=800&h=450',
    date: '2024-09-15',
    location: 'Wankhede Stadium, Mumbai',
    timings: '10:00 AM - 04:00 PM',
    title: 'Mumbai Premier League',
  },
  {
    image: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/cricket-flyer-poster-for-tournaments-event-design-template-2617fa211ca098380a9800fa992e6ef1_screen.jpg?ts=1636981979',
    date: '2024-09-20',
    location: 'Arun Jaitley Stadium, Delhi',
    timings: '11:00 AM - 05:00 PM',
    title: 'Delhi Cricket League',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEXUyat3WcGJEgkpPPs5lmZZ6XxjKnZPUu6g&s',
    date: '2024-09-25',
    location: 'M. Chinnaswamy Stadium, Bangalore',
    timings: '09:00 AM - 03:00 PM',
    title: 'Bangalore Cricket Cup',
  },
];

const EventPage = () => {
  const eventRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (eventDetails) => {
    navigate('/form', { state: eventDetails })
  }

  return (
    <div className="min-h-[80vh] py-8 text-black mt-10 max-md:px-5">
      <h1 className="text-4xl font-semibold text-center mb-8">Upcoming Events</h1>
      <div className="flex flex-wrap justify-evenly gap-8 mt-10 max-lg:px-4" ref={eventRef}>
        {events.map((event, index) => (
          <div key={index} className="border-t-[2px] border-black py-4 h-[30rem] max-lg:h-[38rem] w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)] cardHover">
            <h2 className="font-semibold uppercase mb-4 mt-1">Event</h2>
            <div className="relative">
              <h4 className="text-black text-xl relative font-medium py-1 titleH">{event.title}</h4>
              <p className="text-gray-500 text-sm mt-2">{event.location}</p>
              <p className="text-gray-500 text-sm mt-3">{event.date}</p>
            </div>
            <div className="w-full relative mt-4 h-1/2 max-md:h-2/3 eff overflow-hidden">
              <img src={event.image} alt="event-Image" className="h-full w-full object-cover rounded-lg" />
            </div>
            <button className='button mt-4' onClick={() => { handleSubmit(event) }}> Register </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventPage;

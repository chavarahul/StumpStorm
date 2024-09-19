import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

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

  useEffect(() => {
    gsap.from(eventRef.current, { opacity: 0, duration: 1.5, y: 20, ease: 'power3.out', stagger: 0.3 });
  }, []);

  return (
    <div className="container mx-auto p-8 text-black">
      <h1 className="text-4xl font-bold text-center mb-8">Upcoming Events</h1>
      <div className="space-y-12" ref={eventRef}>
        {events.map((event, index) => (
          <div key={index} className=" shadow-md rounded-lg p-6">
            {/* Title */}
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">{event.title}</h2>

            {/* Date and Location */}
            <div className="text-center mb-4">
              <p className="text-lg text-gray-600"><strong>Date:</strong> {event.date}</p>
              <p className="text-lg text-gray-600"><strong>Location:</strong> {event.location}</p>
              <p className="text-lg text-gray-600"><strong>Timings:</strong> {event.timings}</p>
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <img src={event.image} alt={event.title} className="rounded-lg max-w-full h-auto" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventPage;

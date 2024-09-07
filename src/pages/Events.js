import React, { useEffect, useRef } from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import gsap, { Power4 } from 'gsap';
import { useNavigate } from 'react-router-dom';

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
  {
    image: 'https://img.freepik.com/free-vector/gradient-ipl-cricket-poster_23-2149195559.jpg',
    date: '2024-10-01',
    location: 'M. A. Chidambaram Stadium, Chennai',
    timings: '12:00 PM - 06:00 PM',
    title: 'Chennai Super T20',
  },
  {
    image: 'https://image.isu.pub/240514102214-e800f615e9a0d93a89d749db24bb8b63/jpg/page_1.jpg',
    date: '2024-10-10',
    location: 'Eden Gardens, Kolkata',
    timings: '01:00 PM - 07:00 PM',
    title: 'Kolkata Cricket Festival',
  },
  {
    image: 'https://marketplace.canva.com/EAF7vIr-qCM/2/0/1600w/canva-blue-and-grey-refined-sports-cricket-event-flyer-HrAZlW1waP4.jpg',
    date: '2024-10-15',
    location: 'Rajiv Gandhi International Cricket Stadium, Hyderabad',
    timings: '02:00 PM - 08:00 PM',
    title: 'Hyderabad Cricket Championship',
  },
];

const EventsPage = () => {
  const cardsRef = useRef([]);
  const navigate = useNavigate(); 


  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      '.event-heading',
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease:Power4.easeInOut, delay: 0.5 }
    ).fromTo(
      '.event-card',
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.7, ease:Power4.easeInOut }
    );
  }, []);

  const handleClick = (eventImage) => {
    navigate('/form',{state:{image:eventImage}})
  }

  return (
    <div className="py-10 px-20 max-md:px-7">
      <h1 className="event-heading text-4xl font-bold text-center mb-4 text-black">Current Cricket Events</h1>
      <p className="text-center mb-14 text-gray-600">
        Discover and apply for our upcoming cricket tournaments. Click on "Apply" to get more details and register.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
        {events.map((event, index) => (
          <div
            key={index}
            className="event-card border rounded-[20px] overflow-hidden shadow-lg pb-5 bg-white min-h-[500px]"
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <img src={event.image} alt={event.title} className="w-full h-72 object-cover" />
            <div className="px-4">
              <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
              <div className="flex items-center mb-2">
                <FaCalendarAlt className="text-neutral-900 mr-2" />
                <p className="text-neutral-900"><strong>Date :</strong> {event.date}</p>
              </div>
              <div className="flex items-center mb-2">
                <FaMapMarkerAlt className="text-neutral-900 mr-2" />
                <p className="text-neutral-900"><strong>Location :</strong> {event.location}</p>
              </div>
              <div className="flex items-center mb-4">
                <FaClock className="text-neutral-900 mr-2" />
                <p className="text-neutral-900"><strong>Timings :</strong> {event.timings}</p>
              </div>
              <button className="learn-more button" onClick={()=>{handleClick(event.image)}}>
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Apply Now</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;

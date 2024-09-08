import React, { useEffect} from 'react';
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
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      '.card',
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: Power4.easeInOut,
        delay: 0.5,
      }
    );
  }, []);

  const handleClick = (eventImage) => {
    navigate('/form', { state: { image: eventImage } });
  };

  return (
    <div className="py-10 px-20 max-md:px-7">
      <h1 className="event-heading text-4xl font-bold text-center mb-4 text-black">Current Cricket Events</h1>
      <p className="text-center mb-14 text-gray-600">
        Discover and apply for our upcoming cricket tournaments. Click on "Apply" to get more details and register.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {events.map((event, index) => (
          <div
            key={index}
            className="card relative bg-white shadow-lg overflow-hidden rounded-lg"
            onClick={() => handleClick(event.image)}
          >
            <div className="content">
              <div className="back">
                <div className="back-content">
                  <img src={event.image} alt="" className="w-[95%] h-[95%] " />
                </div>
              </div>
              <div className="front">
                <div className="img">
                  <div className="circle"></div>
                  <div className="circle" id="right"></div>
                  <div className="circle" id="bottom"></div>
                </div>
                <div className="front-content p-4">
                  <small className="badge text-md font-semibold text-white">{event.title}</small>
                  <div className="description mt-4">
                    <p className="font-semibold text-sm text-white">{event.location}</p>
                    <p className="card-footer text-md text-gray-600">{event.date} &nbsp; | &nbsp; {event.timings}</p>
                    <button className="Btn absolute top-4 right-6">
                      <div className="sign">
                        <svg viewBox="0 0 512 512">
                          <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32z" />
                        </svg>
                      </div>
                      <div className="text">Apply</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;

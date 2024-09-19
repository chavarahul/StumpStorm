import { ExpandMore, ExpandLess } from '@mui/icons-material';
import Collapse from '@mui/material/Collapse';
import { useEffect, useState } from 'react';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import gsap from 'gsap';

const FAQ = () => {

  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  }

  const faqData = [
    { id: 1, question: 'What is Stump Storm?', answer: 'Stump Storm is a sports organization dedicated to conducting cricket tournaments in various formats.' },
    { id: 2, question: 'How do I register for a tournament?', answer: 'You can register through our official website by filling out the registration form.' },
    { id: 3, question: 'What are the different tournament formats available?', answer: 'We offer various formats including T20, One-Day, and Test series tournaments.' },
    { id: 4, question: 'How can I get updates on upcoming tournaments?', answer: 'Subscribe to our newsletter or follow us on social media for the latest updates.' },
    { id: 5, question: 'Are there age categories in tournaments?', answer: 'Yes, we have separate tournaments for Under-16, Under-19, and senior categories.' },
    { id: 6, question: 'Can I volunteer at the events?', answer: 'Yes, we welcome volunteers. Contact us at volunteer@stumpstorm.org for more details.' }
  ];

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.topUp', {
      y: 120,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 0.3,
      stagger: 0.5
    })
  }, [])

  return (
    <section className=" w-full flex-all max-lg:flex-col -z-50 min-h-[70vh] px-3 mt-20">
      <div className=" w-3/2 relative min-h-[70vh] max-lg:min-h-[20vh] -z-50">
        <h3 className='text-5xl font-medium sticky top-0 max-md:text-4xl max-md:text-left overflow-hidden'>
          <p className='text-black w-full relative topUp overflow-hidden'>Frequently</p>
          <p className='text-black w-full relative  mt-2 topUp overflow-hidden'>Asked Questions</p>
        </h3>
        <p className="text-black font-normal mt-2   topUp overflow-hidden">
          <span className="topUp w-full relative">Please contact <span className="text-blue-500">conf@stumpstorm.org</span><ArrowOutwardIcon className='text-black ml-0.5 -mt-1.5' style={{ fontSize: '17px' }} /></span>
        </p>
      </div>
      <div className=" w-1/2 lg:min-h-[70vh] max-lg:w-full max-lg:px-5 topUp">
        {
          faqData.map((faq) => (
            <div className="mb-4" key={faq.id}>
              <div
                className={`flex justify-between items-center border-t-[1px] border-gray-400 cursor-pointer  p-4 rounded `}
                onClick={() => { handleToggle(faq.id) }}
              >
                <h4 className='text-xl max-md:text-lg font-semibold text-black'>{faq.question}</h4>
                {openId === faq.id ? <ExpandLess className='text-black' /> : <ExpandMore className='text-black' />}
              </div>
              <Collapse in={openId === faq.id}>
                <div className={`p-4 text-gray-700 max-md:text-lg ${faq.id === faqData.length && 'border-b-[1px] border-gray-400'}`}>
                  <p>{faq.answer}</p>
                </div>
              </Collapse>
            </div>
          ))
        }
      </div>
    </section>
  )
}
export default FAQ;
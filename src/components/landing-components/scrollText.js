import React from 'react'

const ScrollText = () => {

    const textGroups = [
        [
            {text:'Tournaments'},
            {text:'Series'},
            {text:'Connections'},
        ],
        [
            {text:'Batsman'},
            {text:'hits'},
            {text:'boundary'},
        ],
        [
            {text:'bowler'},
            {text:'swing'},
            {text:'stumps'},
        ],
    ]
  return (
    <section className='min-h-[20vh] max-lg:min-h-[10vh] mt-20 relative w-full max-lg:mt-10 '>
        <div className="overflow-x-auto whitespace-nowrap Scroller">
            {
                textGroups?.map((group,index)=>(
                    <div key={index} className='inline-block animate-marquee  '>
                        {
                            group?.map((item,index)=>(
                                <React.Fragment key={index}>
                                    <h1 className='text-9xl max-lg:text-7xl max-md:text-5xl font-semibold inline-block text-black Scroller uppercase'>{item.text}</h1>
                                     <div className='inline-block -mt-10 h-[70px] max-md:w-[20px] max-md:h-[20px] rounded-full w-[70px] max-lg:w-[40px] max-lg:h-[40px] bg-[#FE320A] mx-[2rem]'></div>
                                </React.Fragment>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default ScrollText
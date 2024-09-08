import React from "react";
import { Timeline } from "../ui-components/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2024 - World T20 Championship",
      content: (
        <div className="ml-20 mr-3 max-lg:mx-0">
          <p className="textColorChange text-white text-xs md:text-sm font-normal mb-8">
            The World T20 Championship was successfully conducted, featuring 16 teams from across the globe. The tournament showcased thrilling T20 matches, culminating in an unforgettable final.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://icc-static-files.s3.amazonaws.com/ICC/photo/2021/11/11/7baf47c3-77e1-4220-8fd5-6455d80a38cf/Trophy.jpg"
              alt="World T20 Championship Trophy"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://resources.pulse.icc-cricket.com/photo-resources/2021/09/16/7bafc008-77e1-4220-8fd5-6455d80a38cf/GettyImages-1304783069.jpg"
              alt="T20 Match Action"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023 - Regional ODI Series",
      content: (
        <div className="ml-20 mr-3 max-lg:mx-0">
          <p className="textColorChange text-xs md:text-sm font-normal mb-8">
            The Regional ODI Series brought together top regional teams, focusing on 50-over formats. It was a key event to nurture future stars in ODI cricket.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://static.toiimg.com/thumb/msid-87635430,width-1070,height-580,imgsize-89904,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"
              alt="Regional ODI Series"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://img.etimg.com/thumb/msid-84038991,width-1200,height-900,imgsize-895634,resizemode-8,quality-100/.jpg"
              alt="ODI Series Crowd"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022 - Inaugural Test Series",
      content: (
        <div className="ml-20 mr-3 max-lg:mx-0">
          <p className="textColorChange text-xs md:text-sm font-normal mb-8">
            The first-ever Test series organized by the federation marked a major milestone, offering fans a chance to witness intense, strategic 5-day cricket matches.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://resources.pulse.icc-cricket.com/photo-resources/2022/01/06/85d6cba5-1249-4d5d-9a67-6fb2c5d5698e/GettyImages-1236937673.jpg"
              alt="Test Match Action"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://www.sportsadda.com/static-assets/waf-images/0d/21/9e/16-9/test-cricket-explained-format-1599x900.jpg"
              alt="Test Cricket Series"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}

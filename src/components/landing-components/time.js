import React from "react";
import { Timeline } from "../ui-components/timeline";
import { event1,event2,event3,event4,event5,event6 } from "../assets/images/index";

export function TimelineDemo() {
  const data = [
    {
      title: "2024 - Stump Storm T20 Clash",
      content: (
        <div className="ml-20 mr-3 max-lg:mx-0">
          <p className="textColorChange text-white text-xs md:text-sm font-normal mb-8">
            The Stump Storm T20 Clash in 2024 brought together top cricket teams from various regions. The tournament saw thrilling performances and nail-biting finishes, concluding with an epic final.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={event1}
              alt="T20 Clash Trophy"
              width={500}
              height={500}
              className="rounded-lg object-cover h-28 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src={event2}
              alt="T20 Match Action"
              width={500}
              height={500}
              className="rounded-lg object-cover h-28 md:h-44 lg:h-60 w-full shadow-lg"
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
            The 2023 Regional ODI Series featured top regional teams, showcasing competitive 50-over matches. This series played a vital role in identifying emerging stars for international cricket.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={event6}
              alt="Regional ODI Series"
              width={500}
              height={500}
              className="rounded-lg object-cover h-28 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src={event4}
              alt="ODI Series Crowd"
              width={500}
              height={500}
              className="rounded-lg object-cover h-28 md:h-44 lg:h-60 w-full shadow-lg"
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
            In 2022, Stump Storm hosted its first-ever Test series, a five-day cricketing marathon that tested the endurance, strategy, and skill of players, marking a significant achievement for the organization.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={event5}
              alt="Test Match Action"
              width={500}
              height={500}
              className="rounded-lg object-cover h-28 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src={event3}
              alt="Test Cricket Series"
              width={500}
              height={500}
              className="rounded-lg object-cover h-28 md:h-44 lg:h-60 w-full shadow-lg"
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

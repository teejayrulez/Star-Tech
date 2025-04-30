import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import { Navbar } from '../Navbar';

const currentEvents = [
  { id: 1, title: "Event 1", image: "/images/event1.jpg" },
  { id: 2, title: "Event 2", image: "/images/event2.jpg" },
  { id: 3, title: "Event 3", image: "/images/event3.jpg" },
];

const previousEvents = [
  { id: 4, image: "/images/prev1.jpg" },
  { id: 5, image: "/images/prev2.jpg" },
  { id: 6, image: "/images/prev3.jpg" },
  { id: 7, image: "/images/prev4.jpg" },
];

function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-white to-orange-600 p-6 overflow-hidden">
        <h1 className="text-3xl font-bold text-center mb-8">Current Events</h1>

        {/* Carousel Section */}
        <div className="max-w-4xl mx-auto mb-[5rem]">
          <Swiper
            navigation={true}
            modules={[Pagination]}
            loop={true}
            className="rounded-xl overflow-hidden"
          >
            {currentEvents.map((event) => (
              <SwiperSlide key={event.id}>
                <div className="relative h-64">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h2 className="text-white text-2xl font-bold">
                      {event.title}
                    </h2>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Previous Events */}
        <h2 className="text-2xl font-semibold ml-[12rem] mb-6">
          Previous Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {previousEvents.map((prev) => (
            <div key={prev.id} className="overflow-hidden rounded-xl shadow-lg">
              <img
                src={prev.image}
                alt={`Previous Event ${prev.id}`}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;

import React from 'react';
import Blog1 from "../../../assets/Shop/blog/blog (1).jpg";
import Blog2 from "../../../assets/Shop/blog/blog (2).jpg";
import Blog3 from "../../../assets/Shop/blog/blog (3).jpg";

const newsData = [
  {
    id: 1,
    image: Blog1,
    date: '23',
    month: 'JAN',
    title: 'Curabitur porttitor orci eget neque accumsan venenatis.',
    description:
      'Nulla libero lorem, euismod venenatis nibh sed, sodales dictum ex. Etiam nisi ligula, malesuada et pulvinar at, posuere ac lorem.',
  },
  {
    id: 2,
    image: Blog2,
    date: '23',
    month: 'JAN',
    title: 'Curabitur porttitor orci eget neque accumsan venenatis.',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  },
  {
    id: 3,
    image: Blog3,
    date: '23',
    month: 'JAN',
    title: 'Curabitur porttitor orci eget neque accumsan venenatis.',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  },
];

const LatestNews = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Latest News</h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image Section */}
              <div className="relative p-5">
                <img
                  src={item.image}
                  alt="news"
                  className="w-full h-[280px] object-cover rounded-md"
                />
                {/* Date Badge at bottom-left */}
                <div className="absolute bottom-7 left-7 bg-gray-200 text-center px-3 py-1 rounded text-xs font-semibold text-gray-800 shadow-sm">
                  <span className='font-extrabold'>{item.date} </span><br />
                  {item.month}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 text-left">
                <h3 className="text-md font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {item.description}
                </p>
                <a
                  href="#"
                  className="text-green-600 font-semibold text-sm hover:underline flex items-center gap-1"
                >
                  Read More <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;

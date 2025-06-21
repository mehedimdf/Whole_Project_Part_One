import React from 'react';

const ClientReviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'Jenny Wilson',
      title: 'Customer',
      review: 'Pellentesque et magna consectetur vestibulum ante non amet. Quisque feugiat massa eget mi rutrum dignissim. Morbi interdum mollis faucibus dolor arcu et varius tellus. Sed risus et lorem libero varius tempor',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'Divy Havkins',
      title: 'Customer',
      review: 'Pharetra mea tortor lobortis ultrices enim vestibulum vitae eget et. Nullam in nulla bibendum semper enim, ut scelerisque nisl duis. Phasellus ipsum quam posuere eu quis rutrum non mauris. Sed a tempor leo sit amet. Massa tincidunt turpis varius morbi vitae',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'Kiranya Murphy',
      title: 'Customer',
      review: 'Nam elit risus etiam magna auctor elit sapien sed convallis dictum. Phasellus mattis volutpat urna eu eleifend. Cras vel elit mauris nec nunc dignissim aliquam. Pellentesque habitant morbi tristique senectus viverra pulvinar',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">What our Clients Say</h2>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center flex flex-col items-center"
          >
            {/* Quote Icon */}
            <div className="mb-4">
              <svg
                className="w-8 h-8 text-green-500 mx-auto"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Review Text */}
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {review.review}
            </p>

            {/* Customer Info */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full overflow-hidden mb-2">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-semibold text-gray-800 text-sm">
                {review.name}
              </h4>
              <p className="text-gray-500 text-xs">{review.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientReviews;

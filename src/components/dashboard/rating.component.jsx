import Image from "next/image";
import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import random0 from "@/assets/random0.jpg";
import random1 from "@/assets/random1.jpg";
import random2 from "@/assets/random2.jpg";
import random3 from "@/assets/random3.jpg";
import random4 from "@/assets/random4.jpg";
import random5 from "@/assets/random5.jpg";
import random6 from "@/assets/random6.jpg";
import random7 from "@/assets/random7.jpg";

const feedbackData = [
  {
    id: 1,
    name: "John Doe",
    rating: 4,
    image: random0,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    name: "Jane Smith",
    rating: 5,
    image: random1,
    comment:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    name: "Alice Johnson",
    rating: 3,
    image: random2,
    comment:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 4,
    name: "Michael Brown",
    rating: 5,
    image: random3,
    comment:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 5,
    name: "Emily Davis",
    rating: 4,
    image: random4,
    comment:
      "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
  },
  {
    id: 6,
    name: "Chris Wilson",
    rating: 2,
    image: random5,
    comment:
      "Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula.",
  },
  {
    id: 7,
    name: "Sarah Taylor",
    rating: 4,
    image: random6,
    comment:
      "Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam.",
  },
  {
    id: 8,
    name: "David Lee",
    rating: 3,
    image: random7,
    comment:
      "Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi.",
  },
];
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 !== 0 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  const starsArray = [
    ...Array(fullStars).fill(<FaStar className="text-yellow-500" />),
    ...Array(halfStars).fill(<FaStarHalfAlt className="text-yellow-500" />),
    ...Array(emptyStars).fill(<FaRegStar className="text-yellow-500" />),
  ];

  return (
    <div className="flex">
      {starsArray.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </div>
  );
};

const CustomerFeedback = () => {
  return (
    <div className=" w-full lg:w-84 h-96 overflow-y-auto bg-neutral-900  rounded-lg ">
      <h1 className="text-2xl p-4">Customer Feedback</h1>{" "}
      <div className="p-4 grid grid-cols-2 lg:grid-cols-1 gap-4">
        {feedbackData.map(({ id, name, image, rating, comment }, index) => (
          <div
            key={id}
            className=" text-white p-4  shadow-md border-b"
          >
            <div className="inline-flex gap-4">
              <Image
                src={image}
                alt={name}
                className="w-10 h-10 rounded-full mx-auto"
                width={32}
                height={32}
              />
              <h3 className="text-center mt-2 text-lg font-semibold">{name}</h3>
            </div>
            <div className="flex justify-start mt-2">
              <StarRating rating={rating} />
            </div>
            <p className="mt-2 text-left">{comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerFeedback;

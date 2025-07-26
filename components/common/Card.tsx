// // components/Card.tsx
// import React from 'react';
// import { CardProps } from '../../interfaces';
// import Button from './Button';

// const Card: React.FC<CardProps> = ({ title, image, location, price, onButtonClick }) => {
//   return (
//     <div className="rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition duration-300 max-w-sm">
//       <img src={image} alt={title} className="w-full h-48 object-cover" />
//       <div className="p-4">
//         <h3 className="text-xl font-semibold">{title}</h3>
//         <p className="text-gray-500">{location}</p>
//         <p className="text-lg font-bold mt-2">${price} / night</p>
//         <div className="mt-4">
//           <Button text="Book Now" onClick={onButtonClick} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;
export default function Card(){
  return(
    <div>
      {/* Content */}
    </div>
  );
}

// // // constants/index.ts

// // // API URLs
// // export const BASE_API_URL = 'https://api.example.com';

// // // Routes
// // export const ROUTES = {
// //   HOME: '/',
// //   LISTING: '/listing',
// //   LOGIN: '/login',
// // };

// // // UI Text
// // export const UI_TEXT = {
// //   APP_NAME: 'ALX Listing App',
// //   WELCOME_MESSAGE: 'Welcome to your next destination!',
// //   LOGIN_BUTTON: 'Log In',
// //   SIGNUP_BUTTON: 'Sign Up',
// // };

// // // Configs
// // export const CONFIG = {
// //   ITEMS_PER_PAGE: 10,
// //   ENABLE_LOGS: true,
// // };

// // // Types
// // export type PropertyProps = {
// //   name: string;
// //   address: {
// //     state: string;
// //     city: string;
// //     country: string;
// //   };
// //   rating: number;
// //   category: string[];
// //   price: number;
// //   offers: {
// //     bed: string;
// //     shower: string;
// //     occupants: string;
// //   };
// //   image: string;
// //   discount: string;
// // };

// // export const PROPERTYLISTINGSAMPLE: PropertyProps []  =  [
// //   {
// //     name: "Villa Ocean Breeze",
// //     address: {
// //       state: "Seminyak",
// //       city: "Bali",
// //       country: "Indonesia"
// //     },
// //     rating: 4.89,
// //     category: ["Luxury Villa", "Pool", "Free Parking"],
// //     price: 3200,
// //     offers: {
// //       bed: "3",
// //       shower: "3",
// //       occupants: "4-6"
// //     },
// //     image: "https://unsplash.com/image1.jpg",
// //     discount: ""
// //   },
// //   {
// //     name: "Mountain Escape Chalet",
// //     address: {
// //       state: "Aspen",
// //       city: "Colorado",
// //       country: "USA"
// //     },
// //     rating: 4.70,
// //     category: ["Mountain View", "Fireplace", "Self Checkin"],
// //     price: 1800,
// //     offers: {
// //       bed: "4",
// //       shower: "2",
// //       occupants: "5-7"
// //     },
// //     image: "https://unsplash.com/image2.jpg",
// //     discount: "30"
// //   },
// //   {
// //     name: "Cozy Desert Retreat",
// //     address: {
// //       state: "Palm Springs",
// //       city: "California",
// //       country: "USA"
// //     },
// //     rating: 4.92,
// //     category: ["Desert View", "Pet Friendly", "Self Checkin"],
// //     price: 1500,
// //     offers: {
// //       bed: "2",
// //       shower: "1",
// //       occupants: "2-3"
// //     },
// //     image: "https://unsplash.com/image3.jpg",
// //     discount: ""
// //   },
// //   {
// //     name: "City Lights Penthouse",
// //     address: {
// //       state: "New York",
// //       city: "New York",
// //       country: "USA"
// //     },
// //     rating: 4.85,
// //     category: ["City View", "Free WiFi", "24h Checkin"],
// //     price: 4500,
// //     offers: {
// //       bed: "2",
// //       shower: "2",
// //       occupants: "2-4"
// //     },
// //     image: "https://unsplash.com/image4.jpg",
// //     discount: "15"
// //   },
// //   {
// //     name: "Riverside Cabin",
// //     address: {
// //       state: "Queenstown",
// //       city: "Otago",
// //       country: "New Zealand"
// //     },
// //     rating: 4.77,
// //     category: ["Riverside", "Private Dock", "Free Kayaks"],
// //     price: 2800,
// //     offers: {
// //       bed: "3",
// //       shower: "2",
// //       occupants: "4-6"
// //     },
// //     image: "https://unsplash.com/image5.jpg",
// //     discount: "20"
// //   },
// //   {
// //     name: "Modern Beachfront Villa",
// //     address: {
// //       state: "Sidemen",
// //       city: "Bali",
// //       country: "Indonesia"
// //     },
// //     rating: 4.95,
// //     category: ["Beachfront", "Private Pool", "Chef Service"],
// //     price: 5000,
// //     offers: {
// //       bed: "5",
// //       shower: "4",
// //       occupants: "8-10"
// //     },
// //     image: "https://unsplash.com/image6.jpg",
// //     discount: ""
// //   },
// //   {
// //     name: "Lakeside Chalet",
// //     address: {
// //       state: "Banff",
// //       city: "Alberta",
// //       country: "Canada"
// //     },
// //     rating: 4.65,
// //     category: ["Lakeside", "Mountain View", "Hiking Trails"],
// //     price: 2300,
// //     offers: {
// //       bed: "3",
// //       shower: "3",
// //       occupants: "4-5"
// //     },
// //     image: "https://unsplash.com/image7.jpg",
// //     discount: "10"
// //   },
// //   {
// //     name: "Tropical Garden Villa",
// //     address: {
// //       state: "Koh Samui",
// //       city: "Surat Thani",
// //       country: "Thailand"
// //     },
// //     rating: 4.80,
// //     category: ["Garden", "Free Parking", "Self Checkin"],
// //     price: 2750,
// //     offers: {
// //       bed: "3",
// //       shower: "3",
// //       occupants: "5-6"
// //     },
// //     image: "https://unsplash.com/image8.jpg",
// //     discount: "25"
// //   },
// //   {
// //     name: "Urban Loft",
// //     address: {
// //       state: "Berlin",
// //       city: "Berlin",
// //       country: "Germany"
// //     },
// //     rating: 4.60,
// //     category: ["City Center", "Free WiFi", "24h Checkin"],
// //     price: 2000,
// //     offers: {
// //       bed: "2",
// //       shower: "1",
// //       occupants: "2-3"
// //     },
// //     image: "https://unsplash.com/image9.jpg",
// //     discount: ""
// //   },
// //   {
// //     name: "Secluded Forest Cabin",
// //     address: {
// //       state: "Whistler",
// //       city: "British Columbia",
// //       country: "Canada"
// //     },
// //     rating: 4.72,
// //     category: ["Secluded", "Hot Tub", "Self Checkin"],
// //     price: 2600,
// //     offers: {
// //       bed: "4",
// //       shower: "2",
// //       occupants: "5-7"
// //     },
// //     image: "https://unsplash.com/image10.jpg",
// //     discount: "40"
// //   },
// //   {
// //     name: "Cliffside Villa",
// //     address: {
// //       state: "Amalfi",
// //       city: "Salerno",
// //       country: "Italy"
// //     },
// //     rating: 4.93,
// //     category: ["Cliffside", "Infinity Pool", "Sea View"],
// //     price: 6000,
// //     offers: {
// //       bed: "4",
// //       shower: "4",
// //       occupants: "6-8"
// //     },
// //     image: "https://unsplash.com/image11.jpg",
// //     discount: "50"
// //   },
// //   {
// //     name: "Coastal Escape Villa",
// //     address: {
// //       state: "Noosa",
// //       city: "Queensland",
// //       country: "Australia"
// //     },
// //     rating: 4.83,
// //     category: ["Beachfront", "Pet Friendly", "Free Parking"],
// //     price: 3400,
// //     offers: {
// //       bed: "3",
// //       shower: "3",
// //       occupants: "4-6"
// //     },
// //     image: "https://unsplash.com/image12.jpg",
// //     discount: ""
// //   },
// //   {
// //     name: "Historical Villa",
// //     address: {
// //       state: "Florence",
// //       city: "Tuscany",
// //       country: "Italy"
// //     },
// //     rating: 4.67,
// //     category: ["Historical", "Free Breakfast", "Self Checkin"],
// //     price: 2700,
// //     offers: {
// //       bed: "2",
// //       shower: "2",
// //       occupants: "2-4"
// //     },
// //     image: "https://unsplash.com/image13.jpg",
// //     discount: "35"
// //   },
// //   {
// //     name: "Downtown Apartment",
// //     address: {
// //       state: "Tokyo",
// //       city: "Tokyo",
// //       country: "Japan"
// //     },
// //     rating: 4.81,
// //     category: ["City Center", "Free WiFi", "Public Transport"],
// //     price: 2200,
// //     offers: {
// //       bed: "1",
// //       shower: "1",
// //       occupants: "2"
// //     },
// //     image: "https://unsplash.com/image14.jpg",
// //     discount: ""
// //   },
// //   {
// //     name: "Luxury Safari Lodge",
// //     address: {
// //       state: "Serengeti",
// //       city: "Mara",
// //       country: "Tanzania"
// //     },
// //     rating: 4.97,
// //     category: ["Safari", "Guided Tours", "Free Breakfast"],
// //     price: 4500,
// //     offers: {
// //       bed: "4",
// //       shower: "4",
// //       occupants: "6-8"
// //     },
// //     image: "https://unsplash.com/image15.jpg",
// //     discount: "20"
// //   },
// //   {
// //     name: "Countryside Cottage",
// //     address: {
// //       state: "Cotswolds",
// //       city: "Gloucestershire",
// //       country: "UK"
// //     },
// //     rating: 4.58,
// //     category: ["Countryside", "Fireplace", "Self Checkin"],
// //     price: 1800,
// //     offers: {
// //       bed: "2",
// //       shower: "1",
// //       occupants: "2-4"
// //     },
// //     image: "https://unsplash.com/image16.jpg",
// //     discount: "25"
// //   },
// //   {
// //     name: "Riverfront Mansion",
// //     address: {
// //       state: "Paris",
// //       city: "Île-de-France",
// //       country: "France"
// //     },
// //     rating: 4.86,
// //     category: ["Riverfront", "Private Garden", "Self Checkin"],
// //     price: 5000,
// //     offers: {
// //       bed: "4",
// //       shower: "3",
// //       occupants: "6-8"
// //     },
// //     image: "https://unsplash.com/image17.jpg",
// //     discount: "30"
// //   },
// //   {
// //     name: "Ski Chalet",
// //     address: {
// //       state: "Zermatt",
// //       city: "Valais",
// //       country: "Switzerland"
// //     },
// //     rating: 4.75,
// //     category: ["Mountain View", "Ski Access", "Fireplace"],
// //     price: 3900,
// //     offers: {
// //       bed: "3",
// //       shower: "3",
// //       occupants: "4-5"
// //     },
// //     image: "https://unsplash.com/image18.jpg",
// //     discount: ""
// //   },
// //   {
// //     name: "Island Paradise Villa",
// //     address: {
// //       state: "Mahe",
// //       city: "Victoria",
// //       country: "Seychelles"
// //     },
// //     rating: 4.98,
// //     category: ["Beachfront", "Private Pool", "Chef Service"],
// //     price: 6500,
// //     offers: {
// //       bed: "5",
// //       shower: "5",
// //       occupants: "8-10"
// //     },
// //     image: "https://unsplash.com/image19.jpg",
// //     discount: "60"
// //   },
// //   {
// //     name: "Clifftop Retreat",
// //     address: {
// //       state: "Cape Town",
// //       city: "Western Cape",
// //       country: "South Africa"
// //     },
// //     rating: 4.78,
// //     category: ["Ocean View", "Private Pool", "Self Checkin"],
// //     price: 4100,
// //     offers: {
// //       bed: "3",
// //       shower: "3",
// //       occupants: "4-5"
// //     },
// //     image: "https://unsplash.com/image20.jpg",
// //     discount: ""
// //   }
// // ];
// import { PillProps, PropertyProps } from "@/interfaces";

// export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
//   {
//     name: "Villa Ocean Breeze",
//     address: {
//       state: "Seminyak",
//       city: "Bali",
//       country: "Indonesia",
//     },
//     rating: 4.89,
//     category: ["Luxury Villa", "Pool", "Free Parking"],
//     price: 3200,
//     offers: {
//       bed: "3",
//       shower: "3",
//       occupants: "4-6",
//     },
//     image: "https://example.com/image1.jpg",
//     discount: "",
//   },
//   {
//     name: "Mountain Escape Chalet",
//     address: {
//       state: "Aspen",
//       city: "Colorado",
//       country: "USA",
//     },
//     rating: 4.7,
//     category: ["Mountain View", "Fireplace", "Self Checkin"],
//     price: 1800,
//     offers: {
//       bed: "4",
//       shower: "2",
//       occupants: "5-7",
//     },
//     image: "https://example.com/image2.jpg",
//     discount: "30",
//   },
//   {
//     name: "Cozy Desert Retreat",
//     address: {
//       state: "Palm Springs",
//       city: "California",
//       country: "USA",
//     },
//     rating: 4.92,
//     category: ["Desert View", "Pet Friendly", "Self Checkin"],
//     price: 1500,
//     offers: {
//       bed: "2",
//       shower: "1",
//       occupants: "2-3",
//     },
//     image: "https://example.com/image3.jpg",
//     discount: "",
//   },
//   {
//     name: "City Lights Penthouse",
//     address: {
//       state: "New York",
//       city: "New York",
//       country: "USA",
//     },
//     rating: 4.85,
//     category: ["City View", "Free WiFi", "24h Checkin"],
//     price: 4500,
//     offers: {
//       bed: "2",
//       shower: "2",
//       occupants: "2-4",
//     },
//     image: "https://example.com/image4.jpg",
//     discount: "15",
//   },
//   {
//     name: "Riverside Cabin",
//     address: {
//       state: "Queenstown",
//       city: "Otago",
//       country: "New Zealand",
//     },
//     rating: 4.77,
//     category: ["Riverside", "Private Dock", "Free Kayaks"],
//     price: 2800,
//     offers: {
//       bed: "3",
//       shower: "2",
//       occupants: "4-6",
//     },
//     image: "https://example.com/image5.jpg",
//     discount: "20",
//   },
//   {
//     name: "Modern Beachfront Villa",
//     address: {
//       state: "Sidemen",
//       city: "Bali",
//       country: "Indonesia",
//     },
//     rating: 4.95,
//     category: ["Beachfront", "Private Pool", "Chef Service"],
//     price: 5000,
//     offers: {
//       bed: "5",
//       shower: "4",
//       occupants: "8-10",
//     },
//     image: "https://example.com/image6.jpg",
//     discount: "",
//   },
//   {
//     name: "Lakeside Chalet",
//     address: {
//       state: "Banff",
//       city: "Alberta",
//       country: "Canada",
//     },
//     rating: 4.65,
//     category: ["Lakeside", "Mountain View", "Hiking Trails"],
//     price: 2300,
//     offers: {
//       bed: "3",
//       shower: "3",
//       occupants: "4-5",
//     },
//     image: "https://example.com/image7.jpg",
//     discount: "10",
//   },
//   {
//     name: "Tropical Garden Villa",
//     address: {
//       state: "Koh Samui",
//       city: "Surat Thani",
//       country: "Thailand",
//     },
//     rating: 4.8,
//     category: ["Garden", "Free Parking", "Self Checkin"],
//     price: 2750,
//     offers: {
//       bed: "3",
//       shower: "3",
//       occupants: "5-6",
//     },
//     image: "https://example.com/image8.jpg",
//     discount: "25",
//   },
//   {
//     name: "Urban Loft",
//     address: {
//       state: "Berlin",
//       city: "Berlin",
//       country: "Germany",
//     },
//     rating: 4.6,
//     category: ["City Center", "Free WiFi", "24h Checkin"],
//     price: 2000,
//     offers: {
//       bed: "2",
//       shower: "1",
//       occupants: "2-3",
//     },
//     image: "https://example.com/image9.jpg",
//     discount: "",
//   },
//   {
//     name: "Secluded Forest Cabin",
//     address: {
//       state: "Whistler",
//       city: "British Columbia",
//       country: "Canada",
//     },
//     rating: 4.72,
//     category: ["Secluded", "Hot Tub", "Self Checkin"],
//     price: 2600,
//     offers: {
//       bed: "4",
//       shower: "2",
//       occupants: "5-7",
//     },
//     image: "https://example.com/image10.jpg",
//     discount: "40",
//   },
//   {
//     name: "Cliffside Villa",
//     address: {
//       state: "Amalfi",
//       city: "Salerno",
//       country: "Italy",
//     },
//     rating: 4.93,
//     category: ["Cliffside", "Infinity Pool", "Sea View"],
//     price: 6000,
//     offers: {
//       bed: "4",
//       shower: "4",
//       occupants: "6-8",
//     },
//     image: "https://example.com/image11.jpg",
//     discount: "50",
//   },
//   {
//     name: "Coastal Escape Villa",
//     address: {
//       state: "Noosa",
//       city: "Queensland",
//       country: "Australia",
//     },
//     rating: 4.83,
//     category: ["Beachfront", "Pet Friendly", "Free Parking"],
//     price: 3400,
//     offers: {
//       bed: "3",
//       shower: "3",
//       occupants: "4-6",
//     },
//     image: "https://example.com/image12.jpg",
//     discount: "",
//   },
//   {
//     name: "Historical Villa",
//     address: {
//       state: "Florence",
//       city: "Tuscany",
//       country: "Italy",
//     },
//     rating: 4.67,
//     category: ["Historical", "Free Breakfast", "Self Checkin"],
//     price: 2700,
//     offers: {
//       bed: "2",
//       shower: "2",
//       occupants: "2-4",
//     },
//     image: "https://example.com/image13.jpg",
//     discount: "35",
//   },
//   {
//     name: "Downtown Apartment",
//     address: {
//       state: "Tokyo",
//       city: "Tokyo",
//       country: "Japan",
//     },
//     rating: 4.81,
//     category: ["City Center", "Free WiFi", "Public Transport"],
//     price: 2200,
//     offers: {
//       bed: "1",
//       shower: "1",
//       occupants: "2",
//     },
//     image: "https://example.com/image14.jpg",
//     discount: "",
//   },
//   {
//     name: "Luxury Safari Lodge",
//     address: {
//       state: "Serengeti",
//       city: "Mara",
//       country: "Tanzania",
//     },
//     rating: 4.97,
//     category: ["Safari", "Guided Tours", "Free Breakfast"],
//     price: 4500,
//     offers: {
//       bed: "4",
//       shower: "4",
//       occupants: "6-8",
//     },
//     image: "https://example.com/image15.jpg",
//     discount: "20",
//   },
//   {
//     name: "Countryside Cottage",
//     address: {
//       state: "Cotswolds",
//       city: "Gloucestershire",
//       country: "UK",
//     },
//     rating: 4.58,
//     category: ["Countryside", "Fireplace", "Self Checkin"],
//     price: 1800,
//     offers: {
//       bed: "2",
//       shower: "1",
//       occupants: "2-4",
//     },
//     image: "https://example.com/image16.jpg",
//     discount: "25",
//   },
//   {
//     name: "Riverfront Mansion",
//     address: {
//       state: "Paris",
//       city: "Île-de-France",
//       country: "France",
//     },
//     rating: 4.86,
//     category: ["Riverfront", "Private Garden", "Self Checkin"],
//     price: 5000,
//     offers: {
//       bed: "4",
//       shower: "3",
//       occupants: "6-8",
//     },
//     image: "https://example.com/image17.jpg",
//     discount: "30",
//   },
//   {
//     name: "Ski Chalet",
//     address: {
//       state: "Zermatt",
//       city: "Valais",
//       country: "Switzerland",
//     },
//     rating: 4.75,
//     category: ["Mountain View", "Ski Access", "Fireplace"],
//     price: 3900,
//     offers: {
//       bed: "3",
//       shower: "3",
//       occupants: "4-5",
//     },
//     image: "https://example.com/image18.jpg",
//     discount: "",
//   },
//   {
//     name: "Island Paradise Villa",
//     address: {
//       state: "Mahe",
//       city: "Victoria",
//       country: "Seychelles",
//     },
//     rating: 4.98,
//     category: ["Beachfront", "Private Pool", "Chef Service"],
//     price: 6500,
//     offers: {
//       bed: "5",
//       shower: "5",
//       occupants: "8-10",
//     },
//     image: "https://example.com/image19.jpg",
//     discount: "60",
//   },
//   {
//     name: "Clifftop Retreat",
//     address: {
//       state: "Cape Town",
//       city: "Western Cape",
//       country: "South Africa",
//     },
//     rating: 4.78,
//     category: ["Ocean View", "Private Pool", "Self Checkin"],
//     price: 4100,
//     offers: {
//       bed: "3",
//       shower: "3",
//       occupants: "4-5",
//     },
//     image: "https://example.com/image20.jpg",
//     discount: "",
//   },
// ];

// export const Filters = [
//   "All",
//   "Top Villa",
//   "Free Schedule",
//   "Book Now, Pay Later",
//   "Self CheckIn",
//   "Instant Book",
//   "Filter",
//   "Sort by: Highest Price",
// ];

import { PropertyProps } from "@/interfaces";

export const HERO_BACKGROUND_IMAGE = "/assets/Image1.png";
export const APP_NAME = 'ALX Listing App';

export const users = [
    {
        id: 1,
        name: 'John Doe',
        email: ''
    }
    ,
    {
        id: 2,
        name: 'Jane Smith',
        email: ''
    },
    {
        id: 3,
        name: 'Alice Johnson',
        email: ''
    },
    {
        id: 4,
        name: 'Bob Brown',
        email: ''
    }
]
export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
    {
        name: "Villa Ocean Breeze",
        address: {
            state: "Seminyak",
            city: "Bali",
            country: "Indonesia"
        },
        rating: 4.89,
        category: ["Luxury Villa", "Pool", "Free Parking"],
        price: 3200,
        offers: {
            bed: "3",
            shower: "3",
            occupants: "4-6"
        },
        image: "/assets/Property1.png",
        discount: ""
    },
    {
        name: "Mountain Escape Chalet",
        address: {
            state: "Aspen",
            city: "Colorado",
            country: "USA"
        },
        rating: 4.70,
        category: ["Mountain View", "Fireplace", "Self Checkin"],
        price: 1800,
        offers: {
            bed: "4",
            shower: "2",
            occupants: "5-7"
        },
        image: "/assets/Property2.png",
        discount: "30"
    },
    {
        name: "Cozy Desert Retreat",
        address: {
            state: "Palm Springs",
            city: "California",
            country: "USA"
        },
        rating: 4.92,
        category: ["Desert View", "Pet Friendly", "Self Checkin"],
        price: 1500,
        offers: {
            bed: "2",
            shower: "1",
            occupants: "2-3"
        },
        image: "/assets/Property3.png",
        discount: ""
    },
    {
        name: "City Lights Penthouse",
        address: {
            state: "New York",
            city: "New York",
            country: "USA"
        },
        rating: 4.85,
        category: ["City View", "Free WiFi", "24h Checkin"],
        price: 4500,
        offers: {
            bed: "2",
            shower: "2",
            occupants: "2-4"
        },
        image: "/assets/Property4.png",
        discount: "15"
    },
    {
        name: "Riverside Cabin",
        address: {
            state: "Queenstown",
            city: "Otago",
            country: "New Zealand"
        },
        rating: 4.77,
        category: ["Riverside", "Private Dock", "Free Kayaks"],
        price: 2800,
        offers: {
            bed: "3",
            shower: "2",
            occupants: "4-6"
        },
        image: "/assets/Property5.png",
        discount: "20"
    },
    {
        name: "Modern Beachfront Villa",
        address: {
            state: "Sidemen",
            city: "Bali",
            country: "Indonesia"
        },
        rating: 4.95,
        category: ["Beachfront", "Private Pool", "Chef Service"],
        price: 5000,
        offers: {
            bed: "5",
            shower: "4",
            occupants: "8-10"
        },
        image: "/assets/Property6.png",
        discount: ""
    },
    {
        name: "Lakeside Chalet",
        address: {
            state: "Banff",
            city: "Alberta",
            country: "Canada"
        },
        rating: 4.65,
        category: ["Lakeside", "Mountain View", "Hiking Trails"],
        price: 2300,
        offers: {
            bed: "3",
            shower: "3",
            occupants: "4-5"
        },
        image: "/assets/Property7.png",
        discount: "10"
    },
    {
        name: "Tropical Garden Villa",
        address: {
            state: "Koh Samui",
            city: "Surat Thani",
            country: "Thailand"
        },
        rating: 4.80,
        category: ["Garden", "Free Parking", "Self Checkin"],
        price: 2750,
        offers: {
            bed: "3",
            shower: "3",
            occupants: "5-6"
        },
        image: "/assets/Property8.png",
        discount: "25"
    },
    {
        name: "Urban Loft",
        address: {
            state: "Berlin",
            city: "Berlin",
            country: "Germany"
        },
        rating: 4.60,
        category: ["City Center", "Free WiFi", "24h Checkin"],
        price: 2000,
        offers: {
            bed: "2",
            shower: "1",
            occupants: "2-3"
        },
        image: "/assets/Property9.png",
        discount: ""
    },
    {
        name: "Secluded Forest Cabin",
        address: {
            state: "Whistler",
            city: "British Columbia",
            country: "Canada"
        },
        rating: 4.72,
        category: ["Secluded", "Hot Tub", "Self Checkin"],
        price: 2600,
        offers: {
            bed: "4",
            shower: "2",
            occupants: "5-7"
        },
        image: "/assets/Property10.png",
        discount: "40"
    },
    {
        name: "Cliffside Villa",
        address: {
            state: "Amalfi",
            city: "Salerno",
            country: "Italy"
        },
        rating: 4.93,
        category: ["Cliffside", "Infinity Pool", "Sea View"],
        price: 6000,
        offers: {
            bed: "4",
            shower: "4",
            occupants: "6-8"
        },
        image: "/assets/Property11.png",
        discount: "50"
    },
    {
        name: "Coastal Escape Villa",
        address: {
            state: "Noosa",
            city: "Queensland",
            country: "Australia"
        },
        rating: 4.83,
        category: ["Beachfront", "Pet Friendly", "Free Parking"],
        price: 3400,
        offers: {
            bed: "3",
            shower: "3",
            occupants: "4-6"
        },
        image: "/assets/Property12.png",
        discount: ""
    },
    {
        name: "Historical Villa",
        address: {
            state: "Florence",
            city: "Tuscany",
            country: "Italy"
        },
        rating: 4.67,
        category: ["Historical", "Free Breakfast", "Self Checkin"],
        price: 2700,
        offers: {
            bed: "2",
            shower: "2",
            occupants: "2-4"
        },
        image: "/assets/Property13.png",
        discount: "35"
    },
    {
        name: "Downtown Apartment",
        address: {
            state: "Tokyo",
            city: "Tokyo",
            country: "Japan"
        },
        rating: 4.81,
        category: ["City Center", "Free WiFi", "Public Transport"],
        price: 2200,
        offers: {
            bed: "1",
            shower: "1",
            occupants: "2"
        },
        image: "/assets/Property14.png",
        discount: ""
    },
    {
        name: "Luxury Safari Lodge",
        address: {
            state: "Serengeti",
            city: "Mara",
            country: "Tanzania"
        },
        rating: 4.97,
        category: ["Safari", "Guided Tours", "Free Breakfast"],
        price: 4500,
        offers: {
            bed: "4",
            shower: "4",
            occupants: "6-8"
        },
        image: "/assets/Property15.png",
        discount: "20"
    },
    {
        name: "Countryside Cottage",
        address: {
            state: "Cotswolds",
            city: "Gloucestershire",
            country: "UK"
        },
        rating: 4.58,
        category: ["Countryside", "Fireplace", "Self Checkin"],
        price: 1800,
        offers: {
            bed: "2",
            shower: "1",
            occupants: "2-4"
        },
        image: "/assets/Property16.png",
        discount: "25"
    }
];

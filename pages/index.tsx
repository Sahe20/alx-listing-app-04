import { useEffect, useState } from "react";
import { PropertyProps } from "@/interfaces/index";
import Pill from "@/components/common/Pill";

type Property = {
  id: string;
  title: string;
  location: string;
  price: number;
  image: string;
};

const filters = [
    "Top Villa",
    "Self Checkin",
    "Beachfront",
    "Luxury",
    "Pet Friendly",
];

export default function HomePage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch("/api/properties");
        if (!res.ok) throw new Error("Failed to fetch properties");
        const data = await res.json();
        setProperties(data); // assuming data is an array
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading properties...</p>;
  if (error) return <p className="text-red-500 text-center mt-10">{error}</p>;

  return (
    
    <main>
       <section className="w-full min-h-screen">
         <div className="hero-section p-[3em] md:py-[8em] lg:py-[14em] mx-4 md:mx-8 rounded-2xl">
           <div className="text-center text-white max-w-[100%]">
             <h1 className="text-3xl md:text-4xl lg:text-7xl text-center">
               Find your favorite place here!
             </h1>
             <p className="text-xs md:text-lg lg:text-2xl">
               The best prices for over 2 million properties worldwide
             </p>
           </div>
         </div>
       </section>
       <section className="container mx-auto py-6 px-4">
                <div className="flex flex-wrap gap-2">
                    {filters.map((filter, index) => (
                        <Pill key={index} label={filter} onClick={() => { }} />
                    ))}
                </div>
            </section>
       <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
        <div key={property.id} className="border rounded-xl shadow p-4">
          <img src={property.image} alt={property.title} className="rounded w-full h-48 object-cover" />
          <h2 className="text-xl font-semibold mt-2">{property.title}</h2>
          <p className="text-gray-600">{property.location}</p>
          <p className="text-green-700 font-bold">${property.price.toLocaleString()}</p>
        </div>
      ))}
    </div>
     </main>
  );
}

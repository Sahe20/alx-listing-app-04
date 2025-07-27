import { useEffect, useState } from 'react';
import Image from "next/image";
import { myImages, IMAGE_PATHS } from "@/constants/images";
import PropertyListing from "@/components/common/PropertyListing";
import FilterSection from "@/components/layout/Filter";

interface Property {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  location: string;
}

export default function HomePage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch property data
    const fetchProperties = async () => {
      try {
        const res = await fetch('https://mysampleapi.com'); 
        if (!res.ok) throw new Error('Failed to fetch properties');
        const data = await res.json();
        setProperties(data);
      } catch (err: any) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) return <p className="text-center text-gray-600">Loading properties...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

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
        <FilterSection />
        <PropertyListing />
      </section>
    </main>
  );
};
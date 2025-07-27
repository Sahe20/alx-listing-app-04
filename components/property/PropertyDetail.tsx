type Property = {
  title: string;
  location: string;
  price: number;
  description: string;
  images: string[];
  amenities: string[];
  host: {
    name: string;
    rating: number;
  };
};

export default function PropertyDetail({ property }: { property: Property }) {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{property.title}</h1>
      <p>{property.location}</p>
      <p>${property.price} / night</p>
      <p>{property.description}</p>
      <div className="flex gap-4 mt-2">
        {property.images.map((img, idx) => (
          <img key={idx} src={img} alt={`Image ${idx}`} className="w-48 h-32 object-cover" />
        ))}
      </div>
      <p className="mt-4">Host: {property.host.name} (⭐ {property.host.rating})</p>
      <p>Amenities:</p>
      <ul className="list-disc list-inside">
        {property.amenities.map((amenity, idx) => (
          <li key={idx}>{amenity}</li>
        ))}
      </ul>
    </div>
  );
}

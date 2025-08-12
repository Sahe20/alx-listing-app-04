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

export default function PropertyDetail({ property }: { property: Property | null }) {
  if (!property) {
    return <p>Property details are not available.</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{property.title || "No title available"}</h1>
      <p>{property.location || "Location not available"}</p>
      <p>${property.price ?? "N/A"} / night</p>
      <p>{property.description || "No description available"}</p>

      {property.images?.length > 0 ? (
        <div className="flex gap-4 mt-2">
          {property.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Image ${idx}`}
              className="w-48 h-32 object-cover"
            />
          ))}
        </div>
      ) : (
        <p>No images available</p>
      )}

      <p className="mt-4">
        Host: {property.host?.name || "Unknown"} (⭐ {property.host?.rating ?? "N/A"})
      </p>

      <p>Amenities:</p>
      {property.amenities?.length > 0 ? (
        <ul className="list-disc list-inside">
          {property.amenities.map((amenity, idx) => (
            <li key={idx}>{amenity}</li>
          ))}
        </ul>
      ) : (
        <p>No amenities listed</p>
      )}
    </div>
  );
}

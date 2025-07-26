export default function handler(req: any, res: any) {
  res.status(200).json([
    {
      id: "1",
      title: "Modern Apartment",
      location: "Monrovia",
      price: 100,
      image: "@/public/images/luxvilla.jpg"
    },
    {
      id: "2",
      title: "Beach Villa",
      location: "Robertsport",
      price: 120,
      image: '/public/images/villa.jpg',
    },
  ]);
}

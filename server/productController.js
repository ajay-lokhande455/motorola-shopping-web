// server/productController.js
import { Router } from "express";
const router = Router();

// Sample Motorola product data with feedback
const products = [
  {
    id: 1,
    name: "Motorola Edge 40",
    price: 29999,
    description: "Flagship smartphone with a curved display and 5G support.",
    image: "https://imgs.search.brave.com/A15meldrpXCmL2cQ1SCjoLdDDe_tb5Wdxz3sPH1aF2o/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/MzErbXZKLThnWUwu/anBn",
    ram: "8GB",
    rom: "128GB",
    feedback: [
      {
        profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
        name: "John Doe",
        rating: 4.5,
        comment: "Amazing phone with great features. Worth the price!",
      },
    ],
    
  },
  {
    id: 2,
    name: "Motorola G73",
    price: 18999,
    description: "Mid-range phone with powerful performance and clean Android experience.",
    image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/r/k/h/g73-5g-paux0023in-motorola-original-imagngjh7epkhqdg.jpeg?q=90&crop=false",
    ram: "8GB",
    rom: "128GB",
    feedback: [
      {
        profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
        name: "Jane Smith",
        rating: 4.0,
        comment: "Solid phone with great performance for the price.",
      },
    ],
  },
  {
    id: 3,
    name: "Motorola Razr 40 Ultra",
    price: 84999,
    description: "Premium foldable phone with advanced features and sleek design.",
    image: "https://m.media-amazon.com/images/I/71AgjYHIYUL.jpg",
    ram: "12GB",
    rom: "256GB",
    feedback: [
      {
        profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
        name: "Mark Taylor",
        rating: 5.0,
        comment: "The foldable design is amazing! Totally worth it.",
      },
    ],
  },
  {
    id: 4,
    name: "Motorola Moto G54",
    price: 14999,
    description: "Budget-friendly phone with solid performance and a large display.",
    image: "https://m.media-amazon.com/images/I/71Y5XlnlA-L.jpg",
    ram: "12GB",
    rom: "256GB",
    feedback: [
      {
        profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
        name: "Emily Clark",
        rating: 4.0,
        comment: "Affordable and delivers great value for the price.",
      },
    ],
  },
  {
    id: 5,
    name: "Motorola Edge Plus 2023",
    price: 69999,
    description: "High-performance smartphone with advanced camera capabilities.",
    image: "https://www.gizmochina.com/wp-content/uploads/2023/05/Motorola-Edge-Plus-500x500.jpg",
    ram: "12GB",
    rom: "512GB",
    feedback: [
      {
        profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
        name: "James Lee",
        rating: 5.0,
        comment: "Outstanding camera and performance. Highly recommended!",
      },
    ],
  },
  {
    id: 6,
    name: "Motorola Moto E32",
    price: 8999,
    description: "Affordable smartphone with a clean Android experience.",
    image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/j/w/v/-original-imaggsezzjzfcg4h.jpeg?q=90&crop=false",
    ram: "12GB",
    rom: "256GB",
    feedback: [
      {
        profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
        name: "Sophia Brown",
        rating: 3.5,
        comment: "Good for basic use but lacks advanced features.",
      },
    ],
  },
  {
    id: 7,
    name: "Motorola G82",
    price: 22999,
    description: "Powerful mid-range phone with AMOLED display and long battery life.",
    image: "https://rukminim2.flixcart.com/image/850/1000/l4pxk7k0/mobile/n/e/o/-original-imagfjz9jgneh3xh.jpeg?q=90&crop=false",
    ram: "8GB",
    rom: "256GB",
    feedback: [
      {
        profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
        name: "Chris Wilson",
        rating: 4.5,
        comment: "Impressive battery life and display quality.",
      },
    ],
  },
  {
    id: 8,
    name: "Motorola Edge 30",
    price: 27999,
    description: "Slim and lightweight smartphone with flagship features.",
    image: "https://rukminim2.flixcart.com/image/850/1000/l2xmqvk0/mobile/o/r/n/-original-image674ydfks6se.jpeg?q=20&crop=false",
    ram: "12GB",
    rom: "256GB",
    feedback: [
      {
        profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
        name: "Linda Garcia",
        rating: 4.0,
        comment: "Stylish and lightweight but a bit pricey.",
      },
    ],
  },
  {
    id: 9,
    name: "Motorola Moto G32",
    price: 12999,
    description: "Great value for money with a focus on performance and display quality.",
    image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/l/l/z/-original-imaggvfzzt7qhhax.jpeg?q=90&crop=false",
    ram: "12GB",
    rom: "256GB",
    feedback: [
      {
        profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
        name: "Daniel Green",
        rating: 4.0,
        comment: "Good performance for the price range.",
      },
    ],
  },
  {
    id: 10,
    name: "Motorola One Fusion+",
    price: 17999,
    description: "Stylish smartphone with a pop-up selfie camera and a clean UI.",
    image: "https://rukminim2.flixcart.com/image/850/1000/kb6tyfk0/mobile/d/n/z/motorola-one-fusion-pakf0002in-original-imafsh2zrdsug4pe.jpeg?q=90&crop=false",
    ram: "12GB",
    rom: "256GB",
    feedback: [
      {
        profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
        name: "Mia Perez",
        rating: 4.5,
        comment: "Love the pop-up camera feature!",
      },
    ],
  },
  {
    id: 11,
    name: "Motorola G100",
    price: 34999,
    description: "Feature-packed phone with a focus on gaming and performance.",
    image: "https://images-cdn.ubuy.co.in/633ab0cb6b778e065f5e1e59-100-128.jpg",
    ram: "16GB",
    rom: "512GB",
    feedback: [
      {
        profilePic: "https://randomuser.me/api/portraits/men/6.jpg",
        name: "Robert King",
        rating: 4.5,
        comment: "Great gaming performance and fast charging.",
      },
    ],
  },
  {
    id: 12,
    name: "Motorola Edge 20 Pro",
    price: 35999,
    description: "Premium smartphone with advanced photography features.",
    image: "https://rukminim2.flixcart.com/image/750/900/ku5ufm80/mobile/j/s/o/edge-20-pro-pany0009in-motorola-original-imag7csrpevn6fgg.jpeg?q=20&crop=false",
    ram: "12GB",
    rom: "256GB",
    feedback: [
      {
        profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
        name: "Olivia Davis",
        rating: 5.0,
        comment: "The camera quality is phenomenal. Perfect for photography enthusiasts.",
      },
    ],
  },
  {
    id: 13,
    name: "Motorola Moto G22",
    price: 10999,
    description: "Affordable smartphone with a large display and decent performance.",
    image: "https://rukminim2.flixcart.com/image/850/1000/l1qrjbk0/mobile/d/w/h/-original-imagd8pyfk7wbdkg.jpeg?q=90&crop=false",
    ram: "12GB",
    rom: "256GB",
    feedback: [
      {
        profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
        name: "Ethan Moore",
        rating: 3.5,
        comment: "Good for basic tasks, but performance is not the best for gaming.",
      },
    ],
  },
  {
    id: 14,
    name: "Motorola Edge 30 Fusion",
    price: 42999,
    description: "Stylish flagship with a strong focus on design and performance.",
    image: "https://m.media-amazon.com/images/I/71-jllRLkpL._AC_UF1000,1000_QL80_.jpg",
    ram: "12GB",
    rom: "256GB",
    feedback: [
      {
        profilePic: "https://randomuser.me/api/portraits/women/7.jpg",
        name: "Isabella Martin",
        rating: 4.5,
        comment: "Impressive design and smooth performance. A bit expensive though.",
      },
    ],
  },
  {
    id: 15,
    name: "Motorola Moto G62",
    price: 17999,
    description: "5G-ready smartphone with solid performance and good battery life.",
    image: "https://m.media-amazon.com/images/I/51-uBr44u1L.jpg",
    ram: "12GB",
    rom: "256GB",
    feedback: [
      {
        profilePic: "https://randomuser.me/api/portraits/men/8.jpg",
        name: "Lucas White",
        rating: 4.0,
        comment: "Good 5G performance and battery life. However, camera could be better.",
      },
    ],
  },
  {
    id: 16,
    name: "Motorola Razr 2022",
    price: 94999,
    description: "Futuristic foldable phone with cutting-edge technology.",
    image: "https://cdn.siasat.com/wp-content/uploads/2022/08/Moto-Razr.jpg",
    ram: "12GB",
    rom: "256GB",
    feedback: [
      {
        profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
        name: "Mia Clark",
        rating: 5.0,
        comment: "Absolutely love the foldable design. Very sleek and futuristic.",
      },
    ],
  },
  {
    id: 17,
    name: "Motorola Moto E13",
    price: 7999,
    description: "Entry-level smartphone with basic features for first-time users.",
    image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/5/x/x/-original-imagmmmhfw9624ar.jpeg?q=90&crop=false",
    ram: "12GB",
    rom: "256GB",
    feedback: [
      {
        profilePic: "https://randomuser.me/api/portraits/men/9.jpg",
        name: "Alexander Harris",
        rating: 3.0,
        comment: "Basic smartphone for first-time users. Lacks advanced features.",
      },
    ],
  },
  {
    id: 18,
    name: "Motorola Moto G42",
    price: 13999,
    description: "Budget phone with focus on multimedia and battery life.",
    image: "https://rukminim2.flixcart.com/image/720/864/l51d30w0/mobile/n/y/v/-original-imagfsuftgdf6jxe.jpeg?q=60&crop=false",
    ram: "12GB",
    rom: "256GB",
    feedback: [
      {
        profilePic: "https://randomuser.me/api/portraits/women/9.jpg",
        name: "Charlotte Johnson",
        rating: 4.0,
        comment: "Good multimedia experience at this price point. Battery lasts long.",
      },
    ],
  },
  {
    id: 19,
    name: "Motorola Edge 50",
    price: 49999,
    description: "Premium smartphone with next-gen features and sleek design.",
    image: "https://m.media-amazon.com/images/I/715aoVxQNTL._AC_UF1000,1000_QL80_.jpg",
    ram: "12GB",
    rom: "256GB",
    feedback: [
      {
        profilePic: "https://randomuser.me/api/portraits/men/10.jpg",
        name: "Benjamin Scott",
        rating: 4.5,
        comment: "Sleek design and smooth performance. A premium experience.",
      },
    ],
  },
  {
    id: 20,
    name: "Motorola Moto X40",
    price: 65999,
    description: "Top-tier smartphone with cutting-edge performance and display.",
    image: "https://images-cdn.ubuy.co.in/64544c267486b0706e0ce1b7-motorola-moto-x40-second-generation.jpg",
    ram: "12GB",
    rom: "512",
    feedback: [
      {
        profilePic: "https://randomuser.me/api/portraits/men/11.jpg",
        name: "James Adams",
        rating: 5.0,
        comment: "Top-tier performance and an amazing display. Worth every penny!",
      },
    ],
  },
];

// Route to get all products
router.get("/", (req, res) => {
  res.json(products);
});

// Route to get a product by ID
router.get("/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: "Product not found" });
  }
});

export default router;

// Product Data
  const products = [
    {
      id: 1,
      name: "Toyota Camry 2022 Hybrid LE",
      category: "car",
      price: 28500,
      originalPrice: 32000,
      rating: 4.7,
      image: "https://www.buyatoyota.com/sharpr/bat/assets/img/vehicle-info/Camry_Hybrid/2022/hero_image_camryhybrid.png",
      description: "2022 Toyota Camry Hybrid LE, 2.5L 4-cylinder, automatic, 18,000 km, white, full option, excellent condition.",
      highlights: [
        "2.5L Hybrid Engine",
        "Automatic Transmission",
        "18,000 km mileage",
        "Full Option",
        "Excellent Condition"
      ]
    },
    {
      id: 2,
      name: "Lexus RX 350 2021 Luxury",
      category: "car",
      price: 49500,
      originalPrice: 54000,
      rating: 4.9,
      image: "https://pictures.dealer.com/l/lexusofgreenville2660laurensroad/0542/10166bfde8f4aab4879cdc07ac9ea10ax.jpg",
      description: "2021 Lexus RX 350 Luxury, 3.5L V6, automatic, 12,000 km, black, panoramic roof, navigation, leather seats.",
      highlights: [
        "3.5L V6 Engine",
        "Panoramic Roof",
        "Navigation System",
        "Leather Interior",
        "12,000 km mileage"
      ]
    },
    {
      id: 3,
      name: "Honda CR-V 2020 EX-L",
      category: "car",
      price: 26500,
      originalPrice: 29500,
      rating: 4.6,
      image: "https://hips.hearstapps.com/hmg-prod/images/2020-honda-cr-v-hybrid-drive-109-1584417693.jpg",
      description: "2020 Honda CR-V EX-L, 1.5L turbo, automatic, 22,000 km, gray, sunroof, leather, Apple CarPlay.",
      highlights: [
        "1.5L Turbo Engine",
        "Sunroof",
        "Leather Seats",
        "Apple CarPlay",
        "22,000 km mileage"
      ]
    },
    {
      id: 4,
      name: "Mazda CX-5 2019 Grand Touring",
      category: "car",
      price: 23800,
      originalPrice: 26500,
      rating: 4.5,
      image: "https://platform.cstatic-images.com/in/v2/stock_photos/ef504608-4566-411a-aee7-466190e38dd9/4ca2abc7-8c44-40f4-83ca-cbd07d7fff8d.png",
      description: "2019 Mazda CX-5 Grand Touring, 2.5L, automatic, 30,000 km, red, Bose audio, navigation, 360 camera.",
      highlights: [
        "2.5L Engine",
        "Bose Audio",
        "Navigation System",
        "360 Camera",
        "30,000 km mileage"
      ]
    },
    {
      id: 5,
      name: "Hyundai Tucson 2021 GLS",
      category: "car",
      price: 21500,
      originalPrice: 24500,
      rating: 4.4,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSugOFGoAVyrARz2UH5B3N65pKDGUOax6T2Hw&s",
      description: "2021 Hyundai Tucson GLS, 2.0L, automatic, 15,000 km, silver, push start, rear camera, warranty.",
      highlights: [
        "2.0L Engine",
        "Push Start",
        "Rear Camera",
        "Warranty",
        "15,000 km mileage"
      ]
    },
    {
      id: 6,
      name: "Ford Ranger 2020 Wildtrak",
      category: "car",
      price: 33500,
      originalPrice: 37000,
      rating: 4.7,
      image: "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/uNeryJOFQ8Smls6tpMxA",
      description: "2020 Ford Ranger Wildtrak, 2.0L Bi-Turbo, automatic, 25,000 km, orange, 4x4, leather, full option.",
      highlights: [
        "2.0L Bi-Turbo Engine",
        "4x4 Drive",
        "Leather Interior",
        "Full Option",
        "25,000 km mileage"
      ]
    },
    {
      id: 7,
      name: "BMW X5 2018 xDrive40i",
      category: "car",
      price: 52500,
      originalPrice: 59000,
      rating: 4.8,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6DYgXtcitH-XMyiN8cAd3oHq_7qCIOZ4IXw&s",
      description: "2018 BMW X5 xDrive40i, 3.0L turbo, automatic, 40,000 km, white, M Sport, panoramic roof, navigation.",
      highlights: [
        "3.0L Turbo Engine",
        "M Sport Package",
        "Panoramic Roof",
        "Navigation System",
        "40,000 km mileage"
      ]
    },
    {
      id: 8,
      name: "Mercedes-Benz C200 2019 AMG",
      category: "car",
      price: 41500,
      originalPrice: 46000,
      rating: 4.7,
      image: "https://angloauto.co.za/wp-content/uploads/2023/02/07-1200x750.jpg",
      description: "2019 Mercedes-Benz C200 AMG, 2.0L turbo, automatic, 28,000 km, black, AMG package, sunroof, leather.",
      highlights: [
        "2.0L Turbo Engine",
        "AMG Package",
        "Sunroof",
        "Leather Interior",
        "28,000 km mileage"
      ]
    }
  ];
// user Data
const users = [
  {
    fullname: "John Doe",
    email: "johndoe@example.com",
    phone: "+1-555-123-4567",
    location: "New York, USA"
  },
  {
    fullname: "Jane Smith",
    email: "janesmith@example.com",
    phone: "+1-555-987-6543",
    location: "Los Angeles, USA"
  },
  {
    fullname: "Michael Lee",
    email: "michaellee@example.com",
    phone: "+44-20-1234-5678",
    location: "London, UK"
  },
  {
    fullname: "Maria Garcia",
    email: "mariagarcia@example.com",
    phone: "+34-91-123-4567",
    location: "Madrid, Spain"
  },
  {
    fullname: "Akira Tanaka",
    email: "akiratanaka@example.com",
    phone: "+81-3-1234-5678",
    location: "Tokyo, Japan"
  },
  {
    fullname: "Liam O'Brien",
    email: "liamobrien@example.com",
    phone: "+353-1-234-5678",
    location: "Dublin, Ireland"
  },
  {
    fullname: "Sophie Dubois",
    email: "sophiedubois@example.com",
    phone: "+33-1-23-45-67-89",
    location: "Paris, France"
  },
  {
    fullname: "Chen Wei",
    email: "chenwei@example.com",
    phone: "+86-10-1234-5678",
    location: "Beijing, China"
  }
];
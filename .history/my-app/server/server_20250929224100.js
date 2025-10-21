
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const Data = [
 { id:"1", title:"UrbanFlex Tee",message:"This is Mens shirt",imagePath:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",stock:"12",price:2000,dis:20},
        { id:"2", title:"AeroDrip T-Shirt",message:"This is Mens T-shirt",imagePath:"https://plus.unsplash.com/premium_photo-1679056833960-41b707eee5ba?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",stock:"18",price:1200,dis:30},
        { id:"3", title:"StreetRush Sneakers",message:"This is StreetRush Sneakers Mens shoes",imagePath:"https://images.unsplash.com/photo-1591370409347-2fd43b7842de?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",stock:"20",price:1300,dis:40},
        { id:"4", title:"AirGlide Walkers",message:"This is AirGlide Walkers",imagePath:"https://images.unsplash.com/photo-1602231379593-b85a472e3c99?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",stock:"28",price:1000,dis:50},
        { id:"5", title:"DriftFlex Snapback cap",message:"This is DriftFlex Snapback",imagePath:"https://images.unsplash.com/photo-1680295456691-cee21edc58bd?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",stock:"14",price:2100,dis:50},
        { id:"6", title:"TrailGuard Sun Cap",message:"This is TrailGuard Sun Cap",imagePath:"https://images.unsplash.com/photo-1591818343198-4ff334074580?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",stock:"30",price:900,dis:60},
        { id:"7", title:"FlexBristle Beard Brush",message:"This is FlexBristle Beard Brush",imagePath:"https://images.unsplash.com/photo-1588534724279-d1012d1d08d1?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",stock:"32",price:200,dis:70},
        { id:"8", title:"CleanEdge Toothbrush",message:"This is CleanEdge Toothbrush",imagePath:"https://images.unsplash.com/photo-1695073623266-7cec9986c652?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",stock:"35",price:1500,dis:80},
        { id:"9", title:"BristlePro 360",message:"This is BristlePro 360",imagePath:"https://images.unsplash.com/photo-1589365252845-092198ba5334?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",stock:"39",price:1340,dis:90},
        { id:"10", title:"TitanEdge Classic",message:"This is TitanEdge Classic watch",imagePath:"https://images.unsplash.com/photo-1667854792753-26ec904c0295?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",stock:"40",price:4000,dis:100},
        { id:"11", title:"ChronoForge Steel",message:"This is ChronoForge Steel watch ",imagePath:"https://images.unsplash.com/photo-1565250634684-f5e306ee1fa0?q=80&w=436&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",stock:"60",price:5000,dis:120},
        { id:"12", title:"chainess Perfume",message:"This is Chinees perfumes for women ",imagePath:"https://images.unsplash.com/photo-1706924179763-7f2744656823?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",stock:"80",price:5500,dis:150},
        { id:"13", title:"Dior Sauvage",message:"This is Dior Sauvage for Mens ",imagePath:"https://images.unsplash.com/photo-1659167664742-a592e00f5a29?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",stock:"90",price:1300,dis:120},
        { id:"14", title:"Bleu de Chanel",message:"This is Bleu de Chanel for Mens ",imagePath:"https://images.unsplash.com/photo-1674318881563-84ba1a53d9c4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",stock:"95",price:1320,dis:140},
        { id:"15", title:"Creed Aventus ",message:"This is Creed Aventus for Mens ",imagePath:"https://images.unsplash.com/photo-1692032667961-d17dcb5cef15?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",stock:"30",price:1350,dis:140},
        { id:"16", title:"Acqua di Gio Profumo ",message:"This is Acqua di Gio Profumo for Mens ",imagePath:"https://images.unsplash.com/photo-1611242956059-53e4c29e6b22?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",stock:"50",price:1400,dis:190},
        { id:"17", title:"Creed",message:"This is Creed  for Womens ",imagePath:"https://images.unsplash.com/photo-1719176010239-389baa89f350?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",stock:"20",price:2390,dis:120},
     





         { id:"18", title:"Ethereal Elegance Collection",message:"This is Chinees Ethereal Elegance Collection bags ",imagePath:"https://images.unsplash.com/photo-1706924179763-7f2744656823?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",stock:"80",price:5500,dis:150},
        { id:"19", title:"Midnight Luxe Collection",message:"This is Midnight Luxe Collection bags ",imagePath:"https://images.unsplash.com/photo-1659167664742-a592e00f5a29?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",stock:"90",price:1300,dis:120},
        { id:"20", title:"Heritage Classic Collection",message:"This is Heritage Classic Collection Mens ",imagePath:"https://images.unsplash.com/photo-1674318881563-84ba1a53d9c4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",stock:"95",price:1320,dis:140},
        { id:"21", title:"Bold Nomad Collection ",message:"This is Bold Nomad Collection for Mens ",imagePath:"https://images.unsplash.com/photo-1692032667961-d17dcb5cef15?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",stock:"30",price:1350,dis:140},
        { id:"22", title:"Celestial Carry Collection ",message:"This i ",imagePath:"https://images.unsplash.com/photo-1611242956059-53e4c29e6b22?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",stock:"50",price:1400,dis:190},
        { id:"23", title:"Creed",message:"This is Creed  for Womens ",imagePath:"https://images.unsplash.com/photo-1719176010239-389baa89f350?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",stock:"20",price:2390,dis:120},
     
];

// ✅ Get all products
app.get("/api/products", (req, res) => {
  res.json(Data);
});

// ✅ Get single product by ID
app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const product = Data.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  res.json(product);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

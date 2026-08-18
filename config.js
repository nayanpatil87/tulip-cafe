/**
 * Configuration File for The Tulip Touch Café Template
 * 
 * Edit this file to customize the brand details, contact info, and menu items.
 * You don't need to touch the HTML files to update these values!
 */

const siteConfig = {
  brand: {
    name: "The Tulip Touch Café",
    tagline: "Artisanal Coffee & Cozy Ambience",
    phone: "091061 83731",
    address: "Opposite Galleria Mall, Prafull Society, Tarangan Society, Akota, Vadodara, Gujarat 390007",
    email: "contact@tuliptouchcafe.com",
    facebookUrl: "#",
    instagramUrl: "#"
  },
  menu: [
    // --- COFFEE & BEVERAGES ---
    {
      id: "m1",
      category: "coffee",
      name: "Cappuccino Coffee",
      description: "Classic Italian espresso with velvety steamed milk foam and cocoa dust.",
      price: "₹350",
      image: "IMages/cappuccino_coffee_1784193835772.png",
      popular: false
    },
    {
      id: "m2",
      category: "coffee",
      name: "The Rose Coffee",
      description: "Floral rose‑infused single‑origin brew with delicate petals.",
      price: "₹380",
      image: "IMages/rose_coffee_1784193852163.png",
      popular: true
    },
    {
      id: "m3",
      category: "coffee",
      name: "Brownie Coffee",
      description: "Rich chocolate brownie blended with double‑shot espresso.",
      price: "₹400",
      image: "IMages/brownie_coffee_1784193866201.png",
      popular: true
    },
    {
      id: "m4",
      category: "coffee",
      name: "Classic Hot Chocolate",
      description: "Decadent Belgian chocolate melted into steamed milk, topped with cream.",
      price: "₹320",
      image: "IMages/hot_chocolate_1784186801613.png",
      popular: false
    },
    {
      id: "m5",
      category: "coffee",
      name: "Pina Colada",
      description: "Tropical coconut and pineapple blended into a refreshing mocktail.",
      price: "₹280",
      image: "IMages/pina_colada_1784193880543.png",
      popular: false
    },
    // --- MAINS & BOWLS ---
    {
      id: "m6",
      category: "mains",
      name: "Mexican Burrito Bowl",
      description: "Loaded rice bowl with spiced beans, fresh salsa, guacamole and sour cream.",
      price: "₹450",
      image: "IMages/mexican_burrito_bowl_1784193894598.png",
      popular: false
    },
    {
      id: "m7",
      category: "mains",
      name: "Arrabiata Pasta",
      description: "Al dente penne tossed in a fiery tomato‑chilli sauce with fresh basil.",
      price: "₹380",
      image: "IMages/arrabiata_pasta_1784193911565.png",
      popular: false
    },
    {
      id: "m8",
      category: "mains",
      name: "Pesto Pasta",
      description: "Fresh basil pesto with parmesan, pine nuts, and a drizzle of olive oil.",
      price: "₹420",
      image: "IMages/pesto_pasta_1784187052233.png",
      popular: false
    },
    {
      id: "m9",
      category: "mains",
      name: "White Sauce Pasta",
      description: "Creamy béchamel tossed with mushrooms, herbs, and parmesan shavings.",
      price: "₹400",
      image: "IMages/white_sauce_pasta_1784186693367.png",
      popular: false
    },
    {
      id: "m10",
      category: "mains",
      name: "Makhani Pasta",
      description: "An Indian‑Italian fusion — penne in rich, buttery makhani gravy.",
      price: "₹420",
      image: "IMages/makhani_pasta_1784186713766.png",
      popular: false
    },
    {
      id: "m11",
      category: "mains",
      name: "Aglio Olio",
      description: "Spaghetti sautéed with garlic, chilli flakes, and extra‑virgin olive oil.",
      price: "₹380",
      image: "IMages/aglio_olio_1784186738007.png",
      popular: false
    },
    {
      id: "m12",
      category: "mains",
      name: "Dal Makhani Rice Bowl",
      description: "Slow‑cooked dal makhani served over fragrant steamed rice.",
      price: "₹380",
      image: "IMages/dal_makhani_bowl_1784186724390.png",
      popular: false
    },
    // --- SNACKS ---
    {
      id: "m13",
      category: "snacks",
      name: "Cheese Garlic Bread",
      description: "Crispy garlic bread loaded with molten mozzarella and herbs.",
      price: "₹250",
      image: "IMages/cheese_garlic_bread_1784193926161.png",
      popular: false
    },
    {
      id: "m14",
      category: "snacks",
      name: "Nachos with Cheese",
      description: "Crunchy tortilla chips smothered in warm nacho cheese sauce and jalapeños.",
      price: "₹280",
      image: "IMages/nachos_cheese_1784186748006.png",
      popular: false
    },
    {
      id: "m15",
      category: "snacks",
      name: "Chilli Cheese Toast",
      description: "Toasted bread topped with spicy cheese, green chillies, and herbs.",
      price: "₹220",
      image: "IMages/chilli_cheese_toast_1784186759948.png",
      popular: false
    },
    // --- DESSERTS ---
    {
      id: "m16",
      category: "desserts",
      name: "Loaded Biscoff",
      description: "Biscoff shake topped with whipped cream, caramel, and cookie crumble.",
      price: "₹450",
      image: "IMages/loaded_biscoff_1784193941136.png",
      popular: true
    },
    {
      id: "m17",
      category: "desserts",
      name: "Blueberry Cheese Cake",
      description: "Creamy New‑York‑style cheesecake swirled with fresh blueberry compote.",
      price: "₹420",
      image: "IMages/blueberry_cheesecake_1784187062072.png",
      popular: true
    },
    {
      id: "m18",
      category: "desserts",
      name: "Chocolate Truffle",
      description: "Decadent layered chocolate truffle cake with ganache glaze.",
      price: "₹380",
      image: "IMages/chocolate_truffle_1784186790448.png",
      popular: true
    },
    {
      id: "m19",
      category: "desserts",
      name: "Lemon Cake",
      description: "Zesty lemon sponge with a tangy citrus glaze and candied peel.",
      price: "₹300",
      image: "IMages/lemon_cake_1784186769965.png",
      popular: false
    },
    {
      id: "m20",
      category: "desserts",
      name: "Chocolate Brownie",
      description: "Fudgy dark‑chocolate brownie served warm with vanilla ice cream.",
      price: "₹280",
      image: "IMages/chocolate_brownie_1784186780715.png",
      popular: false
    }
  ]
};

// Ensure it works in browser script tags
window.siteConfig = siteConfig;

import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Sparkles, Zap, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollToTop } from '../hooks/useScrollToTop';

// Premium outlet type images
const outletImages = {
  fineDine: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
  qsr: "https://images.pexels.com/photos/2454533/pexels-photo-2454533.jpeg",
  cafe: "https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg",
  bakery: "https://images.pexels.com/photos/1070946/pexels-photo-1070946.jpeg",
  barBrewery: "https://images.pexels.com/photos/3566120/pexels-photo-3566120.jpeg",
  cloudKitchen: "https://images.pexels.com/photos/2544829/pexels-photo-2544829.jpeg",
  sweetOutlet: "https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg",
  iceCream: "https://images.pexels.com/photos/1352281/pexels-photo-1352281.jpeg",
  foodCourt: "https://images.pexels.com/photos/6248997/pexels-photo-6248997.jpeg",
  delivery: "https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg",
  pizzeria: "https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg",
  largeChains: "https://images.pexels.com/photos/6107775/pexels-photo-6107775.jpeg",
  teaHouse: "https://images.pexels.com/photos/1793035/pexels-photo-1793035.jpeg",
  juiceOutlet: "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg",
  chaatOutlet: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg",
  cafeteria: "https://images.pexels.com/photos/6248876/pexels-photo-6248876.jpeg",
  sandwich: "https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg",
  burger: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg",
  bistro: "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg",
  foodTruck: "https://images.pexels.com/photos/2227960/pexels-photo-2227960.jpeg",
  restroBar: "https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg",
  loungeBar: "https://images.pexels.com/photos/274192/pexels-photo-274192.jpeg",
  pubs: "https://images.pexels.com/photos/1269025/pexels-photo-1269025.jpeg",
  confectionery: "https://images.pexels.com/photos/3071821/pexels-photo-3071821.jpeg",
  cakeOutlet: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg",
  selfService: "https://images.pexels.com/photos/2922672/pexels-photo-2922672.jpeg",
  driveIn: "https://images.pexels.com/photos/3770105/pexels-photo-3770105.jpeg"
};

interface OutletFeature {
  title: string;
  features: string[];
  icon: string;
  image: string;
}

const OutletTypes = () => {
  // Ensure page scrolls to top when component mounts
  useScrollToTop();
  
  // Map outlet types with their respective images
  const getOutletImage = (type: string): string => {
    const imageMap: { [key: string]: string } = {
      "Fine Dine": outletImages.fineDine,
      "QSR (Quick Service Restaurant)": outletImages.qsr,
      "Cafe": outletImages.cafe,
      "Bakery": outletImages.bakery,
      "Bar & Brewery": outletImages.barBrewery,
      "Cloud Kitchens": outletImages.cloudKitchen,
      "Sweet Outlet": outletImages.sweetOutlet,
      "Ice-Cream & Dessert Outlet": outletImages.iceCream,
      "Food Courts & Canteens": outletImages.foodCourt,
      "Delivery/Take-away": outletImages.delivery,
      "Pizzeria": outletImages.pizzeria,
      "Large Chains": outletImages.largeChains,
      "Tea House": outletImages.teaHouse,
      "Juice Outlet": outletImages.juiceOutlet,
      "Chaat Outlet": outletImages.chaatOutlet,
      "Cafeteria Canteen": outletImages.cafeteria,
      "Sandwich Outlet": outletImages.sandwich,
      "Burger Outlet": outletImages.burger,
      "Bistro": outletImages.bistro,
      "Food Truck": outletImages.foodTruck,
      "Restro Bars": outletImages.restroBar,
      "Lounge Bar": outletImages.loungeBar,
      "Pubs": outletImages.pubs,
      "Confectionery": outletImages.confectionery,
      "Cake Outlet": outletImages.cakeOutlet,
      "Self Service": outletImages.selfService,
      "Drive In": outletImages.driveIn
    };
    return imageMap[type] || outletImages.fineDine; // Default to fineDine if type not found
  };

  const outletTypes: OutletFeature[] = [
    {
      title: "Fine Dine",
      icon: "🍽️",
      image: getOutletImage("Fine Dine"),
      features: [
        "Table reservation system",
        "Fine dining menu management",
        "Wine list management",
        "Advanced table layouts",
        "Guest profile management",
        "Multiple course tracking",
        "Customized billing formats",
        "Staff scheduling & sections"
      ]
    },
    {
      title: "QSR (Quick Service Restaurant)",
      icon: "🍔",
      image: "/quick.png",
      features: [
        "Fast order processing",
        "Self-service kiosk integration",
        "Drive-thru management",
        "Quick menu modifications",
        "Combo meal management",
        "Real-time kitchen display",
        "Mobile ordering integration",
        "Express checkout options"
      ]
    },
    {
      title: "Cafe",
      icon: "☕",
      image: "/cafe.png",
      features: [
        "Coffee shop menu management",
        "Quick service workflow",
        "Custom drink modifications",
        "Loyalty program integration",
        "Daily specials management",
        "Table & takeaway orders",
        "Ingredient tracking",
        "Customer preferences storage"
      ]
    },
    {
      title: "Bakery",
      icon: "🥖",
      image: "/idont.png",
      features: [
        "Pre-order management",
        "Production planning",
        "Recipe management",
        "Shelf life tracking",
        "Custom cake orders",
        "Inventory forecasting",
        "Waste management",
        "Special order handling"
      ]
    },
    {
      title: "Bar & Brewery",
      icon: "🍺",
      image: "/bar.png",
      features: [
        "Bar tab management",
        "Happy hour pricing",
        "Brewery inventory control",
        "Age verification system",
        "Split payment handling",
        "Time-based pricing",
        "Draft beer monitoring",
        "Bar seating management"
      ]
    },
    {
      title: "Cloud Kitchens",
      icon: "🏭",
      image: "/cloud.png",
      features: [
        "Multiple brand management",
        "Delivery integration",
        "Order aggregation",
        "Kitchen display system",
        "Inventory optimization",
        "Real-time order tracking",
        "Multi-platform integration",
        "Delivery partner management"
      ]
    },
    {
      title: "Sweet Outlet",
      icon: "🍬",
      image: "/swt.png",
      features: [
        "Sweet item inventory",
        "Bulk order management",
        "Festival special items",
        "Package customization",
        "Weight-based pricing",
        "Shelf life monitoring",
        "Gift box management",
        "Special occasion tracking"
      ]
    },
    {
      title: "Ice-Cream & Dessert Outlet",
      icon: "🍨",
      image: "/sweet.png",
      features: [
        "Flavor combinations",
        "Topping management",
        "Temperature monitoring",
        "Custom sundae builder",
        "Special dietary options",
        "Seasonal menu changes",
        "Package deals",
        "Cold storage tracking"
      ]
    },
    {
      title: "Food Courts & Canteens",
      icon: "🏢",
      image: "/food court.png",
      features: [
        "Multiple vendor management",
        "Central payment system",
        "Shared seating tracking",
        "Vendor settlements",
        "Food court analytics",
        "Multi-cuisine ordering",
        "Digital display menus",
        "Footfall tracking"
      ]
    },
    {
      title: "Delivery/Take-away",
      icon: "🛵",
      image: "/devilery.png",
      features: [
        "Online order management",
        "Delivery tracking",
        "Route optimization",
        "Packaging instructions",
        "Delivery zone management",
        "Driver assignment",
        "Customer notifications",
        "Contactless delivery"
      ]
    },
    {
      title: "Pizzeria",
      icon: "🍕",
      image: "/pizair.png",
      features: [
        "Custom pizza builder",
        "Topping inventory",
        "Size variations",
        "Delivery time tracking",
        "Special instructions",
        "Combo deals",
        "Online ordering",
        "Heat maintenance tracking"
      ]
    },
    {
      title: "Large Chains",
      icon: "🔗",
      image: "/mobile_app.jpg",
      features: [
        "Multi-location management",
        "Centralized control",
        "Chain-wide analytics",
        "Standardized operations",
        "Cross-location inventory",
        "Franchise management",
        "Brand consistency",
        "Regional customization"
      ]
    },
    {
      title: "Tea House",
      icon: "🫖",
      image: "/tea house.png",
      features: [
        "Tea variety management",
        "Temperature control",
        "Brewing time tracking",
        "Custom blend creation",
        "Snack pairing",
        "Loyalty programs",
        "Special tea events",
        "Tea tasting sessions"
      ]
    },
    {
      title: "Juice Outlet",
      icon: "🥤",
      image: "/scan-new.png",
      features: [
        "Fresh ingredient tracking",
        "Custom juice combinations",
        "Seasonal fruit management",
        "Nutritional information",
        "Quick service workflow",
        "Cold press tracking",
        "Blend recipes",
        "Wastage control"
      ]
    },
    {
      title: "Chaat Outlet",
      icon: "🥘",
      image: "/process-new.png",
      features: [
        "Quick preparation tracking",
        "Ingredient freshness",
        "Custom spice levels",
        "Popular item tracking",
        "Special chaat varieties",
        "Festival specials",
        "Take-away packaging",
        "Regional variations"
      ]
    },
    {
      title: "Cafeteria Canteen",
      icon: "🏫",
      image: "/scan-order.png",
      features: [
        "Meal plan management",
        "Bulk meal preparation",
        "Nutritional tracking",
        "Student/Employee cards",
        "Subsidized pricing",
        "Attendance integration",
        "Menu rotation",
        "Dietary restrictions"
      ]
    },
    {
      title: "Sandwich Outlet",
      icon: "🥪",
      image: "/process-new.png",
      features: [
        "Custom sandwich builder",
        "Ingredient freshness",
        "Quick assembly tracking",
        "Bread variety management",
        "Combo offers",
        "Special sauces",
        "Grilling options",
        "Packaging solutions"
      ]
    },
    {
      title: "Burger Outlet",
      icon: "🍔",
      image: "/scan-new.png",
      features: [
        "Patty management",
        "Custom burger builder",
        "Cooking preferences",
        "Side order tracking",
        "Combo deals",
        "Special sauces",
        "Size variations",
        "Quality control"
      ]
    },
    {
      title: "Bistro",
      icon: "🍽️",
      image: "/process-new.png",
      features: [
        "Casual dining setup",
        "Daily specials",
        "Wine and beverage",
        "Table management",
        "Quick service",
        "Menu customization",
        "Ambiance control",
        "Staff scheduling"
      ]
    },
    {
      title: "Food Truck",
      icon: "🚚",
      image: "/mobile_app.jpg",
      features: [
        "Mobile POS",
        "Location tracking",
        "Limited menu management",
        "Quick service",
        "Inventory on wheels",
        "Event management",
        "Social media integration",
        "Route planning"
      ]
    },
    {
      title: "Restro Bars",
      icon: "🍸",
      image: "/scan-order.png",
      features: [
        "Bar & restaurant menu",
        "Table management",
        "Age verification",
        "Happy hours",
        "Entertainment tracking",
        "Tab management",
        "Split billing",
        "Inventory control"
      ]
    },
    {
      title: "Lounge Bar",
      icon: "🍹",
      image: "/bar brewary.png",
      features: [
        "Premium drink menu",
        "VIP area management",
        "Bottle service",
        "Event bookings",
        "Member management",
        "Ambiance control",
        "Cover charge",
        "Reservation system"
      ]
    },
    {
      title: "Pubs",
      icon: "🍺",
      image: "/scan-order.png",
      features: [
        "Draft beer management",
        "Bar food menu",
        "Quick billing",
        "Tab management",
        "Happy hour pricing",
        "Event management",
        "Sports screening",
        "Age verification"
      ]
    },
    {
      title: "Confectionery",
      icon: "🍬",
      image: "/process-new.png",
      features: [
        "Sweet item tracking",
        "Custom packaging",
        "Shelf life monitoring",
        "Bulk orders",
        "Festival specials",
        "Gift wrapping",
        "Special occasions",
        "Temperature control"
      ]
    },
    {
      title: "Cake Outlet",
      icon: "🎂",
      image: "/delivery-new.png",
      features: [
        "Custom cake orders",
        "Design catalogue",
        "Advance booking",
        "Flavor management",
        "Size variations",
        "Delivery tracking",
        "Photo cake printing",
        "Special occasions"
      ]
    },
    {
      title: "Self Service",
      icon: "🤳",
      image: "/scan-new.png",
      features: [
        "Kiosk interface",
        "Digital menu",
        "Payment integration",
        "Order tracking",
        "Quick checkout",
        "Custom orders",
        "Loyalty integration",
        "Queue management"
      ]
    },
    {
      title: "Drive In",
      icon: "🚗",
      image: "/mobile_app.jpg",
      features: [
        "Car hop service",
        "Quick order processing",
        "Parking management",
        "Order tracking",
        "Car side delivery",
        "Menu display",
        "Payment handling",
        "Weather protection"
      ]
    }
  ];

  return (
    <div className="font-[Poppins]">
      {/* Hero Banner */}
      <div className="relative h-[500px] w-full overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-slate-900 to-black"></div>
        
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-gradient-to-r from-orange-500/10 via-pink-500/10 to-purple-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 -right-48 w-80 h-80 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-full blur-[100px]"></div>

        <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center items-center text-center z-10">
          {/* Premium Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-pink-500/10 text-white px-8 py-4 rounded-2xl text-sm font-semibold mb-8 backdrop-blur-sm border border-orange-500/20 shadow-[0_0_15px_rgba(251,146,60,0.1)]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 30px rgba(251,146,60,0.2)",
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 text-orange-400" />
            </motion.div>
            OUTLET TYPES
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-5 h-5 text-orange-400" />
            </motion.div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Solutions for Every{' '}
            <motion.span 
              className="relative inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 500, damping: 10 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-orange-600">
                Business
          </span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-pink-500 to-orange-600 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                viewport={{ once: true }}
              />
            </motion.span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-gray-400 max-w-4xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Discover how Suvidha POS adapts to your specific business needs with tailored solutions
          </motion.p>
        </div>
      </div>

      {/* Main Content - Light Section */}
      <div className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-pink-50"></div>
        
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(251,146,60,0.3) 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        {/* Gradient Orbs for Light Section */}
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-gradient-to-r from-orange-500/5 via-pink-500/5 to-purple-500/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 -right-48 w-80 h-80 bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-purple-500/5 rounded-full blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Introduction */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Tailored Solutions for Different{' '}
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-pink-600 to-orange-700"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 500, damping: 10 }}
              >
                Businesses
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Suvidha POS offers specialized features and functionality designed specifically for different types of businesses. Explore how our system can be customized for your industry.
            </motion.p>
          </motion.div>

          {/* Outlet Types Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {outletTypes.map((outlet, index) => (
              <motion.div 
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                                <motion.div 
                  className="bg-white/80 backdrop-blur-sm border border-orange-100 rounded-3xl overflow-hidden hover:border-orange-300 transition-all duration-500 shadow-lg"
                  whileHover={{ 
                    scale: 1.02, 
                    y: -5,
                    boxShadow: "0 20px 40px rgba(251,146,60,0.2)"
                  }}
              >
                {/* Outlet Image */}
                <div className="relative h-64 overflow-hidden">
                    <motion.img 
                    src={outlet.image}
                    alt={outlet.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center space-x-4">
                        <motion.span 
                          className="text-5xl filter drop-shadow-lg"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          {outlet.icon}
                        </motion.span>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{outlet.title}</h3>
                          <motion.div 
                            className="h-1 w-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            viewport={{ once: true }}
                          />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="p-8">
                  <ul className="space-y-4">
                    {outlet.features.map((feature, featureIndex) => (
                        <motion.li 
                          key={featureIndex} 
                          className="flex items-start group/feature"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <motion.div
                            className="w-5 h-5 text-orange-400 mt-1 mr-4 flex-shrink-0"
                            whileHover={{ scale: 1.2, rotate: 180 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <Check className="w-full h-full" />
                          </motion.div>
                                                      <span className="text-gray-700 group-hover/feature:text-orange-600 transition-colors duration-300">{feature}</span>
                        </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Call to Action */}
                <div className="px-8 pb-8">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                  <Link 
                    to="/contact" 
                        className="block w-full py-4 px-6 bg-gradient-to-r from-orange-500 via-orange-600 to-pink-600 hover:from-orange-600 hover:via-orange-700 hover:to-pink-700 text-white text-center rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-orange-500/25 flex items-center justify-center gap-2"
                  >
                    Learn More
                        <ArrowRight className="w-5 h-5" />
                  </Link>
                    </motion.div>
                </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Additional Features Section - Dark Theme */}
          <motion.div 
            className="mt-20 relative py-20 -mx-4 px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Dark Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-slate-900 to-black"></div>
            
            {/* Animated Background Grid */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                backgroundSize: '30px 30px'
              }}></div>
            </div>

            {/* Gradient Orbs for Dark Section */}
            <div className="absolute top-1/4 -left-48 w-96 h-96 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-1/4 -right-48 w-80 h-80 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-full blur-[100px]"></div>

            <div className="relative z-10 max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold text-white mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Common Features Across All{' '}
                  <motion.span 
                    className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 500, damping: 10 }}
                  >
                    Businesses
                  </motion.span>
                </motion.h2>
                <motion.p 
                  className="text-xl text-gray-400 max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  While each business type has its unique features, all Suvidha POS solutions come with these essential capabilities:
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: "💳",
                  title: "Payment Processing",
                  description: "Accept all payment types including cards, UPI, and digital wallets"
                },
                {
                  icon: "📊",
                  title: "Analytics & Reporting",
                  description: "Detailed insights into sales, inventory, and customer behavior"
                },
                {
                  icon: "🔒",
                  title: "Security",
                  description: "Secure transactions and data protection with role-based access"
                },
                {
                  icon: "📱",
                  title: "Mobile Access",
                  description: "Manage your business from anywhere using our mobile app"
                }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-purple-500/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    boxShadow: "0 20px 40px rgba(168,85,247,0.2)"
                  }}
                >
                  <motion.div 
                    className="text-4xl mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

          {/* CTA Section - Blue Theme */}
          <motion.div 
            className="mt-20 relative py-20 -mx-4 px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Blue Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
            
            {/* Animated Background Grid */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59,130,246,0.3) 1px, transparent 0)`,
                backgroundSize: '30px 30px'
              }}></div>
            </div>

            {/* Gradient Orbs for Blue Section */}
            <div className="absolute top-1/4 -left-48 w-96 h-96 bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-purple-500/5 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-1/4 -right-48 w-80 h-80 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-blue-500/5 rounded-full blur-[100px]"></div>

            <div className="relative z-10 max-w-7xl mx-auto text-center">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Ready to Transform Your{' '}
                <motion.span 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 500, damping: 10 }}
                >
                  Business?
                </motion.span>
              </motion.h2>
              <motion.p 
                className="text-xl mb-8 text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
              Get started with Suvidha POS today and experience the difference.
              </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
               <Link 
                 to="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-bold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 flex items-center gap-2"
               >
                 Contact Sales
                  <ArrowRight className="w-5 h-5" />
               </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
               <Link 
                 to="/contact" 
                  className="px-8 py-4 bg-white/80 backdrop-blur-sm border border-blue-200 text-blue-600 rounded-full font-bold hover:bg-white/90 transition-all duration-300 flex items-center gap-2"
               >
                 Request Demo
                  <ArrowRight className="w-5 h-5" />
               </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OutletTypes; 
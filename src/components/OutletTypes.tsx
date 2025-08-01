import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

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
      image: "/public/scan-new.png",
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
      image: "/public/process-new.png",
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
      image: "/public/delivery-new.png",
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
      image: "/scan-order.png",
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
      image: "/mobile_app.jpg",
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
      image: "/inventory.png",
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
      image: "/process-new.png",
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
      image: "/scan-order.png",
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
      image: "/public/delivery-new.png",
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
      image: "/process-new.png",
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
      image: "/process-new.png",
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
      image: "/process-new.png",
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
      <div className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Business Types" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0"></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center items-center text-center">
          <span className="text-white bg-blue-600 px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
            OUTLET TYPES
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Solutions for Every Business
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl leading-relaxed">
            Discover how Suvidha POS adapts to your specific business needs
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Introduction */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Tailored Solutions for Different Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Suvidha POS offers specialized features and functionality designed specifically for different types of businesses. Explore how our system can be customized for your industry.
            </p>
          </div>

          {/* Outlet Types Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {outletTypes.map((outlet, index) => (
              <div 
                key={index}
                className="group bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
              >
                {/* Outlet Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={outlet.image}
                    alt={outlet.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center space-x-4">
                      <span className="text-5xl filter drop-shadow-lg">{outlet.icon}</span>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{outlet.title}</h3>
                        <div className="h-1 w-20 bg-blue-500 rounded-full transform origin-left group-hover:scale-x-150 transition-transform duration-500"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="p-8">
                  <ul className="space-y-4">
                    {outlet.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start group/feature">
                        <Check className="w-5 h-5 text-blue-500 mt-1 mr-4 flex-shrink-0 transform group-hover/feature:scale-110 transition-transform duration-300" />
                        <span className="text-gray-700 group-hover/feature:text-blue-600 transition-colors duration-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call to Action */}
                <div className="px-8 pb-8">
                  <Link 
                    to="/contact" 
                    className="block w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-center rounded-2xl font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Features Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Common Features Across All Businesses
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                While each business type has its unique features, all Suvidha POS solutions come with these essential capabilities:
              </p>
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
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Get started with Suvidha POS today and experience the difference.
            </p>
                         <div className="flex justify-center gap-4">
               <Link 
                 to="/contact" 
                 className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:bg-blue-50 transition-colors duration-300"
               >
                 Contact Sales
               </Link>
               <Link 
                 to="/contact" 
                 className="px-8 py-4 bg-blue-500 text-white rounded-full font-bold hover:bg-blue-400 transition-colors duration-300"
               >
                 Request Demo
               </Link>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutletTypes; 
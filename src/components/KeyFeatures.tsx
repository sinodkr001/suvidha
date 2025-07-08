import React from 'react';
import { ShoppingBag, Users2, Package, CreditCard, RotateCcw, QrCode } from 'lucide-react';

const keyFeatures = [
  {
    icon: ShoppingBag,
    title: "Takeaway & Delivery",
    description: "Customers can browse the digital menu, order items, and pick it up from the destination on their convenient time slot. Delivery fencing range can be set up on schedule timings.",
    image: "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    icon: Users2,
    title: "Waiter Orders",
    description: "Waiters can take orders both in online and offline mode. These orders get synced with Suvidha POS as soon as the application gets a stable internet connection.",
    image: "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    icon: Package,
    title: "Inventory",
    description: "Inventory management systems help food businesses to keep track of their stocks levels which reduces overstocking and wastages.",
    image: "https://images.pexels.com/photos/6913382/pexels-photo-6913382.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    icon: CreditCard,
    title: "Payment Support",
    description: "A strong payment gateway is integrated, so the customer pays online. The payment is credited to your wallet immediately.",
    image: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    icon: RotateCcw,
    title: "Turn Table Faster",
    description: "Customers can scan QR code to view the menu, place orders and pay bills from their table smoother and faster. Thus the table turnover is increased by 40%.",
    image: "https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    icon: QrCode,
    title: "Scan & Order",
    description: "Customers scan the QR code with their phone camera to access the food digital menu without downloading any app.",
    image: "https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&w=600"
  }
];

const KeyFeatures = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Key Features
          </h2>
        </div>

        <div className="space-y-20">
          {keyFeatures.map((feature, index) => (
            <div 
              key={index} 
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:w-1/2">
                <div className="bg-orange-100 p-4 rounded-2xl inline-block mb-6">
                  <feature.icon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-3xl font-bold text-orange-600 mb-6">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              <div className="lg:w-1/2">
                <img 
                  src={feature.image}
                  alt={feature.title}
                  className="w-full rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
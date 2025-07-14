import React from 'react';
import { ShoppingBag, Users2, Package, CreditCard, RotateCcw, QrCode } from 'lucide-react';

const keyFeatures = [
  {
    icon: ShoppingBag,
    title: "Takeaway & Delivery",
    description: "Customers can browse the digital menu, order items, and pick it up from the destination on their convenient time slot. Delivery fencing range can be set up on schedule timings.",
    image: "https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    icon: Users2,
    title: "Waiter Orders",
    description: "Waiters can take orders both in online and offline mode. These orders get synced with Suvidha POS as soon as the application gets a stable internet connection.",
    image: "https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    icon: Package,
    title: "Inventory",
    description: "Inventory management systems help food businesses to keep track of their stocks levels which reduces overstocking and wastages.",
    image: "https://images.pexels.com/photos/7679863/pexels-photo-7679863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    icon: CreditCard,
    title: "Payment Support",
    description: "A strong payment gateway is integrated, so the customer pays online. The payment is credited to your wallet immediately.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    icon: RotateCcw,
    title: "Turn Table Faster",
    description: "Customers can scan QR code to view the menu, place orders and pay bills from their table smoother and faster. Thus the table turnover is increased by 40%.",
    image: "https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    icon: QrCode,
    title: "Scan & Order",
    description: "Customers scan the QR code with their phone camera to access the food digital menu without downloading any app.",
    image: "https://images.pexels.com/photos/8467280/pexels-photo-8467280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const KeyFeatures = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="bg-orange-100 text-orange-600 px-6 py-2 rounded-full text-sm font-semibold mb-6 inline-block">
            PREMIUM FEATURES
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Key Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the powerful features that make Suvidha POS the perfect solution for your business
          </p>
        </div>

        <div className="space-y-32">
          {keyFeatures.map((feature, index) => (
            <div 
              key={index} 
              className={`flex flex-col lg:flex-row items-center gap-16 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-4 rounded-2xl inline-block mb-6 shadow-lg">
                  <feature.icon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-6">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              <div className="lg:w-1/2 group">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img 
                    src={feature.image}
                    alt={feature.title}
                    className="w-full transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
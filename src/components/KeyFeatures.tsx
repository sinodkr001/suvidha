import React from 'react';
import { ShoppingBag, Users2, Package, CreditCard, RotateCcw, QrCode } from 'lucide-react';

const keyFeatures = [
  {
    icon: ShoppingBag,
    title: "Takeaway & Delivery",
    description: "Customers can browse the digital menu, order items, and pick it up from the destination on their convenient time slot. Delivery fencing range can be set up on schedule timings. Know at what time the restaurant is able to take orders so that customers can choose from: unserviceable, closed and open to pick up their order.Customers can browse the digital menu, order items, and pick it up from the destination on their convenient time slot. Delivery fencing range can be set up on schedule timings.",
    image: "/takeaway.png"
  },
  {
    icon: Users2,
    title: "Waiter Orders",
    description: "Waiters can take orders both in online and offline mode. These orders get synced with Suvidha POS as soon as the application gets a stable internet connection. Waiters can modify orders and menu items by adding, removing, and altering the variables. They can cover order level discounts, extra charges, and many other item operations. Besides, order operations like recall orders, printing KOTs, settling and splitting bills can be sorted. It gives the live status of the dine-in area and order queue.Waiters can take orders both in online and offline mode. These orders get synced with Suvidha POS as soon as the application gets a stable internet connection.",
    image: "/waiters.png"
  },
  {
    icon: Package,
    title: "Inventory",
    description: "Inv45% of the full service restaurants failed to grow in profits without food management effectively. Inventory management systems help food businesses to keep track of their stocks levels which reduces overstocking and wastages. This system with real time data inventory levels, helps them to make more informed decisions about ordering and stocking food items.entory management systems help food businesses to keep track of their stocks levels which reduces overstocking and wastages.",
    image: "/inventory.png"
  },
  {
    icon: CreditCard,
    title: "Payment Support",
    description: "A stA strong payment gateway is integrated, so the customer pays online. The payment is credited to your wallet immediately. This guarantees the safety and protection of you and your customers at all times.rong payment gateway is integrated, so the customer pays online. The payment is credited to your wallet immediately.",
    image: "/payment.png"
  },
  {
    icon: RotateCcw,
    title: "Turn Table Faster",
    description: "CCustomers can scan QR code to view the menu, place orders and pay bills from their table smoother and faster. Thus the table turnover is increased by 40% which helps to generate more revenue.ustomers can scan QR code to view the menu, place orders and pay bills from their table smoother and faster. Thus the table turnover is increased by 40%.",
    image: "/turn-table-faster.png"
  },
  {
    icon: QrCode,
    title: "Scan & Order",
    description: "CuCustomers scan the QR code with their phone camera to access the food digital menu without downloading any app. Then the customers can place their order and pay instantly in a few clicks and enjoy their food delivered directly to their table.stomers scan the QR code with their phone camera to access the food digital menu without downloading any app.",
    image: "/scan-order.png"
  }
];

const KeyFeatures = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24">
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
                <div className="relative overflow-hidden rounded-3xl">
                  <img 
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-96 object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500"></div>
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
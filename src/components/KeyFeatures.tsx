import React from 'react';
import { ShoppingBag, Users2, Package, CreditCard, RotateCcw, QrCode, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const keyFeatures = [
  {
    icon: ShoppingBag,
    title: "Takeaway & Delivery",
    description: "Customers can browse the digital menu, order items, and pick it up from the destination on their convenient time slot. Delivery fencing range can be set up on schedule timings. Know at what time the restaurant is able to take orders so that customers can choose from: unserviceable, closed and open to pick up their order.",
    image: "/takeaway.png"
  },
  {
    icon: Users2,
    title: "Waiter Orders",
    description: "Waiters can take orders both in online and offline mode. These orders get synced with Suvidha POS as soon as the application gets a stable internet connection. Waiters can modify orders and menu items by adding, removing, and altering the variables. They can cover order level discounts, extra charges, and many other item operations.",
    image: "/waiters.png"
  },
  {
    icon: Package,
    title: "Inventory Management",
    description: "45% of full service restaurants failed to grow in profits without effective food management. Our inventory management system helps food businesses track stock levels, reducing overstocking and wastages. Real-time data helps make informed decisions about ordering and stocking food items.",
    image: "/inventory.png"
  },
  {
    icon: CreditCard,
    title: "Payment Support",
    description: "A strong payment gateway is integrated, so customers pay online securely. Payments are credited to your wallet immediately, guaranteeing safety and protection for you and your customers at all times.",
    image: "/payment.png"
  },
  {
    icon: RotateCcw,
    title: "Turn Table Faster",
    description: "Customers can scan QR codes to view menus, place orders and pay bills from their table smoothly and faster. This increases table turnover by 40%, helping generate more revenue for your business.",
    image: "/turn-table-faster.png"
  },
  {
    icon: QrCode,
    title: "Scan & Order",
    description: "Customers scan the QR code with their phone camera to access the digital menu without downloading any app. They can place orders and pay instantly in a few clicks, with food delivered directly to their table.",
    image: "/scan-order.png"
  }
];

const KeyFeatures = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-orange-50 to-orange-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(251, 146, 60, 0.15) 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-gradient-to-r from-orange-500/10 via-pink-500/10 to-purple-500/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 -right-48 w-80 h-80 bg-gradient-to-r from-orange-500/10 via-yellow-500/10 to-orange-600/10 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full text-sm font-bold mb-8 inline-block shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            PREMIUM FEATURES
          </motion.span>
          <motion.h2 
            className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Our Key Features
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Discover the powerful features that make Suvidha POS the perfect solution for your business
          </motion.p>
        </motion.div>

        <div className="space-y-32">
          {keyFeatures.map((feature, index) => (
            <motion.div 
              key={index} 
              className={`flex flex-col lg:flex-row items-center gap-16 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="lg:w-1/2">
                <motion.div 
                  className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-3xl inline-block mb-8 shadow-xl"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <feature.icon className="w-10 h-10 text-white" />
                </motion.div>
                <motion.h3 
                  className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-8"
                  initial={{ opacity: 0, x: index % 2 === 1 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-700 text-lg leading-relaxed mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {feature.description}
                </motion.p>
                <motion.div
                  className="flex items-center text-orange-600 font-semibold group cursor-pointer"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="mr-2">Learn More</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </div>
              
              <div className="lg:w-1/2 group">
                <motion.div 
                  className="relative overflow-hidden rounded-3xl shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-96 object-contain bg-white/50 backdrop-blur-sm"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 border-2 border-orange-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
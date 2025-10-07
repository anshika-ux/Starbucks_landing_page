import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import caramelImg from "@/assets/frappuccino-transparent.png";
import mochaImg from "@/assets/mocha-frappuccino.png";
import vanillaImg from "@/assets/vanilla-frappuccino.png";

const drinks = [
  {
    name: "Caramel Frappuccino",
    description: "Buttery caramel syrup blended with coffee and ice",
    rating: 4.8,
    price: "$5.45",
    image: caramelImg,
  },
  {
    name: "Mocha Frappuccino",
    description: "Rich chocolate and coffee blended to perfection",
    rating: 4.9,
    price: "$5.25",
    image: mochaImg,
  },
  {
    name: "Vanilla Bean",
    description: "Creamy vanilla blended with ice and topped with whipped cream",
    rating: 4.7,
    price: "$4.95",
    image: vanillaImg,
  },
];

const FeaturedDrinks = () => {
  return (
    <section className="py-24 bg-background" id="menu">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Fan Favorites
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most beloved creations, crafted with premium ingredients and lots of love
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {drinks.map((drink, index) => (
            <motion.div
              key={drink.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-border group rounded-xl">
                <div className="h-80 bg-gradient-warm relative overflow-hidden flex items-center justify-center p-6">
                  <motion.img
                    src={drink.image}
                    alt={drink.name}
                    whileHover={{ 
                      scale: 1.06,
                      y: -10,
                      rotate: [-1, 1, -1],
                    }}
                    transition={{ 
                      duration: 0.6,
                      ease: "easeOut",
                      rotate: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                    className="w-4/5 h-4/5 object-contain drop-shadow-2xl"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground">
                      {drink.name}
                    </h3>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <span className="text-sm font-semibold text-foreground">
                        {drink.rating}
                      </span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {drink.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-primary font-bold">
                        {drink.price}
                      </span>
                      <span className="text-sm text-muted-foreground">Includes tax</span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="px-6 py-2 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors shadow-glow-green"
                    >
                      Order
                    </motion.button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDrinks;

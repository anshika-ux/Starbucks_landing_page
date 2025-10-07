import { motion } from "framer-motion";
import { Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div whileHover={{ scale: 1.03 }} className="flex items-center gap-3">
          <Coffee className="w-8 h-8 text-primary" />
          <span className="text-2xl font-extrabold text-primary tracking-wide">Starbucks</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#menu" className="nav-link">
            Menu
          </a>
          <a href="#rewards" className="nav-link">
            Rewards
          </a>
          <a href="#gift" className="nav-link">
            Gift Cards
          </a>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden sm:inline-flex px-4 py-2">
            Sign In
          </Button>
          <Button className="px-5 py-3 font-semibold shadow-glow-green bg-gradient-to-r from-primary to-accent text-primary-foreground hover:from-primary/95 hover:to-accent/95">
            Join Now
          </Button>
        </div>
      </div>
      <style>{`
        .nav-link {
          position: relative;
          color: hsl(var(--foreground));
          padding-bottom: 4px;
          transition: color 200ms ease;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          height: 2px;
          width: 0;
          background: linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)));
          transition: width 220ms cubic-bezier(.2,.9,.2,1);
          border-radius: 2px;
        }
        .nav-link:hover {
          color: hsl(var(--primary));
        }
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;

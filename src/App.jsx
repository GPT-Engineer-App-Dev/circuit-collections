import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, Package, Info, Phone, ShoppingCart, User } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/navbar";
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

export const navItems = [
  { title: "Home", to: "/", icon: <Home className="h-4 w-4" /> },
  { title: "Products", to: "/products", icon: <Package className="h-4 w-4" /> },
  { title: "About Us", to: "/about", icon: <Info className="h-4 w-4" /> },
  { title: "Contact", to: "/contact", icon: <Phone className="h-4 w-4" /> },
];

export const userMenuItems = [
  { title: "Cart", icon: <ShoppingCart className="h-4 w-4" /> },
  { title: "Account", icon: <User className="h-4 w-4" /> },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="products" element={<Products />} />
              <Route path="products/:id" element={<ProductDetails />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
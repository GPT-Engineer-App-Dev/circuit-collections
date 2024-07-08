import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Link } from "react-router-dom";

const sampleProducts = [
  { id: 1, name: "Smartphone X", price: 799.99, image: "/placeholder.svg" },
  { id: 2, name: "Laptop Pro", price: 1299.99, image: "/placeholder.svg" },
  { id: 3, name: "Wireless Earbuds", price: 149.99, image: "/placeholder.svg" },
];

const testimonials = [
  { id: 1, name: "John Doe", content: "Great products and fast shipping!" },
  { id: 2, name: "Jane Smith", content: "Excellent customer service. Highly recommended!" },
];

const Index = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription logic
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to ElectroShop</h1>
        <p className="text-xl mb-6">Discover the latest in electronics and gadgets</p>
        <Button asChild>
          <Link to="/products">Shop Now</Link>
        </Button>
      </section>

      {/* Featured Products Section */}
      <section className="py-12">
        <h2 className="text-3xl font-semibold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sampleProducts.map((product) => (
            <Card key={product.id}>
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
                <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Add to Cart</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-muted">
        <h2 className="text-3xl font-semibold mb-6 text-center">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id}>
              <CardContent className="pt-6">
                <p className="mb-4">"{testimonial.content}"</p>
                <p className="font-semibold">- {testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter Subscription Form */}
      <section className="py-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Subscribe to Our Newsletter</h2>
        <form onSubmit={handleSubscribe} className="flex flex-col items-center">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 max-w-md"
            required
          />
          <Button type="submit">Subscribe</Button>
        </form>
      </section>
    </div>
  );
};

export default Index;
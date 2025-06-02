import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductDescription from "@/components/ProductDescription";
import Advantages from "@/components/Advantages";
import CustomerReviews from "@/components/CustomerReviews";
import ShippingInfo from "@/components/ShippingInfo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-stone-50">
      <Header />
      <Hero />
      <ProductDescription />
      <Advantages />
      <CustomerReviews />
      <ShippingInfo />
      <Footer />
    </div>
  );
};

export default Index;

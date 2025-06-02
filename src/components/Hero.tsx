import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&h=800&fit=crop)",
          filter: "brightness(0.7)",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-amber-900/30 to-amber-800/50" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 animate-fade-in">
          Элегантность в каждой детали
        </h1>
        <p className="text-xl md:text-2xl text-amber-100 mb-8 animate-fade-in delay-200">
          Откройте для себя наши уникальные серьги с жемчугом!
        </p>
        <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center animate-fade-in delay-400">
          <Button
            size="lg"
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg"
          >
            Посмотреть коллекцию
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-amber-800 px-8 py-3 text-lg"
          >
            Узнать больше
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

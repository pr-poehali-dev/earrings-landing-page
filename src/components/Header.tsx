import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-amber-100 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Gem" className="text-amber-600" size={32} />
            <h1 className="text-2xl font-bold text-amber-800 font-serif">
              Elle Jewelry
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#product"
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              Товары
            </a>
            <a
              href="#advantages"
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              Преимущества
            </a>
            <a
              href="#reviews"
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              Отзывы
            </a>
            <a
              href="#shipping"
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              Доставка
            </a>
            <Button className="bg-amber-600 hover:bg-amber-700">
              Заказать
            </Button>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name="Menu" size={24} />
          </Button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-amber-100">
            <div className="flex flex-col space-y-4">
              <a
                href="#product"
                className="text-gray-700 hover:text-amber-600 transition-colors"
              >
                Товары
              </a>
              <a
                href="#advantages"
                className="text-gray-700 hover:text-amber-600 transition-colors"
              >
                Преимущества
              </a>
              <a
                href="#reviews"
                className="text-gray-700 hover:text-amber-600 transition-colors"
              >
                Отзывы
              </a>
              <a
                href="#shipping"
                className="text-gray-700 hover:text-amber-600 transition-colors"
              >
                Доставка
              </a>
              <Button className="bg-amber-600 hover:bg-amber-700 w-full">
                Заказать
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

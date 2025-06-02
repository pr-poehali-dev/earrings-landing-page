import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Gem" className="text-amber-400" size={32} />
              <h3 className="text-2xl font-bold font-serif">Pearl Anchor</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Следите за нами в социальных сетях для получения новостей о новых
              продуктах и эксклюзивных предложениях!
            </p>
            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="icon"
                className="border-gray-600 text-gray-300 hover:text-white hover:border-amber-400"
              >
                <Icon name="Instagram" size={20} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-gray-600 text-gray-300 hover:text-white hover:border-amber-400"
              >
                <Icon name="Facebook" size={20} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-gray-600 text-gray-300 hover:text-white hover:border-amber-400"
              >
                <Icon name="Twitter" size={20} />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#product"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Товары
                </a>
              </li>
              <li>
                <a
                  href="#advantages"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Преимущества
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Отзывы
                </a>
              </li>
              <li>
                <a
                  href="#shipping"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Доставка
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <span>+7 (800) 123-45-67</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Mail" size={16} />
                <span>info@pearlanchor.ru</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span>Москва, Россия</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Pearl Anchor. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

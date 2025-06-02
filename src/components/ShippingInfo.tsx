import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ShippingInfo = () => {
  return (
    <section id="shipping" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            Доставка и возврат
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы предоставляем быструю и безопасную доставку по всему миру. Если
            вы не удовлетворены своей покупкой, мы предлагаем легкий возврат в
            течение 30 дней.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center border-amber-100">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Icon name="Truck" className="text-green-600" size={32} />
                </div>
              </div>
              <CardTitle className="text-xl font-serif text-gray-800">
                Быстрая доставка
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Доставка по России 1-3 дня, международная доставка 5-10 дней
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-amber-100">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Icon name="Shield" className="text-blue-600" size={32} />
                </div>
              </div>
              <CardTitle className="text-xl font-serif text-gray-800">
                Безопасная упаковка
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Каждое украшение упаковано в фирменную коробочку с защитой
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-amber-100">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <Icon
                    name="RotateCcw"
                    className="text-purple-600"
                    size={32}
                  />
                </div>
              </div>
              <CardTitle className="text-xl font-serif text-gray-800">
                Легкий возврат
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                30 дней на возврат без лишних вопросов и полный возврат средств
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ShippingInfo;

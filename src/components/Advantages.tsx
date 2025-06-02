import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const advantages = [
  {
    icon: "Crown",
    title: "Высококачественные материалы",
    description: "Изготовлены из благородных металлов и натурального жемчуга",
  },
  {
    icon: "Sparkles",
    title: "Уникальный дизайн",
    description: "Эксклюзивный дизайн, который выделяет вас из толпы",
  },
  {
    icon: "Star",
    title: "Универсальность",
    description:
      "Идеальны как для повседневной носки, так и для особых событий",
  },
];

const Advantages = () => {
  return (
    <section id="advantages" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Наши серьги сочетают в себе традиционное мастерство и современный
            дизайн
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow duration-300 border-amber-100"
            >
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                    <Icon
                      name={advantage.icon}
                      className="text-amber-600"
                      size={32}
                    />
                  </div>
                </div>
                <CardTitle className="text-xl font-serif text-gray-800">
                  {advantage.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;

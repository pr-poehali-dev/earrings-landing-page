import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const reviews = [
  {
    name: "Анна",
    age: "34 года",
    text: "Я в восторге от своих серег! Их можно сочетать с любым нарядом, и они всегда привлекают внимание!",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=100&h=100&fit=crop",
    rating: 5,
  },
  {
    name: "Мария",
    age: "28 лет",
    text: "Качество превзошло все ожидания! Серьги выглядят дорого и элегантно. Получаю комплименты каждый день!",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    rating: 5,
  },
  {
    name: "Елена",
    age: "42 года",
    text: "Прекрасная работа мастеров! Серьги стали моим любимым украшением. Рекомендую всем подругам!",
    avatar:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop",
    rating: 5,
  },
];

const CustomerReviews = () => {
  return (
    <section
      id="reviews"
      className="py-20 bg-gradient-to-b from-amber-50 to-stone-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            Отзывы наших клиентов
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Более 1000 довольных покупательниц уже выбрали наши украшения
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 border-amber-100"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {review.name}
                    </h4>
                    <p className="text-sm text-gray-500">{review.age}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      className="text-amber-400 fill-current"
                      size={16}
                    />
                  ))}
                </div>

                <p className="text-gray-600 italic">"{review.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;

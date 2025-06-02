import { Card, CardContent } from "@/components/ui/card";

const ProductDescription = () => {
  return (
    <section
      id="product"
      className="py-20 bg-gradient-to-b from-stone-50 to-amber-50"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
              Серьги с жемчугом и якорной цепочкой
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Эти серьги с жемчугом и якорной цепочкой являются идеальным
              дополнением к вашему образу. Их золотистый оттенок придает особое
              благородство, а изысканный дизайн и морская тематика делают их
              настоящим шедевром женской украшательной коллекции.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Изготовленные с любовью и вниманием к деталям, они сохранят свою
              красоту на протяжении многих лет.
            </p>
            <div className="pt-4">
              <span className="text-3xl font-bold text-amber-600">₽12,500</span>
              <span className="text-lg text-gray-500 line-through ml-2">
                ₽15,000
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <img
                  src="https://cdn.poehali.dev/files/d2d5fffe-0830-4918-9c26-0dd84351302c.jpg"
                  alt="Серьги с жемчугом - вид 1"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <img
                  src="https://cdn.poehali.dev/files/d2d5fffe-0830-4918-9c26-0dd84351302c.jpg"
                  alt="Серьги с жемчугом - вид 2"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow col-span-2">
              <CardContent className="p-0">
                <img
                  src="https://cdn.poehali.dev/files/d2d5fffe-0830-4918-9c26-0dd84351302c.jpg"
                  alt="Серьги с жемчугом - детали"
                  className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDescription;

import { Gamepad2, Swords, Rocket, Ghost, Heart, Trophy } from "lucide-react";

const categories = [
  { name: "Ação", icon: Swords, color: "from-red-500 to-orange-500" },
  { name: "Aventura", icon: Rocket, color: "from-blue-500 to-purple-500" },
  { name: "RPG", icon: Trophy, color: "from-green-500 to-teal-500" },
  { name: "Terror", icon: Ghost, color: "from-gray-700 to-black" },
  { name: "Romance", icon: Heart, color: "from-pink-500 to-rose-500" },
  { name: "Esports", icon: Gamepad2, color: "from-golden to-golden-light" },
];

export const Categories = () => {
  return (
    <section className="py-16 px-4 bg-black-light">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Explore por Categoria
          </h2>
          <p className="text-xl text-muted-foreground">
            Descubra jogos incríveis em cada gênero
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.name}
                className="group cursor-pointer"
              >
                <div className={`relative p-8 rounded-xl bg-gradient-to-br ${category.color} hover:scale-105 transition-all duration-300 shadow-card hover:shadow-golden-glow`}>
                  <Icon className="h-12 w-12 text-white mx-auto mb-3" />
                  <h3 className="text-white font-bold text-center text-lg">
                    {category.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
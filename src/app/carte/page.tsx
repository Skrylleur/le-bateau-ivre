import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carte & Menu - Le Bateau Ivre",
  description: "Découvrez notre carte complète : entrées, plats, desserts et carte des vins. Spécialités méditerranéennes, fruits de mer frais, bières artisanales et vins de Provence au port de Cavalaire sur Mer.",
  keywords: [
    "carte restaurant cavalaire",
    "menu le bateau ivre",
    "plats fruits de mer cavalaire",
    "vins provence cavalaire",
    "bières artisanales cavalaire",
    "desserts cavalaire",
    "prix restaurant cavalaire",
    "carte des vins cavalaire"
  ],
  alternates: {
    canonical: '/carte',
  },
  openGraph: {
    title: "Carte & Menu - Le Bateau Ivre",
    description: "Découvrez notre carte complète : entrées, plats, desserts et carte des vins. Spécialités méditerranéennes au port de Cavalaire sur Mer.",
    url: 'https://lebateauivre.fr/carte',
    images: [
      {
        url: '/2024-11-20-2.jpg',
        width: 1200,
        height: 630,
        alt: 'Terrasse de la brasserie Le Bateau Ivre',
      },
    ],
  },
  twitter: {
    title: "Carte & Menu - Le Bateau Ivre",
    description: "Découvrez notre carte complète : entrées, plats, desserts et carte des vins. Spécialités méditerranéennes au port de Cavalaire sur Mer.",
  },
};

export default function Carte() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-gray-800 font-serif hover:text-amber-600 transition-colors">
              ← Retour à l&apos;accueil
            </Link>
            <h1 className="text-3xl font-bold text-center text-gray-800 font-serif">
              LE BATEAU IVRE
            </h1>
            <div className="w-32"></div> {/* Spacer pour centrer le titre */}
          </div>
        </div>
      </header>

      {/* Menu Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800 font-serif mb-2">Notre Carte</h2>
            <p className="text-gray-600">Découvrez nos délicieuses spécialités</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              {/* Entrées */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-amber-600 pb-2">Entrées</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-800">Poêlée de supions en persillade et dés de Chorizo</h4>
                    </div>
                    <span className="font-bold text-amber-600 ml-4">19,00€</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-800">Tartare de concombre, Mangue et Fêta</h4>
                    </div>
                    <span className="font-bold text-amber-600 ml-4">13,50€</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-800">Poke Bowl (Quinoa, Radis, Avocat, Saumon, kiwi)</h4>
                    </div>
                    <span className="font-bold text-amber-600 ml-4">16,50€</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-800">Friture de Tentacules</h4>
                    </div>
                    <span className="font-bold text-amber-600 ml-4">21,00€</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-800">Beignet de Mozzarella</h4>
                      <p className="text-sm text-gray-600">Petit x 3 / Grand x 5</p>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-amber-600">13,90€</div>
                      <div className="font-bold text-amber-600">24,90€</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-800">Tomate Mozzarella di Bufala</h4>
                    </div>
                    <span className="font-bold text-amber-600 ml-4">13,50€</span>
                  </div>
                </div>
              </div>

              {/* Salades */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-amber-600 pb-2">Nos Belles Salades</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-800">Salade César</h4>
                      <p className="text-sm text-gray-600">Salade sucrine, croûtons, œuf dur, bacon, aiguillettes de poulet, copeaux de parmesan et tomates</p>
                    </div>
                    <span className="font-bold text-amber-600 ml-4">19,50€</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-800">Salade Italienne</h4>
                      <p className="text-sm text-gray-600">Salade, tomates confites, olives, copeaux de parmesan, burrata et jambon de Parme</p>
                    </div>
                    <span className="font-bold text-amber-600 ml-4">22,00€</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-800">Salade Océane</h4>
                      <p className="text-sm text-gray-600">Salade, tomates, tartare de saumon, saumon fumé, Gambas, crème, citron et aneth</p>
                    </div>
                    <span className="font-bold text-amber-600 ml-4">22,00€</span>
                  </div>
                </div>
              </div>

              {/* Plats */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-amber-600 pb-2">Plats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-800">Carpaccio de Boeuf</h4>
                    </div>
                    <span className="font-bold text-amber-600 ml-4">17,90€</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-800">Cheese burger</h4>
                    </div>
                    <span className="font-bold text-amber-600 ml-4">24,00€</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-800">Gnocchi Sorrentina</h4>
                      <p className="text-sm text-gray-600">Sauce tomate, crème, Mozzarella</p>
                    </div>
                    <span className="font-bold text-amber-600 ml-4">17,90€</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-800">Penne Arrabbiata</h4>
                      <p className="text-sm text-gray-600">Sauce tomate, piment, Basilic</p>
                    </div>
                    <span className="font-bold text-amber-600 ml-4">14,90€</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-800">Penne Ai Funghi</h4>
                      <p className="text-sm text-gray-600">Crème, Champignons</p>
                    </div>
                    <span className="font-bold text-amber-600 ml-4">15,50€</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-800">Pasta Victoria</h4>
                    </div>
                    <span className="font-bold text-amber-600 ml-4">18,90€</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-800">Tagliatelles Carbonara</h4>
                    </div>
                    <span className="font-bold text-amber-600 ml-4">17,90€</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-800">Risotto Ai Funghi</h4>
                    </div>
                    <span className="font-bold text-amber-600 ml-4">19,90€</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-800">Risotto Gambas</h4>
                    </div>
                    <span className="font-bold text-amber-600 ml-4">21,50€</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-800">Escalope de veau à la Milanaise</h4>
                    </div>
                    <span className="font-bold text-amber-600 ml-4">23,00€</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-800">Escalope de veau au citron</h4>
                    </div>
                    <span className="font-bold text-amber-600 ml-4">23,00€</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-800">Noix d&apos;entrecôte sauce champignon</h4>
                      <p className="text-sm text-gray-600">250/300g</p>
                    </div>
                    <span className="font-bold text-amber-600 ml-4">29,00€</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-800">Loup entier</h4>
                      <p className="text-sm text-gray-600">300/400g</p>
                    </div>
                    <span className="font-bold text-amber-600 ml-4">28,00€</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-800">Pavé de Saumon rôti, sauce Curry et Coco</h4>
                    </div>
                    <span className="font-bold text-amber-600 ml-4">22,50€</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-800">Côte de veau sauce Girolles et écrasé de pomme de terre</h4>
                    </div>
                    <span className="font-bold text-amber-600 ml-4">32,00€</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              {/* Desserts */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-amber-600 pb-2">Desserts</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-800">Salade de fruits maison</h4>
                    </div>
                    <span className="font-bold text-amber-600 ml-4">9,50€</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-800">Panna Cotta et son coulis de fraises maison</h4>
                    </div>
                    <span className="font-bold text-amber-600 ml-4">9,80€</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-800">Moelleux au chocolat, crème anglaise et sorbet framboise</h4>
                    </div>
                    <span className="font-bold text-amber-600 ml-4">11,00€</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-800">Tiramisu au café</h4>
                    </div>
                    <span className="font-bold text-amber-600 ml-4">10,50€</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-800">Tiramisu aux fraises</h4>
                    </div>
                    <span className="font-bold text-amber-600 ml-4">11,00€</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-800">Mousse au chocolat, Chantilly Banane Bailey&apos;s</h4>
                    </div>
                    <span className="font-bold text-amber-600 ml-4">11,50€</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-800">Tartelette au citron</h4>
                    </div>
                    <span className="font-bold text-amber-600 ml-4">11,50€</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-800">Café gourmand</h4>
                    </div>
                    <span className="font-bold text-amber-600 ml-4">12,50€</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-800">Poire pochée sur son lit de brioche perdue</h4>
                    </div>
                    <span className="font-bold text-amber-600 ml-4">11,50€</span>
                  </div>
                </div>
              </div>

              {/* Carte des Vins */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-amber-600 pb-2">Carte des Vins</h3>
                
                {/* Clos Réal */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Clos Réal AOP Côte de Provence</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Rouge 75cl 2023</span>
                      <span className="font-bold text-amber-600">33,00€</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Rosé 75cl 2022</span>
                      <span className="font-bold text-amber-600">33,00€</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Blanc 75cl 2023</span>
                      <span className="font-bold text-amber-600">33,00€</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Au verre</span>
                      <span className="font-bold text-amber-600">6,00€</span>
                    </div>
                  </div>
                </div>

                {/* Éloge */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Éloge AOC Côte de Provence, Domaine de La Croix</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Rouge 75cl 2022</span>
                      <span className="font-bold text-amber-600">29,00€</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Rouge 50cl 2022</span>
                      <span className="font-bold text-amber-600">19,50€</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Rosé 75cl 2023</span>
                      <span className="font-bold text-amber-600">29,00€</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Blanc 75cl 2023</span>
                      <span className="font-bold text-amber-600">29,00€</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Au verre</span>
                      <span className="font-bold text-amber-600">6,00€</span>
                    </div>
                  </div>
                </div>

                {/* Irrésistible */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Irrésistible AOP Côte de Provence, Domaine de La Croix</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Rouge 75cl 2023</span>
                      <span className="font-bold text-amber-600">24,00€</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Rosé 75cl 2023</span>
                      <span className="font-bold text-amber-600">24,00€</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Blanc 75cl 2023</span>
                      <span className="font-bold text-amber-600">24,00€</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Au verre</span>
                      <span className="font-bold text-amber-600">5,00€</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-12 pt-8 border-t-2 border-gray-200">
            <p className="text-gray-600 font-semibold">Prix nets - Service compris</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg font-serif mb-4">Le Bateau Ivre</p>
          
          {/* Navigation dans le footer */}
          <div className="flex justify-center gap-6 mb-4">
            <Link 
              href="/" 
              className="text-gray-300 hover:text-white hover:underline transition-colors font-medium"
            >
              Retour à l&apos;accueil
            </Link>
          </div>
          
          {/* Réseaux sociaux dans le footer */}
          <div className="flex justify-center gap-6 mb-4">
            <a 
              href="https://www.facebook.com/people/Le-Bateau-Ivre-Cavalaire/61567947616719/?_rdr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg transition-colors"
              aria-label="Page Facebook"
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span className="text-sm font-medium">Facebook</span>
            </a>
            <a 
              href="https://www.instagram.com/lebateauivrecavalaire/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-3 py-2 rounded-lg transition-colors"
              aria-label="Page Instagram"
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="text-sm font-medium">Instagram</span>
            </a>
          </div>
          
          <p className="text-gray-400 mb-2">© 2025 - Site créé par <Link className="transition-colors hover:underline" href="https://gourinchas.com" target="_blank" rel="noopener noreferrer"> Antonin Gourinchas</Link> - Tous droits réservés</p>
          <div className="flex justify-center gap-4 text-xs text-gray-500">
            <Link href="/mentions-legales" className="hover:text-amber-400 transition-colors">Mentions légales</Link>
            <Link href="/politique-confidentialite" className="hover:text-amber-400 transition-colors">Politique de confidentialité</Link>
          </div>
        </div>
      </footer>
    </div>
  );
} 
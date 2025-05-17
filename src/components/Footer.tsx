import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Logo />
            <div className="mt-4">
              <p className="flex items-center">
                <span className="mr-2">📍</span> Žeimenos g. 8A, Kaunas
              </p>
              <p className="flex items-center mt-2">
                <span className="mr-2">📞</span> 8 37 337 533
              </p>
              <p className="flex items-center mt-2">
                <span className="mr-2">📱</span> 8 605 10222
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Darbo laikas</h3>
            <p>I-V: 09:00 - 18:00</p>
            <p>VI-VII: Nedirbame</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Paslaugos</h3>
            <ul className="space-y-2">
              <li>Tepalų keitimas</li>
              <li>Važiuoklės remontas</li>
              <li>Stabdžių remontas</li>
              <li>Padangų montavimas</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>© {new Date().getFullYear()} DARAIDA. Visos teisės saugomos.</p>
        </div>
      </div>
    </footer>
  );
}
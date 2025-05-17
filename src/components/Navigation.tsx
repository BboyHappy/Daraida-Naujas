export default function Navigation() {
  return (
    <nav className="hidden md:flex space-x-8">
      <a href="#services" className="text-gray-700 hover:text-red-600">Paslaugos</a>
      <a href="#tires" className="text-gray-700 hover:text-red-600">Padangos</a>
      <a href="#parts" className="text-gray-700 hover:text-red-600">Autodalys</a>
      <a href="#booking" className="text-gray-700 hover:text-red-600">Rezervuoti</a>
      <a href="#contacts" className="text-gray-700 hover:text-red-600">Kontaktai</a>
    </nav>
  );
}
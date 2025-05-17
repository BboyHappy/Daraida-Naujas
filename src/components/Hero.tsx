import { Car } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-red-600">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Auto service"
        />
        <div className="absolute inset-0 bg-red-600 mix-blend-multiply" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Autoservisas Kaune
        </h1>
        <p className="mt-6 text-xl text-white max-w-3xl">
          Profesionalus automobilių remontas, padangų montavimas ir autodalių pardavimas. 
          20 metų patirtis ir aukščiausia paslaugų kokybė.
        </p>
        <div className="mt-10">
          <a
            href="#booking"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-gray-50"
          >
            Rezervuoti laiką
            <Car className="ml-3 -mr-1 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
import { Wrench, DropletIcon, GaugeIcon, Car } from 'lucide-react';

const services = [
  {
    name: 'Tepalų keitimas',
    description: 'Profesionalus tepalų ir filtrų keitimas, naudojant aukščiausios kokybės medžiagas.',
    icon: DropletIcon,
  },
  {
    name: 'Važiuoklės remontas',
    description: 'Pilnas važiuoklės patikrinimas ir remontas, užtikrinant saugų važiavimą.',
    icon: Car,
  },
  {
    name: 'Stabdžių remontas',
    description: 'Stabdžių sistemos diagnostika ir remontas, garantuojant maksimalų saugumą.',
    icon: GaugeIcon,
  },
  {
    name: 'Padangų montavimas',
    description: 'Profesionalus padangų montavimas ir balansavimas su modernia įranga.',
    icon: Wrench,
  },
];

export default function Services() {
  return (
    <div className="bg-white py-24 sm:py-32" id="services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-red-600">Mūsų paslaugos</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Profesionalus automobilių aptarnavimas
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Teikiame platų automobilių remonto ir priežiūros paslaugų spektrą
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <service.icon className="h-5 w-5 flex-none text-red-600" aria-hidden="true" />
                  {service.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{service.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
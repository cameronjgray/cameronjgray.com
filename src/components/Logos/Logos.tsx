import { LogoPill } from './LogoPill';
import { Technology, getTechnologyLogo } from '@/helpers/technologies';

type Logo = {
  name: Technology;
  alt: string;
};

interface Props {
    logos: Logo[];
}

export function Logos({ logos }: Props) {
  return (
    <div className="flex flex-wrap">
      {logos.map(logo => {
        return <LogoPill key={logo.name} name={logo.name} alt={logo.alt} logoPath={getTechnologyLogo(logo.name)} />;
      })}
    </div>
  );
}

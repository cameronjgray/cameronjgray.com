export interface Props {
    name: string;
    logoPath: string;
    alt: string;
}

export function LogoPill({ name, logoPath, alt }: Props) {
    return (
          <div
            key={name}
            className="flex flex-row justify-center items-center bg-gray-200 rounded-2xl w-fit px-3 py-1 mr-2 mb-2"
          >
            <img src={logoPath} alt={alt} className="w-5 h-5 mr-1"></img>
            <div className="text-lg text-gray-600">{name}</div>
          </div>
    )
}

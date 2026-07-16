import Image from "next/image";

interface MascotProps {
  message: string;
}

export function Mascot({ message }: MascotProps) {
  return (
    <div className="mascot-row">
      <Image src="/images/mascot.svg" alt="Mascotte renard" width={90} height={90} />
      <div className="mascot-bubble">{message}</div>
    </div>
  );
}

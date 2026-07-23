 import { generatePillarMetadata, PillarPageServer } from "@/components/pillar/pillarServerFactory";
 import { IO_PILLAR } from "@/components/pillar/pillarData";
 export const metadata = generatePillarMetadata(IO_PILLAR);
 export default function Page() { return <PillarPageServer pillar={IO_PILLAR} />; }
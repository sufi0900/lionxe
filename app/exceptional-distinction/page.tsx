 import { generatePillarMetadata, PillarPageServer } from "@/components/pillar/pillarServerFactory";
 import { XE_PILLAR } from "@/components/pillar/pillarData";
 export const metadata = generatePillarMetadata(XE_PILLAR);
 export default function Page() { return <PillarPageServer pillar={XE_PILLAR} />; }
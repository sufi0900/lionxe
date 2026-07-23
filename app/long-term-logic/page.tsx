// app/l/page.tsx
import { generatePillarMetadata, PillarPageServer } from "@/components/pillar/pillarServerFactory";
import { L_PILLAR } from "@/components/pillar/pillarData";
export const metadata = generatePillarMetadata(L_PILLAR);
export default function Page() { return <PillarPageServer pillar={L_PILLAR} />; }
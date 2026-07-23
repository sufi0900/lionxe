//  / app/non-negotiable-integrity/page.tsx — Client Component (LIONXE NI Pillar Overview)

/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

 import { generatePillarMetadata, PillarPageServer } from "@/components/pillar/pillarServerFactory";
 import { N_PILLAR } from "@/components/pillar/pillarData";
 export const metadata = generatePillarMetadata(N_PILLAR);
 export default function Page() { return <PillarPageServer pillar={N_PILLAR} />; }
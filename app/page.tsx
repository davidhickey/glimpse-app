
//reqs
//see leads in a table component
//api flow > ui initiates > useHook > api methods -> server api http req
//upload a csv that adds DB data

import LeadsMain from "@/components/features/Leads/LeadsMain";
import leads from "@/lib/prisma/sampleData";


export default async function Home() {
  return (
    <div>
      <main>
        <LeadsMain leads={leads} />
      </main>
    </div>
  );
}

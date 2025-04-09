
//reqs
//see leads in a table component
//api flow > ui initiates > useHook > api methods -> server api http req
//upload a csv that adds DB data

import { getUsers } from "@/lib/prisma/methods";
import LeadsMain from "@/components/features/Leads/LeadsMain";
import leads from "@/lib/prisma/sampleData";


export default async function Home() {
  const users = await getUsers();
  console.log(users);

  return (
    <div>
      <main>
        <LeadsMain leads={leads} />
      </main>
    </div>
  );
}

import Image from "next/image";

//reqs
//see leads in a table component
//api flow > ui initiates > useHook > api methods -> server api http req
//upload a csv that adds DB data

import { getUser, getUsers } from "@/lib/prisma/methods";
import LeadsTable from "@/components/LeadsTable";
import LeadsMain from "@/components/features/LeadsMain";
const leads = [
  {
    id: 1,
    name: "John Doe",
    contact: "john.doe@example.com",
    source: "Google",
    interest_level: "high",
    status: "new",
    assigned_to: "John Doe",
  },
  {
    id: 2,
    name: "Zed Doe",
    contact: "jane.doe@example.com",
    source: "Google",
    interest_level: "medium",
    status: "new",
    assigned_to: "John Doe",
  },
  {
    id: 3,
    name: "Tim Smith",
    contact: "john.smith@example.com",
    source: "Google",
    interest_level: "low",
    status: "old",
    assigned_to: "John Doe",
  },
  {
    id: 4,
    name: "Jane Smith",
    contact: "jane.smith@example.com",
    source: "Google",
    interest_level: "high",
    status: "old",
    assigned_to: "John Doe",
  },
];

export default async function Home() {
  const users = await getUsers();
  // const user = await getUser(users.data[0].id);
  console.log(users);
  // console.log('user', user);

  return (
    <div>
      <main>
        <LeadsMain />
      </main>
    </div>
  );
}

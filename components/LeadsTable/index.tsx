"use client";
import { useState, useMemo } from "react";

interface Lead {
  id: number;
  name: string;
  contact: string;
  source: string;
  interest_level: string;
}

const LeadsTable = ({ leads }: { leads: Lead[] }) => {
  const [sort, setSort] = useState<string>("");

  const handleSort = (sortType: string) => {
    setSort(sortType);
  }

  //todo : check sort type error
  const sortableData = useMemo(() => {
    if(sort === "name") {
      console.log('sorting by name');
      return leads.sort((a:Lead, b:Lead) => {
        const nameA = a.name.toUpperCase();
        const nameb = b.name.toUpperCase();
        if (nameA < nameb) {
          return -1;
        }
        if (nameA > nameb) {
          return 1;
        }
        return 0;
      });
    }
    return leads
  },[sort, leads]);


    

  return (
    <table className="w-full flex flex-col min-w-[300px] lg:min-w-[600px]">
      <thead>
        <tr className="flex flex-row gap-4">
          <th onClick={() => handleSort("name")} className="border-1">Name</th>
          <th onClick={() => handleSort("contact")}>Contact</th>
          <th onClick={() => handleSort("source")}>Source</th>
          <th onClick={() => handleSort("interest_level")}>Interest Level</th>
        </tr>
      </thead>
      <tbody className="flex flex-col gap-2">
        {sortableData.map((lead) => (
          <tr key={lead.id} className="flex gap-4">
            <td>{lead.name}</td>
            <td>{lead.contact}</td>
            <td>{lead.source}</td>
            <td>{lead.interest_level}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
};

export default LeadsTable;

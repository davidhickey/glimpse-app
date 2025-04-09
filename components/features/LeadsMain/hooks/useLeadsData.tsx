"use client";
import { useMemo, useState } from "react";
import { Lead } from "..";


interface Payload {
  type: string;
  value: any;
}


// const handleSearchData = (data: Lead[], payload: Payload[]) => {
  
// }

// const handleSortData = (data: Lead[], payload: Payload[]) => {
//   return data.sort((a, b) => {
//     return a[payload.type] - b[payload.type];
//   });
// }

// const handleFilterData = (data: Lead[], payload: Payload[]) => {
//   return data.filter((lead) => {
//     return payload.some((payload) => {
//       return lead[payload.type] === payload.value;
//     });
//   });
// }


const useLeadsData = ({
  payload,
  initialData,
}: {
  payload?: Payload[];
  initialData?: Lead[];
}) => {
  const [activePayloads, setActivePayloads] = useState<Payload[]>([]);

  const leadsData = useMemo(() => {
    if(activePayloads.length === 0) {
      return initialData;
    }
    return activePayloads.map((payload) => {
      return {
        ...payload,
      };
    });
  }, [initialData, activePayloads]);

  return { leadsData, activePayloads, setActivePayloads };
};

export default useLeadsData;
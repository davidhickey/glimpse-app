"use client";

import useLeadsData from "./hooks/useLeadsData";
import LeadsSearch from "../LeadsSearch";
import LeadsFilter from "../LeadsFilter";
import LeadsTable from "../LeadsTable";

export type Lead = {
  id: number;
  name: string;
  contact: string;
  source: string;
  interest_level: string;
  status: string;
  assigned_to: string;
};

const LeadsMain = ({ leads }: { leads: Lead[] }) => {
  const { leadsData, searchValue, handleSearch, filterValue, handleFilter } =
    useLeadsData({
      initialData: leads,
    });

  //Assigned To Filter Options
  const assignedToOptions = [
    ...new Set(leads?.map((lead) => lead.assigned_to)),
  ];
  //Table col names
  const colNames = Object.keys(leads[0]).map((key) => key.replace(/_/g, " "));
  //styling rules
  const interestLevelColors = (level?: string) => {
    if (level === "low") return "#637588";
    if (level === "medium") return "orange";
    if (level === "high") return "green";
    return "#637588";
  };
  const statusColors = (status?: string) => {
    if (status === "new") return "green";
    if (status === "old") return "#637588";
    return "#637588";
  };

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-white"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex flex-col w-full">
        <div className="flex w-full justify-center">
          <div className="layout-content-container flex flex-col w-full max-w-[960px] flex-1">
            <h1 className="text-[#111418] tracking-light text-[32px] font-bold leading-tight px-4 text-left pb-3 pt-6">
              Leads
            </h1>
            <LeadsFilter
              filterValue={filterValue}
                emitOnClick={handleFilter}
                interestLevelColors={interestLevelColors}
                statusColors={statusColors}
                assignedToOptions={assignedToOptions}
              />
            <div className="px-4 py-3">
              <LeadsSearch
                searchValue={searchValue}
                emitOnChange={handleSearch}
              />
            </div>
            <div className="px-4 py-3 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <div className="min-w-[960px]">
              <LeadsTable
                leadsData={leadsData}
                colNames={colNames}
                interestLevelColors={interestLevelColors}
                statusColors={statusColors}
              />    
              </div>          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadsMain;

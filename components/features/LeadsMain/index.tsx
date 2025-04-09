"use client";
import { useState } from "react";
import useLeadsData from "./hooks/useLeadsData";

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

  //filter dropdowns
  const [filterDropdowns, setFilterDropdowns] = useState({
    interest_level: false,
    status: false,
    assigned_to: false,
  });
  const handleFilterDropdowns = (type: keyof typeof filterDropdowns) => {
    setFilterDropdowns({ ...filterDropdowns, [type]: !filterDropdowns[type] });
  };

  const assignedToOptions = [
    ...new Set(leads?.map((lead) => lead.assigned_to)),
  ];

  //col names
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
      className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <h1 className="text-[#111418] tracking-light text-[32px] font-bold leading-tight px-4 text-left pb-3 pt-6">
              Leads
            </h1>
            <div className="flex gap-3 p-3">
              <div
                className="relative flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-2"
                style={{
                  backgroundColor:
                    filterValue.type === "interest_level"
                      ? interestLevelColors(filterValue.value)
                      : "",
                }}
              >
                <p className="text-[#111418] text-sm font-medium leading-normal">
                  <span
                    className="capitalize"
                    style={{
                      color:
                        filterValue.type === "interest_level" ? "white" : "",
                    }}
                  >
                    {filterValue.type === "interest_level"
                      ? `${filterValue.value} Interest Levels`
                      : "All Interest Levels"}
                  </span>
                </p>
                <div
                  className="text-[#111418] cursor-pointer"
                  style={{
                    color: filterValue.type === "interest_level" ? "white" : "",
                  }}
                  data-icon="CaretDown"
                  data-size="20px"
                  data-weight="regular"
                  onClick={() => handleFilterDropdowns("interest_level")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
                {filterDropdowns.interest_level && (
                  <div className="absolute top-full left-0 w-full bg-white shadow-md">
                    <ul>
                      <li
                        className="cursor-pointer"
                        onClick={() => {
                          handleFilter("interest_level", "all");
                          handleFilterDropdowns("interest_level");
                        }}
                        style={{
                          fontWeight:
                            filterValue.type === "interest_level" &&
                            filterValue.value === "all"
                              ? "bold"
                              : "normal",
                        }}
                      >
                        All
                      </li>
                      <li
                        className="cursor-pointer"
                        onClick={() => {
                          handleFilter("interest_level", "low");
                          handleFilterDropdowns("interest_level");
                        }}
                        style={{
                          fontWeight:
                            filterValue.type === "interest_level" &&
                            filterValue.value === "low"
                              ? "bold"
                              : "normal",
                        }}
                      >
                        Low
                      </li>
                      <li
                        className="cursor-pointer"
                        onClick={() => {
                          handleFilter("interest_level", "medium");
                          handleFilterDropdowns("interest_level");
                        }}
                        style={{
                          fontWeight:
                            filterValue.type === "interest_level" &&
                            filterValue.value === "medium"
                              ? "bold"
                              : "normal",
                        }}
                      >
                        Medium
                      </li>
                      <li
                        className="cursor-pointer"
                        onClick={() => {
                          handleFilter("interest_level", "high");
                          handleFilterDropdowns("interest_level");
                        }}
                        style={{
                          fontWeight:
                            filterValue.type === "interest_level" &&
                            filterValue.value === "high"
                              ? "bold"
                              : "normal",
                        }}
                      >
                        High
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div
                className="relative flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-2"
                style={{
                  backgroundColor:
                    filterValue.type === "status"
                      ? statusColors(filterValue.value)
                      : "",
                }}
              >
                <p className="text-[#111418] text-sm font-medium leading-normal">
                  <span
                    className="capitalize"
                    style={{
                      color: filterValue.type === "status" ? "white" : "",
                    }}
                  >
                    {filterValue.type === "status"
                      ? `${filterValue.value} Statuses`
                      : "All Statuses"}
                  </span>
                </p>
                <div
                  className="text-[#111418] cursor-pointer"
                  style={{
                    color: filterValue.type === "status" ? "white" : "",
                  }}
                  data-icon="CaretDown"
                  data-size="20px"
                  data-weight="regular"
                  onClick={() => handleFilterDropdowns("status")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
                {filterDropdowns.status && (
                  <div className="absolute top-full left-0 w-full bg-white shadow-md">
                    <ul>
                      <li
                        className="cursor-pointer"
                        onClick={() => {
                          handleFilter("status", "all");
                          handleFilterDropdowns("status");
                        }}
                        style={{
                          fontWeight:
                            filterValue.type === "status" &&
                            filterValue.value === "all"
                              ? "bold"
                              : "normal",
                        }}
                      >
                        All
                      </li>
                      <li
                        className="cursor-pointer"
                        onClick={() => {
                          handleFilter("status", "new");
                          handleFilterDropdowns("status");
                        }}
                        style={{
                          fontWeight:
                            filterValue.type === "status" &&
                            filterValue.value === "new"
                              ? "bold"
                              : "normal",
                        }}
                      >
                        New
                      </li>
                      <li
                        className="cursor-pointer"
                        onClick={() => {
                          handleFilter("status", "old");
                          handleFilterDropdowns("status");
                        }}
                        style={{
                          fontWeight:
                            filterValue.type === "status" &&
                            filterValue.value === "old"
                              ? "bold"
                              : "normal",
                        }}
                      >
                        Old
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div className="relative flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-2">
                <p className="text-[#111418] text-sm font-medium leading-normal">
                  {filterValue.type === "assigned_to"
                    ? `Assigned To: ${filterValue.value} `
                    : "All Assigned To"}
                </p>
                <div
                  className="text-[#111418] cursor-pointer"
                  data-icon="CaretDown"
                  data-size="20px"
                  data-weight="regular"
                  onClick={() => handleFilterDropdowns("assigned_to")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
                {filterDropdowns.assigned_to && (
                  <div className="absolute top-full left-0 w-full bg-white shadow-md">
                    <ul>
                      <li
                        className="cursor-pointer"
                        onClick={() => {
                          handleFilter("assigned_to", "all");
                          handleFilterDropdowns("assigned_to");
                        }}
                        style={{
                          fontWeight:
                            filterValue.type === "assigned_to" &&
                            filterValue.value === "all"
                              ? "bold"
                              : "normal",
                        }}
                      >
                        All
                      </li>
                      {assignedToOptions.map((assigned_to) => (
                        <li
                          key={assigned_to}
                          className="cursor-pointer"
                          onClick={() => {
                            handleFilter("assigned_to", assigned_to);
                            handleFilterDropdowns("assigned_to");
                          }}
                          style={{
                            fontWeight:
                              filterValue.type === "assigned_to" &&
                              filterValue.value === assigned_to
                                ? "bold"
                                : "normal",
                          }}
                        >
                          {assigned_to}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className="px-4 py-3">
              <label className="flex flex-col min-w-40 h-12 w-full">
                <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                  <div
                    className="text-[#637588] flex border-none bg-[#f0f2f4] items-center justify-center pl-4 rounded-l-xl border-r-0"
                    data-icon="MagnifyingGlass"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                    </svg>
                  </div>
                  <input
                    placeholder="Search by name or email"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-full placeholder:text-[#637588] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                    value={searchValue}
                    onChange={handleSearch}
                  />
                </div>
              </label>
            </div>
            <div className="px-4 py-3 @container">
              <div className="flex overflow-hidden rounded-xl border border-[#dce0e5] bg-white">
                <table className="flex-1">
                  <thead>
                    <tr className="bg-white">
                      {colNames.map((colName) => (
                        <th
                          key={colName}
                          className={`column-${colName} capitalize px-4 py-3 text-left text-[#111418] min-w-[100px] text-sm font-medium leading-normal`}
                        >
                          {colName}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {leadsData?.map((lead) => (
                      <tr key={lead.id} className="border-t border-t-[#dce0e5]">
                        <td className="h-[72px] px-4 py-2 w-[100px] text-[#111418] text-sm font-normal leading-normal">
                          {lead.id || "Missing ID"}
                        </td>
                        <td className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-120 h-[72px] px-4 py-2 w-[100px] text-[#111418] text-sm font-normal leading-normal">
                          {lead.name || "Missing Name"}
                        </td>
                        <td className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-240 h-[72px] px-4 py-2 w-[100px] text-[#637588] text-sm font-normal leading-normal">
                          {lead.contact || "Missing Contact"}
                        </td>
                        <td className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-360 h-[72px] px-4 py-2 w-[100px] text-sm font-normal leading-normal">
                          {lead.source || "Missing Source"}
                        </td>
                        <td className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-480 h-[72px] px-4 py-2 w-[100px] text-sm font-normal leading-normal">
                          <span
                            className="rounded-xl h-12 flex items-center justify-center px-4 bg-[#f0f2f4] text-white text-sm font-medium leading-normal w-full"
                            style={{
                              backgroundColor: interestLevelColors(
                                lead.interest_level
                              ),
                            }}
                          >
                            {lead.interest_level || "Missing Interest Level"}
                          </span>
                        </td>
                        <td className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-600 h-[72px] px-4 py-2 w-[100px] text-sm font-normal leading-normal">
                          <span
                            className="rounded-xl h-12 flex items-center justify-center px-4 bg-[#f0f2f4] text-white text-sm font-medium leading-normal w-full"
                            style={{
                              backgroundColor: statusColors(lead.status),
                            }}
                          >
                            {lead.status || "Missing Status"}
                          </span>
                        </td>
                        <td className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-600 h-[72px] px-4 py-2 w-[100px] text-sm font-normal leading-normal">
                          <span className="rounded-xl h-12 flex items-center justify-center px-4 bg-[#f0f2f4] text-[#111418] text-sm font-medium leading-normal w-full">
                            {lead.assigned_to || "Missing Assigned To"}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadsMain;

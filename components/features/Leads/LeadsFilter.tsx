"use client";
import { useState } from "react";

const LeadsFilter = ({
  filterValue,
  emitOnClick,
  interestLevelColors,
  statusColors,
  assignedToOptions,
}: {
  filterValue: { type: string; value: string };
  emitOnClick: (type: string, value: string) => void;
  interestLevelColors: (value: string) => string;
  statusColors: (value: string) => string;
  assignedToOptions: string[];
}) => {
  const [filterDropdowns, setFilterDropdowns] = useState({
    interest_level: false,
    status: false,
    assigned_to: false,
  });
  const handleFilterDropdowns = (type: keyof typeof filterDropdowns) => {
    setFilterDropdowns({ ...filterDropdowns, [type]: !filterDropdowns[type] });
  };

  return (
    <div className="flex gap-3 p-3 flex-col md:flex-row">
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
              color: filterValue.type === "interest_level" ? "white" : "",
            }}
          >
            {filterValue.type === "interest_level"
              ? `${filterValue.value} Interest Levels`
              : "All Interest Levels"}
          </span>
        </p>
        <div
          className="text-[#111418] cursor-pointer flex"
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
            style={{
              transform: filterDropdowns.interest_level ? "rotate(180deg)" : "",
            }}
            className="transition-transform duration-300 ease-in-out"
          >
            <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
          </svg>
        </div>
        {filterDropdowns.interest_level && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md z-[1]">
            <ul>
              <li
                className="cursor-pointer"
                onClick={() => {
                  emitOnClick("interest_level", "all");
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
                  emitOnClick("interest_level", "low");
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
                  emitOnClick("interest_level", "medium");
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
                  emitOnClick("interest_level", "high");
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
            style={{
              transform: filterDropdowns.status ? "rotate(180deg)" : "",
            }}
            className="transition-transform duration-300 ease-in-out"
          >
            <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
          </svg>
        </div>
        {filterDropdowns.status && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md z-[1]">
            <ul>
              <li
                className="cursor-pointer"
                onClick={() => {
                  emitOnClick("status", "all");
                  handleFilterDropdowns("status");
                }}
                style={{
                  fontWeight:
                    filterValue.type === "status" && filterValue.value === "all"
                      ? "bold"
                      : "normal",
                }}
              >
                All
              </li>
              <li
                className="cursor-pointer"
                onClick={() => {
                  emitOnClick("status", "new");
                  handleFilterDropdowns("status");
                }}
                style={{
                  fontWeight:
                    filterValue.type === "status" && filterValue.value === "new"
                      ? "bold"
                      : "normal",
                }}
              >
                New
              </li>
              <li
                className="cursor-pointer"
                onClick={() => {
                  emitOnClick("status", "old");
                  handleFilterDropdowns("status");
                }}
                style={{
                  fontWeight:
                    filterValue.type === "status" && filterValue.value === "old"
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
            : "Assigned To: All"}
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
            style={{
              transform: filterDropdowns.assigned_to ? "rotate(180deg)" : "",
            }}
            className="transition-transform duration-300 ease-in-out"
          >
            <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
          </svg>
        </div>
        {filterDropdowns.assigned_to && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md z-[1]">
            <ul>
              <li
                className="cursor-pointer"
                onClick={() => {
                  emitOnClick("assigned_to", "all");
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
                    emitOnClick("assigned_to", assigned_to);
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
  );
};

export default LeadsFilter;

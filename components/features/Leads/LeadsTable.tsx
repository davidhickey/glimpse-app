import { Lead } from "./LeadsMain";

const LeadsTable = ({
  leadsData,
  colNames,
  interestLevelColors,
  statusColors,
}: {
  leadsData?: Lead[];
  colNames: string[];
  interestLevelColors: (value: string) => string;
  statusColors: (value: string) => string;
}) => {
  if (!leadsData) return null;
  return (
    <div className="flex overflow-y-hidden rounded-xl border border-[#dce0e5] bg-white overflow-x-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <table className="flex-l w-full">
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
                    backgroundColor: interestLevelColors(lead.interest_level),
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
  );
};

export default LeadsTable;

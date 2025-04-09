"use client";
import { useMemo, useState } from "react";
import { Lead } from "..";

type FilterValue = {
  type: string;
  value: string;
};
const useLeadsData = ({ initialData }: { initialData?: Lead[] }) => {
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState<FilterValue>({
    type: "",
    value: "",
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue({ type: "", value: "" });
    setSearchValue(e.target.value);
  };

  const handleFilter = (type: string, value: string) => {
    if (
      (type === "interest_level" && value === "all") ||
      (type === "status" && value === "all") ||
      (type === "assigned_to" && value === "all")
    ) {
      setFilterValue({ type: "", value: "" });
    } else {
      setFilterValue({ type, value });
    }
  };

  const leadsData = useMemo(() => {
    if (!searchValue && !filterValue.type && !filterValue.value)
      return initialData;

    if (searchValue) {
      return initialData?.filter((lead) => {
        return (
          lead.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          lead.contact.toLowerCase().includes(searchValue.toLowerCase())
        );
      });
    }

    if (filterValue.type && filterValue.value) {
      return initialData?.filter((lead) => {
        return lead[filterValue.type as keyof Lead] === filterValue.value;
      });
    }
  }, [initialData, searchValue, filterValue]);

  return { leadsData, searchValue, handleSearch, filterValue, handleFilter };
};

export default useLeadsData;

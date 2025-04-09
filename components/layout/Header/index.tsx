"use client";
import { useState } from "react";
import PopUpModal from "../../common/PopUpModal";
import CSVForm from "../../features/UploadCSV/CSVForm";
const Header = () => {
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f4] px-4 py-3">
      <div className="flex items-center gap-4 text-[#111418]">
        <div className="size-4">
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <h2 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em]">
          Acme Inc.
        </h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex gap-2">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]"
          onClick={() => setIsImportModalOpen(true)}
          >
            <span className="truncate">Import</span>
          </button>
        </div>
      </div>
      <PopUpModal
        isOpen={isImportModalOpen}
        onClose={() => setIsImportModalOpen(false)}
      >
        <CSVForm />
      </PopUpModal>
    </header>
  );
};

export default Header;

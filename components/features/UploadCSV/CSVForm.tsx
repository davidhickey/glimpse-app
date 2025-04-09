import { useState } from "react";

const CSVForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    //Todo: add validation logic here to make sure file is a csv and has the correct columns
    if (selectedFile) {
      setFile(selectedFile);
    }
  };
  const handleUpload = () => {
    if (file) {
      // TODO: kickoff file upload logic here
      console.log(file);
    }
  };
  return (
    <div className="flex flex-col gap-4 w-full max-w-[300px] min-h-[300px] h-fit justify-center items-start">
      <h2 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] flex flex-col gap-2">
        Import your Leads from a CSV File
      </h2>
      <div className="flex flex-col gap-2 w-full">
        <p>
        Upload a CSV file to import your leads. 
        </p>
        <p>
        The file should have the following columns: 
        <br />
        name, email, phone, status, and source.
        </p>
      </div>
      <input type="file" id="file" name="file" accept=".csv" onChange={handleFileChange} className="w-full cursor-pointer h-10 rounded-xl border border-[#f0f2f4] bg-[#f0f2f4] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]" placeholder=""  />
      {file && <p className="text-green-500">{file.name} chosen.</p>}
      <button onClick={handleUpload} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]">
        Upload
      </button>
    </div>
  );
};

export default CSVForm;

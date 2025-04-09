const LeadsMain = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{fontFamily: 'Inter, "Noto Sans", sans-serif'}}>
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <h1 className="text-[#111418] tracking-light text-[32px] font-bold leading-tight px-4 text-left pb-3 pt-6">Leads</h1>
            <div className="flex gap-3 p-3 overflow-x-hidden">
              <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-2">
                <p className="text-[#111418] text-sm font-medium leading-normal">All leads</p>
                <div className="text-[#111418]" data-icon="CaretDown" data-size="20px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
              </button>
              <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-2">
                <p className="text-[#111418] text-sm font-medium leading-normal">No owner</p>
                <div className="text-[#111418]" data-icon="CaretDown" data-size="20px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
              </button>
              <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-2">
                <p className="text-[#111418] text-sm font-medium leading-normal">Interest level</p>
                <div className="text-[#111418]" data-icon="CaretDown" data-size="20px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
              </button>
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    placeholder="Search by name, email, or phone number"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-full placeholder:text-[#637588] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                    value=""
                  />
                </div>
              </label>
            </div>
            <div className="px-4 py-3 @container">
              <div className="flex overflow-hidden rounded-xl border border-[#dce0e5] bg-white">
                <table className="flex-1">
                  <thead>
                    <tr className="bg-white">
                      <th className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-120 px-4 py-3 text-left text-[#111418] w-[400px] text-sm font-medium leading-normal">Name</th>
                      <th className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-240 px-4 py-3 text-left text-[#111418] w-[400px] text-sm font-medium leading-normal">Contact</th>
                      <th className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-360 px-4 py-3 text-left text-[#111418] w-60 text-sm font-medium leading-normal">Source</th>
                      <th className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-480 px-4 py-3 text-left text-[#111418] w-60 text-sm font-medium leading-normal">
                        Interest level
                      </th>
                      <th className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-600 px-4 py-3 text-left text-[#111418] w-60 text-sm font-medium leading-normal">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-t-[#dce0e5]">
                      <td className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-120 h-[72px] px-4 py-2 w-[400px] text-[#111418] text-sm font-normal leading-normal">
                        Samantha Jones
                      </td>
                      <td className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-240 h-[72px] px-4 py-2 w-[400px] text-[#637588] text-sm font-normal leading-normal">
                        samantha.jones@mail.com
                      </td>
                      <td className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-360 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-medium leading-normal w-full"
                        >
                          <span className="truncate">Referral</span>
                        </button>
                      </td>
                      <td className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-480 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-medium leading-normal w-full"
                        >
                          <span className="truncate">High</span>
                        </button>
                      </td>
                      <td className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-600 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-medium leading-normal w-full"
                        >
                          <span className="truncate">Open</span>
                        </button>
                      </td>
                    </tr>
                    <tr className="border-t border-t-[#dce0e5]">
                      <td className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-120 h-[72px] px-4 py-2 w-[400px] text-[#111418] text-sm font-normal leading-normal">
                        John Smith
                      </td>
                      <td className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-240 h-[72px] px-4 py-2 w-[400px] text-[#637588] text-sm font-normal leading-normal">
                        john.smith@mail.com
                      </td>
                      <td className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-360 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-medium leading-normal w-full"
                        >
                          <span className="truncate">Cold Call</span>
                        </button>
                      </td>
                      <td className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-480 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-medium leading-normal w-full"
                        >
                          <span className="truncate">Medium</span>
                        </button>
                      </td>
                      <td className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-600 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-medium leading-normal w-full"
                        >
                          <span className="truncate">Closed</span>
                        </button>
                      </td>
                    </tr>
                    <tr className="border-t border-t-[#dce0e5]">
                      <td className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-120 h-[72px] px-4 py-2 w-[400px] text-[#111418] text-sm font-normal leading-normal">
                        Emily Davis
                      </td>
                      <td className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-240 h-[72px] px-4 py-2 w-[400px] text-[#637588] text-sm font-normal leading-normal">
                        emily.davis@mail.com
                      </td>
                      <td className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-360 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-medium leading-normal w-full"
                        >
                          <span className="truncate">Webinar</span>
                        </button>
                      </td>
                      <td className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-480 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-medium leading-normal w-full"
                        >
                          <span className="truncate">Low</span>
                        </button>
                      </td>
                      <td className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-600 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-medium leading-normal w-full"
                        >
                          <span className="truncate">Open</span>
                        </button>
                      </td>
                    </tr>
                    <tr className="border-t border-t-[#dce0e5]">
                      <td className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-120 h-[72px] px-4 py-2 w-[400px] text-[#111418] text-sm font-normal leading-normal">
                        Michael Johnson
                      </td>
                      <td className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-240 h-[72px] px-4 py-2 w-[400px] text-[#637588] text-sm font-normal leading-normal">
                        michael.johnson@mail.com
                      </td>
                      <td className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-360 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-medium leading-normal w-full"
                        >
                          <span className="truncate">Social Media</span>
                        </button>
                      </td>
                      <td className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-480 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-medium leading-normal w-full"
                        >
                          <span className="truncate">High</span>
                        </button>
                      </td>
                      <td className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-600 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-medium leading-normal w-full"
                        >
                          <span className="truncate">Closed</span>
                        </button>
                      </td>
                    </tr>
                    <tr className="border-t border-t-[#dce0e5]">
                      <td className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-120 h-[72px] px-4 py-2 w-[400px] text-[#111418] text-sm font-normal leading-normal">
                        Jessica Brown
                      </td>
                      <td className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-240 h-[72px] px-4 py-2 w-[400px] text-[#637588] text-sm font-normal leading-normal">
                        jessica.brown@mail.com
                      </td>
                      <td className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-360 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-medium leading-normal w-full"
                        >
                          <span className="truncate">Email Campaign</span>
                        </button>
                      </td>
                      <td className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-480 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-medium leading-normal w-full"
                        >
                          <span className="truncate">Medium</span>
                        </button>
                      </td>
                      <td className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-600 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-medium leading-normal w-full"
                        >
                          <span className="truncate">Open</span>
                        </button>
                      </td>
                    </tr>
                    <tr className="border-t border-t-[#dce0e5]">
                      <td className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-120 h-[72px] px-4 py-2 w-[400px] text-[#111418] text-sm font-normal leading-normal">
                        William Taylor
                      </td>
                      <td className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-240 h-[72px] px-4 py-2 w-[400px] text-[#637588] text-sm font-normal leading-normal">
                        william.taylor@mail.com
                      </td>
                      <td className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-360 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-medium leading-normal w-full"
                        >
                          <span className="truncate">Trade Show</span>
                        </button>
                      </td>
                      <td className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-480 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-medium leading-normal w-full"
                        >
                          <span className="truncate">Low</span>
                        </button>
                      </td>
                      <td className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-600 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-medium leading-normal w-full"
                        >
                          <span className="truncate">Closed</span>
                        </button>
                      </td>
                    </tr>
                    <tr className="border-t border-t-[#dce0e5]">
                      <td className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-120 h-[72px] px-4 py-2 w-[400px] text-[#111418] text-sm font-normal leading-normal">
                        Ava White
                      </td>
                      <td className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-240 h-[72px] px-4 py-2 w-[400px] text-[#637588] text-sm font-normal leading-normal">
                        ava.white@mail.com
                      </td>
                      <td className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-360 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-medium leading-normal w-full"
                        >
                          <span className="truncate">Content Download</span>
                        </button>
                      </td>
                      <td className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-480 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-medium leading-normal w-full"
                        >
                          <span className="truncate">High</span>
                        </button>
                      </td>
                      <td className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-600 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-medium leading-normal w-full"
                        >
                          <span className="truncate">Open</span>
                        </button>
                      </td>
                    </tr>
                    <tr className="border-t border-t-[#dce0e5]">
                      <td className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-120 h-[72px] px-4 py-2 w-[400px] text-[#111418] text-sm font-normal leading-normal">
                        Daniel Lee
                      </td>
                      <td className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-240 h-[72px] px-4 py-2 w-[400px] text-[#637588] text-sm font-normal leading-normal">
                        daniel.lee@mail.com
                      </td>
                      <td className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-360 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-medium leading-normal w-full"
                        >
                          <span className="truncate">Partner Referral</span>
                        </button>
                      </td>
                      <td className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-480 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-medium leading-normal w-full"
                        >
                          <span className="truncate">Medium</span>
                        </button>
                      </td>
                      <td className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-600 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-medium leading-normal w-full"
                        >
                          <span className="truncate">Closed</span>
                        </button>
                      </td>
                    </tr>
                    <tr className="border-t border-t-[#dce0e5]">
                      <td className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-120 h-[72px] px-4 py-2 w-[400px] text-[#111418] text-sm font-normal leading-normal">
                        Olivia Harris
                      </td>
                      <td className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-240 h-[72px] px-4 py-2 w-[400px] text-[#637588] text-sm font-normal leading-normal">
                        olivia.harris@mail.com
                      </td>
                      <td className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-360 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-medium leading-normal w-full"
                        >
                          <span className="truncate">Paid Ads</span>
                        </button>
                      </td>
                      <td className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-480 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-medium leading-normal w-full"
                        >
                          <span className="truncate">Low</span>
                        </button>
                      </td>
                      <td className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-600 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-medium leading-normal w-full"
                        >
                          <span className="truncate">Open</span>
                        </button>
                      </td>
                    </tr>
                    <tr className="border-t border-t-[#dce0e5]">
                      <td className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-120 h-[72px] px-4 py-2 w-[400px] text-[#111418] text-sm font-normal leading-normal">
                        Ethan Martin
                      </td>
                      <td className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-240 h-[72px] px-4 py-2 w-[400px] text-[#637588] text-sm font-normal leading-normal">
                        ethan.martin@mail.com
                      </td>
                      <td className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-360 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-medium leading-normal w-full"
                        >
                          <span className="truncate">Direct Mail</span>
                        </button>
                      </td>
                      <td className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-480 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-medium leading-normal w-full"
                        >
                          <span className="truncate">High</span>
                        </button>
                      </td>
                      <td className="table-1a64bc95-4b42-4edc-8ce8-59588841c66e-column-600 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-medium leading-normal w-full"
                        >
                          <span className="truncate">Closed</span>
                        </button>
                      </td>
                    </tr>
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

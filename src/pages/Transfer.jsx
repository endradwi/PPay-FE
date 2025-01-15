import Send from "../assets/Send.svg";
import search from "../assets/Search.svg";
import arcane from "../assets/arcane.jpg";
import Star from "../assets/Star.svg";

function Transfer() {
  return (
    <div>
      <div className="flex flex-col gap-y-4">
        <div className="hidden md:flex flex-row gap-4 items-center">
          <img src={Send} alt="" className="h-6 w-6" />
          <div className="text-base font-semibold">Transfer Money</div>
        </div>
        <div className="hidden md:flex flex-row gap-3 items-center">
          <div>
            <div className="flex flex-row gap-2 h-11 w-36 items-center">
              <div className="bg-primary h-6 w-6 rounded-full flex items-center justify-center">
                <div className="text-xs text-neutral">1</div>
              </div>
              <div>
                <div className="text-primary">Find People</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <hr className="w-20 h-px bg-black border-dashed" />
          </div>
          <div>
            <div className="flex flex-row gap-2 h-11 w-36 items-center">
              <div className="bg-info h-6 w-6 rounded-full flex items-center justify-center">
                <div className="text-xs text-neutral">2</div>
              </div>
              <div>
                <div className="text-info">Set Nominal</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <hr className="w-20 h-px bg-black border-dashed" />
          </div>
          <div>
            <div className="flex flex-row gap-2 h-11 w-36 items-center">
              <div className="bg-info h-6 w-6 rounded-full flex items-center justify-center">
                <div className="text-xs text-neutral">3</div>
              </div>
              <div>
                <div className="text-info">Finish</div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:border h-[720px] w-[1061px]">
          <div className="px-8 py-6">
            <div>
              <div className="flex flex-col md:flex-row justify-center items-start md:justify-between">
                <div>
                  <div className="text-secondary font-semibold">
                    Find People
                  </div>
                  <div className="hidden md:flex text-info font-medium text-xs">
                    8 Results Found For Ghaluh
                  </div>
                </div>
                <div>
                  <div className="h-10 w-[340px] border flex justify-between items-center px-3">
                    <input
                      type="text"
                      placeholder="Enter Number Or Full Name"
                      className="h-5 w-[294px] text-start"
                    />
                    <img src={search} alt="" className="ml-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-8">
            <table className="border-collapse md:border border-gray-300">
              <tbody>
                <tr className="odd:bg-gray-100 even:bg-white px-8">
                  <td className="max-w-fit md:w-[1003px]">
                    <div className="flex flex-row justify-between items-center">
                      <div className="w-[69px] h-16 md:w-60 md:h-16 flex justify-center items-center">
                        <img
                          src={arcane}
                          alt=""
                          className="h-12 w-12 rounded-md"
                        />
                      </div>
                      <div className="flex flex-col w-[188px] h-[72px] md:w-[435px] md:[h-75px] md:flex-row items-center">
                        <div className="px-4 py-2 text-center md:w-[435px] md:[h-75px] justify-center">
                          Arcane
                        </div>
                        <div className="md:w-[243px] md:h-[72px] flex items-center">
                          <div className="px-4 py-2">(239) 555-0108</div>
                        </div>
                      </div>
                      <div className="px-4 py-2 w-[78px] md:w-[77px] md:h-[72px] flex items-center">
                        <img src={Star} alt="" />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="odd:bg-gray-100 even:bg-white px-8">
                  <td className="max-w-fit md:w-[1003px]">
                    <div className="flex flex-row justify-between items-center">
                      <div className="w-[69px] h-16 md:w-60 md:h-16 flex justify-center items-center">
                        <img
                          src={arcane}
                          alt=""
                          className="h-12 w-12 rounded-md"
                        />
                      </div>
                      <div className="flex flex-col w-[188px] h-[72px] md:w-[435px] md:[h-75px] md:flex-row items-center">
                        <div className="px-4 py-2 text-center md:w-[435px] md:[h-75px] justify-center">
                          Arcane
                        </div>
                        <div className="md:w-[243px] md:h-[72px] flex items-center">
                          <div className="px-4 py-2">(239) 555-0108</div>
                        </div>
                      </div>
                      <div className="px-4 py-2 w-[78px] md:w-[77px] md:h-[72px] flex items-center">
                        <img src={Star} alt="" />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="odd:bg-gray-100 even:bg-white px-8">
                  <td className="max-w-fit md:w-[1003px]">
                    <div className="flex flex-row justify-between items-center">
                      <div className="w-[69px] h-16 md:w-60 md:h-16 flex justify-center items-center">
                        <img
                          src={arcane}
                          alt=""
                          className="h-12 w-12 rounded-md"
                        />
                      </div>
                      <div className="flex flex-col w-[188px] h-[72px] md:w-[435px] md:[h-75px] md:flex-row items-center">
                        <div className="px-4 py-2 text-center md:w-[435px] md:[h-75px] justify-center">
                          Arcane
                        </div>
                        <div className="md:w-[243px] md:h-[72px] flex items-center">
                          <div className="px-4 py-2">(239) 555-0108</div>
                        </div>
                      </div>
                      <div className="px-4 py-2 w-[78px] md:w-[77px] md:h-[72px] flex items-center">
                        <img src={Star} alt="" />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="odd:bg-gray-100 even:bg-white px-8">
                  <td className="max-w-fit md:w-[1003px]">
                    <div className="flex flex-row justify-between items-center">
                      <div className="w-[69px] h-16 md:w-60 md:h-16 flex justify-center items-center">
                        <img
                          src={arcane}
                          alt=""
                          className="h-12 w-12 rounded-md"
                        />
                      </div>
                      <div className="flex flex-col w-[188px] h-[72px] md:w-[435px] md:[h-75px] md:flex-row items-center">
                        <div className="px-4 py-2 text-center md:w-[435px] md:[h-75px] justify-center">
                          Arcane
                        </div>
                        <div className="md:w-[243px] md:h-[72px] flex items-center">
                          <div className="px-4 py-2">(239) 555-0108</div>
                        </div>
                      </div>
                      <div className="px-4 py-2 w-[78px] md:w-[77px] md:h-[72px] flex items-center">
                        <img src={Star} alt="" />
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transfer;

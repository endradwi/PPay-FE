import { useState } from "react";
import search from "../assets/icons/Search.svg";
import { Link } from "react-router-dom";
import NavbarDashboard from "../components/NavbarDashboard";
import Sidebar from "../components/Sidebar";
import { GrSend } from "react-icons/gr";
import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { useEffect } from 'react';
import { API_URL } from "../config/api-config";

function Transfer() {
  const [isShow, setShow] = useState(false)

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/users`)
      .then((response) => {
        return response.json(); 
      })
      .then((data) => {
          setUsers(data.data);
      })
  }, []);
  
    
  const table = (value, index) => {
    return (
        <tr className="odd:bg-gray-100 even:bg-white px-8" key={`list-fullname-${value.fullname}-${index}`}>
          <td className="max-w-fit md:w-[1003px]">
            <div className="flex flex-row justify-between items-center">
              <div className="w-[69px] h-16 md:w-60 md:h-16 flex justify-center items-center">
                <Link to="/detail-transfer">
                  <img
                    src={`${API_URL}/users/public/images/${value.image}`}
                    alt=""
                    className="h-12 w-12 rounded-md"
                  />
                </Link>
              </div>
              <div className="flex flex-col w-[188px] h-[72px] md:w-[435px] md:[h-75px] md:flex-row items-center">
                <div className="px-4 py-2 text-center md:w-[435px] md:[h-75px] justify-center">
                {value.fullname}
                </div>
                <div className="md:w-[243px] md:h-[72px] flex items-center">
                  <div className="px-4 py-2">
                  {value.phone}
                  </div>
                </div>
              </div>
              <div onClick={()=>setShow(!isShow)} className="px-4 py-2 w-[78px] md:w-[77px] md:h-[72px] flex items-center">
                {isShow && 
                  <FaStar className="w-6 h-6 cursor-pointer text-yellow-400"/>
                }
                {!isShow && 
                  <FaRegStar className="w-6 h-6 cursor-pointer text-info"/>
                }
              </div>
            </div>
          </td>
        </tr>
        
    )
   }
  return (
    <div>
      <div className="w-full flex flex-col box-border h-fit-content">
        <NavbarDashboard page={"Transfer"} />
        <div className="flex box-border">
          <Sidebar page={"transfer"} side={"sidebar"}/>
          {/* <button className="w-full h-1 bg-black">sfsdf</button> */}
          
          <div className="md:px-9 md:py-4 flex flex-col gap-4 w-full h-[746px] md:border-2 md:border-abuMuda">
              <div className="hidden md:flex flex-row gap-4 items-center">
                <Link to="/transfer-detail">
                <GrSend className="w-5 h-5 text-primary"/>
                </Link>
                <div className="hidden md:block text-base font-semibold">Transfer Money</div>
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
              <div className="md:border h-[720px] w-full">
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
                              className="h-5 md:w-[294px] text-start"
                            />
                            <img src={search} alt="" className="ml-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-8">
                    <table className="border-collapse md:border w-full border-gray-300">
                      <tbody>
                        {users.map(table)}
                      </tbody>
                    </table>
                  </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transfer;

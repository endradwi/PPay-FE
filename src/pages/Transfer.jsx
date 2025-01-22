import { useState } from "react";
import search from "../assets/icons/Search.svg";
import { useNavigate } from "react-router-dom";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import NavbarDashboard from "../components/NavbarDashboard";
import Sidebar from "../components/Sidebar";
import { GrSend } from "react-icons/gr";
import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { useEffect } from "react";
import { API_URL } from "../config/api-config";
import { profileAtom } from "../jotai/data.js";
import { useAtom } from "jotai";
import avatar from "../assets/images/avatar-white.svg";
import { useForm } from "react-hook-form";

const Transfer = () => {
  const [isShow, setShow] = useState(false);
  const [profile, setProfile] = useAtom(profileAtom);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm();
  const [info, setInfo] = useState({});
  const [searchInput, setSearchInput] = useState({});
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [val, setVal] = useState(false);
  const [enter, setEnter] = useState(false);

  // Fetch data function
  const fetchData = (search) => {
    const url = new URL(`${API_URL}/users`);
    const params = new URLSearchParams();
    if (search) {
      url.searchParams.append("search", search);
      params.set("search", search);
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.data);
        setInfo(data.pageInfo);
        setSearchParams(params);
      });
  };

  useEffect(() => {
    if (
      profile?.fullname === "" ||
      profile?.phone === null ||
      profile?.phone === ""
    ) {
      setVal(!val);
      // navigate("/profile");
      return;
    }

    // Fetching data initially or whenever searchParams change
    const search = searchParams.get("search") || "";
    fetchData(search);
  }, [profile, searchParams]); // Fetch whenever profile or searchParams changes

  const searchData = (q) => {
    setSearchInput(q);
    fetchData(q.search);
  };

  const table = (value, index) => {
    return (
      <tr
        className="odd:bg-gray-100 flex w-full even:bg-white px-8"
        key={`list-fullname-${value.id}-${index}`}
      >
        <td className="w-full">
          <div className="flex px-2 md:px-24 flex-row w-full justify-between items-center">
            <div className="h-16 flex justify-center items-center">
              <Link
                className="w-12 h-12 rounded-lg shadow-md flex justify-center items-center overflow-hidden"
                to={`/users/transfer/${value.id}`}
              >
                <img
                  src={
                    value?.image === null
                      ? avatar
                      : `${API_URL}/${value?.image}`
                  }
                  alt=""
                  className="w-full rounded-md"
                />
              </Link>
            </div>
            <div className="flex md:block text-left md:text-center flex-row">
              <div>
                {value?.fullname === "" ? value?.email : value?.fullname}
                <div className="block md:hidden">{value.phone}</div>
              </div>
            </div>
            <div className="hidden md:block md:text-center">
              <div>{value.phone}</div>
            </div>
            <div
              onClick={() => setShow(!isShow)}
              className="px-4 py-2 w-[78px] md:w-[77px] md:h-[72px] flex items-center"
            >
              {isShow ? (
                <FaStar className="w-6 h-6 cursor-pointer text-yellow-400" />
              ) : (
                <FaRegStar className="w-6 h-6 cursor-pointer text-info" />
              )}
            </div>
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div>
      <div className="w-full flex flex-col box-border h-fit-content">
        <NavbarDashboard page={"Transfer"} />
        <div className="flex box-border">
          <Sidebar page={"transfer"} side={"sidebar"} />
          {val && (
            <div
              role="alert"
              className="alert absolute w-[35rem] left-96 ml-32 top-24"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="stroke-info h-6 w-6 shrink-0"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>Please enter your complete biodata first</span>
              <span className="btn btn-primary border border-info rounded-lg py-2 px-5  text-neutral">
                <Link to="/profile">
                  <button>Profile</button>
                </Link>
              </span>
            </div>
          )}
          <div className="md:px-8 md:py-14 flex flex-col gap-4 w-full h-[746px] md:border-2 md:border-abuMuda">
            <div className="hidden md:flex flex-row gap-4 items-center">
              <Link to="/transfer-detail">
                <GrSend className="w-5 h-5 text-primary" />
              </Link>
              <div className="hidden md:block text-base font-semibold">
                Transfer Money
              </div>
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
                        {info.totalData} Results Found For{" "}
                        {searchInput.search || ""}
                      </div>
                    </div>
                    <div>
                      <form
                        onSubmit={handleSubmit(searchData)}
                        className="h-10 w-[340px] border flex justify-between items-center px-3"
                      >
                        <input
                          type="text"
                          placeholder="Enter Number Or Full Name"
                          className="h-5 md:w-[294px] text-start"
                          {...register("search")}
                        />
                        <button className="hidden">submit</button>
                        <img src={search} alt="" className="ml-2" />
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-8">
                <table className="border-collapse md:border w-full border-gray-300">
                  <tbody>
                    {users
                      .filter((value) => profile?.id !== value.id)
                      .map(table)}
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

export default Transfer;

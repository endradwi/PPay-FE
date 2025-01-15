import responseFail from "../assets/icons/responseFail.svg";

function PinFail() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 shadow-lg">
        <div className="font-semibold">Transfer to Arcane</div>
        <div className="h-[510px] w-[556px] border">
          <div className="w-[556px] h-[377px] flex flex-col gap-3">
            <div className="flex justify-center">
              <img src={responseFail} alt="" className="w-[270px] h-[270px] " />
            </div>
            <div className="flex justify-center">
              <div className="text-2xl font-semibold">
                Ooops Transfer <span className="text-error">Failed</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div>
                Sorry Theres is an issue for your transfer, try again later !
              </div>
            </div>
            <div>
              <div>
                <button className="w-[556px] h-[50px] bg-primary rounded-md text-white">
                  Try Again
                </button>
              </div>
            </div>
            <div>
              <div>
                <button className="w-[556px] h-[50px] bg-neutral rounded-md text-primary border-2">
                  Back to Dashboard
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PinFail;

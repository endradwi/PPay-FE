import { useState } from "react";
import arcane from "../assets/arcane.jpg";
import Star from "../assets/Star.svg";
import verified from "../assets/verified.svg";
import money from "../assets/u_money-bill.svg";

function PopupPin() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Button to Open Popup */}
      <button className="btn btn-primary" onClick={togglePopup}>
        Open Popup
      </button>

      {/* Popup with Darkened Background */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex flex-col gap-y-4">
              {/* Header */}
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Transfer Money</h2>
                <button
                  className="text-gray-500 hover:text-gray-800"
                  onClick={togglePopup}
                >
                  ✕
                </button>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-y-6">
                <div>
                  <h3 className="font-semibold">People Information</h3>
                  <div className="bg-gray-200 rounded-md p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img
                        src={arcane}
                        alt="User"
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <div>Arcane</div>
                        <div>(239) 555-0108</div>
                        <div className="flex items-center gap-2 text-primary">
                          <img src={verified} alt="Verified" />
                          Verified
                        </div>
                      </div>
                    </div>
                    <img src={Star} alt="Favorite" />
                  </div>
                </div>

                {/* Amount Input */}
                <div>
                  <h3>Amount</h3>
                  <p>Type the amount you want to transfer:</p>
                  <div className="border rounded-md p-2 flex items-center gap-2">
                    <img src={money} alt="Money" />
                    <input
                      type="text"
                      placeholder="Enter amount"
                      className="outline-none w-full"
                    />
                  </div>
                </div>

                {/* Notes Input */}
                <div>
                  <h3>Notes</h3>
                  <p>Add some notes for this transfer:</p>
                  <textarea
                    className="w-full h-24 border rounded-md p-2"
                    placeholder="Enter some notes"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  className="w-full bg-primary text-white py-2 rounded-md"
                  onClick={togglePopup}
                >
                  Submit & Transfer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PopupPin;

import React, { useState } from "react";
import { MoreVertical, Trash2, ShieldAlert } from "lucide-react";

function IncomeItem({ budget, onDelete }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);

  // Step 1: User clicks 'Delete' in the dropdown
  const handleInitialDelete = (e) => {
    e.stopPropagation();
    setIsMenuOpen(false); // Close the menu
    setIsConfirmingDelete(true); // Show the confirmation view
  };

  // Step 2: User clicks 'Confirm'
  const handleConfirmDelete = (e) => {
    e.stopPropagation();
    onDelete(budget.id);
    // The component will unmount, so no need to reset state
  };

  // Step 2b: User clicks 'Cancel'
  const handleCancelDelete = (e) => {
    e.stopPropagation();
    setIsConfirmingDelete(false); // Go back to the normal view
  };

  // Toggles the three-dot menu
  const handleMenuToggle = (e) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className="p-5 border rounded-2xl hover:shadow-md cursor-pointer h-[170px] relative transition-all duration-300 flex items-center justify-center"
      // Change background color when confirming for better focus
      style={{ backgroundColor: isConfirmingDelete ? '#fffbeb' : 'white' }}
    >
      {isConfirmingDelete ? (
        // --- CONFIRMATION VIEW ---
        <div className="text-center flex flex-col items-center gap-4 animate-fadeIn">
          <ShieldAlert className="w-10 h-10 text-amber-500" />
          <h3 className="font-bold text-gray-800">Are you sure?</h3>
          <div className="flex gap-3">
            <button
              onClick={handleCancelDelete}
              className="px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-lg"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirmDelete}
              className="px-4 py-2 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg"
            >
              Confirm Delete
            </button>
          </div>
        </div>
      ) : (
        // --- DEFAULT VIEW ---
        <div className="w-full animate-fadeIn">
          <div className="absolute top-4 right-4">
            <button
              onClick={handleMenuToggle}
              className="p-1 rounded-full hover:bg-slate-100"
              aria-label="Open options menu"
            >
              <MoreVertical size={20} className="text-gray-600" />
            </button>

            {isMenuOpen && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setIsMenuOpen(false)}
                ></div>
                <div className="absolute top-full right-0 mt-2 w-40 bg-white shadow-xl rounded-lg p-2 z-20 ring-1 ring-black ring-opacity-5">
                  <button
                    onClick={handleInitialDelete}
                    className="w-full flex items-center gap-3 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md"
                  >
                    <Trash2 size={16} />
                    <span>Delete Income</span>
                  </button>
                </div>
              </>
            )}
          </div>

          <div className="flex gap-2 items-center justify-between">
            <div className="flex gap-2 items-center">
              <h2 className="text-2xl p-3 px-4 bg-slate-100 rounded-full">
                {budget?.icon}
              </h2>
              <div>
                <h2 className="font-bold">{budget.name}</h2>
                <h2 className="text-sm text-gray-500">{budget.totalItem} Item</h2>
              </div>
            </div>
            <h2 className="font-bold text-primary text-lg">Rs.{budget.amount}</h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default IncomeItem;
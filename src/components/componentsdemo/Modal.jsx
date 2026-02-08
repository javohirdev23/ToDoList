import React, { useState } from "react";

export default function Modal(props) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className="btn border p-2 bg-gray-600 text-white"
      >
        Delete
      </button>

      {showModal && (
        <div className="fixed bg-black/50 min-h-screen z-50 w-screen flex justify-center items-center top-0 left-0 right-0 bottom-0">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4">
            <h2 className="text-xl font-bold mb-4 text-gray-800">
              Delete Confirmation
            </h2>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this item?
            </p>

            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Delete logic here
                  setShowModal(false);
                }}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

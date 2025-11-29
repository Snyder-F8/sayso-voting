import { useState } from "react";
import { api } from "../api/api";
import { useNavigate } from "react-router-dom";

export default function CreatePolicy() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    createdBy: "",
  });

  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setForm({
      title: "",
      description: "",
      createdBy: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.createPolicy({
        ...form,
        createdAt: new Date().toISOString(),
      });

      // Show toast
      setShowToast(true);

      // Hide toast after 1.5 seconds and redirect to policies
      setTimeout(() => {
        setShowToast(false);
        navigate("/policies");
      }, 1500);

      // Reset form
      handleReset();
    } catch (err) {
      console.error("Error creating policy:", err);
    }
  };

  const isFormValid =
    form.title.trim() !== "" &&
    form.description.trim() !== "" &&
    form.createdBy.trim() !== "";

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center pt-28 px-6 relative">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-6 right-6 bg-green-600 text-white px-5 py-3 rounded-xl shadow-lg animate-pulse">
          Policy created successfully!
        </div>
      )}

      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Create New Policy</h1>

        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          {/* Title */}
          <div>
            <label className="block font-medium mb-1">Policy Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter policy title"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows="5"
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter policy description"
            />
          </div>

          {/* Created By */}
          <div>
            <label className="block font-medium mb-1">Created By</label>
            <input
              type="text"
              name="createdBy"
              value={form.createdBy}
              onChange={handleChange}
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your name"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-4">
            {/* Submit */}
            <button
              type="submit"
              disabled={!isFormValid}
              className={`py-3 px-6 rounded-xl text-white font-medium transition
                ${isFormValid
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-blue-300 cursor-not-allowed"}`}
            >
              Submit Policy
            </button>

            {/* Reset */}
            <button
              type="button"
              onClick={handleReset}
              className="bg-gray-500 text-white py-3 px-6 rounded-xl font-medium hover:bg-gray-600 transition"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

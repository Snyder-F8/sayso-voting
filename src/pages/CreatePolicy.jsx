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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await api.createPolicy({
      ...form,
      createdAt: new Date().toISOString(),
    });

    navigate("/policies");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center pt-28 px-6">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6">Create New Policy</h1>

        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          {/* Title */}
          <div>
            <label className="block font-medium mb-1">Policy Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full p-3 border rounded-xl"
              required
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
              className="w-full p-3 border rounded-xl"
              required
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
              className="w-full p-3 border rounded-xl"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Submit Policy
          </button>
        </form>
      </div>
    </div>
  );
}

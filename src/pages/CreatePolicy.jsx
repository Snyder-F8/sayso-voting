// src/pages/CreatePolicy.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/api";
import "../styles/CreatePolicy.css";

export default function CreatePolicy() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();

  const resetForm = () => {
    setTitle("");
    setDescription("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!title.trim() || !description.trim()) {
      alert("Please provide both title and description.");
      return;
    }

    const newPolicy = {
      title: title.trim(),
      description: description.trim(),
      createdBy: "Admin",
      createdAt: new Date().toISOString(),
    };

    try {
      setSaving(true);
      await api.createPolicy(newPolicy);
      resetForm();
      // After creation, navigate to policies list
      navigate("/policies");
    } catch (err) {
      console.error(err);
      alert("Could not create policy. Try again.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="create-policy container">
      <h2>Create New Policy</h2>

      <form className="create-form" onSubmit={handleSubmit}>
        <label>
          <span className="label-text">Policy Title</span>
          <input
            type="text"
            placeholder="Enter policy title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            maxLength={150}
            required
          />
        </label>

        <label>
          <span className="label-text">Description</span>
          <textarea
            placeholder="Describe the policy..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={6}
            required
          />
        </label>

        <div className="form-actions">
          <button type="submit" className="btn primary" disabled={saving}>
            {saving ? "Creating..." : "Create Policy"}
          </button>
          <button
            type="button"
            className="btn secondary"
            onClick={() => {
              setTitle("");
              setDescription("");
            }}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

import React from "react";
import { useNavigate } from "react-router-dom";

const PortFolioCard = ({ project, onEdit, onDelete }) => {
  const navigate = useNavigate();

  const imageUrl =
    typeof project.image === "string"
      ? project.image
      : project.image
      ? URL.createObjectURL(project.image)
      : "https://via.placeholder.com/400x200?text=No+Image";

  const handleCardClick = () => {
    if (project.title.toLowerCase() === "portfolio website") {
      navigate("/freelancer-dashboard");
    }
  };

  return (
    <div
      className="card"
      onClick={handleCardClick}
      style={{
        width: "300px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
        cursor: project.title.toLowerCase() === "portfolio website" ? "pointer" : "default",
      }}
    >
      <img
        src={imageUrl}
        alt={project.title}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
        }}
      />
      <div style={{ padding: "16px" }}>
        <h3 style={{ margin: "0 0 10px" }}>{project.title}</h3>
        <p>{project.desc}</p>
        <p>
          <strong>Date:</strong> {new Date(project.date).toLocaleDateString()}
        </p>
        {onEdit && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onEdit();
            }}
            style={{ marginRight: "10px", padding: "6px 12px", cursor: "pointer" }}
          >
            Edit
          </button>
        )}
        {onDelete && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            style={{
              padding: "6px 12px",
              backgroundColor: "red",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default PortFolioCard;

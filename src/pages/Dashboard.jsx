import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import PortfolioCard from '../Components/PortFolioCard';

const dummyProjects = [
  {
    title: "E-commerce Website",
    desc: "An online store built with React and Node.js.",
    image: "https://picsum.photos/300/200?random=1",
    date: "2025-04-01",
  },
  {
    title: "Portfolio Website",
    desc: "A clean portfolio layout for showcasing freelancer work.",
    image: "https://picsum.photos/300/200?random=77",
    date: "2025-03-15",
  },
  {
    title: "Blog Website",
    desc: "A simple blog platform built using React.",
    image: "https://picsum.photos/300/200?random=3",
    date: "2025-04-10",
  },
  {
    title: "Travel Guide App",
    desc: "A mobile-responsive web app for exploring travel destinations.",
    image: "https://picsum.photos/300/200?random=4",
    date: "2025-02-10",
  },
  {
    title: "Fitness Tracker",
    desc: "An app to track workouts and progress.",
    image: "https://picsum.photos/300/200?random=5",
    date: "2025-01-25",
  },
];

const Dashboard = () => {
  const [filter, setFilter] = useState('');
  const [sortOrder, setSortOrder] = useState('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  const filteredProjects = dummyProjects.filter((project) =>
    project.title.toLowerCase().includes(filter.toLowerCase()) ||
    project.desc.toLowerCase().includes(filter.toLowerCase())
  );

  const sortedProjects = filteredProjects.sort((a, b) => {
    return sortOrder === 'asc'
      ? new Date(a.date) - new Date(b.date)
      : new Date(b.date) - new Date(a.date);
  });

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = sortedProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(sortedProjects.length / projectsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: 'center', marginTop: '30px' }}>Your Projects</h1>

      <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
        <input
          type="text"
          placeholder="Search projects..."
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
            setCurrentPage(1);
          }}
          style={{ padding: '10px', fontSize: '16px', width: '300px' }}
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          style={{ padding: '10px', fontSize: '16px' }}
        >
          <option value="desc">Newest First</option>
          <option value="asc">Oldest First</option>
        </select>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '20px', gap: '20px' }}>
        {currentProjects.map((project, index) => (
          <PortfolioCard
            key={index}
            project={project}
            onEdit={() => alert(`Edit clicked for ${project.title}`)}
            onDelete={() => alert(`Delete clicked for ${project.title}`)}
          />
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', paddingBottom: '40px' }}>
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>Previous</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
};

export default Dashboard;

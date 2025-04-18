import React, { useState } from "react";
import { Card, CardContent, Button } from '@mui/material';

const freelancersData = [
  {
    id: 1,
    name: "Alice Johnson",
    title: "Full Stack Developer",
    skills: ["React", "Node.js", "MongoDB"],
    rating: 4.8,
    projects: 12,
  },
  {
    id: 2,
    name: "Mark Lee",
    title: "UI/UX Designer",
    skills: ["Figma", "Sketch", "Photoshop"],
    rating: 4.5,
    projects: 8,
  },
  {
    id: 3,
    name: "Sophie Adams",
    title: "Mobile App Developer",
    skills: ["Flutter", "Firebase", "Dart"],
    rating: 4.7,
    projects: 10,
  },
];

const FreelancerDashboard = () => {
  const [freelancers] = useState(freelancersData);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Freelancer Dashboard</h1>

      {/* Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="p-4">
            <p className="text-gray-500">Total Freelancers</p>
            <h2 className="text-xl font-bold">{freelancers.length}</h2>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-gray-500">Avg Rating</p>
            <h2 className="text-xl font-bold">
              {(
                freelancers.reduce((acc, f) => acc + f.rating, 0) / freelancers.length
              ).toFixed(1)}
            </h2>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-gray-500">Total Projects</p>
            <h2 className="text-xl font-bold">
              {freelancers.reduce((acc, f) => acc + f.projects, 0)}
            </h2>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-gray-500">Top Skill</p>
            <h2 className="text-xl font-bold">React</h2>
          </CardContent>
        </Card>
      </div>

      {/* Freelancers List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {freelancers.map((freelancer) => (
          <Card key={freelancer.id} className="rounded-2xl shadow-md">
            <CardContent className="p-5">
              <h3 className="text-xl font-semibold">{freelancer.name}</h3>
              <p className="text-gray-600">{freelancer.title}</p>
              <div className="mt-2">
                <p className="text-sm text-gray-500">Skills:</p>
                <div className="flex flex-wrap gap-1">
                  {freelancer.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-2 text-sm">
                ⭐ Rating: {freelancer.rating} / 5
              </div>
              <div className="text-sm">📁 Projects: {freelancer.projects}</div>
              <Button className="mt-4 w-full">View Profile</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FreelancerDashboard;

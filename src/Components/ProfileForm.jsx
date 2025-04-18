import React, { useState } from 'react';
import '../ProfileForm.css';

const ProfileForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    bio: '',
    skills: '',
    avatar: null,
  });

  const [skillsArray, setSkillsArray] = useState([]);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'avatar') {
      setForm({ ...form, avatar: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSkillAdd = () => {
    if (form.skills.trim() && !skillsArray.includes(form.skills.trim())) {
      setSkillsArray([...skillsArray, form.skills.trim()]);
      setForm({ ...form, skills: '' }); // Reset skills input field
    }
  };

  const handleSkillRemove = (skill) => {
    setSkillsArray(skillsArray.filter(s => s !== skill));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple Validation
    if (!form.name || !form.email || !form.bio) {
      setError('Please fill in all the required fields.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    console.log(form, skillsArray); // Mock save logic, replace with actual API call
    alert("Profile updated!");

    // Reset form after submission
    setForm({
      name: '',
      email: '',
      bio: '',
      skills: '',
      avatar: null,
    });
    setSkillsArray([]);
  };

  return (
    <div className="profile-form-container">
      <form className="profile-form" onSubmit={handleSubmit}>
        <h2>Edit Profile</h2>

        {/* Profile Picture */}
        <div className="avatar-container">
          {form.avatar && <img src={URL.createObjectURL(form.avatar)} alt="avatar" className="avatar" />}
          <input
            type="file"
            name="avatar"
            accept="image/*"
            onChange={handleChange}
          />
        </div>

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
        />

        {/* Bio */}
        <textarea
          name="bio"
          placeholder="Short Bio"
          value={form.bio}
          onChange={handleChange}
        />

        {/* Skills */}
        <div className="skills-container">
          <input
            type="text"
            name="skills"
            placeholder="Add a skill"
            value={form.skills}
            onChange={handleChange}
          />
          <button type="button" onClick={handleSkillAdd}>Add Skill</button>
        </div>
        
        <div className="skills-list">
          {skillsArray.map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill} <button type="button" onClick={() => handleSkillRemove(skill)}>x</button>
            </span>
          ))}
        </div>

        {error && <p className="error">{error}</p>}

        <button type="submit">Save Changes</button>
      </form>

      {/* Profile Preview */}
      <div className="profile-preview">
        <h3>Profile Preview:</h3>
        <div className="preview-avatar">
          {form.avatar ? (
            <img src={URL.createObjectURL(form.avatar)} alt="Avatar Preview" />
          ) : (
            <div className="default-avatar">No Avatar</div>
          )}
        </div>
        <p><strong>Name:</strong> {form.name || "No Name"}</p>
        <p><strong>Email:</strong> {form.email || "No Email"}</p>
        <p><strong>Bio:</strong> {form.bio || "No Bio"}</p>
        <p><strong>Skills:</strong> {skillsArray.length ? skillsArray.join(', ') : "No Skills Added"}</p>
      </div>
    </div>
  );
};

export default ProfileForm;

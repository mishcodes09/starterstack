import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Marketplace = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Parse URL parameters for detailed view
  const params = new URLSearchParams(location.search);
  const opportunityParam = params.get("opportunity");
  const selectedOpportunity = opportunityParam
    ? JSON.parse(decodeURIComponent(opportunityParam))
    : null;

  // Expanded opportunities data
  const allOpportunities = [
    {
      id: 1,
      type: "Internship",
      title: "Software Engineering Intern",
      company: "TechInnovate",
      location: "Remote",
      skills: ["Python", "Django", "React", "PostgreSQL"],
      duration: "3 months",
      stipend: "$2.5k/mo",
      description:
        "Work on cutting-edge web applications and learn from senior engineers.",
      postedDate: "2 days ago",
      applicants: 45,
    },
    {
      id: 2,
      type: "Junior Role",
      title: "Junior Frontend Developer",
      company: "DigitalCraft",
      location: "New York, NY",
      skills: ["JavaScript", "Vue.js", "CSS", "TypeScript"],
      salary: "$65k-$80k",
      description: "Build responsive user interfaces for enterprise clients.",
      postedDate: "1 week ago",
      applicants: 32,
    },
    {
      id: 3,
      type: "Project",
      title: "E-commerce Platform Build",
      company: "ShopLocal",
      location: "Remote",
      skills: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      duration: "6 weeks",
      paid: true,
      budget: "$5,000",
      description:
        "Develop a full-featured e-commerce platform for local businesses.",
      postedDate: "3 days ago",
      applicants: 28,
    },
    {
      id: 4,
      type: "Internship",
      title: "DevOps Engineering Intern",
      company: "CloudScale",
      location: "San Francisco, CA",
      skills: ["AWS", "Docker", "Kubernetes", "Terraform"],
      duration: "4 months",
      stipend: "$3k/mo",
      description:
        "Assist in managing cloud infrastructure and CI/CD pipelines.",
      postedDate: "5 days ago",
      applicants: 38,
    },
    {
      id: 5,
      type: "Junior Role",
      title: "Backend Developer",
      company: "DataFlow Inc",
      location: "Remote",
      skills: ["Node.js", "GraphQL", "MongoDB", "Redis"],
      salary: "$70k-$85k",
      description: "Build scalable APIs and microservices for data processing.",
      postedDate: "1 day ago",
      applicants: 51,
    },
    {
      id: 6,
      type: "Project",
      title: "Mobile App Development",
      company: "HealthTech Startup",
      location: "Remote",
      skills: ["React Native", "Firebase", "Redux", "iOS"],
      duration: "8 weeks",
      paid: true,
      budget: "$7,000",
      description: "Create a fitness tracking app with social features.",
      postedDate: "4 days ago",
      applicants: 22,
    },
    {
      id: 7,
      type: "Internship",
      title: "Data Science Intern",
      company: "AnalyticsPro",
      location: "Boston, MA",
      skills: ["Python", "Pandas", "Scikit-learn", "SQL"],
      duration: "3 months",
      stipend: "$2.8k/mo",
      description: "Analyze large datasets and build predictive models.",
      postedDate: "1 week ago",
      applicants: 41,
    },
    {
      id: 8,
      type: "Junior Role",
      title: "UX/UI Designer",
      company: "DesignStudio",
      location: "Austin, TX",
      skills: ["Figma", "Sketch", "Adobe XD", "Prototyping"],
      salary: "$60k-$75k",
      description: "Design intuitive user experiences for web and mobile apps.",
      postedDate: "2 days ago",
      applicants: 29,
    },
    {
      id: 9,
      type: "Project",
      title: "AI Chatbot Development",
      company: "AI Solutions Ltd",
      location: "Remote",
      skills: ["Python", "TensorFlow", "NLP", "FastAPI"],
      duration: "10 weeks",
      paid: true,
      budget: "$8,500",
      description:
        "Build an intelligent chatbot for customer service automation.",
      postedDate: "1 day ago",
      applicants: 18,
    },
  ];

  const filters = [
    { id: "all", label: "All Opportunities" },
    { id: "internship", label: "Internships" },
    { id: "junior", label: "Junior Roles" },
    { id: "project", label: "Projects" },
    { id: "remote", label: "Remote" },
  ];

  // Filter opportunities based on active filter and search
  const filteredOpportunities = allOpportunities.filter((opp) => {
    const matchesFilter =
      activeFilter === "all" ||
      (activeFilter === "internship" && opp.type === "Internship") ||
      (activeFilter === "junior" && opp.type === "Junior Role") ||
      (activeFilter === "project" && opp.type === "Project") ||
      (activeFilter === "remote" &&
        opp.location.toLowerCase().includes("remote"));

    const matchesSearch =
      searchQuery === "" ||
      opp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opp.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opp.skills.some((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesFilter && matchesSearch;
  });

  const handleApply = (opportunityId) => {
    // For now, just show an alert
    alert(`Applying for opportunity #${opportunityId}`);
    // In a real app, you would navigate to an application form
    // navigate(`/apply/${opportunityId}`);
  };

  const handleBackToDashboard = () => {
    navigate("/dashboard");
  };

  if (selectedOpportunity) {
    return (
      <div className="marketplace detail-view">
        <div className="container">
          <button
            className="btn btn-text"
            onClick={() => navigate("/marketplace")}
          >
            ← Back to Marketplace
          </button>

          <div className="opportunity-detail">
            <div className="detail-header">
              <div className="opp-header">
                <div className="opp-type">{selectedOpportunity.type}</div>
              </div>
              <h1 className="detail-title">{selectedOpportunity.title}</h1>
              <div className="detail-company">
                <h2>{selectedOpportunity.company}</h2>
                <span className="location">{selectedOpportunity.location}</span>
              </div>
            </div>

            <div className="detail-content">
              <div className="detail-main">
                <h3>About this opportunity</h3>
                <p>
                  This is a detailed description of the opportunity. In a real
                  app, this would come from the backend with complete
                  information about the role, responsibilities, requirements,
                  and application process.
                </p>

                <h3>Requirements</h3>
                <ul>
                  <li>
                    Strong understanding of{" "}
                    {selectedOpportunity.skills.join(", ")}
                  </li>
                  <li>
                    Portfolio or GitHub profile showcasing relevant projects
                  </li>
                  <li>Excellent problem-solving skills</li>
                  <li>Good communication and teamwork abilities</li>
                </ul>
              </div>

              <div className="detail-sidebar">
                <div className="apply-card">
                  <h3>Apply Now</h3>
                  <div className="apply-info">
                    {selectedOpportunity.stipend && (
                      <p>
                        <strong>Stipend:</strong> {selectedOpportunity.stipend}
                      </p>
                    )}
                    {selectedOpportunity.salary && (
                      <p>
                        <strong>Salary:</strong> {selectedOpportunity.salary}
                      </p>
                    )}
                    {selectedOpportunity.duration && (
                      <p>
                        <strong>Duration:</strong>{" "}
                        {selectedOpportunity.duration}
                      </p>
                    )}
                    {selectedOpportunity.budget && (
                      <p>
                        <strong>Project Budget:</strong>{" "}
                        {selectedOpportunity.budget}
                      </p>
                    )}
                  </div>
                  <button
                    className="btn btn-primary btn-full"
                    onClick={() => handleApply(selectedOpportunity.id)}
                  >
                    Apply Now
                  </button>
                  <p className="apply-note">
                    Apply within 24 hours for priority consideration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="marketplace">
      <div className="container">
        <div className="marketplace-header">
          <div className="header-content">
            <h1>Opportunities Marketplace</h1>
            <p>
              Browse internships, junior roles, and real-world projects to
              launch your tech career
            </p>

            <div className="search-bar">
              <input
                type="text"
                placeholder="Search by title, company, or skill..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <button className="btn btn-primary">Search</button>
            </div>
          </div>
        </div>

        <div className="marketplace-filters">
          <div className="filter-buttons">
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`filter-btn ${
                  activeFilter === filter.id ? "active" : ""
                }`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="filter-actions">
            <button className="btn btn-text" onClick={() => setSearchQuery("")}>
              Clear Filters
            </button>
          </div>
        </div>

        <div className="opportunities-grid">
          {filteredOpportunities.map((opp) => (
            <div key={opp.id} className="opportunity-card">
              <div className="opp-header">
                <div className="opp-type">{opp.type}</div>
                <span className="posted-date">{opp.postedDate}</span>
              </div>
              <h3 className="opp-title">{opp.title}</h3>
              <div className="opp-company">
                <span className="company-name">{opp.company}</span>
                <span className="location">{opp.location}</span>
              </div>
              <p className="opp-description">{opp.description}</p>
              <div className="opp-skills">
                {opp.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="opp-meta">
                <span className="applicants">{opp.applicants} applicants</span>
                {opp.stipend && <span>{opp.stipend}</span>}
                {opp.salary && <span>{opp.salary}</span>}
                {opp.duration && <span>{opp.duration}</span>}
                {opp.budget && <span>{opp.budget}</span>}
              </div>
              <div className="opp-actions">
                <button
                  className="btn btn-outline"
                  onClick={() =>
                    navigate(
                      `/marketplace?opportunity=${encodeURIComponent(
                        JSON.stringify(opp)
                      )}`
                    )
                  }
                >
                  View
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => handleApply(opp.id)}
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredOpportunities.length === 0 && (
          <div className="no-results">
            <h3>No opportunities found</h3>
            <p>Try adjusting your search or filters</p>
            <button
              className="btn btn-primary"
              onClick={() => {
                setSearchQuery("");
                setActiveFilter("all");
              }}
            >
              Clear All Filters
            </button>
          </div>
        )}

        <div className="marketplace-footer">
          <p>
            Found {filteredOpportunities.length} opportunities • New
            opportunities added daily
          </p>
          <button className="btn btn-text">Subscribe to Notifications</button>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;

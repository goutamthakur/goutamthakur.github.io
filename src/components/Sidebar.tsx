import { ExternalLink } from "lucide-react";

const links = [
  { label: "LinkedIn", href: "https://linkedin.com/in/goutamthakur" },
  { label: "X (Twitter)", href: "https://x.com/goutamtkr" },
  { label: "Resume", href: "https://drive.google.com/file/d/1WfUUIxMywb_gvmoMg2Ia-G_f5DP5nuzb/view?usp=sharing" },
];

const Sidebar = () => {
  return (
    <aside className="flex flex-col m-2 md:m-4 gap-2 md:gap-3 md:w-1/5">
      <div className="card">
        <h1 className="card-h2">Goutam Thakur</h1>
        <p className="card-desc">
          Software developer with 1.4 years of experience working with React,
          React Native, Node.js, Express, Sequelize, PostgreSQL, Spring Boot...
        </p>
      </div>

      <div className="card">
        <h1 className="card-h2">About me</h1>
        <p className="card-desc">Passion, hobbies...</p>
      </div>

      <div className="card">
        <h1 className="card-h2">Experience</h1>
        <p className="card-desc">Past work experience...</p>
      </div>

      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="card flex justify-between items-center"
        >
          <p>{link.label}</p>
          <ExternalLink size="20" />
        </a>
      ))}
    </aside>
  );
};

export default Sidebar;

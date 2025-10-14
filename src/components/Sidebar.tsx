import { ExternalLink } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="flex flex-col m-2 sm:m-2.5 lg:m-4 gap-2 md:w-1/5">

      <div className="bg-surface rounded-2xl p-4">
        <h1 className="card-h2">Goutam Thakur</h1>
        <p className="card-desc-sm">
          Software developer with 1.4 years of experience as full stack
          developer working with react, react native, nodejs, express,
          sequelize, postgres, springboot ...
        </p>
      </div>

      <div className="card">
        <h1 className="card-h2">About me</h1>
        <p className="card-desc-sm">Passion, hobbies ...</p>
      </div>

      <div className="card">
        <h1 className="card-h2">Experience</h1>
        <p className="card-desc-sm">Past work experience ...</p>
      </div>

      <div className="card flex justify-between">
        <p>LinkedIn</p>
        <ExternalLink size="20" />
      </div>

      <div className="card flex justify-between">
        <p>X</p>
        <ExternalLink size="20" />
      </div>

      <div className="card flex justify-between">
        <p>Resume</p>
        <ExternalLink size="20" />
      </div>
      
    </div>
  );
};

export default Sidebar;

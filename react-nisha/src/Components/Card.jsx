import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

const Card = (props) => {
  return (
    <div className="profile-card">
      <img src={props.image} alt={props.name} className="profile-img" />

      <h2>{props.name}</h2>
      <p className="role">{props.role}</p>

      <p className="bio">{props.bio}</p>

      <div className="icons">
        <Facebook size={18} />
        <Twitter size={18} />
        <Linkedin size={18} />
        <Github size={18} />
      </div>

      <button className="connect-btn">Connect</button>
    </div>
  );
};

export default Card;

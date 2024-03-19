import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, websiteUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} style={{ height: "40vh" }} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
          <br />
          <br />
          <a href={websiteUrl} style={{ color: "white" }}>
            See more....
          </a>
        </div>
      </div>
    </Col>
  );
};

import React from "react";
import { SkillSet } from "../Config/Config";
import styled from "styled-components";

function Resume() {
  // Filter skills by category
  const blockchainSkills = SkillSet.filter(
    (skill) => skill.category === "blockchain"
  );
  const backendSkills = SkillSet.filter(
    (skill) => skill.category === "backend"
  );
  const frontendSkills = SkillSet.filter(
    (skill) => skill.category === "frontend"
  );

  const renderSkills = (skills) => (
    <ul className="grid-item">
      {skills &&
        skills.map((val) => (
          <li key={val.id}>
            <div className="cards">
              <div className="card-img">
                <img width="459" height="543" src={val.imgsrc} alt={val.name} />
              </div>
              <div className="card-title">
                <span className="title">{val.name}</span>
              </div>
            </div>
          </li>
        ))}
    </ul>
  );

  return (
    <Wrapper>
      <div className="card-inner" id="skills">
        <div className="card-wrap">
          <div className="content skills">
            <div className="title" data-aos="fade-up">
              <span className="first-word">My </span>
              Skills
            </div>

            {/* Blockchain Skills */}
            <div className="skill-category">
              <div className="category-title" data-aos="fade-up">
                <span>Blockchain</span>
              </div>
              <div className="row grid-items">
                {renderSkills(blockchainSkills)}
              </div>
            </div>

            {/* Backend Skills */}
            <div className="skill-category">
              <div className="category-title" data-aos="fade-up">
                <span>Backend</span>
              </div>
              <div className="row grid-items">
                {renderSkills(backendSkills)}
              </div>
            </div>

            {/* Frontend Skills */}
            <div className="skill-category">
              <div className="category-title" data-aos="fade-up">
                <span>Frontend</span>
              </div>
              <div className="row grid-items">
                {renderSkills(frontendSkills)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Resume;

const Wrapper = styled.section`
  .skill-category {
    margin-bottom: 40px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .category-title {
    margin: 30px 0 20px 0;
    padding-bottom: 15px;
    border-bottom: 1px solid ${({ theme }) => theme.highlight.primary};

    span {
      font-size: 1.3rem;
      font-weight: 600;
      color: ${({ theme }) => theme.highlight.primary};
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  }

  .grid-items {
    margin-bottom: 0;
  }

  .cards {
    width: 120px;
    height: 100px;
    margin: 10px 0px 10px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.highlight.primary};
    border-radius: 10px;
    cursor: pointer;
    &:after {
      content: "";
      position: absolute;
      width: auto;
      height: 1px;
      background: var(--gradient3);
      left: 10%;
      right: 0;
      bottom: 0;
      margin: -10px auto;
      padding: 0;
    }
    &:hover {
      transform: scale(1.05);
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
    }
    .card-img {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 70%;
      width: 100%;

      img {
        width: 50px;
        height: 50px;
        object-fit: contain;
      }
    }
    .card-title {
      padding: 5px 0px;
      .title {
        text-transform: capitalize;
        font-size: 0.9rem;
        &::after {
          content: initial;
        }
      }
    }
  }
  @media (max-width: 420px) {
    .cards {
      width: 110px;
      height: 100px;
      margin: 20px 0px 20px 0px;
    }
  }
  @media (max-width: 1199px) {
    .content.about .row .col:first-child {
      padding-bottom: 0;
    }
  }
`;

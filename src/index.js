import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'


const skillsArr = [
  {
    skill: "HTML",
    color: "orangered",
    textColor: "white",
    level: "Intermediate",

  },
  {
    skill: "CSS",
    color: "blue",
    textColor: "white",
    level: 'Intermediate',
  },
  {
    skill: "JavaScript",
    color: "yellow",
    textColor: "black",
    level: "Intermediate"

  },
  {
    skill: "React",
    color: "skyBlue",
    textColor: "black",
    level: "Beginner"
  },
  {
    skill: "Version Control",
    color: "black",
    textColor: "white",
    level: "Intermediate"

  },
  {
    skill: "PHP",
    color: "#B0B3D6",
    textColor: "white",
    level: "Beginner"
  },
  {
    skill: "Sql",
    color: "gray",
    textColor: "white",
    level: "Beginner"
  },
  {
    skill: "Web design",
    color: "violet",
    textColor: "black",
    level: "Advance"
  }
];

function App() {
  return (
    <div className="card">
      <Avatar name='John Dev' photoPath='pfp/sdf.jpg' />
      <div className="data">
        <Intro name='John' intro='Aspring Full stack webdveloper, currently learning React.' />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar({ name, photoPath }) {
  return (
    <header>
      <img className='avatar' src={photoPath} alt={name}></img>
    </header>
  )
}

function Intro({ name, intro }) {
  return (
    <main>
      <h1>{name}</h1>
      <p>{intro}</p>
    </main>
  )
}

function SkillList() {
  const ifExist = skillsArr
  const count = ifExist.length // true


  return (
    <div className='skill-list' >
      {count ? (ifExist.map((skill) => <Skill defaultVal={skill.skill} showSkill={skill} key={skill.skill} />)) : <PopMessage />}
    </div>
  )
}


function PopMessage() {
  return (
    <span>You don't have data!</span>
  )
}

function Skill({ showSkill, defaultVal }) {

  return (
    <div className='skill' style={{ backgroundColor: showSkill.color, color: showSkill.textColor, fontWeight: showSkill.fw }}>
      <span>{defaultVal}</span>
      <span>{showSkill.level === 'Beginner' && '👶🏻'}</span>
      <span>{showSkill.level === 'Intermediate' && '👍🏻'}</span>
      <span>{showSkill.level === 'Advance' && '💪🏻'}</span>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<React.StrictMode><App /></React.StrictMode>)

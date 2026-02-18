import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'
import { useState } from 'react';


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
  },
  {
    skill: "Figma/Design",
    color: "purple",
    textColor: "white",
    level: "Intermediate"
  },
];

const profiler = [
  "Click me to reveal a secret",
  "I want to be...",
  "someone i want always to become",
  "to be someone i will look up always."
]

function App() {
  return (

    <div className="card">
      <Avatar name='John Dev' photoPath='pfp/sdf.jpg' />
      <div className="data">
        <Intro name='John' intro='Aspring Full Stack Web Developer, currently learning React. I also like the idea of Mobile Application and AI integration' />
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
  const [adds, adder] = useState(0);


  function onMoving() {
    if (adds < 3) {
      adder(adds + 1)
    } else {
      adder(0)
    }
  }


  return (
    <main>
      <h1>{name}</h1>
      <p>{intro}</p>
      <button className='dsgn-btn' onClick={onMoving}>Click me</button>

      <span className={`promise ${adds === 0 ? "nothing" : ""}`}>{profiler[adds]}</span>
    </main >
  )
}

function SkillList() {
  const deferChecker = skillsArr;
  const defer = deferChecker.length;

  return (
    <div className='skill-list' >
      {defer ? (skillsArr.map((def) => <Skill skill={def.skill} color={def.color} levels={def.level} txtColor={def.textColor} key={def.skill} />)) : <PopMessage />}
      {/*we check if the var defer true or false*/}
      {/*then we check the sample data {skillsArr}*/}
    </div>
  )
}


function Skill({ skill, color, levels, txtColor }) {

  return (
    <div className='skill' style={{ backgroundColor: color, color: txtColor }}>
      <span>{skill}</span>
      <span>{levels === 'Beginner' && '👶🏻'}</span>
      <span>{levels === 'Intermediate' && '👍🏻'}</span>
      <span>{levels === 'Advance' && '💪🏻'}</span>
    </div>
  )
}

function PopMessage() {
  return (
    <span>You don't have data!</span>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<React.StrictMode><App /></React.StrictMode>)

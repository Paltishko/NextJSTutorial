import { useState } from "react"

function Header({ title }) {
  console.log(title);
  return (<h1>{title || "Default Title"}</h1>);
}

export default function HomePage() {

  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  return (<div>
    <Header title="Develop. Preview. Ship. 🚀" />
    <ul>
      {names.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>

    <button onClick={handleClick}>Like({likes})</button>
  </div>)
}
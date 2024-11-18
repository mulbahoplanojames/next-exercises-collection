const skills = ["HTML", "CSS", "PYTHON", "JAVASCRIPT", "PHP", "REACT"];
const ul = document.querySelector("ul");

for (const skill of skills) {
  const li = document.createElement("li");
  li.textContent = skill;
  ul.appendChild(li);
}

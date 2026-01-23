// content for each project
const cfsData = {
  name: "CampusFoodSwap",
  goals: "Our goal for this project was to create an application that helped" +
    " university students to consume more sustainably, specifically when it" +
    " came to food waste.",
  role: "In this project, I acted as lead developer, handling frontend logic" +
    " as well as server side functionality and API integration. While we were" +
    " originally meant to have two developers on the team, the other dev was" +
    " unfortunately unable to contribute as much as expected due to personal" +
    " circumstances, which led me to take leadership of the project" +
    " development. Luckily our product design  / UI expert was skilled in" +
    " HTML and CSS work, so he was able to take care of a lot of the static" +
    " visuals while I focused on implementing the logic.",
  problem: "While researching the topic prior to development, we discovered" +
    " that food waste among university students is a persistent issue," +
    " estimated by some studies to be around 12.13% per person per meal. A" +
    " significant portion of this waste can be attributed to poor food" +
    " management behaviors: buying in excess, discarding food prematurely," +
    " and failing to track or consume leftovers before they spoil. In other" +
    " words, students didn't have an effective way to track what food they " +
    " had or any way to sustainably dispose of it when they had too much.",
  solution: "Our solution was to design a web application to connect" +
    " students together, with the idea that creating a community platform" +
    " where those sharing the same issue could interact, we could help to" +
    " reduce waste by transfering excess to those who need it.",
  outcome: "After two, two-week dev sprints, we were able to create an app" +
    " using React and Supabase that allowed users to post food items that" +
    " could be browsed and searched by other users. We also integrated Google" +
    " Calendar to set reminders of expiration dates on listings, direct" +
    " messaging functionality between users, and a map to indicate hotspots of" +
    " where items were being listed the most to help facilitate better pickup" +
    " planning.",
  takeaways: "I think what I got most out of this project was leadership and" +
    " and overcoming setbacks to reach success. Working with effectively only" +
    " one full time developer on a project that was scoped for two really" +
    " demanded more from me than I normally do, but in doing so also helped me" +
    " to realize how important it is to work effectively with the rest of the" +
    " team to make the best of what we are given to create what we set out to" +
    " do.",
};
const scData = {
  name: "Second Chance",
  goals: "The goal of Second Chance was to create a platform where users" +
    " browse, buy, and sell secondhand clothing in an effort to reduce" +
    " waste from practices such as fast fashion.",
  role: "",
  problem: "",
  solution: "",
  outcome: "",
  takeaways: "",
};
const ccaData = {
  name: "",
  goals: "",
  role: "",
  problem: "",
  solution: "",
  outcome: "",
  takeaways: "",
};

// modal
const modal = document.getElementById("proj-modal");

// update and show modal
function showModal(project) {
  console.log(project);
  let data;
  switch (project) {
    case "cfs":
      data = cfsData;
      break;
    case "sc":
      data = scData;
      break;
    case "cca":
      data = ccaData;
      break;
  }
  console.log(data);

  // set data
  document.getElementById("proj-modal-img").src = "images/" + project + ".png";
  document.getElementById("proj-name").textContent = data.name;
  document.getElementById("proj-goals").textContent = data.goals;
  document.getElementById("proj-role").textContent = data.role;
  document.getElementById("proj-prob").textContent = data.problem;
  document.getElementById("proj-sol").textContent = data.solution;
  document.getElementById("proj-outcome").textContent = data.outcome;
  document.getElementById("proj-takeaway").textContent = data.takeaways;

  modal.style.display = "block";
}

// add event listeners to open modal
document.getElementById("cfs").addEventListener("click", () => showModal("cfs"));
document.getElementById("sc").addEventListener("click", () => showModal("sc"));
document.getElementById("cca").addEventListener("click", () => showModal("cca"));

// add event listener to close modal
document.getElementById("modal-btn").addEventListener("click", () => {
  modal.style.display = "none";
});

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
    " can browse, buy, and sell secondhand clothing in an effort to reduce" +
    " waste from practices such as fast fashion.",
  role: "In this project, I worked  as a developer with a team to create the" +
    " application. The division of work was done by feature page, with my" +
    " responsiblity being the homepage and navigation bar that would be used" +
    " throughout the site. I also handled troubleshooting of other members'" +
    " pages when something went wrong. Most importantly I was the one" +
    " responsible for setting up and integrating our firebase authentication" +
    " and datastore into the application so that users could login and view" +
    " others' posts.",
  problem: "The problem inspiring the creation of Second Chance was the" +
    " wasteful and unsustainable nature of industries like fast fashion," +
    " which promote overconsumption with no solution for what to do with" +
    " the clothes afterwards. Online marketplaces exist for selling used" +
    " goods, however the number focusing specifically on secondhand clothing" +
    " is limited, meaning users are forced to use a handful of specialized" +
    " sites or filter through other products unrelated to clothing on general" +
    " marketplaces.",
  solution: "To help address this, our team worked to create a prototype site" +
    " which focused specifically on the online resale of secondhand clothing." +
    " We used Google Firebase as a free solution to host our website, as well" +
    " as for key components such as secure authentication, and a cloud based" +
    " datastore. We modeled the site after that of well known clothing brands" +
    " to take advantage of their expertise in categorizing and to create a" +
    " familiar experience for users.",
  outcome: "While the final product was a bit rough around the edges and" +
    " lacking key functionality necessary for a fully operable clothing" +
    " clothing marketplace such as payment integration and actual shipping" +
    " calculations, we successfully made a functional interface that could be" +
    " used as a first iteration to add these features onto, as features" +
    " such as basic search, filtering, and cart management are all there.",
  takeaways: "This was my first real experience working on a development" +
    " project with a team, and I think that the main thing I've learned from" +
    " it is how to work collaboratively with others, despite varying" +
    " skillsets and interests. From a technical perspective, working on" +
    " Second Chance gave me experience integrating Firebase, which is" +
    " something I hadn't worked with before, as well as dealing with a NoSQL" +
    " datastore since I have primarily used RDBM systems before.",
};
const ccaData = {
  name: "Climate Change Analysis",
  goals: "Primarily the purpose of this project was to analyze data to" +
    " investigate the multifaceted effects of climate change on various" +
    " environmental ecosystems and provide insights.",
  role: "My part in the data analysis was to analyze the correlation between" +
    " climate change indicators such as CO2 emissions and the cost of fossil" +
    " fuels like gasoline and diesel in order to understand whether or not" +
    " economical factors would significantly influence climate change.",
  problem: "Climate change has become a global epidemic, with human activities" +
    " strongly impacting the Earth’s biodiversity, ecosystems, and, atmosphere." +
    " This causes concerns as these climate changes negatively influence other" +
    " important natural resources such as our terrestrial, oceanic," +
    " glaciological, and hydrological ecosystems.",
  solution: "To help better understand what sort of things have significant" +
    " impact on climate change, we examined possible correlations and looked" +
    " to real world datasets, using R to create charts for visualization.",
  outcome: "We were able to identify that China, Japan, the Netherlands, South" +
    " Korea, Taiwan, United Kingdom, and USA were the top countries emitting CO2" +
    " as well as identify the highest emissions per capita as being China." +
    " This helped us to call into consideration global geographical policies" +
    " which may significantly affect climate change. We were further able to" +
    " extrapolate that economic factors and policy also have significant" +
    " potential to impact the rate of climate change from our study on fossil" +
    " fuel prices.",
  takeaways: "Doing this analysis helped me to get into the basics of data" +
    " anlysis and improve my proficiency with R. It also helped me get a" +
    " better grasp of real world datasets.",
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

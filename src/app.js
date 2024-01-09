const PLAYERS = [
  "Spiderman",
  "Captain America",
  "Wonderwoman",
  // "Popcorn",
  // "Gemwoman",
  // "Bolt",
  // "Antwoman",
  // "Mask",
  // "Tiger",
  // "Captain",
  // "Catwoman",
  // "Fish",
  // "Hulk",
  // "Ninja",
  // "Black Cat",
  // "Volverine",
  // "Thor",
  // "Slayer",
  // "Vader",
  // "Slingo"
];

class Player {
  constructor(id, name, type) {
    this.id = id;
    this.name = name;
    this.strength = this.getRandomStrength();
    this.image = "images/super-" + (id + 1) + ".png";
    this.type = type;
    this.isthere = false;
  }

  getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
  };

  view = () => {
    let player = document.createElement("div");
    player.classList.add("player");
    player.setAttribute("data-id", this.id);
    if (this.isthere == true) player.classList.add("selected");
    let name = document.createElement("div");
    name.textContent = this.name;
    let strength = document.createElement("div");
    strength.textContent = this.strength;
    strength.className = "strength";
    let image = document.createElement("img");
    image.setAttribute("src", this.image);
    player.append(image, name, strength);

    return player;
  };
}
class Superwar {
  constructor(players) {
    this.players = players.map((player, index) => {
      const type = index % 2 === 0 ? "hero" : "villain";
      return new Player(index, player, type);
    });
  }

  viewPlayers = () => {
    let group = document.getElementById("heroes");
    group.innerHTML = [];
    let tags = this.buildPlayers("hero");
    group.appendChild(tags);

    group = document.getElementById("villains");
    group.innerHTML = [];
    tags = this.buildPlayers("villain");
    group.appendChild(tags);
  };

  buildPlayers = (type) => {
    let tags = document.createDocumentFragment();
    this.players
      .filter((player) => player.type === type)
      .forEach((player) => tags.appendChild(player.view()));
    return tags;
  };
}

window.onload = () => {
  const characters = new Superwar(PLAYERS);
  characters.viewPlayers();
};

const PLAYERS = [
  'Spiderman',
  'Captain America',
  'Wonderwoman',
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

// Player Class
class Player {
  constructor(id, name, type) {
    // Progession 1: Create member variables and assign values
    this.id = id;
    this.name = name;
    this.image = 'images/super-' + (id + 1) + '.png';
    this.strength = this.getRandomStrength();
    this.type = type;
    this.selected = false;
    this.Victory = 0;
  }

  // Get random strength
  getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
  };

  // Progression 2: Create a player for displaying
  view = () => {
    let user = document.createElement('div');

    user.classList.add('player');
    
    user.setAttribute('data-id', this.id);
    
    if (this.selected == true) user.classList.add('selected');
    
    let image = document.createElement('img');
    
    image.setAttribute('src', this.image);
    
    let name = document.createElement('div');
    
    name.textContent = this.name;
    
    let strength = document.createElement('div');
    
    strength.textContent = this.strength;
    
    strength.className = 'strength';
    
    user.append(image, name, strength);
    
    return user;
  };
}

// Superwar Class
class Superwar {
  
  constructor(players) {
    // Progression 3:
    // Create a field players
    // Use Map method to loop through players argument and create new players
    // Type your code here
    this.players = players.map((user, index) => {
  
      let winning = index % 2 == 0 ? 'hero' : 'villain';
  
      return new Player(index, user, winning);
    });
  }

  // Display players in HTML
  viewPlayers = () => {
   
    fragment = this.buildPlayers('villain');
    team.append(fragment);

    team = document.getElementById('villains');
    team.innerHTML = '';
    let fragment = this.buildPlayers('hero');
    team.append(fragment);
    let team = document.getElementById('heroes');
    team.innerHTML = '';
    
  };

  // Build players fragment
  buildPlayers = (type) => {
    let fragment = document.createDocumentFragment();
    this.players
      .filter((player) => player.type == type)
      .forEach((player) => fragment.append(player.view()));
    return fragment;
  };
}

window.onload = () => {
  const hero = new Superwar(PLAYERS);
  hero.viewPlayers();
};

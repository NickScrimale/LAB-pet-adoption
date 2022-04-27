const companion = document.querySelector("#companion")
console.log(companion)



const pets = [
    {
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg"
    },
    {
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "https://dinosafari.com/wp-content/uploads/2021/07/1-t-rex.png"
    },
    {
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      name: "Ginger",
      color: "Green",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "https://i1.sndcdn.com/artworks-yf5EGataV7qkfSK9-aBx6Gw-t240x240.jpg"
    },
    {
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRss567oF1rmP2bmVQVfAp7g9BB8vI7DCe2lA&usqp=CAU"
    },
    {
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "http://1kjkdg1axrkd2g03cnboj761.wpengine.netdna-cdn.com/wp-content/uploads/2017/12/braydon-anderson-105552-e1512684107659.jpg"
    },
    {
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://dinoworldexpo.com/wp-content/uploads/2022/01/dino-cartel-white.png"
    },
    {
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "https://penntoday.upenn.edu/sites/default/files/2022-03/Cat-COVID-social.jpeg"
    },
    {
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://images.immediate.co.uk/production/volatile/sites/4/2020/12/dino-80bbd77.jpg?quality=90&resize=768,574"
    },
    {
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "http://dailynewsdig.com/wp-content/uploads/2014/03/Creative-And-Funny-Dog-Stock-Photography-Pictures-2.jpg"
    },
    {
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTg0NTEzNzgyNTMyNDE2OTk5/black-cat-gettyimages-901574784.jpg"
    },
    {
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://tarpits.org/sites/default/files/styles/fwc_full_small/public/2020-08/20-0843_dino_fest_landing_page_200818.jpg?h=d3cdef51"
    },
    {
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg"
    },
    {
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "https://www.akcpetinsurance.com/res/akc/images/icons/home/home_dog.png"
    },
    {
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "https://images.unsplash.com/photo-1562146398-1b732c203bc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVkJTIwY2F0fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
    },
    {
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits she is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when she has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "https://ih1.redbubble.net/image.1974503408.9538/st,small,507x507-pad,600x600,f8f8f8.jpg"
    }
];

const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};

const createPetModal = () => {
  const domString = `
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#add-pet">
    Add Pet
    </button>
    <!-- Modal -->
    <div class="modal fade" id="add-pet" tabindex="-1" aria-labelledby="add-pet" aria-hidden="true">
      <div class="modal-dialog modal-fullscreen-md-down">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Pet</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body" id="modal-body">
          <form>
          <div class="form-floating mb-3">
            <input class="form-control form-control-lg" type="text" placeholder="Pet Image" id="imageUrl" aria-label="pet image" required>
            <label for="imageUrl">Pet Image URL</label>
          </div>

          <div class="form-floating mb-3">
            <input class="form-control form-control-lg" type="text" placeholder="Pet Name" id="petName" aria-label="pet name" required>
            <label for="pet name">Pet Name</label>
          </div>

          <div class="form-floating mb-3">
            <input class="form-control form-control-lg" type="text" placeholder="Color" id="color" aria-label="color" required>
            <label for="color">Color</label>
          </div>
      
          <div class="form-floating mb-3">
            <input class="form-control form-control-lg" type="text" placeholder="Special Skill" id="specialSkill" aria-label="special skill" required>
            <label for="special skill">Special Skill</label>
          </div>
      
          <div class="form-floating mb-3">
            <select class="form-select form-control-lg" id="type" aria-label="type" required>
              <option value="">Select a type</option>
              <option value="cat">Cat</option>
              <option value="dog">Dog</option>
              <option value="dino">Dino</option>
              <option value="other">Other</option>
            </select>
            <label for="type">Type</label>
          </div>
          
      
          <button 
            type="submit" 
            class="btn btn-success" 
          >
            Submit
          </button>
        </form>
          </div>
        </div>
      </div>
    </div>
  `;
  renderToDom('#createBtnContainer', domString);
};


const filterButtons = () => {
  const domString= `
  <div class="d-flex flex-wrap justify-content-between my-3">
    <button class="btn btn-secondary btn-lg buttonRow" id="dog">Dogs</button>
    <button class="btn btn-secondary btn-lg buttonRow" id="cat">Cats</button>
    <button class="btn btn-secondary btn-lg buttonRow" id="dino">Dinos</button>
    <button class="btn btn-secondary btn-lg buttonRow" id="clear">Clear Filter</button>
  </div>
  `;
  renderToDom('#filterContainer', domString);
}

const cardsOnDom = (pets) => {
  let domString = '';

  for (const pet of pets) {
    domString += `<div class="card" style="width: 18rem;">
    <img src="${pet.imageUrl}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${pet.name}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${pet.color}</li>
      <li class="list-group-item">${pet.specialSkill}</li>
      <li class="list-group-item">${pet.type}</li>
    </ul>
  </div>
  <div><button type="button" class="btn btn-danger" id="delete--${pets.pet}">X</button></div>`
  }
  renderToDom('#companion', domString);
}
  

// companion.innerHTML = domString;

const eventListeners = () => {
  const formModal = new bootstrap.Modal(document.querySelector('#add-pet'))
  document.querySelector('#filterContainer').addEventListener('click', (e) => {
    if (e.target.id === "clear") {
      cardsOnDom(pets);
    } else if (e.target.id) {
      const animals = pets.filter(pet => pet.type === e.target.id);
      cardsOnDom(animals);
    }
    console.log("clicked filter", e.target.id);
  });
  
  document.querySelector('#companion').addEventListener('click', (e)=> {
    if (e.target.id) {
      const [method, pet] = e.target.id.split("--")

      const index = pets.findIndex(pet => pet.pet === pet)

      if (e.target.id.includes('delete')) {
        console.log("Delete Button Pressed")
        pets.splice(index, 1);
        cardsOnDom(pets)
      }
    }
  })

  const form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const newAnimal = {
      imageUrl: document.querySelector("#imageUrl").value,
      name: document.querySelector("#petName").value,
      color: document.querySelector("#color").value,
      specialSkill: document.querySelector("#specialSkill").value,
      type: document.querySelector("#type").value
      
    }

    pets.push(newAnimal)

    cardsOnDom(pets)

    formModal.hide()
    form.reset();
  });
};

const startApp = () => {
  createPetModal();
  filterButtons();
  cardsOnDom(pets);
  eventListeners();
}

startApp()


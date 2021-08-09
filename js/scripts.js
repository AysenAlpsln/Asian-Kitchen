const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

getCategoryButtons(menu);
displayMenuItems(menu, "All");

function findCategories(menu){
    let categories = [];
    categories.push("All")

    let otherCategories = new Set(menu.map((menuCat) => menuCat.category))
    categories.push(...otherCategories)
    return categories;
}

function getCategoryButtons(menu){
    let buttonContainer = document.querySelector('.btn-container');
    const categories = findCategories(menu);

    categories.forEach((category) => {
        const button = document.createElement("button");
        button.classList.add("btn");
        button.classList.add("btn-outline-dark");
        button.classList.add("btn-item");
        button.textContent = category;

        var att = document.createAttribute("data-id");
        att.value = category;
        button.setAttributeNode(att);

        buttonContainer.appendChild(button);
    });

}

function displayMenuItems(menu, filterId){
    const menucontainer = document.querySelector('.section-center');

    if(filterId == "All"){
      menucontainer.innerHTML = "";
      const menuItems = createMenuItems(menu);
      menuItems.forEach((menuItem) => {
          menucontainer.appendChild(menuItem);
      });
    }
    else{
      menucontainer.innerHTML = "";
      const filteredMenu = menu.filter(item => item.category == filterId);
      const filteredMenuItems = createMenuItems(filteredMenu);
      filteredMenuItems.forEach((filteredItem) => {
        menucontainer.appendChild(filteredItem);
      });
    }
}


function createMenuItems(menu){
    const menuItem = menu.map((item) => {
        const menuItemDiv = document.createElement('div');
        const menuItemImage = document.createElement('img');
        const menuItemInfo = document.createElement('div');
        const menuItemTitle = document.createElement('div');
        const menuItemText = document.createElement('div');
        const menuItemName = document.createElement('h4');
        const menuItemPrice = document.createElement('h4');

        menuItemDiv.classList.add('menu-items');
        menuItemDiv.classList.add('col-lg-6');
        menuItemDiv.classList.add('col-sm-12');

        menuItemDiv.appendChild(menuItemImage);
        menuItemDiv.appendChild(menuItemInfo);
        menuItemInfo.appendChild(menuItemTitle);
        menuItemInfo.appendChild(menuItemText);
        menuItemTitle.appendChild(menuItemName);
        menuItemTitle.appendChild(menuItemPrice);

        // info
        menuItemInfo.classList.add('menu-info');

        // img
        menuItemImage.src = item.img;
        menuItemImage.alt = item.title;
        menuItemImage.classList.add('photo');

        // title
        menuItemTitle.classList.add('menu-title');
        menuItemName.textContent = item.title;
        menuItemPrice.classList.add('price');
        menuItemPrice.textContent = item.price;

        // description
        menuItemText.classList.add('menu-text');
        menuItemText.textContent = item.desc;

        return menuItemDiv;
        return menuItemImage;
        return menuItemInfo;
        return menuItemTitle;
        return menuItemText;
        return menuItemName;
        return menuItemPrice;
    });

    return menuItem;
}



const menuButton = document.querySelectorAll('button');

menuButton.forEach((buttonItem) => {
  buttonItem.addEventListener("click", function () {
      const buttonId = buttonItem.getAttribute("data-id");
      displayMenuItems(menu, buttonId);
  });
});


//AOS.init();


document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
    const menutItems = document.querySelectorAll('.menu-item')[0];
    const menuItemsArr = Array(menutItems);
      menuItemsArr.forEach((item) => {
          console.log(item);
          const link = item.querySelector("a");
          const dropdown = item.querySelector(".dropdown-menu");
          if (link && dropdown) {
          item.addEventListener("mouseover", () => {
              dropdown.style.display = "flex";
          });
          item.addEventListener("mouseleave", () => {
              dropdown.style.display = "none";
          });
          }
      });
  });
  
  document.addEventListener("DOMContentLoaded", (event) => {
      console.log("DOM fully loaded and parsed");
      const menutItems = document.querySelectorAll('.menu-item1')[0];
      const menuItemsArr = Array(menutItems);
        menuItemsArr.forEach((item) => {
            console.log(item);
            const link = item.querySelector("a");
            const dropdown = item.querySelector(".dropdown-menu");
            if (link && dropdown) {
            item.addEventListener("mouseover", () => {
                dropdown.style.display = "flex";
            });
            item.addEventListener("mouseleave", () => {
                dropdown.style.display = "none";
            });
            }
        });
    });
  
    document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
    const menutItems = document.querySelectorAll('.menu-item2')[0];
    const menuItemsArr = Array(menutItems);
      menuItemsArr.forEach((item) => {
          console.log(item);
          const link = item.querySelector("a");
          const dropdown = item.querySelector(".dropdown-menu");
          if (link && dropdown) {
          item.addEventListener("mouseover", () => {
              dropdown.style.display = "flex";
          });
          item.addEventListener("mouseleave", () => {
              dropdown.style.display = "none";
          });
          }
      });
  });
  
    
  
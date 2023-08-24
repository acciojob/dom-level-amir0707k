//your JS code here. If required.
    const listItemWithId = document.getElementById("level");
      const ulElement = listItemWithId.closest("ul");
      const listItems = ulElement.getElementsByTagName("li");

      let listItemNumber = -1;
      for (let i = 0; i < listItems.length; i++) {
          if (listItems[i].id === 'level') {
            
          listItemNumber = i + 1; // Adding 1 to make it a human-readable number
          break;
        }
      }

alert(`The level of the element is: ${listItemNumber}`);
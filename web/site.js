//document.getElementById("ID").addEventListener("click", (e)=> {
//});

//set the currently visible popup panels
let currentInfoPopups = [];
function setCurrentInfoPopup(newInfoPopups)
{
    //hide old popup
    for(let i=0;i<currentInfoPopups.length;i++)
    {
        currentInfoPopups[i].style.display = "none";
        currentInfoPopups[i].hidden = true;
    }

    currentInfoPopups = newInfoPopups; //update popups
    
    //show new popup
    for(let i=0;i<currentInfoPopups.length;i++)
    {
        currentInfoPopups[i].style.display = "block";
        currentInfoPopups[i].hidden = false;
    }
}

class PopupManager {
    constructor(clickIDs, popupIDs)
    {
        this.popups = [];
        for(let i=0;i<popupIDs.length;i++)
        {
            this.popups.push(document.getElementById(popupIDs[i]));
        }
        for(let i=0;i<clickIDs.length;i++)
        {           
            document.getElementById(clickIDs[i]).addEventListener("click", ()=> {
                setCurrentInfoPopup(this.popups);
            });
        }
    }
}

//link up elements that open info panels when clicked
const popupManagers = [
    new PopupManager(["mock-charsheet-facets"],["charsheet-info-facets"]),
    new PopupManager(["mock-charsheet-other-features"],["charsheet-info-other-features"]),

    new PopupManager(["mock-charsheet-light-title"],["charsheet-info-inventories", "charsheet-info-light"]),
    new PopupManager(["mock-charsheet-inventory-divider"],["charsheet-info-saves"]),
    new PopupManager(["mock-charsheet-flesh-title"],["charsheet-info-inventories", "charsheet-info-flesh"]),

    new PopupManager(["item-evidence"],["charsheet-info-evidence"]),
    new PopupManager(["item-wound"],["charsheet-info-wound"]),
    new PopupManager(["item-gold-ring"],["charsheet-info-gold-ring"]),
    new PopupManager(["item-helmet"],["charsheet-info-helmet"]),
    new PopupManager(["item-sword"],["charsheet-info-sword"]),
    
    new PopupManager(["item-secret"],["charsheet-info-secret"]),
    new PopupManager(["item-ruse"],["charsheet-info-ruse"]),
    new PopupManager(["item-stress"],["charsheet-info-stress"]),
    new PopupManager(["item-path"],["charsheet-info-path"]),

];

//link up panel close buttons
document.querySelectorAll(".info-panel > button").forEach((element)=>{
    element.addEventListener("click", () => {
        setCurrentInfoPopup([]);
    })
})

//set up internal links to flash the element they're linking to when the link is used
const DAMAGE = document.getElementById("damage");
const FACETS = document.getElementById("mock-charsheet-facets");
const CONVENTIONS = document.getElementById("conventions");

document.querySelectorAll(".flash-damage-onclick").forEach((element)=>{
    element.addEventListener("click", () => {
        DAMAGE.classList.remove("flash-once-rounded");
        setTimeout(() => {
            DAMAGE.classList.add("flash-once-rounded");
        }, 10);
        DAMAGE.addEventListener( "animationend",  function() {
            element.classList.remove("flash-once-rounded");    
        } );
    })
});

document.querySelectorAll(".flash-facets-onclick").forEach((element)=>{
    element.addEventListener("click", () => {
        FACETS.classList.remove("flash-once");
        setTimeout(() => {
            FACETS.classList.add("flash-once");
        }, 10);
        FACETS.addEventListener( "animationend",  function() {
            element.classList.remove("flash-once");    
        } );
    })
});

document.querySelectorAll(".flash-conventions-onclick").forEach((element)=>{
    element.addEventListener("click", () => {
        CONVENTIONS.classList.remove("flash-once-rounded");
        setTimeout(() => {
            CONVENTIONS.classList.add("flash-once-rounded");
        }, 10);
        CONVENTIONS.addEventListener( "animationend",  function() {
            element.classList.remove("flash-once-rounded");    
        } );
    })
});
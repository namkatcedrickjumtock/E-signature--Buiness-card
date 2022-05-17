

let Controller = {

    cls: (className) => document.getElementsByClassName(className),

    querySelectors: (elem) => document.querySelector(elem),

    getElemtsID: (id) => document.getElementById(id),

    removeClassName: (clname) => classList.remove(clname)
    ,    // check time
    checkTime: function () {
        let today = new Date();
        return today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    },
    DefaultsetTheme: (theme) => {
        let elem = Controller.getElemtsID(theme)
        elem.classList.remove("bg-white")
        elem.classList.add("bg-dark")

    }
}

window.onload = (event) => {
    Controller.DefaultsetTheme("card")
    let elem = document.getElementsByClassName("text-dark")
};

// console.log(Controller.checkTime())

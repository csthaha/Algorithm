var Singleton = (function () {
    var instance;
    var object
    function createInstance() {
         object = new Object("I am the instance");
        return object
    }

    return {
        getInstance: function () {
            if(!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();

function run() {
    var instance1 = Singleton.getInstance();
    var instance2 = Singleton.getInstance();
    var instance3 = Singleton.getInstance();

    console.log("Same instance?" + ( instance2 === instance3 === instance1));
    console.log("Same instance?" + ( instance1 === instance3));
    console.log(instance1)
    console.log(Singleton.instance)
    console.log(Singleton.getInstance())
    
}

run();
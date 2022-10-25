function handleError(e) {
    throw {
        name: e.name,
        message: e.message,
        date: new Date()
    };
}

function scream(obj) {
    try {
        console.log(obj.name.toUpperCase() + "!!!");
    } catch (e) {
        handleError(e);
    } finally {
        console.log("final");
    }
}

const obj = { name: "Victor" }
scream(obj);
scream({});

/**
 * The map() method invokes the callback function passed by argument for each
 * Array element and returns a new Array as a result.
*/

/**
 * It takes a string of numbers separated by spaces, and returns an array of two
 * numbers: the number of records broken, and the index of the worst game
 * @param list - a string of numbers separated by spaces
 * @returns The number of records broken and the worst game.
*/
function getNbOfRecordsAndWorstGame(list) {
    list = list.split(' ').map(Number);
    if (list.length <= 1)
        return [0, 0];
    let records = 0;
    let worstGame = 0;
    let bestGame = 0;

    for (let i = 0; i < list.length; i++) {
        if (list[i] < list[worstGame])
            worstGame = i;
        else if (i && list[i] > list[bestGame]) {
            records++;
            bestGame = i;
        }
    }
    return [records, worstGame + 1];
}

console.log(getNbOfRecordsAndWorstGame("10 20 20 8 25 3 0 30 1"));

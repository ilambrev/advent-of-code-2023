function day06part2(input) {

    const rowsData = input.split('\n');

    const time = Number(rowsData[0].replace('Time:', '').trim().split(/\s+/).join(''));

    const distanceRecord = Number(rowsData[1].replace('Distance:', '').trim().split(/\s+/).join(''));

    const results = [];

    for (let i = 0; i <= time; i++) {
        const distance = (time - i) * i;
        results.push(distance);
    }

    const waysToBeatTheRecord = results.filter(result => result > distanceRecord).length;

    console.log(waysToBeatTheRecord);

}

day06part2(`Time:      7  15   30
Distance:  9  40  200`);

day06part2(`Time:        47     98     66     98
Distance:   400   1213   1011   1540`);
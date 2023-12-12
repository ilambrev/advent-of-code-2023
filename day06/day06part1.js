function day06part1(input) {

    const rowsData = input.split('\n');

    const times = rowsData[0].replace('Time:', '').trim().split(/\s+/).map(time => Number(time));

    const distances = rowsData[1].replace('Distance:', '').trim().split(/\s+/).map(distance => Number(distance));


    const result = times.reduce((acc, curr, i) => {

        const distanceRecord = distances[i];

        const results = [];

        for (let i = 0; i <= curr; i++) {
            const distance = (curr - i) * i;
            results.push(distance);
        }

        const waysToBeatTheRecord = results.filter(result => result > distanceRecord).length;

            acc *= waysToBeatTheRecord;

        return acc;
    }, 1);

    console.log(result);

}

day06part1(`Time:      7  15   30
Distance:  9  40  200`);

day06part1(`Time:        47     98     66     98
Distance:   400   1213   1011   1540`);
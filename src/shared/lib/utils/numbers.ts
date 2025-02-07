export function getRandomBetween(min: number, max: number, round = 1) {
    return min + Math.round((Math.random() * (max - min)) * round) / round;
}
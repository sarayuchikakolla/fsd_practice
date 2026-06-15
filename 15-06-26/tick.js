console.log('Start');

process.nextTick(() => {
    console.log('This runs on the next tick');
});

console.log('End');
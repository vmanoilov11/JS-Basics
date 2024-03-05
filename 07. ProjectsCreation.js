function calculateHours(name, projects) {
    let totalHours = projects * 3;
    console.log(`The architect ${name} will need ${totalHours} hours to complete ${projects} project/s.`);
}
calculateHours("John Smith", 5);

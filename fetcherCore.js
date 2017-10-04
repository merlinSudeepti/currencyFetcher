// Pure module

const getCurrencyByDates = (StartDate, EndDate) => {
    // new Promise((resolve, reject) => {
    const listDate = [];
    let dateMove = new Date(StartDate);
    let strDate = StartDate;
    while (strDate < EndDate) {
        strDate = dateMove.toISOString().slice(0, 10);
        listDate.push(strDate);
        dateMove.setDate(dateMove.getDate() + 1);
    };
    //  })
    return listDate;

}

const datesToRequestURLs = date => `http://api.fixer.io/${date}?symbols=EUR,USD`

module.exports = {
    getCurrencyByDates: getCurrencyByDates,
    datesToRequestURLs: datesToRequestURLs
}
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];


const ascendingReleaseDates = [...releaseDates].sort((firstEl,secondEl)=> firstEl-secondEl );

const descendingReleaseDates =[...releaseDates].sort((firstEl,secondEl)=> secondEl-firstEl);
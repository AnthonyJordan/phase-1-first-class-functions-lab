// Code your solution in this file!


const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = (drivers)=>{
    return drivers.slice(drivers.length - 2, drivers.length);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return (fare) => fare * multiplier; 
}

const fareDoubler = (fare) => createFareMultiplier(2)(fare);

const fareTripler = (fare) => createFareMultiplier(3)(fare);

function selectDifferentDrivers(drivers, funct){
    return funct(drivers);

}
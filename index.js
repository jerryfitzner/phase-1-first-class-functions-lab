// Code your solution in this file!


const returnFirstTwoDrivers = (function (drivers){
    return drivers.slice(0,2);
});

const returnLastTwoDrivers = (function (drivers){
    return drivers.slice(2,4);
});

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num){
    return function (fare) {
        return num * fare;
    };
};

const fareDoubler = function(fare2){
    const trip1 = createFareMultiplier(2);
    return trip1(fare2);
}

const fareTripler = function(fare3){
    const trip = createFareMultiplier(3);
    return trip(fare3);
};

function selectDifferentDrivers(drive, fn){
    return fn(drive);
}



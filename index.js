function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
  }

  function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
  }

  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

  function createFareMultiplier(multiplier) {
    return function(value) {
      return value * multiplier;
    };
  }

  function fareDoubler(fare) {
    const fareMultiplier = createFareMultiplier(2);
    return fareMultiplier(fare);
  }

  function fareTripler(fare) {
    const fareMultiplier = createFareMultiplier(3);
    return fareMultiplier(fare);
  }
  
  function selectDifferentDrivers(arrayOfDrivers, driverSelectionFunction) {
    return driverSelectionFunction(arrayOfDrivers);
  }
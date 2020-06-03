const plantsNeedWater = (day) => {
    if (day === 'Monday') {
        return true;
    } else {
        return false;
    }
};

console.log(plantsNeedWater('Sunday'));
let growth_gap = {
    sales: 0,
    utility: 0
};

const growthget = () => {
    return growth_gap;
};

const growthput = (sales, utility) => {
    growth_gap.sales = sales;
    growth_gap.utility = utility;

    return growth_gap;
}


module.exports = {
    growthput,
    growthget
}
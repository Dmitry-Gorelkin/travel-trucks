export const selectTrucks = state => state.trucks.items;

export const selectTrucksFilter = state => state.trucks.filter;

export const selectTruckCard = state => state.trucks.card;

export const selectTruckCardReviews = state => state.trucks.card.reviews;

export const selectTrucksTotal = state => state.trucks.total;

export const selectTrucksLoading = state => state.trucks.loading;

export const selectTrucksError = state => state.trucks.error;

import foods from '../Data/Food.json';

const foodService = {
  getFoods: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(foods);
      }, 500);
    });
  }
};

export default foodService;
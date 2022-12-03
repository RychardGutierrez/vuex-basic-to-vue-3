const getRandomInt = () => {
  return new Promise((resolve) => {
    const result = Math.floor(Math.random() * 20 + 1);

    setTimeout(() => {
      resolve(result);
    }, 2000);
  });
};

export default getRandomInt;

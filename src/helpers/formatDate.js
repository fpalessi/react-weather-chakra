export const formatDate = (dt) => {
  const miliseconds = dt * 1000;

  const myDate = new Date(miliseconds);

  const date = myDate.toLocaleString("en-GB").split(",")[0];

  const day = myDate.toLocaleString("en-US", { weekday: "long" });

  return { date, day };
};

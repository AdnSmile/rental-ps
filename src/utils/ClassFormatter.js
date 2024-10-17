export const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(number);
};

export const number = (number) => {
  return new Intl.NumberFormat("id-ID").format(number);
};

export const setDate = (date) => {
  const dateObject = new Date(date);
  const formattedDate = dateObject.toLocaleDateString("id-ID", {
    dateStyle: "long",
  });

  return formattedDate;
};

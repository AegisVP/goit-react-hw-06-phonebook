export const searchFilter = search => {
  return {
    type: 'filter/search',
    payload: { search },
  };
};

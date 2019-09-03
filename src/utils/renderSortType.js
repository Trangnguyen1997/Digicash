const renderSortType = (column, sort, sortType) => {
  if (column === sort) {
    if (sortType === "asc") {
      return "th-sort-asc";
    } else {
      return "th-sort-desc";
    }
  } else {
    return "th-sort";
  }
};

export default renderSortType;

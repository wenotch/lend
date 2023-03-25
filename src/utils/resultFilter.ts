const resultFilter = (query: any) => {
    const filterKeys = Object.keys(query);
    return (item: any) => {
      // flipped around, and item[key] forced to a string
      return filterKeys.every((key) => !!~String(item[key]).indexOf(query[key]));
    };
  };
  
  export default resultFilter;
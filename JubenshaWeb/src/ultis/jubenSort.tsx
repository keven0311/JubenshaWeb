interface Juben {
    title:string;
    image?:string;
    price:number;
    type:string;
    theme:string;
    members:number;
    background:string;
    difficulty:string;
    mod:string;
}

interface Criteria {
    price?: number[];
    type?: string[];
    theme?: string[];
    members?: number[];
    background?: string[];
    difficulty?: string[];
    mod?: string[];
  }

const jubenSort = (juben:Juben[], criteria:Criteria):Juben[] => {
    return juben.filter(item =>
        Object.keys(criteria).every(key => {
          const criterion = criteria[key as keyof Criteria];
          const value = item[key as keyof Juben];
    
          if (Array.isArray(criterion)) {
            if (key === 'price') {
              // Handle price range
              if (typeof value === 'number') {
                const [min, max] = criterion as [number, number];
                return value >= min && value <= max;
              }
              return false;
            } else if (key === 'members') {
              // Handle list of acceptable members
              if ((criterion as number[]).includes(0)){
                return true;
              }
              if (typeof value === 'number') {
                return (criterion as number[]).includes(value);
              }
              return false;
            } else {
              // Handle string arrays (type, theme, background, difficulty, mod)
              return typeof value === 'string' && (criterion as string[]).includes(value);
            }
          } else if (typeof criterion === 'string') {
            // Handle single string criteria
            return value === criterion;
          } else if (typeof criterion === 'number') {
            // Handle single number criteria
            return value === criterion;
          }
    
          return false;
        })
      );
}

export default jubenSort;
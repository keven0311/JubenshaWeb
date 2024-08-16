export interface Juben {
    title:string;
    price:number;
    player_type?:string;     //3男3女
    difficulty:string;      //难度
    mod:string;             //形式
    description:string;     //剧本信息
    summary:string;         //剧本背景介绍
    num_players:number[];   //人数
    theme:string[];         //题材
    category:string[];      //类型
    background:string[];    //背景
    thumbnail?:string[];   //图片
    
    //internal column
    playtime?:number;  
    comment?:string;  
}

interface Criteria {
    price?: number[];
    type?: string[];
    category?: string[];
    num_players?: number[];
    background?: string[];
    difficulty?: string[];
    mod?: string[];
    playtime?:number[];
    theme?:string[];
  }

const jubenSort = (juben:Juben[], criteria:Criteria):Juben[] => {
    return juben.filter(item =>
        Object.keys(criteria).every(key => {
          const criterion = criteria[key as keyof Criteria];
          const value = item[key as keyof Juben];

          if(!criterion || criterion.length === 0){
            return true;
          }
    
          if (Array.isArray(criterion)) {
            if (key === 'price') {
              // Handle price range
              if (typeof value === 'number') {
                const [min, max] = criterion as [number, number];
                return value >= min && value <= max;
              }
              return false;
            }else if (key === 'num_players'){
              if(Array.isArray(value)){
                const criteriaNumbers = (criterion as string[]).map(Number);
                return (value as number[]).some(val => criteriaNumbers.includes(val));
              }
            } else if (['theme','category','background'].includes(key)) {
              // Handle list of acceptable players
              if (Array.isArray(value)){
                return (value as string[]).some(val => (criterion as string[]).includes(val));
              }
              return false;
            } else {
              // Handle string arrays (type, category, background, difficulty, mod)
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
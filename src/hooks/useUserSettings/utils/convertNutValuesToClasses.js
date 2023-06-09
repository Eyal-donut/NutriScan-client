import { nutValues } from "../../../constants/constants";

//-1 is unknown, 1 is Zero, 2 is Low, 3 is Moderate, 4 is higher
export const convertNutValuesToClasses = (name, value) => {
  if (!value) {
    return undefined;
  } else
    switch (name) {
      case "Carbohydrates":
        if(value=== -1) return -1
        if (value === 0) return 1;
        if (value < nutValues.LOW_CARBS && value > 0) return 2;
        if (value >= nutValues.LOW_CARBS && value <= nutValues.MODERATE_CARBS)
          return 3;
        else return 4;
      case "Cholesterol":
        if(value=== -1) return -1
        if (value === 0) return 1;
        if (value < nutValues.LOW_CHOLESTEROL && value > 0) return 2;
        if (
          value >= nutValues.LOW_CHOLESTEROL &&
          value <= nutValues.MODERATE_CHOLESTEROL
          )
          return 3;
          else return 4;
          case "Fat":
            if(value=== -1) return -1
            if (value === 0) return 1;
            if (value < nutValues.LOW_FAT && value > 0) return 2;
            if (value >= nutValues.LOW_FAT && value <= nutValues.MODERATE_FAT)
            return 3;
            else return 4;
            case "Saturated fat":
        if(value=== -1) return -1
        if (value === 0) return 1;
        if (value < nutValues.LOW_SAT_FAT && value > 0) return 2;
        if (
          value >= nutValues.LOW_SAT_FAT &&
          value <= nutValues.MODERATE_SAT_FAT
          )
          return 3;
          else return 4;
          case "Sodium":
        if(value=== -1) return -1
        if (value === 0) return 1;
        if (value < nutValues.LOW_SALT && value > 0) return 2;
        if (value >= nutValues.LOW_SALT && value <= nutValues.MODERATE_SALT)
        return 3;
        else return 4;
        case "Sugar":
          if(value=== -1) return -1
          if (value === 0) return 1;
        if (value < nutValues.LOW_SUGAR && value > 0) return 2;
        if (value >= nutValues.LOW_SUGAR && value <= nutValues.MODERATE_SUGAR)
          return 3;
        else return 4;
      default:
        return;
    }
};

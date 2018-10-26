using System;
using System.Collections.Generic;
using ChipsNameSpace;

public class ChipsService {

    public IEnumerable<Chips> getAllChips(){
        List<Chips> chipsList = new List<Chips>();
        
        Chips temp1 = new Chips{
            name = "Sourcreame",
            brand = "Estrella",
            releaseDate = DateTime.Now,
            imageURL = "estrella-sourcreme.jpg",
            limitedEdition = false,
            nutritiveValue = new NutritiveValue {
                Energy = 550,
                Carbohydrates = 55,
                Fat = 53,
                Protein = 6,
                Salt = 1.2
            }
        };
        Chips temp2 = new Chips{
            name = "Grillchips",
            brand = "Estrella",
            releaseDate = DateTime.Now,
            imageURL = "estrella-grill.jpg",
            limitedEdition = false,
            nutritiveValue = new NutritiveValue {
                Energy = 550,
                Carbohydrates = 55,
                Fat = 53,
                Protein = 6,
                Salt = 1.2
            }
        };
        Chips temp3 = new Chips{
            name = "Sourcreme",
            brand = "OLW",
            releaseDate = DateTime.Now,
            imageURL = "olw-sourcreme.jpg",
            limitedEdition = false,
            nutritiveValue = new NutritiveValue {
                Energy = 550,
                Carbohydrates = 55,
                Fat = 53,
                Protein = 6,
                Salt = 1.2
            }
        };
        chipsList.Add(temp1);
        chipsList.Add(temp2);
        chipsList.Add(temp3);
        
        return chipsList;

    }
}
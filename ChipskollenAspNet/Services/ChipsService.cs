using ChipskollenAspNet.Enums;
using ChipsNameSpace;
using System;
using System.Collections.Generic;

public class ChipsService
{

    public IEnumerable<Chips> GetAllChips()
    {

        var listOfChips = new List<Chips>();

        listOfChips.Add(new Chips
        {
            Id = 1,
            Name = "Sourcreame",
            Brand = Brand.Estrella,
            ReleaseDate = DateTime.Now,
            ImageUrl = "estrella-sourcreme.jpg",
            LimitedEdition = false,
            NutritiveValue = new NutritiveValue
            {
                Energy = 550,
                Carbohydrates = 55,
                Fat = 53,
                Protein = 6,
                Salt = 1.2
            }
        });

        listOfChips.Add(new Chips
        {
            Id = 2,
            Name = "Grillchips",
            Brand = Brand.Estrella,
            ReleaseDate = DateTime.Now,
            ImageUrl = "estrella-grill.jpg",
            LimitedEdition = false,
            NutritiveValue = new NutritiveValue
            {
                Energy = 550,
                Carbohydrates = 55,
                Fat = 53,
                Protein = 6,
                Salt = 1.2
            }
        });

        listOfChips.Add(new Chips
        {
            Id = 3,
            Name = "Sourcreme",
            Brand = Brand.OLW,
            ReleaseDate = DateTime.Now,
            ImageUrl = "olw-sourcreme.jpg",
            LimitedEdition = false,
            NutritiveValue = new NutritiveValue
            {
                Energy = 550,
                Carbohydrates = 55,
                Fat = 53,
                Protein = 6,
                Salt = 1.2
            }
        });

        return listOfChips;
    }
}
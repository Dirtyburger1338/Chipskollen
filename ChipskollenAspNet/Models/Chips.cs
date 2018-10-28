using ChipskollenAspNet.Enums;
using System;

namespace ChipsNameSpace
{
    public class Chips
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public Brand Brand { get; set; }
        public string ImageUrl { get; set; }
        public DateTime ReleaseDate { get; set; }
        public bool LimitedEdition { get; set; }
        public DateTime LimitedStart { get; set; }
        public DateTime LimitedEnd { get; set; }
        public NutritiveValue NutritiveValue { get; set; }
    }
}
using System;
namespace ChipsNameSpace
{
    public class Chips
    {
    public string name {get;set;}
    public string brand {get;set;}
    public string imageURL {get;set}
    public DateTime releaseDate {get;set;}
    public bool limitedEdition {get;set;}
    public DateTime limitedStart {get;set;}
    public DateTime limitedEnd {get;set;}
    public NutritiveValue nutritiveValue {get;set;}
    }
}
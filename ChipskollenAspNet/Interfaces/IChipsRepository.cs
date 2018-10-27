using ChipsNameSpace;
using System.Collections.Generic;

namespace ChipskollenAspNet.Interfaces
{
    public interface IChipsRepository
    {
        Chips GetChips(int chipsId);

        IEnumerable<Chips> GetChips();

    }
}
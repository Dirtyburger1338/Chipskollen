using ChipskollenAspNet.Interfaces;
using ChipsNameSpace;
using System.Collections.Generic;
using System.Linq;

namespace ChipskollenAspNet.Services
{
    public class ChipsRepository : IChipsRepository
    {
        private ChipsService _chipsService;

        public ChipsRepository(ChipsService chipsService)
        {
            _chipsService = chipsService;
        }

        public bool ChipsExists(int chipsId)
        {
            return _chipsService.GetAllChips().Where(c => c.Id == chipsId).Any();
        }

        public Chips GetChips(int chipsId)
        {
            return _chipsService.GetAllChips().Where(c => c.Id == chipsId).FirstOrDefault();
        }

        public IEnumerable<Chips> GetChips()
        {
            return _chipsService.GetAllChips().ToList();
        }
    }
}
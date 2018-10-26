using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ChipsNameSpace;
using Microsoft.AspNetCore.Mvc;

namespace ChipskollenAspNet.Controllers
{
    [Route("api/[controller]")]
    public class ChipsController : Controller
    {    
        ChipsService _ChipsService = new ChipsService();

        [HttpGet("[action]")]
        public IEnumerable<Chips> getChips()
        {
            return _ChipsService.getAllChips();

            }
            
        }  
    }
}

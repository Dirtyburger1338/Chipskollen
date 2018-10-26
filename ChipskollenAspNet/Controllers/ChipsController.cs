using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ChipskollenAspNet.Controllers
{
    [Route("api/[controller]")]
    public class ChipsController : Controller
    {    
        [HttpGet("[action]")]
        public IEnumerable<Chips> getChips()
        {
            return new Chips(){
                
            }
            
        }  
    }
}

using ChipskollenAspNet.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;

namespace ChipskollenAspNet.Controllers
{
    [Route("api/chips")]
    public class ChipsController : Controller
    {
        private IChipsRepository _repository;

        public ChipsController(IChipsRepository repository)
        {
            _repository = repository;
        }

        [HttpGet()]
        public IActionResult GetChips()
        {
            try
            {
                var result = _repository.GetChips();
                if (result == null)
                {
                    return NotFound("No chips found.");
                }

                return Ok(result);
            }
            catch (Exception)
            {
                return StatusCode(500, "Something happened while handling your request.");
            }
        }

        [HttpGet("{chipsId}")]
        public IActionResult GetChips(int chipsId)
        {
            try
            {
                var result = _repository.GetChips(chipsId);
                if (result == null)
                {
                    return NotFound($"No chips found with id {chipsId}.");
                }

                return Ok(result);
            }
            catch (Exception)
            {
                return StatusCode(500, "Something happened while handling your request.");
            }
        }
    }  
}
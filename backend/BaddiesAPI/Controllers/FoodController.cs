using BaddiesAPI.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BaddiesAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FoodController : ControllerBase
    {
        private FoodDbContext context;
        public FoodController(FoodDbContext temp)
        {
            context = temp;
        }

        public IEnumerable<MariottFood> Get()
        {
            var x = context.Foods.ToArray();
            return context.Foods.Where(f => f.Edited == "Yes").OrderBy(f=>f.Title).ToArray();
        }

    }
}

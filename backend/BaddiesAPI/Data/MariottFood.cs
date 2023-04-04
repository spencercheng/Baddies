﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BaddiesAPI.Data
{
    public class MariottFood
    {   
        
        
        [Key]
        public int MovieId { get; set; }
        public string Category { get; set; }
        public string Title { get; set; }

        public float Year { get; set; }

        public string Director { get; set; }

        public string Rating { get; set; }

        public string Edited { get; set; }

        public string LentTo { get; set; }

        public string Notes { get; set; }
    }
}

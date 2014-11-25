using System;
using System.Collections.Generic;


namespace WebInfo.Models.Domain
{
    public class Category : Entity<int>
    {
        public string Name { get; set; }
        public IList<Category> Subcategories { get; set; }

        public Category(int id)
        {
            this.Id = id;
            Subcategories = new List<Category>();
        }

        public Category() //required for EF
        {
        }
    }
}
using System;
using System.Collections.Generic;


namespace WebInfo.Models.Domain
{
    public class Category : Entity<int>
    {
        public string Name { get; set; }
        public String Slug { get; set; }
        public String InfoContent { get; set; }
        public IList<Category> Subcategories { get; set; }

        public Category() //required for EF
        {
        }
        public Category(int id)
        {
            this.Id = id;
            Subcategories = new List<Category>();
        }
        public static Category Create()
        {
            var category = new Category(0);
            return category;
        }

        public void Update(string NewName)
        {
            Name = NewName;
        }



    }
}
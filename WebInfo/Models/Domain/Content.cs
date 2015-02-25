using System;


namespace WebInfo.Models.Domain

{
    public class Content : Entity<object>
    {
        public Content()
        {

        }
        
        public String Title { get; set; }
        public String InfoContent { get; set; }
        public Boolean Pinned { get; set; }
        public DateTime Published_at { get; set; }
        public DateTime Updated_at { get; set; }
        public String Author { get; set; }
        public Category Category {get; set;}

    }
}

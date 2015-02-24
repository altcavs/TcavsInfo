using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebInfo.Models.Shell
{
    // класс отвечающий за sidebar
    public class Sidebar
    {
        public string Name { get; set; }
        public IList<Menu> Menus { get; set; }

    }

    public class Menu
    {
        public string Name { get; set; }
        public IList<Submenu> Submenus { get; set; }

        public string State { get; set; }
 
    }

    public class Submenu
    {
        public string Name { get; set; }

        public string State { get; set; }

    }


}
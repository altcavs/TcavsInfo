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

        // фабричный метод
        public static Sidebar Create()
        {
            

            var submenu_staff = new Submenu[] {
                new Submenu {Name = "Учет персональных данных"},
                new Submenu {Name = "Учет движения кадров"},
                new Submenu {Name = "Настройка графиков работы"}
                };

            var submenu_salary = new Submenu[] {
                new Submenu {Name = "Учет персональных данных"},
                new Submenu {Name = "Учет движения кадров"},
                new Submenu {Name = "Настройка графиков работы"}
                };

            var menus = new Menu[] {
                new Menu {Name = "Кадры",Submenus = submenu_staff},
                new Menu {Name = "Зарплата",Submenus =submenu_salary}
                };

            var sidebar = new Sidebar { Name = "Зарплата", Menus = menus };

            return sidebar;
        }

    }

    public class Menu
    {
        public string Name { get; set; }
        public IList<Submenu> Submenus { get; set; }
 
    }

    public class Submenu
    {
        public string Name { get; set; }

    }


}
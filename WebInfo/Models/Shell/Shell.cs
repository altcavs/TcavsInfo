using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


namespace WebInfo.Models.Shell
{
    public class Shell
    {
        public IList<Sidebar> Sidebars { get; set; }

        // фабричный метод
        public static Shell Create()
        {
            // Новости
            var sbNews = new Sidebar { Name = "Новости" };
            
            var smNews = new Submenu[] {
                new Submenu {Name = "Зарплата и кадры"},
                new Submenu {Name = "Документооборот"}
                };

            var mNews = new Menu { Name = "Новости", State = "news"};
            mNews.Submenus = smNews;

            sbNews.Menus = new Menu[] { mNews };

            // Зарплата и Кадры
            var sidebar = new Sidebar { Name = "Зарплата и Кадры" };
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
                new Menu {Name = "Кадры", State = "staff",Submenus = submenu_staff},
                new Menu {Name = "Зарплата",Submenus =submenu_salary}
                };

            sidebar.Menus = menus;

            // Документооборот
            var sbDoc = new Sidebar { Name = "Документооборот" };

            // Shell
            var sidebars = new Sidebar[] { sbNews, sidebar };
            var shell = new Shell { Sidebars = sidebars };
            return shell;
        }
    }
}

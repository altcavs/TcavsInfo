﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

using WebInfo.Models.Shell;

namespace WebInfo.Controllers
{
    public class ShellController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "ТЦАВС ИНФО";

            return View();
        }
        public ActionResult Shell()
        {
             return View();
        }
        public ActionResult Menu()
        {

       
            return PartialView();
        }
        public ActionResult Sidebar()
        {
            //var submenu_staff = new Category [] {
            //    new Category {Name = "Учет персональных данных",Subcategories = new Category[0]},
            //    new Category {Name = "Учет движения кадров",Subcategories = new Category[0]},
            //    new Category {Name = "Настройка графиков работы",Subcategories = new Category[0]}
            //    };
            //var submenu_salary = new Category[] {
            //    new Category {Name = "Учет персональных данных",Subcategories = new Category[0]},
            //    new Category {Name = "Учет движения кадров",Subcategories = new Category[0]},
            //    new Category {Name = "Настройка графиков работы",Subcategories = new Category[0]}
            //    };
            //var submenu = new Category[] {
            //    new Category {Name = "Кадры",Subcategories = submenu_staff},
            //    new Category {Name = "Зарплата",Subcategories =submenu_salary}
            //    };

             return PartialView(WebInfo.Models.Shell.Sidebar.Create());
        }
        public ActionResult Login()
        {
            return View();
        }
        public ActionResult News()
        {
            return View();
        }
        public ActionResult Test()
        {
            return View();
        }

    }
}

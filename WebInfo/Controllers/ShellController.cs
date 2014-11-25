using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

using WebInfo.Models.Domain;

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
            var submenu_staff = new Category [] {
                new Category {Name = "Учет персональных данных",Subcategories = new Category[0]},
                new Category {Name = "Учет движения кадров",Subcategories = new Category[0]},
                new Category {Name = "Настройка графиков работы",Subcategories = new Category[0]}
                };


            return PartialView(submenu_staff);
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

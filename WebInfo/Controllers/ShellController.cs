using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

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
            return PartialView();
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

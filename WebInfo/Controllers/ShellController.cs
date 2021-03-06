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
        private Shell shell;
        public ShellController()
        {
            shell = WebInfo.Models.Shell.Shell.Create();
        }
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
             return PartialView(shell.Sidebars);
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
        public ActionResult Staff()
        {
            return PartialView();
        }
        public ActionResult ContentList()
        {
            return PartialView();
        }

    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BodyHunkGym.Controllers
{
    public class BlogController : Controller
    {
        bodyhunksEntities1 obj = new bodyhunksEntities1();
        public ActionResult Index()
        {

            return View();
        }

        public ActionResult CreateBlog()
        {
            return View();
        }
        [HttpGet]
        public ActionResult GetBlogs()
        {
            return View(obj.Blogs.ToList());
        }
        [HttpPost]
        public ActionResult CreateBlogs(Blog model)
        {
            try
            {
                Blog blog = new Blog();
                blog.blog_text = model.blog_text;
                blog.blog_heading = model.blog_heading;
                blog.blog_img = model.blog_img;
                blog.blog_owner = model.blog_owner;
                obj.Blogs.Add(blog);
                obj.SaveChanges();
                return RedirectToAction("GetBlogs");

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
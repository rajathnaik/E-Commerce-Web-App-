using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QuickKartDataAccessLayer;
using QuickKartDataAccessLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuickKartWebServices.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ProductsController : Controller
    {
        QuickKartRepository repository;
        public ProductsController()
        {
            repository = new QuickKartRepository();
        }

        [HttpGet]
        #region Get Products List Request
        public JsonResult GetProducts()
        {
            List<Products> productList = new List<Products>();
            try
            {
                productList = repository.GetAllProducts();
                return Json(productList);
            }
            catch (Exception)
            {
                return Json(null);
            }
        }
        #endregion

    }

}

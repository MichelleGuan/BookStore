using BookStore.entity;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Web;

namespace BookStore.data
{
    /// <summary>
    /// Login 的摘要说明
    /// </summary>
    public class Login : IHttpHandler
    {

       public void ProcessRequest(HttpContext context)
        {
            List<User> list = new List<User>()
            {
                 new User(){ Id="guanran", Pw="2222",Phone="18018924665",Email="975684953@qq.com"},
                 new User(){ Id="lixingchen", Pw="110",Phone="110",Email="110@qq.com"},
                 new User(){ Id="admin", Pw="admin",Phone="admin",Email="admin@qq.com"}
            };
            string[] s = File.ReadAllLines(PathConfig.UserPath, Encoding.UTF8);
            foreach (var item in s)
            {
                User user = new User();
                var u = item.Split(',');
                user.Id = u[0].Split('=')[1];
                user.Pw = u[1].Split('=')[1];
                user.Phone = u[2].Split('=')[1];
                user.Email = u[3].Split('=')[1];
                list.Add(user);
            }


            context.Response.ContentType = "text/plain";
            string id = context.Request.QueryString["id"];
            string pw = context.Request.QueryString["pw"];
            int result = 0;
            foreach (var item in list)
            {
                if (item.Id == id && item.Pw == pw)
                {
                    result = 1;
                    break;
                }
            }
            context.Response.Write(result);
        }
        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}
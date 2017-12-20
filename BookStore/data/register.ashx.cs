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
    /// register 的摘要说明
    /// </summary>
    public class register : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {

            context.Response.ContentType = "text/plain";
            string total = context.Request.QueryString["Total"];
            var user = total.Split(',');
            var atrrName = new List<string>() { "id", "pw", "phone", "email" };
            StringBuilder str = new StringBuilder();
            for (int i = 0; i < user.Length; i++)
            {
                if (i == 0)
                {
                    str.Append(atrrName[i] + "=" + user[i]);
                }
                else
                {
                    str.Append("," + atrrName[i] + "=" + user[i]);
                }

            }
            string res = str.ToString();

            string[] s = File.ReadAllLines(PathConfig.UserPath, Encoding.UTF8);
            StringBuilder str2 = new StringBuilder();
            foreach (var item in s)
            {
                str2.Append(item + "\n");
            }
            str2.Append(str);

        
            try
            {
                File.WriteAllText(PathConfig.UserPath, str2.ToString());
                context.Response.Write(1);
            }
            catch (Exception)
            {
                context.Response.Write(2);
            }

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
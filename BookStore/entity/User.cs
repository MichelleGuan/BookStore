using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BookStore.entity
{
    [Serializable]
    public class User
    {
        public string Id;
        public string Pw;
        public string Phone;
        public string Email;
    }

    public static class UserSerializable
    {
        public static void FirstCreate()
        {

        }
    }
}
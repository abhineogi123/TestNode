using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Text;

namespace TestConsoleApp.Tasks
{
    public class Task2
    {
        private string strAppContext = "";
        public Task2(string appContext)
        {
            strAppContext = appContext;
        }

        public void TestMethod1(string methodParams)
        {
            JObject objParams = JObject.Parse(methodParams);
            Console.Out.WriteLine("***Task2.TestMethod1() executed***");
        }
    }
}

using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Text;

namespace TestConsoleApp.Tasks
{
    public class Task1
    {
       private string strAppContext = "";
       public Task1(string appContext)
       {
            strAppContext = appContext;
       }

        public void TestMethod1(string methodParams)
        {
            JObject objParams = JObject.Parse(methodParams);
            Console.Out.WriteLine(objParams["param1"]);
        }
        public void TestMethod2(string methodParams)
        {
            JObject objParams = JObject.Parse(methodParams);
            Console.Out.WriteLine(objParams["param1"]);
        }

    }
}

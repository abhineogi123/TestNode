using Newtonsoft.Json.Linq;
using System;
using System.IO;

namespace TestConsoleApp
{
    class Program
    {

        static void Main(string[] args)
        {
            string line;
            if (args.Length > 0)
                Console.WriteLine(args[0]);
            
            do
            {
                line = Console.ReadLine();
                try
                {
                    JObject objArgs = JObject.Parse(line);

                    TaskSelector task = new TaskSelector(objArgs["className"]?.ToString(), objArgs["methodName"]?.ToString(), (JObject)objArgs["methodParams"]);
                    task.ActionBlock();

                }
                catch (Exception e)
                {
                    Console.Out.WriteLine(e);
                }
            } while (line != null);
        }
        //static public void TaskExecutor(string strArgs)
        //{
            
        //    var objArgs = (JObject)strArgs;
        //    Console.WriteLine(objArgs);
        //    //TaskSelector task = new TaskSelector(objArgs["className"]?.ToString(), objArgs["methodName"]?.ToString(), (JObject)objArgs["methodParams"]);
        //    //task.ActionBlock();
        //}
    }
   
}

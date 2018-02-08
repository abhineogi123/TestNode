using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text;

namespace TestConsoleApp
{
    public class TaskSelector
    {
        public string strClassName="";
        public string strMethodName = "";
        public JObject strObjMethodParams = null;
        public string contextPlaceholder = "example context";

        public TaskSelector(string strProcessClassName, string strProcessMethodName, JObject objProcessMethodParamsArr)
        {
            strClassName = strProcessClassName;
            strMethodName = strProcessMethodName;
            strObjMethodParams = objProcessMethodParamsArr;
        }
        
        public void ActionBlock()
        {
            try
            {
                Type objType = Type.GetType(strClassName);
                object objInstance = Activator.CreateInstance(objType, new object[] { contextPlaceholder });
                MethodInfo objMethodPointer = objType.GetMethod(strMethodName, BindingFlags.NonPublic | BindingFlags.Public | BindingFlags.Instance);
                
                if(objMethodPointer.GetParameters().Length > 0)
                {
                    objMethodPointer.Invoke(objInstance, new object[] { strObjMethodParams.ToString() });
                }
                else
                {
                    objMethodPointer.Invoke(objInstance, null);
                }
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }
    }
}

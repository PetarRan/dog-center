using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace webAPIDogly
{
    abstract class Func
    {

        public static string Encodepass(string password)
        {
            string msg = "";
            byte[] encode = new byte[password.Length];
            encode = Encoding.UTF8.GetBytes(password);
            msg = Convert.ToBase64String(encode);
            return msg;
        }
        public static string Decryptdata(string decryptPwd)
        {
            string decryptpwd = string.Empty;
            UTF8Encoding encodepwd = new UTF8Encoding();
            Decoder Decode = encodepwd.GetDecoder();
            byte[] todecode_byte = Convert.FromBase64String(decryptPwd);
            int charCount = Decode.GetCharCount(todecode_byte, 0, todecode_byte.Length);
            char[] decoded_char = new char[charCount];
            Decode.GetChars(todecode_byte, 0, todecode_byte.Length, decoded_char, 0);
            decryptpwd = new String(decoded_char);
            return decryptpwd;
        }
        public static string CreateToken(string username,string conf)
        {


            DateTime date1 = DateTime.Now;
            date1 = date1.AddHours(2);
           // DateTimeOffset dateOffset = new DateTimeOffset(date1, TimeZoneInfo.Local.GetUtcOffset(date1));
            string LogInCookie = "";
            //string expires = dateOffset.ToUniversalTime().ToString("r");
            LogInCookie = "{ \"user\": \""+username+"\","+ "\"exp\": \"" + date1+"\" , \"conf\" : \""+conf+ "\" }";
            return LogInCookie;
        }
        public static string GetUsernameFromToken(string token){
            String[] str = token.Split('_');
            return str[0];
        }
        public static bool isTokenValid(string token)
        {

            DateTime expdate = new DateTime();
            String[] str = token.Split('_');
            foreach (String el in str)
            {
                if (el.StartsWith("expires"))
                {
                    String[] spstr = el.Split('=');
                    expdate = Convert.ToDateTime(spstr[1]);
                }

            }
            return expdate > DateTime.Now; // true ako je validan, false ako nije 
        }
        public static void sendMail(string message,string email,string lang) //Smrt123nici123
        {
            #region formatter
            string text = "Reset your password by clicking this link: \"http://127.0.0.1:5500/password_recovery.html?email=\"+email+\"&lang="+lang;
            string html = "<p>Reset your password by clicking this link: <a href= \"http://127.0.0.1:5500/password_recovery.html?email=\"+email+\"&lang="+lang +"> click me to recover password </a></p>";

            
            html += HttpUtility.HtmlEncode("@a");
            #endregion

            MailMessage msg = new MailMessage();
            msg.From = new MailAddress("doglydogly7@gmail.com");
            msg.To.Add(new MailAddress(email));
            msg.Subject = "Password recovery";
            msg.Body = message;
            //msg.AlternateViews.Add(AlternateView.CreateAlternateViewFromString(text, null, MediaTypeNames.Text.Plain));
            //msg.AlternateViews.Add(AlternateView.CreateAlternateViewFromString(html, null, MediaTypeNames.Text.Html));

            SmtpClient smtpClient = new SmtpClient("smtp.gmail.com", Convert.ToInt32(587));
            smtpClient.DeliveryMethod = SmtpDeliveryMethod.Network;    
            smtpClient.UseDefaultCredentials = false; 
            System.Net.NetworkCredential credentials = new System.Net.NetworkCredential("doglydogly7@gmail.com", "Smrt123nici123");
            smtpClient.Credentials = credentials;
            smtpClient.EnableSsl = true;
            smtpClient.Send(msg);
        }
        public static bool DateComparator(string datefirst, string datesec){
            String[] prvi = datefirst.Split("/");
            String[] drugi = datesec.Split("/");
            if(  Int32.Parse(prvi[2]) == Int32.Parse(drugi[2]))
                {
                     if(  Int32.Parse(prvi[0]) == Int32.Parse(drugi[0])){
                          if(  Int32.Parse(prvi[1]) >= Int32.Parse(drugi[1])){
                                    return true;
                            }
                            else{
                                return false;
                            }
                     }
                     else if( Int32.Parse(prvi[0]) > Int32.Parse(drugi[0])){
                         return true;
                     }
                     else{
                         return false;
                     }
                }
            else if(Int32.Parse(prvi[2]) > Int32.Parse(drugi[2])){
                return true;
                
            }
            else{
                return false;
            }
        }


    }
}

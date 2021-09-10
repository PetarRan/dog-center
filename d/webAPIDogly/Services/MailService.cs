using System.IO;
using System.Threading.Tasks;
using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.Extensions.Options;
using MimeKit;
using webAPIDogly.Models;
using webAPIDogly.Settings;

namespace webAPIDogly.Services
{
    public class MailService : IMailService
    {
        private readonly MailSettings _mailSettings;
        public MailService(IOptions<MailSettings> mailSettings)
        {
            _mailSettings = mailSettings.Value;
        }

        public async Task SendEmailAsync(MailRequest mailRequest)
        {
            var email = new MimeMessage();
            email.Sender = MailboxAddress.Parse(_mailSettings.Mail);
            email.To.Add(MailboxAddress.Parse(mailRequest.ToEmail));
            email.Subject = mailRequest.Subject;
            var builder = new BodyBuilder();
            if (mailRequest.Attachments != null)
            {
                byte[] fileBytes;
                foreach (var file in mailRequest.Attachments)
                {
                    if (file.Length > 0)
                    {
                        using (var ms = new MemoryStream())
                        {
                            file.CopyTo(ms);
                            fileBytes = ms.ToArray();
                        }
                        builder.Attachments.Add(file.FileName, fileBytes, ContentType.Parse(file.ContentType));
                    }
                }
            }
            builder.HtmlBody = mailRequest.Body;
            email.Body = builder.ToMessageBody();
            using var smtp = new SmtpClient();
            smtp.Connect(_mailSettings.Host, _mailSettings.Port, SecureSocketOptions.StartTls);
            smtp.Authenticate(_mailSettings.Mail, _mailSettings.Password);
            await smtp.SendAsync(email);
            smtp.Disconnect(true);
        }

        public async Task SendWelcomeEmailAsync(string usemail, string username , string lang)
        {
            string FilePath = Directory.GetCurrentDirectory() + "\\Templates\\WelcomeTemplateTwo.html";
            StreamReader str = new StreamReader(FilePath);
            string MailText = str.ReadToEnd(); 
            str.Close();
            string linkrel = "\"http://127.0.0.1:5501/login.html?con=true&lang="+lang+"\""; 
            MailText = MailText.Replace("[username]", username).Replace("[link]",linkrel);
            var email = new MimeMessage();
            email.Sender = MailboxAddress.Parse(_mailSettings.Mail);
            email.To.Add(MailboxAddress.Parse(usemail));
            email.Subject = $"Welcome {username}";
            var builder = new BodyBuilder();
            builder.HtmlBody = MailText;
            email.Body = builder.ToMessageBody();
            using var smtp = new SmtpClient();
            smtp.Connect(_mailSettings.Host, _mailSettings.Port, SecureSocketOptions.StartTls);
            smtp.Authenticate(_mailSettings.Mail, _mailSettings.Password);
            await smtp.SendAsync(email);
            smtp.Disconnect(true);
        }
        public async Task SendForgottenPassAsync(string usemail, string username , string lang)
        {
            string FilePath = Directory.GetCurrentDirectory() + "\\Templates\\ForgPass.html";
            StreamReader str = new StreamReader(FilePath);
            string MailText = str.ReadToEnd(); 
            str.Close();
            string linkrel = "\"http://127.0.0.1:5500/forgotpass.html?email="+usemail+"&con=true&lang="+lang+"\""; 
            MailText = MailText.Replace("[username]", username).Replace("[link]",linkrel);
            var email = new MimeMessage();
            email.Sender = MailboxAddress.Parse(_mailSettings.Mail);
            email.To.Add(MailboxAddress.Parse(usemail));
            email.Subject = $"Forgoten password for account, {username}";
            var builder = new BodyBuilder();
            builder.HtmlBody = MailText;
            email.Body = builder.ToMessageBody();
            using var smtp = new SmtpClient();
            smtp.Connect(_mailSettings.Host, _mailSettings.Port, SecureSocketOptions.StartTls);
            smtp.Authenticate(_mailSettings.Mail, _mailSettings.Password);
            await smtp.SendAsync(email);
            smtp.Disconnect(true);
        }
        public async Task SendUrgent(string usemail, string username , string lang){
             string FilePath = Directory.GetCurrentDirectory() + "\\Templates\\HitanOglas.html";
            StreamReader str = new StreamReader(FilePath);
            string MailText = str.ReadToEnd(); 
            str.Close();
            string linkrel = "\"http://127.0.0.1:5500/index.html?lang="+lang+"\""; 
            MailText = MailText.Replace("[username]", username).Replace("[link]",linkrel);
            var email = new MimeMessage();
            email.Sender = MailboxAddress.Parse(_mailSettings.Mail);
            email.To.Add(MailboxAddress.Parse(usemail));
            email.Subject = $"Information mail, Urgent add was posted!";
            var builder = new BodyBuilder();
            builder.HtmlBody = MailText;
            email.Body = builder.ToMessageBody();
            using var smtp = new SmtpClient();
            smtp.Connect(_mailSettings.Host, _mailSettings.Port, SecureSocketOptions.StartTls);
            smtp.Authenticate(_mailSettings.Mail, _mailSettings.Password);
            await smtp.SendAsync(email);
            smtp.Disconnect(true);

        }
        // public async Task SendWelcomeEmailAsync(WelcomeRequest request)
        // {
        //     string FilePath = Directory.GetCurrentDirectory() + "\\Templates\\WelcomeTemplate.html";
        //     StreamReader str = new StreamReader(FilePath);
        //     string MailText = str.ReadToEnd();
        //     str.Close();
        //     MailText = MailText.Replace("[username]", request.UserName).Replace("[email]", request.ToEmail);
        //     var email = new MimeMessage();
        //     email.Sender = MailboxAddress.Parse(_mailSettings.Mail);
        //     email.To.Add(MailboxAddress.Parse(request.ToEmail));
        //     email.Subject = $"Welcome {request.UserName}";
        //     var builder = new BodyBuilder();
        //     builder.HtmlBody = MailText;
        //     email.Body = builder.ToMessageBody();
        //     using var smtp = new SmtpClient();
        //     smtp.Connect(_mailSettings.Host, _mailSettings.Port, SecureSocketOptions.StartTls);
        //     smtp.Authenticate(_mailSettings.Mail, _mailSettings.Password);
        //     await smtp.SendAsync(email);
        //     smtp.Disconnect(true);
        // }

    }
}
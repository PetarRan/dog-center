using System.Threading.Tasks;
using webAPIDogly.Models;

namespace webAPIDogly.Services
{
    public interface IMailService
    {
        Task SendEmailAsync(MailRequest mailRequest);
        Task SendWelcomeEmailAsync(string ToemailAd, string ToUsername, string ToLang);
        Task SendForgottenPassAsync(string usemail, string username , string lang);
         Task SendUrgent(string usemail, string username , string lang);
    }
}
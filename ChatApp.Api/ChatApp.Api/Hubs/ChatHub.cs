using ChatApp.Api.Models;
using Microsoft.AspNetCore.SignalR;

namespace ChatApp.Api.Hubs
{
    public class ChatHub : Hub
    {
        public async Task JoinChat(UserConnnection connection)
        {
            await Clients.All.SendAsync("RecieveMessage", "admin", $"{connection.UserName} has joined.");

        }
        public async Task JoinSpecificChatRoom(UserConnnection connnection)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, connnection.ChatRoom);
            await Clients.Group(connnection.ChatRoom)
                .SendAsync("RecieveMessage", "admin", $"{connnection.UserName} has joined {connnection.ChatRoom}");
        }
    }
}

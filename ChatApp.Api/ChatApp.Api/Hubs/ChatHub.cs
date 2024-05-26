using ChatApp.Api.Models;
using ChatApp.Api.NewFolder;
using Microsoft.AspNetCore.SignalR;

namespace ChatApp.Api.Hubs
{
    public class ChatHub : Hub
    {
        private readonly SharedDb _shared;

        public ChatHub(SharedDb shared) => _shared = shared;
        public async Task JoinChat(UserConnnection connection)
        {
            await Clients.All.SendAsync("RecieveMessage", "admin", $"{connection.UserName} has joined.");

        }
        public async Task JoinSpecificChatRoom(UserConnnection connnection)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, connnection.ChatRoom);

            _shared.connection[Context.ConnectionId] = connnection;
            
            await Clients.Group(connnection.ChatRoom)
                .SendAsync("JoinSpecificChatRoom", "admin", $"{connnection.UserName} has joined {connnection.ChatRoom}");
        }

        public async Task SendMessage(string msg)
        {
            if(_shared.connection.TryGetValue(Context.ConnectionId, out UserConnnection conn))
            {
                await Clients.Group(conn.ChatRoom)
                    .SendAsync("ReceiveSpecificMessage", conn.UserName, msg);
            }
        }
    }
}

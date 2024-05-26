using ChatApp.Api.Models;
using System.Collections.Concurrent;

namespace ChatApp.Api.NewFolder
{
    public class SharedDb
    {
        private readonly ConcurrentDictionary<string, UserConnnection> _connections = new ConcurrentDictionary<string, UserConnnection>();
        public ConcurrentDictionary<string, UserConnnection> connection => _connections;
    }
}

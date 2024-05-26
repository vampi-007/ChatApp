using ChatApp.Api.Hubs;
using ChatApp.Api.NewFolder;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSignalR();

// Add CORS policy
builder.Services.AddCors(options =>
{
    options.AddPolicy("reactApp", builder =>
    {
        builder.SetIsOriginAllowedToAllowWildcardSubdomains()
               .WithOrigins("http://localhost:3000") // Removed trailing slash
               .AllowAnyMethod()
               .AllowCredentials()
               .AllowAnyHeader();
    });
});

builder.Services.AddSingleton<SharedDb>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// Use CORS before Authorization and other middlewares
app.UseCors("reactApp");

app.UseAuthorization();

app.MapControllers();
app.MapHub<ChatHub>("/Chat");

app.Run();

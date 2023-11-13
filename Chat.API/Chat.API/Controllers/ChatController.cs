using Chat.API.Dtos;
using Chat.API.Services;
using Microsoft.AspNetCore.Mvc;

namespace Chat.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ChatController : ControllerBase
{
    private readonly ChatService _chatService;
    public ChatController(ChatService chatService)
    {
        _chatService = chatService;   
    }
    [HttpPost("register-user")]
    public IActionResult RegisterUser(UserDto model)
    {
        if (_chatService.AddUserToList(model.Name))
        {
            return NoContent();
        }
        return BadRequest("This name is taken please choose another name.");
    }
}

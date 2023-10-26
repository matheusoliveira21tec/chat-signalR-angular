using System.ComponentModel.DataAnnotations;
namespace Chat.API.Dtos;
public class UserDto
{
    [Required]
    [StringLength(15, MinimumLength = 6, ErrorMessage = "Name must be at least  {2}, and maximum {1} characters")]
    public string Name { get; set; }
}

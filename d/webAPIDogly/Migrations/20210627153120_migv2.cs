using Microsoft.EntityFrameworkCore.Migrations;

namespace webAPIDogly.Migrations
{
    public partial class migv2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Address",
                table: "DogService",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PhoneNumber",
                table: "DogService",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Address",
                table: "DogService");

            migrationBuilder.DropColumn(
                name: "PhoneNumber",
                table: "DogService");
        }
    }
}

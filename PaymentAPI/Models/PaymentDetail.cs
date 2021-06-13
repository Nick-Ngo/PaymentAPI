using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PaymentAPI.Models
{
    [Table("PaymentDetails")]
    public class PaymentDetail
    {
        [Key]
        public int PaymentDetailId { get; set; }

        [Column(TypeName = "NVARCHAR(100)")]
        public string CardOwnerName { get; set; }

        [Column(TypeName = "NVARCHAR(16)")]
        public string CardNumber { get; set; }

        [Column(TypeName = "NVARCHAR(5)")]
        public string ExpirationDate { get; set; }

        [Column(TypeName = "NVARCHAR(3)")]
        public string SecurityCode { get; set; }
    }
}
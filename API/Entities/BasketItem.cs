using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    // Chaning table name to BaksetItems, that will be correct.
    [Table("BasketItems")]
    public class BasketItem
    {
        public int Id { get; set; }

        public int Quantity { get; set; }


        //Navigation properties
        public int ProductId { get; set; }
        public Product Product { get; set; }

        // relationship to the baset specified for cascade delete.
        public int BasketId { get; set; }
        public Basket Basket { get; set; }

    }
}
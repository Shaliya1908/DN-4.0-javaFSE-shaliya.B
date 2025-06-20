public class Main {
    public static void main(String[] args) {
        Product[] products = {
            new Product(1, "Laptop", "Electronics"),
            new Product(2, "Shirt", "Clothing"),
            new Product(3, "Book", "Education"),
            new Product(4, "Mobile", "Electronics")
        };

        Product result1 = LinearSearch.linearSearch(products, "Mobile");
        System.out.println("Linear Search Found: " + (result1 != null ? result1.productName : "Not Found"));

        Product result2 = BinarySearch.binarySearch(products, "Mobile");
        System.out.println("Binary Search Found: " + (result2 != null ? result2.productName : "Not Found"));
    }
}

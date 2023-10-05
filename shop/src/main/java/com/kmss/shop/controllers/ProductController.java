package com.kmss.shop.controllers;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.kmss.shop.entities.Product;
import com.kmss.shop.repositories.ProductRepository;
import com.kmss.shop.services.ProductService;

@RestController
@RequestMapping
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {
	@Autowired
    private ProductService productService; 

	@Autowired
	private ProductRepository productRepository;
	
	@GetMapping("/api/products")
    public ResponseEntity<List<Product>> listActiveProducts() {
        List<Product> activeProducts = productService.ListAllActiveProduct();
        activeProducts.sort((p1, p2) -> p2.getPostedDate().compareTo(p1.getPostedDate()));
        return ResponseEntity.ok(activeProducts);
    }
	
	@PostMapping("/api/products")
    public ResponseEntity<Product> createProduct(@RequestBody Product productRequest) {
        return productService.createProduct(productRequest);
    }
	
	@GetMapping("/api/products/{id}")
	public ResponseEntity<Product> getById(@PathVariable Long id) {
		return productService.getById(id);
	}
	
	@PutMapping("/api/products/{productId}")
	public Product update(@PathVariable Long productId, @RequestBody Product productDetail) {
		return productService.update(productId, productDetail);
	}
	@DeleteMapping("/api/products/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteById(@PathVariable Long id) {
		return productService.delete(id);
	}
	
	@GetMapping("/api/products/approval-queue")
    public ResponseEntity<List<Product>> listAllApprovalQueueProducts() {
        List<Product> activeProducts = productService.ListAllApprovalQueueProduct();
        activeProducts.sort((p1, p2) -> p2.getPostedDate().compareTo(p1.getPostedDate()));
        return ResponseEntity.ok(activeProducts);
    }
	@PutMapping("/api/products/{approvalId}/approve")
    public ResponseEntity<String> approveProduct(@PathVariable Long approvalId) {
        String result = productService.approveProduct(approvalId);
        return ResponseEntity.ok(result);
    }

    @PutMapping("/api/products/{approvalId}/reject")
    public ResponseEntity<String> rejectProduct(@PathVariable Long approvalId) {
        String result = productService.rejectProduct(approvalId);
        return ResponseEntity.ok(result);
    }
    @GetMapping("/api/products/search")
    public List<Product> searchProducts(
            @RequestParam(required = false) String productName,
            @RequestParam(required = false) Double minPrice,
            @RequestParam(required = false) Double maxPrice,
            @RequestParam(required = false) LocalDateTime minPostedDate,
            @RequestParam(required = false) LocalDateTime maxPostedDate) {

        List<Product> products = productRepository.findProductsByCriteria(
                productName, minPrice, maxPrice, minPostedDate, maxPostedDate);

        return products;
    }
	
}

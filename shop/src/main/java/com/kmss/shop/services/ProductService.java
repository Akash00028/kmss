package com.kmss.shop.services;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.kmss.shop.entities.Product;
import com.kmss.shop.exception.ResourseNotFoundException;
import com.kmss.shop.repositories.ProductRepository;

@Service
public class ProductService {
	
	@Autowired
	public ProductRepository productRepository;
	
	
	public List<Product> ListAllActiveProduct() {
		
		List<Product> product = productRepository.findAll();
		List<Product> activeProduct = new ArrayList<>();
		for(Product pro: product)
		{
			if(pro.getStatus().equals("Active"))
			{
				activeProduct.add(pro);
			}
		}
        return activeProduct ;
    }
	
	public ResponseEntity<Product> createProduct(Product productRequest) {
        
        if (productRequest.getPrice() > 10000.0) {
            return ResponseEntity.badRequest().body(productRequest);
        }

        Product product = new Product();
        product.setName(productRequest.getName());
        product.setPrice(productRequest.getPrice());
        product.setPostedDate(productRequest.getPostedDate());
        
        if (productRequest.getPrice() > 5000.0) {
            product.setStatus("Pending");
        } else {
            
        	product.setStatus("Active");
        }
        productRepository.save(product);

        return ResponseEntity.ok(product);
    }
	
	
	public ResponseEntity<Product> getById(Long id)
	{
		Product product = productRepository.findById(id).orElseThrow(() -> new ResourseNotFoundException("Product With" + id +"not found"));
		return ResponseEntity.ok(product);
		
	}
	
	 public Product update(Long productId, Product productDetails) {
		 Product product = productRepository.findById(productId).orElseThrow(() -> new ResourseNotFoundException("Product With" + productId +"not found"));

	        Double previousPrice = product.getPrice();
	        Double newPrice = productDetails.getPrice();
	        String st = product.getStatus();
	        if (newPrice > previousPrice * 1.5) {
	            product.setStatus("Pending");
	        }else
	        {
	        	product.setStatus(st);
	        }
	        product.setName(productDetails.getName());
	        product.setPrice(newPrice);

	        return productRepository.save(product);
	    }
	public ResponseEntity<Map<String, Boolean>> delete(Long id) {
		Product product = productRepository.findById(id).orElseThrow(() -> new ResourseNotFoundException("Product With" + id +"not found"));
		productRepository.delete(product);

		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	public List<Product> ListAllApprovalQueueProduct() {
		List<Product> product = productRepository.findAll();
		List<Product> activeProduct = new ArrayList<>();
		for(Product pro: product)
		{
			if(pro.getStatus().equals("Pending"))
			{
				activeProduct.add(pro);
			}
		}
        return activeProduct ;
    }
	
	public String approveProduct(Long approvalId ) {
	        Product product = productRepository.findById(approvalId).orElseThrow(() -> new ResourseNotFoundException("Product With" + approvalId +"not found"));
	        product.setStatus("Active");
	        productRepository.save(product);
	        return "Product approved successfully.";
	 }

    public String rejectProduct(Long approvalId) {
    	Product product = productRepository.findById(approvalId).orElseThrow(() -> new ResourseNotFoundException("Product With" + approvalId +"not found"));	    	
    	product.setStatus("Reject");
    	productRepository.save(product);
        return "Product rejected successfully.";
    }
}

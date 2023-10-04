package com.kmss.shop.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.info.License;
import io.swagger.v3.oas.annotations.servers.Server;

@OpenAPIDefinition(
		info =@Info(
				title = "Product adding operation",
				description = "doing crud with search",
				summary = "this Product api will all crud with aprove , reject and search",
				termsOfService = "T&C",
				contact = @Contact(
						name = "Akash",
						email = "akashshah00028@gmail.com"
						),
				license = @License(
						name = "your License No"
						),
				version = "v1"
				
				),
		servers = {
				@Server(
						description = "dev",
						url = "http://localhost:9090"
						)
		}
		
		)


public class SwaggerOpenApi {

}

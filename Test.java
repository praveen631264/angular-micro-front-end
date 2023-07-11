import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springdoc.core.customizers.OpenApiCustomiser;

import java.lang.reflect.Method;
import java.util.List;

@Configuration
public class SwaggerConfig {

    @Autowired
    private List<Metadata> metadataList;

    @Bean
    public OpenAPI customOpenAPI() {
        OpenAPI openAPI = new OpenAPI().info(new Info().title("API Documentation"));

        for (Metadata metadata : metadataList) {
            String endpoint = metadata.getEndpoint();
            String description = metadata.getDescription();

            openAPI.path(endpoint, createPathItemBuilder(description));
        }

        return openAPI;
    }

    private Consumer<io.swagger.v3.oas.models.Paths> createPathItemBuilder(String description) {
        return (path) -> {
            for (HttpMethod httpMethod : HttpMethod.values()) {
                Method method;
                try {
                    method = getClass().getDeclaredMethod("dummyMethod");
                } catch (NoSuchMethodException e) {
                    throw new RuntimeException(e);
                }

                path.addPathItem(httpMethod.name().toLowerCase(), createOperationBuilder(description, method));
            }
        };
    }

    private Consumer<io.swagger.v3.oas.models.Operation> createOperationBuilder(String description, Method method) {
        return (operation) -> {
            operation.setDescription(description);
            // Configure other properties of the operation if needed
        };
    }

    private void dummyMethod() {
        // This method is used to retrieve a Method instance for dynamic configuration
    }

    @Bean
    public OpenApiCustomiser customiser() {
        return openApi -> openApi.info(new Info().version("1.0"));
    }
}

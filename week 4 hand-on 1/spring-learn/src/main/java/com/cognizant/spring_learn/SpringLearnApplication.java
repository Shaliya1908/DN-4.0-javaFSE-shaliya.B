package com.cognizant.spring_learn;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import com.cognizant.spring_learn.model.Country;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@SpringBootApplication
public class SpringLearnApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnApplication.class);

    public static void main(String[] args) {
        LOGGER.info("START");

        SpringApplication.run(SpringLearnApplication.class, args);

        ApplicationContext context = new ClassPathXmlApplicationContext("beans.xml");
        Country country = (Country) context.getBean("country");
        LOGGER.debug("Country: {}", country);

        LOGGER.info("END");
    }
}

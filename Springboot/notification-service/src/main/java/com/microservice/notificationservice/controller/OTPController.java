package com.microservice.notificationservice.controller;

import com.microservice.notificationservice.EmailTemplate;
import com.microservice.notificationservice.ResponseMessage;
import com.microservice.notificationservice.service.EmailService;
import com.microservice.notificationservice.service.OTPServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/otp")
@CrossOrigin(origins = "*")
public class OTPController {

    @Autowired
    private EmailService emailService;

    @Autowired
    private OTPServiceImpl otpService;

    @Autowired
    RestTemplate restTemplate;

    @PostMapping("/generate")
    public ResponseEntity<Object> generateOTP(@RequestBody Map<String, Object> data) {
        String email = data.get("email").toString();

        int otp = otpService.generateOTP(email);

        EmailTemplate emailTemplate = new EmailTemplate("templates/OTP.html");

        Map<String, String> replacements = new HashMap<String, String>();
        replacements.put("user", email);
        replacements.put("otpnum", String.valueOf(otp));
        String message = emailTemplate.getTemplate(replacements);
        try {
            emailService.sendOTPMessage(email, "Tuition payment", message);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return ResponseMessage.createResponse(HttpStatus.OK, "Send email successfully", null);
    }

    @PostMapping("/validate")
    public ResponseEntity<Object> validateOTP(@RequestBody Map<String, Object> object) {
        final String SUCCESS = "Entered OTP is valid";
        final String FAILED = "Entered OTP is NOT valid, please retry!";

        int otp = (int) object.get("otp");
        String email = object.get("email").toString();

        if (otp >= 0) {
            int serverOTP = otpService.getOTP(email);
            if (serverOTP > 0) {
                if (otp == serverOTP) {
                    otpService.clearOTP(email, object);
                    return ResponseMessage.createResponse(HttpStatus.OK, SUCCESS, null);
                }
                return ResponseMessage.createResponse(HttpStatus.OK, FAILED, null);
            }
            return ResponseMessage.createResponse(HttpStatus.OK, FAILED, null);
        }
        return ResponseMessage.createResponse(HttpStatus.OK, FAILED, null);
    }

    @PostMapping("/send-email")
    public ResponseEntity<Object> sendEmail(@RequestBody Map<String, Object> object){
        String email = object.get("email").toString();
        String name = object.get("name").toString();
        String createdAt = object.get("createdAt").toString();
        String total = object.get("total").toString();
        String phone = object.get("phone").toString();

        EmailTemplate emailTemplate = new EmailTemplate("templates/Success.html");

        Map<String, String> replacements = new HashMap<String, String>();
        replacements.put("name", name);
        replacements.put("email", email);
        replacements.put("time", String.valueOf(createdAt));
        replacements.put("total", total);
        replacements.put("phone", phone);
//        replacements.put("tuitionID", )
        String message = emailTemplate.getTemplate(replacements);
        try {
            emailService.sendOTPMessage(email, "SUCCESSFULLY PAYMENT", message);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return ResponseMessage.createResponse(HttpStatus.OK, "Send email successfully", null);
    }
}

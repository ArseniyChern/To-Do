package com.eduonix.projectbackend.controller;


import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.eduonix.projectbackend.model.Task;
import com.eduonix.projectbackend.repository.TaskRepository;


@RestController
public class ApiController {
	
	@Autowired
	TaskRepository taskRepo;

	
	@RequestMapping(method=RequestMethod.POST,value="/insertTask",produces="application/json")
	public String insertTask(Principal principal, @RequestParam("task") String task) {
		taskRepo.save(new Task(task,principal.getName()));
		
		return new String("{\"Message\":\"Success\"}");
		
	}
	
	@RequestMapping(value="/getTasks",produces="application/json")
	public Object getTasks(Principal principal) {
		return taskRepo.getTasksByTaskHolder(principal.getName());
		
	}

}

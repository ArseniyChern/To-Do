package com.eduonix.projectbackend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="tasks")
public class Task {
	
	@Id
	@Column(name="id")
	@GeneratedValue
	private Long id;
	
	@Column(name="task")
	private String tasks;
	
	@Column(name="taskHolder")
	private String taskHolder;

	public String getTasks() {
		return tasks;
	}

	public void setTasks(String tasks) {
		this.tasks = tasks;
	}

	public String getTask_holder() {
		return taskHolder;
	}

	public void setTask_holder(String task_holder) {
		this.taskHolder = task_holder;
	}
	
	public Long getId() {
		return id;
	}

	public Task(String tasks, String taskHolder) {
		super();
		this.tasks = tasks;
		this.taskHolder = taskHolder;
	}

	public Task() {
		super();
	}
	
	

}

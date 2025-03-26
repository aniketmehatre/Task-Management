import { Component } from '@angular/core';

interface Project {
  Sr: string;
  projectname: string;
  description: string;
  startDate: string;
  endDate: string;
  projectstatus: string;
  managername: string;
  teammember: string;
  clientname: string;
  domain: string;
}

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})

  export class AddProjectComponent {
    projects: Project[] = [];
    filteredProjects: Project[] = [];
    isAddProjectActive = false;
    isUpdateActive = false;
    isViewActive = false;
    newProject: Project = this.getEmptyProject();
    editableProject: Project = this.getEmptyProject();
    selectedProject: Project = this.getEmptyProject();
    editIndex: number | null = null;
    searchQuery: string = ''; // For the search functionality

  constructor() {
    this.projects = [
      {
        Sr: '1',
        projectname: 'Project Name',
        description: 'Description',
        startDate: '0000-00-00',
        endDate: '0000-00-00',
        projectstatus: 'Project status',
        managername: 'Manager name',
        teammember: 'Team member',
        clientname: 'Client name',
        domain: 'Domain'
      }
    ];
    this.filteredProjects = [...this.projects]; // Initially, filtered projects is the same as full projects list
  }

  getEmptyProject(): Project {
    return {
      Sr: '',
      projectname: '',
      description: '',
      startDate: '',
      endDate: '',
      projectstatus: '',
      managername: '',
      teammember: '',
      clientname: '',
      domain: ''
    };
  }

  // Add a new project to the list
  addProject() {
    this.newProject.Sr = (this.projects.length + 1).toString(); // Automatically assign serial number
    this.projects.push({ ...this.newProject });
    this.filteredProjects = [...this.projects]; // Update the filtered list
    this.newProject = this.getEmptyProject();
    this.isAddProjectActive = false;
  }

  // Filter projects based on the search query
  filterProjects() {
    this.filteredProjects = this.projects.filter(project =>
      project.projectname.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  deleteProject(index: number) {
    this.projects.splice(index, 1); // Remove the project from the main list
    this.filterProjects(); // Keep filteredProjects in sync after deletion
  }

  openUpdateForm(index: number) {
    this.isUpdateActive = true;
    this.editIndex = index;
    this.editableProject = { ...this.filteredProjects[index] };
  }

  saveUpdate() {
    if (this.editIndex !== null) {
      // Update the main projects list based on filtered results
      const mainListIndex = this.projects.findIndex(p => p.Sr === this.editableProject.Sr);
      this.projects[mainListIndex] = { ...this.editableProject };
      this.filterProjects(); // Refresh the filtered list
      this.isUpdateActive = false;
    }
  }

  cancelUpdate() {
    this.isUpdateActive = false;
    this.editableProject = this.getEmptyProject();
  }

  viewProject(index: number) {
    this.selectedProject = { ...this.filteredProjects[index] }; // Copy the selected project for viewing
    this.isViewActive = true;
  }

  closeView() {
    this.isViewActive = false;
  }
}


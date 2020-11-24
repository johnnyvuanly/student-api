<template>
  <div id="app">
    
    <!-- Prepare App.vue to recieve the message from NewStudentForm with v-on:student-added-->
    <!-- When the event happens we call a method in App.vue newStudentAdded -->
    <new-student-form v-on:student-added="newStudentAdded"></new-student-form>
    <!-- Basically student-arrived-or-left event is being connected to studentArriveOrLeft method -->
    <!-- Listens for event from student table  -->
    <student-table v-bind:students="students" v-on:student-arrived-or-left="studentArrivedOrLeft"
    v-on:delete-student="deleteStudent"></student-table>
    <student-message v-bind:student="mostRecentStudent"></student-message>
    
  </div>
</template>

<script>
import NewStudentForm from './components/NewStudentForm.vue'
import StudentMessage from './components/StudentMessage.vue'
import StudentTable from './components/StudentTable.vue'

export default {
  name: 'App',
  components: {
    NewStudentForm,
    StudentMessage,
    StudentTable
  },
  data() {
    return {
      students: [],
      mostRecentStudent: {}
    }
  },
  mounted() { // mounted is a method that gets called as a component is loaded
    this.updateStudents()
  },
  methods: {
    newStudentAdded(student) { 
      this.$student_api.addStudent(student).then( student => {
        this.updateStudents()
      }).catch( err => {
        let message = err.response.data.join(', ')
        alert('Error adding student,', message)
      })
    },
    studentArrivedOrLeft(student) {
      this.$student_api.updateStudent(student).then( () => {
        this.name = student.name
        this.mostRecentStudent = student
        this.updateStudents()
      })
    },
    deleteStudent(student) {
      this.$student_api.deleteStudent(student).then( () => {
        this.updateStudents()
      })
    },
    updateStudents() { // This is going to call our method in the new StudentService.js
      this.$student_api.getAllStudents().then( students => { // Make API call
        this.students = students
      })
    }
  }
}
</script>

<style>

</style>

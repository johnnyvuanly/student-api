<template>
    <div>
    <!-- Template/HTML here -->
            
    <!-- TODO show errors from form validation -->
    <div class="alert alert-danger" v-show="errors.length > 0">
        <ul>
            <!-- v-bind:key="error added so that when something in a list changes, Vue can identify exactly which piece of HTML needs to change, and only change that" -->
            <!-- Helps Vue be more efficient, essentially. If there was a lot of rows it would be laggy without -->
            <li v-for="error in errors" v-bind:key="error">
                {{ error }}
            </li>
        </ul>
    </div>


    <div class="card add-student m-2 p-2">
        <h4 class="card-title">Add new student</h4>

        <div class="form-group">
            <label for="name">Name</label>
            <!-- TODO v-model newStudentName -->
            <input id="name" class="form-control" v-model.trim="newStudentName">
        </div>
        <div class="form-group">
            <label for="starID">Star ID</label>
            <!-- TODO v-model newStarID -->
            <input id="starID" class="form-control" v-model.trim="newStarID">
        </div>
        <!-- TODO v-on:click event handler -->
        <button class="btn btn-primary" v-on:click="addStudents" >Add</button>
    </div>
   
    </div>    
</template>

<script>
export default {
    // create component here

    name: 'NewStudentForm', // naming and creating the component here. Good practice to use the same name as the file
    data() {
        return {
            newStudentName: '',
            newStarID: '',
            errors: []
        }
    },
    methods: {
        addStudents() {
            this.errors = []
            
            if (!this.newStudentName) {
                this.errors.push('Student name is required')
            }

            if (!this.newStarID) {
                this.errors.push('StarID is required')
            }

            if (this.errors.length == 0) {
                let student = { name: this.newStudentName, starID: this.newStarID, present: false }

                // TODO emit message to parent with new student

                // Basically let App.vue know that a new student has been created
                // student-added is the name of the event or message we will send which you can make up
                // student is the arguement which is the new student object created here
                this.$emit('student-added', student)

                this.newStudentName = ''
                this.newStarID = ''
            }
        }
    }
}
</script>

<style scoped>

</style>
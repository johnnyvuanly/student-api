<template>
    <div>
        <!-- Template/HTML here -->
        <div class="card student-list m-2 p-2">
            <h4 class="card-title">Student List</h4>
            
            <div class="edit-table-toggle form-check">
                <input id="edit-table" type="checkbox" class="form-check-input" v-model="editTable">
                <label for="edit-table" class="form-check-label">Edit table?</label>
            </div>
            
            <div id="student-table">
                <table class="table">
                    <tr>
                        <th>Name</th>
                        <th>StarID</th>
                        <th>Present?</th>
                        <th v-show="editTable">Delete</th>
                    </tr>
                   
                   <student-row 
                        v-for="student in students"
                        v-bind:student="student" v-bind:key="student.starID"
                        v-bind:edit="editTable"
                        v-on:student-arrived-or-left="arrivedOrLeft"
                        v-on:delete-student="deleteStudent"
                        > <!-- listens for the delete student event, parent of App.vue listens for event -->
                        <!-- Name of the event that calls the method in "" -->
                   </student-row>
                </table>
            </div>
        </div>
    
    </div>    
</template>

<script>

import StudentRow from'@/components/StudentRow.vue'

export default {
    // create component here
    name: 'StudentTable', // is going to be given a list of stdents to draw
    components: {
        StudentRow
    },
    props: {
        students: Array // App.vue is going to manage the array of students and provide that data to student table using a prop
    },
    data() {
        return {
            editTable: false
        }
    },
    methods: {
        arrivedOrLeft(student, present) {
            // TODO emit message to parent 
            // Created event name and present is true or false from checkbox
            this.$emit('student-arrived-or-left', student, present)
        },
        deleteStudent(student) {
            this.$emit('delete-student', student)
        }
    }
}
</script>

<style scoped>

</style>
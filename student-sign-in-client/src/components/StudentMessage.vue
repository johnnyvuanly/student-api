<template>
    <div>
        <!-- Template/HTML here -->
        
        <div v-show="student.name">
            <div v-if="student.present" class="alert alert-success">
                Welcome, {{student.name}}
            </div>
            <div v-else class="alert alert-info">
                Goodbye, {{student.name}}. See you later!
            </div>
        </div>
    
    </div>    
</template>

<script>
export default {
    // create component here

    // This component needs to be given a student who has just arrived or left
    name: 'StudentMessage',
    props: {
        student: Object
    }
}
</script>

<style scoped>

</style>
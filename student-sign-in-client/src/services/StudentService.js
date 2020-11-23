import axios from 'axios'

const base_url = '/api/students'

export default {

    getAllStudents() {
        return axios.get(base_url).then( response => {
            return response.data
        })
    },

    addStudent(student) { // This function needs an arguement. Here we use our student object that our Vue code will provide
        return axios.post(base_url, student).then( response => {
            return response.data
        })
    },

    updateStudent(student) {
        // Will return something like /api/student/3
        return axios.patch(`${base_url}/${student.id}`, student).then (response => {
            return response.data
        })
    },

    deleteStudent(student) {
        return axios.delete(`${base_url}/${student.id}`, student).then (response => {
            return response.data
        })
    }

}
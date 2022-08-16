let newTasks = new Vue({

    mounted() {
        if (window.localStorage.getItem('tareas'))
            this.tareas = JSON.parse(window.localStorage.getItem('tareas'));
    },
    el: '#app',
    data: {
        nuevaTarea: '',
        tareas: []
    },
    methods: {

        guardarTarea() {

            if (this.nuevaTarea === '') {
                return
            }

            this.tareas.push({ nombre: this.nuevaTarea, checked: false });
            this.nuevaTarea = '';

        },

        deleteTask(index) {
            this.tareas.splice(index, 1);
        },

        taskDone(tarea) {
            tarea.checked = !tarea.checked;
        }

    },
})

newTasks.$watch('tareas', (nuevo, antiguo) => {
    window.localStorage.setItem('tareas', JSON.stringify(nuevo));
}, { deep: true })

Vue.config.devtools = true;

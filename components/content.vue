<template>
    <div>
        <div>
        </div>
        <div class="title">
            <h1>TODO List ({{ localLength }})</h1>
            <button class="speed" data-testid="new-todo" id="new-todo" @click="executeMainFunction">+</button>
        </div>
        <ul class="list" id="todo-list">
            <!-- TODO BOX ITEMS ADDED HERE  -->
        </ul>
    </div>
</template>

<script>
import { newToDoClickedOffline, newTodoClickedOnline, jsonDoneLength, jsonToDoData } from '~/utils/todo';
export default {
    data() {
        return {
            localLength: jsonDoneLength,
            jsonStore: jsonToDoData,
            testing: true,
        };
    },
    methods: {
        executeMainFunction() {

            //Run different versions depending on runtime mode
            /* WON'T WORK UNTIL THIS IS COMPLETED
            https://github.com/nuxt/test-utils/issues/349
            https://github.com/nuxt/test-utils/issues/297

            const config = useRuntimeConfig()
            if (config.public.running_mode == "TESTING") {
                //Call the exported function
                newToDoClickedOffline()
            } else {
                newTodoClickedOnline()
            }*/

            if (this.testing) {
                //Call the exported function
                newToDoClickedOffline()
            } else {
                newTodoClickedOnline()
            }

        },
        runOnPageLoad() {
            /* WON'T WORK UNTIL THIS IS COMPLETED
            https://github.com/nuxt/test-utils/issues/349
            https://github.com/nuxt/test-utils/issues/297
            const config = useRuntimeConfig()
            if (config.public.running_mode != "TESTING") {
                fetchTodos()
            }*/

            if (!this.testing) {
                fetchTodos()
            }
        }
    },
    mounted() {
        //Run the following after the DOM/page has been loaded

        if (process.env.RUNNING_MODE === 'TESTING') {
            console.log("test detected")
        }


        this.runOnPageLoad();
    },
}
</script>
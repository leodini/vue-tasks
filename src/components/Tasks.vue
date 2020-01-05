<template>
    <div style="height: 100%">
    <v-card style="height: 100%; overflow: hidden">
        <v-toolbar color="blue" dark>
            <v-toolbar-title>
                Title of the list
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>search</v-icon>
            </v-btn>
        </v-toolbar>
        <v-list two-line style="height: calc(100% - 128px); overflow-y: scroll">
            <template v-for="(task, key,) in tasks">
                <Task :key="key" :task="task" :index="key" />
            </template>
        </v-list>
        <v-divider></v-divider>
        <v-card-actions>
            <v-layout>
                <v-flex>
                    <NewTask />
                </v-flex>
            </v-layout>
        </v-card-actions>
    </v-card> 
    <NotesModal/>
    </div>
</template>

<script>
import Task from './Task'
import NewTask from './NewTask'
import NotesModal from './NotesModal'
export default {
    name: 'tasks',
    components: {
        Task,
        NewTask,
        NotesModal
    },
    data: () => ({
        tasks: [
            {
                id: 1,
                title: 'task title',
                sub_title: 'sub to task',
                isComplete: true
            },
            {
                id: 1,
                title: 'task title',
                sub_title: 'sub to task',
                isComplete: false
            },
            {
                id: 1,
                title: 'task title',
                sub_title: 'sub to task',
                isComplete: true
            },
            {
                id: 1,
                title: 'task title',
                sub_title: 'sub to task',
                isComplete: false
            },
            {
                id: 1,
                title: 'task title',
                sub_title: 'sub to task',
                isComplete: true
            },
            {
                id: 1,
                title: 'task title',
                sub_title: 'sub to task',
                isComplete: true
            },
        ]
    })
}
</script>
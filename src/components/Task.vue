<template>
    <v-list-tile @click.prevent="toggle(index)">
        <v-list-tile-action>
            <v-btn icon>
                <v-icon color="pink" >edit</v-icon>
            </v-btn>
        </v-list-tile-action>
        <v-list-tile-content>
            <v-list-tile-title>
                {{task.title}}
            </v-list-tile-title>
            <v-list-tile-sub-title>
                {{ task.sub_title }}
            </v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-action-text>
            <v-icon color="green" v-if="task.isComplete">check_circle</v-icon>
            <v-icon color="grey" v-else>check_circle</v-icon>
        </v-list-tile-action-text>
    </v-list-tile>
</template>

<script>
export default {
    name: 'task',
    props: {
        task: Object,
        index: Number
    },
    data: () => ({
        selected: [2]
    }),
    methods: {
        toggle(index){
            console.log(index)
        }
    }
}
</script>
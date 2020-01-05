<template>
    <v-navigation-drawer permanent style="width: 100%; overflow: hidden">
        <v-toolbar color="blue" dark>
            <v-toolbar-title>
                Your lists
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>search</v-icon>
            </v-btn>
        </v-toolbar>
        <v-list>
            <v-list-item color="blue">
                <v-list-item-content>
                    Create new list
                </v-list-item-content>
                <v-list-item-action>
                    <v-list-item-title>
                        <v-icon>add</v-icon>
                    </v-list-item-title>
                </v-list-item-action>
            </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list style="height: calc(100% - 128px); overflow-y: scroll">
            <v-list-item v-for="(list, key) in lists" :key="key">
                <v-list-item-content>
                    <v-list-item-title>
                        {{ list.title }}
                    </v-list-item-title>
                    <v-list-item-action>
                        <v-list-item-title>
                            {{ list.tasks }}
                        </v-list-item-title>
                    </v-list-item-action>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: 'lists',
    data: () => ({
        lists: [
            {
                id: 1,
                title: 'list 1',
                tasks: 5
            }
        ]
    })
}
</script>


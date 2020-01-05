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
            <v-list-tile color="blue">
                <v-list-tile-content>
                    Create new list
                </v-list-tile-content>
                <v-list-tile-action>
                    <v-list-tile-title>
                        <v-icon>add</v-icon>
                    </v-list-tile-title>
                </v-list-tile-action>
            </v-list-tile>
        </v-list>
        <v-divider></v-divider>
        <v-list style="height: calc(100% - 128px); overflow-y: scroll">
            <v-list-tile v-for="(list, key) in lists" :key="key">
                <v-list-tile-content>
                    <v-list-tile-title>
                        {{ list.title }}
                    </v-list-tile-title>
                    <v-list-tile-action>
                        <v-list-tile-title>
                            {{ list.tasks }}
                        </v-list-tile-title>
                    </v-list-tile-action>
                </v-list-tile-content>
            </v-list-tile>
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


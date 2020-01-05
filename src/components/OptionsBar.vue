<template>
    <v-card height="100%">
        <v-toolbar color="pink" dark>
            <v-toolbar-title>
                Options
            </v-toolbar-title>
        </v-toolbar>
        <v-list>
            <v-list-group v-for="(item,key) in items"
             :key="key"
             v-model="item.active"
            :prepend-icon="item.action"
            no-action>
                <v-list-tile slot="activator">
                    <v-list-content-tile>
                        <v-list-tile-content>
                            <v-list-tile-title>{{item.title}}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-content-tile>
                </v-list-tile v-for="(subItem,key) in items.items"
                 :key="key" 
                 active-class
                  v-on="item.action === 'sort' ? { click: () => sort(subItem.by)} : { click: () => filter(subItem.by)}"
                  >
                <v-list-tile>
                    <v-list-tile-content>
                        <v-list-tile-title>{{subItem.title}}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list-group>
            <v-list-group prepend-icon="filter" no-action>
                <v-list-tile slot="activator">
                    <v-list-tile-content>
                        <v-list-tile-title>
                            List options
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                    <v-list-tile-content>
                        <v-list-tile-title color="danger">
                            Remove list
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            Change background
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list-group>
        </v-list>
    </v-card>
</template>

<script>
export default {
    name: 'optionsBar',
    data: () => ({
        items: [
            {
                action: 'sort',
                title: 'Sort by',
                active: true,
                items: [
                    {
                        title: 'Date',
                        by: 'date'
                    },
                    {
                        title: 'Name',
                        by: 'name'
                    }
                ]
            },
            {
                action: 'filter_list',
                title: 'Filter by',
                active: false,
                items: [
                    {
                        title: 'Remaning',
                        by: 'remaining'
                    },
                    {
                        title: 'Completed',
                        by: 'completed'
                    }
                ]
            }
        ]
    }),
    methods: {
        sort(value){
            console.log(`sort by ${value}`)
        },
        filter(value){
            console.log(`filter by ${value}`)
        }
    }
}
</script>
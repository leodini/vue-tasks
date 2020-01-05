<template>
    <v-layout row justify-center>
        <v-dialog v-model="open" scrollable max-width="60%">
            <v-card>
                <v-card-title>
                    <span class="headline">task title</span>
                </v-card-title>
            <v-card-text>
                <v-container>
                    <v-form>
                        <v-textarea outline 
                        v-model="note" 
                        label="Note" 
                        placeholder="Start writing your notes here">
                        </v-textarea>
                        <v-btn color="success">
                            Save
                        </v-btn>
                    </v-form>
                </v-container>
                <v-list three-line subheader>
                    <v-subheader>
                        Notes
                    </v-subheader>
                    <v-list-item v-for="(note, key) in notes" :key="key">
                        <v-list-item-content>
                            <v-list-item-title>
                                {{note.note}}
                            </v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-action>
                            <v-btn icon>
                                <v-icon color="red">delete</v-icon>
                            </v-btn>
                        </v-list-item-action>
                    </v-list-item>
                </v-list>
            </v-card-text>
            <v-card-actions>
                <v-btn text color="primary">
                    Close
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn color="red" text dark>
                    RemoveTask
                </v-btn>
            </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>
export default {
    name: 'notesModal',
    data: () => ({
        open: true,
        note: '',
        notes: [
            {
                id: 1,
                note: 'some note',
            }
        ]
    })
}
</script>
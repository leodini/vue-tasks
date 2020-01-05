<template>
    <v-container fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-form>
                    <v-card class="elevation-12">
                        <v-toolbar dark color="blue">
                            <v-toolbar-title>
                                Login form
                            </v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <v-text-field prepend-icon="person" name="login" label="Login" type="text">
                            </v-text-field>
                            <v-text-field prepend-icon="lock" name="password" label="Password" type="password">
                            </v-text-field>
                        </v-card-text>
                        <v-divider light></v-divider>
                        <v-card-actions>
                            <v-btn round color="indigo" dark>
                                Sign up
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn round color="primary" dark>
                                Login
                                <v-icon>keyboard_arrow_right</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script> 
export default {
    name: 'login' 
}
</script>
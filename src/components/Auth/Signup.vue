<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card class="elevation-12">
                    <v-toolbar dark color="blue">
                        <v-toolbar-title>
                            Signup form
                        </v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                            <v-alert :value="true" color="error" icon="warning">
                                This user already exists
                            </v-alert>
                            <v-text-field prepend-icon="person"
                             name="login" 
                             label="Login"
                             :rules="[rules.required]"
                             >

                            </v-text-field>

                            <v-text-field prepend-icon="email"
                             name="email" 
                             label="Email"
                             :rules="[rules.required, rules.email]"
                             >

                            </v-text-field>

                            <v-text-field prepend-icon="lock"
                             name="password" 
                             label="Password"
                             type="password"
                             :rules="[rules.required]"
                             v-model="password"
                             >

                            </v-text-field>

                            <v-text-field prepend-icon="lock"
                             name="password" 
                             label="Confirm Password"
                             type="password"
                             :rules="[rules.required]"
                             :error="!valid()"
                             v-model="confirm_pasword"
                             >

                            </v-text-field>
                            <v-divider light></v-divider>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                                <v-btn round color="black" dark>Sign in</v-btn>
                                <v-spacer></v-spacer>
                                <v-btn round color="success">
                                    Register
                                    <v-icon>keyboard_arrow_up</v-icon>
                                </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'signup',
    data: () => ({
        rules: {
            required: value => !!value || "Required",
            email: value => {
                const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                pattern.text(value) || "invalid email"
            }
        },
        password: '',
        confirm_password: ''
    }),
    methods: {
        valid() {
            return this.password === this.confirm_password
        }
    }
}
</script>
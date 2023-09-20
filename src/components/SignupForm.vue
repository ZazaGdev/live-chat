<template>
    <form @submit.prevent="handleSignup" class="d-flex flex-column input-group">
        <p class="py-2">You can use dummy email :*</p>

        <label class="mt-5">Name</label>
        <input type="text" required placeholder="Username" v-model="userName" class="form-control w-100" />

        <label class="mt-3">Email</label>
        <input type="email" required placeholder="Email" v-model="email" class="form-control w-100" />

        <label class="mt-3">Password</label>
        <input type="password" required placeholder="Password" v-model="password" class="form-control w-100" />

        <div class="error">{{ error }}</div>
        <button class="btn-primary my-4">Sign Up</button>
    </form>
</template>

<script>
import { ref } from 'vue'

import useSignup from '../composables/useSignup'

export default {
    setup(props, context) {
        // composables
        const { error, signup } = useSignup()

        // refs
        const userName = ref('')
        const email = ref('')
        const password = ref('')

        const handleSignup = async () => {
            await signup(email.value, password.value, userName.value)

            if (!error.value) {
                context.emit('signup')
            }
        }

        return { userName, email, password, handleSignup, error }
    },
}
</script>

<style></style>

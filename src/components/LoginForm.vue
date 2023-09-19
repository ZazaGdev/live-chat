<template>
    <form @submit.prevent="handleSignin" class="d-flex flex-column input-group">
        <label class="mt-5">Email</label>
        <input type="email" required placeholder="Email" v-model="email" class="form-control w-100">

        <label class="mt-3">Password</label>
        <input type="password" required placeholder="Password" v-model="password" class="form-control w-100">

        <div class="error">{{ error }}</div>
        <button class="btn-primary my-4">Login</button>
    </form>
</template>

<script>
import { ref } from 'vue'
import useLogin from '../composables/useLogin'
export default {
    setup() {
        const email = ref('')
        const password = ref('')

        const { error, login } = useLogin()

        const handleSignin = async () => {
            await login(email.value, password.value)

            if(!error.value) {
                console.log('user logged in');
            }
        }

        return { email, password, handleSignin, error}
    }
}
</script>

<style>

</style>
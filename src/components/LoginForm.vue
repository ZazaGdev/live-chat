<template>
    <form @submit.prevent="handleSignin" class="d-flex flex-column input-group">
        <label class="mt-5">Email</label>
        <input type="email" required placeholder="Email" v-model="email" class="form-control w-100">

        <label class="mt-3">Password</label>
        <input type="password" required placeholder="Password" v-model="password" class="form-control w-100">

        <button class="btn-primary my-4">Login</button>
    </form>
</template>

<script>
import { ref } from 'vue'

export default {
    setup() {
        const email = ref('')
        const password = ref('')

        const handleSignin = () => {
            console.log(email.value, password.value);
        }

        return { email, password, handleSignin}
    }
}
</script>

<style>

</style>
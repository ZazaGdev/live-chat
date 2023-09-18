<template>
    <form @submit.prevent="handleSignup" class="d-flex flex-column input-group">
        <label class="mt-5">Name</label>
        <input type="text" required placeholder="Username" v-model="userName" class="form-control w-100">

        <label class="mt-3">Email</label>
        <input type="email" required placeholder="Email" v-model="email" class="form-control w-100">

        <label class="mt-3">Password</label>
        <input type="password" required placeholder="Password" v-model="password" class="form-control w-100">

        <button class="btn-primary my-4">Sign Up</button>
    </form>
</template>

<script>
import { ref } from 'vue'

export default {
    setup() {
        const userName = ref('')
        const email = ref('')
        const password = ref('')

        const handleSignup = () => {
            console.log(userName.value, email.value, password.value);
        }

        return { userName, email, password, handleSignup}
    }
}
</script>

<style>

</style>
<template>
    <div class="container p-4 text-center bg-white">
        <h1>Welcome (zd)</h1>
        <div v-if="showLogin">
            <h2>Login</h2>
            <LoginForm @login="enterChat" />
            <p>Don't have an account YET?????? <span @click="showLogin = false" class="text-primary cursor-pointer">Sign Up</span></p>
        </div>
        <div v-else>
            <h2>Sign Up</h2>
            <SignupForm @signup="enterChat" />
            <p>ALREADY have an account you gorgeous??? <span @click="showLogin = true" class="text-primary cursor-pointer text-underline">Login</span></p>
        </div>
    </div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue'
import LoginForm from '../components/LoginForm.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
    components: { SignupForm, LoginForm },
    setup() {
        const showLogin = ref(true)
        const router = useRouter()

        const enterChat = () => {
            router.push({ name: 'Chatroom' })
        }

        return { showLogin, enterChat }
    },
}
</script>

<style></style>

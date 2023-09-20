<template>
    <div class="container bg-white px-0 overflow-hidden">
        <Navbar class="p-3" />
        <ChatWindow />
        <NewChatForm />
    </div>
</template>

<script>
import { watch } from 'vue'
import { useRouter } from 'vue-router'
import Navbar from '../components/Navbar.vue'
import getUser from '../composables/getUser'
import NewChatForm from '../components/NewChatForm.vue'
import ChatWindow from '../components/ChatWindow.vue'

export default {
    components: { Navbar, NewChatForm, ChatWindow },
    setup() {
        const router = useRouter()

        const { user } = getUser()

        if (!user) {
            router.push({ name: 'Welcome' })
        }

        watch(user, () => {
            if (!user.value) {
                router.push({ name: 'Welcome' })
            }
        })
    },
}
</script>

<style></style>

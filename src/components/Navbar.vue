<template>
    <nav class="navbar navbar-expand-sm navbar-light bg-light" v-if="user">
        <div class="container-fluid justify-content-between d-flex">
            <a class="navbar-brand" href="#">
                <p>Hello, {{ user.displayName }}</p>
                <p>Logged in as {{ user.email }}</p>
            </a>

            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active text-primary" aria-current="page" href="#" @click="handleLogout">Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import getUser from '../composables/getUser'
import useLogout from '../composables/useLogout'

export default {
    setup() {
        const { error, logout } = useLogout()
        const { user } = getUser()

        const handleLogout = async () => {
            await logout()

            if (!error.value) {
                console.log('Logged out')
            }
        }

        return { handleLogout, user }
    },
}
</script>

<style></style>

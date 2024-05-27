<script>
export default {
    methods: {
        goToAbout() {
            this.$router.push('./about')
        },
    },
}
</script>

<template>
    <h2>Home</h2>
    <button @click="goToAbout">About</button>
</template>
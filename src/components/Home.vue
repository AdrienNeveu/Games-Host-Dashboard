<template>
    <div class="home">
        <div class="container">
            <table class="table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Max Players</th>
                    <th>Game</th>
                    <th>I.P. Address</th>
                    <th>Expiration Date</th>
                    <th>Selection</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="gameserver in gameservers">
                    <td>{{ gameserver.id }}</td>
                    <td>{{ gameserver.name }}</td>
                    <td>{{ gameserver.players }}</td>
                    <td>{{ gameserver.game.short_name }}</td>
                    <td>{{ gameserver.hostserver.ip }}</td>
                    <td>{{ gameserver.expires_at | date }}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import { gameserver } from "../resources"

    export default {
        name: "home",
        data: function () {
            return {
                gameservers: []
            }
        },
        mounted: function () {
            this.getGameservers()
        },
        methods: {
            getGameservers: function () {
                gameserver.get().then((res) => {
                    console.log(res)
                    this.gameservers = res.body
                })
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

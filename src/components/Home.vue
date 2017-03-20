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
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="gameserver in $store.state.gameServers"
                    :class="{'bg-success text-white': $store.state.selectedGameServer == gameserver.id, clickable: true}"
                    @click="clickGameServer(gameserver.id)">
                    <td>{{ gameserver.id }}</td>
                    <td>{{ gameserver.name }}</td>
                    <td>{{ gameserver.players }}</td>
                    <td>{{ gameserver.game.short_name }}</td>
                    <td>{{ gameserver.hostserver.ip }}:{{ gameserver.port }}</td>
                    <td>{{ gameserver.expires_at | date }}</td>
                    <td></td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home",
        methods: {
            clickGameServer: function (id) {
                this.$store.commit("setSelectedGameServer", id)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .clickable {
        cursor: pointer;
    }
    .bg-success {
        background-color: #8ed091 !important;
    }
</style>

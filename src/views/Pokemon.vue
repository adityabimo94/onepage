<template>
    <div class="container mt-4">
        <div class="row justify-content-center">

            <div class="col-md-8">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Url</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-if="loading">
                            <td>Loading...</td>
                        </tr>
                        <tr v-else v-for="(poke, key) in pokemon" :key="key">
                            <td>{{ key+1 }}</td>
                            <td>{{ poke.name }}</td>
                            <td>{{ poke.url }}</td>
                        </tr>
                    </tbody>
                </table>


            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios';

    export default {
        data() {
            return {
                pokemon: null,
                loading: true,
                errored: false
            }
        },
        mounted () {
            axios
            .get('https://pokeapi.co/api/v2/pokemon')
            .then(response => {
                this.pokemon = response.data.results
            })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => this.loading = false)
        }


    }
</script>

<style>

</style>
<template>
    <div class="container mt-4">
        <div class="row justify-content-center">

            <div class="col-md-8">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="data in  dataTables" :key="data.id">
                            <th scope="row">{{data.id}}</th>
                            <td>{{data.firstName}}</td>
                            <td>{{data.lastName}}</td>
                            <td>{{data.username}}</td>
                        </tr>
                    </tbody>
                </table>

                <div class="card mt-4">
                    <div class="card-body">
                        <form class="row g-3 needs-validation text-left " :class="{'was-validated': isValidate}" novalidate>
                            <div class="col-md-4">
                                <label for="validationCustom01" class="form-label">First name</label>
                                <input type="text" v-model="firstName" class="form-control" id="validationCustom01" placeholder="Your First Name" required>
                                <div class="invalid-feedback">
                                        First Name is required.
                                    </div>
                            </div>
                            <div class="col-md-4">
                                <label for="validationCustom02" class="form-label">Last name</label>
                                <input type="text" class="form-control" v-model="lastName" id="validationCustom02" placeholder="Your Last Name" required>
                                <div class="invalid-feedback">
                                        Last Name is required.
                                </div>
                                
                            </div>
                            <div class="col-md-4">
                                <label for="validationCustomUsername" class="form-label">Username</label>
                                <div class="input-group has-validation">
                                    <span class="input-group-text" id="inputGroupPrepend">@</span>
                                    <input type="text" class="form-control" id="validationCustomUsername"
                                        aria-describedby="inputGroupPrepend" v-model="username" required>
                                    <div class="invalid-feedback">
                                        Please choose a username.
                                    </div>
                                </div>
                            </div>

                            <div class="col-12">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" v-model="terms" id="invalidCheck" required>
                                    <label class="form-check-label" for="invalidCheck">
                                        Agree to terms and conditions
                                    </label>
                                    <div class="invalid-feedback">
                                        You must agree before submitting.
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <button type="button" class="btn btn-primary" @click="addData">Add Data</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>


<script>


    export default {
        data() {
            return {
                dataTables: [],
                firstName:'',
                lastName:'',
                username:'',
                tempData:{},
                isValidate: false,
                idData:1,
                terms: []
            }
        },
        methods: {
            addData() {
                this.isValidate = true
                if(this.terms == 'on'){
                    this.tempData = {
                    id: this.idData,
                    firstName: this.firstName,
                    lastName: this.lastName,
                    username: this.username
                    };
                    this.idData++
                    this.isValidate = false
                    this.terms = 'off'
                    this.dataTables.push(this.tempData);
                }
                
            }
        },


    }
</script>

<style>

</style>
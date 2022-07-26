<template>
    
    <nav class="navbar navbar-expand-lg bg-light">
    
        <div class="container">
    
            <a class="navbar-brand" href="#">
                <img src="../assets/logo.png" alt="" width="30" height="24" class="d-inline-block align-text-top">
            </a>
    
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    
                <span class="navbar-toggler-icon"></span>
    
            </button>
    
            <div class="collapse navbar-collapse" id="navbarNav">
    
                <ul class="navbar-nav">
    
                    <li class="nav-item">
    
                        <router-link to="/" custom v-slot="{ navigate, href }">
                            <a class="nav-link" :href="href" @click="navigate">Home</a>
                        </router-link>
    
                    </li>
    
                    <li class="nav-item">
                        <router-link to="/about" custom v-slot="{ navigate, href }">
                            <a class="nav-link" :href="href" @click="navigate">About</a>
                        </router-link>
                    </li>
    
                    <li class="nav-item">
    
                        <router-link to="/contact" custom v-slot="{ navigate, href }">
                            <a class="nav-link" :href="href" @click="navigate">Contact</a>
                        </router-link>
    
                    </li>

                    <li class="nav-item">
    
                        <router-link to="/table" custom v-slot="{ navigate, href }">
                            <a class="nav-link" :href="href" @click="navigate">Table</a>
                        </router-link>
    
                    </li>


                    <li class="nav-item">
    
                        <router-link to="/pinia" custom v-slot="{ navigate, href }">
                            <a class="nav-link" :href="href" @click="navigate">Pinia</a>
                        </router-link>
    
                    </li>

                    <li class="nav-item">
    
                        <router-link to="/pokemon" custom v-slot="{ navigate, href }">
                            <a class="nav-link" :href="href" @click="navigate">Fetch</a>
                        </router-link>
    
                    </li>
    
                </ul>
    
            </div>
    
        </div>
    
    </nav>
    
    <router-view/>
</template>
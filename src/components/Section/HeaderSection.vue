<template lang="">
    <header class="header_section bg-header">
        <div class="container-fluid">
            <nav class="navbar navbar-expand-lg custom_nav-container">
                <a class="navbar-brand" href="index.html">
                    <span> Finexo </span>
                </a>

                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class=""> </span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <router-link to="/" class="nav-item active">
                            <a class="nav-link">Home <span class="sr-only">(current)</span></a>
                        </router-link>
                        <router-link to="/about" class="nav-item">
                            <a class="nav-link"> About</a>
                        </router-link>
                        <router-link to="/service" class="nav-item">
                            <a class="nav-link">Services</a>
                        </router-link>
                        <router-link to="/why" class="nav-item">
                            <a class="nav-link">Why Us</a>
                        </router-link>
                        <router-link to="/team" class="nav-item">
                            <a class="nav-link">Team</a>
                        </router-link>
                        <router-link to="/course" class="nav-item">
                            <a class="nav-link">Course</a>
                        </router-link>
                        <router-link to="/form-login" class="nav-item">
                            <a class="nav-link">Form</a>
                        </router-link>
                        <form class="form-inline">
                            <button class="btn my-2 my-sm-0 nav_search-btn" type="submit">
                                <i class="fa fa-search" aria-hidden="true"></i>
                            </button>
                        </form>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
</template>
<script>
export default {
    name: 'Header',
}
</script>

<template>
    <div class="contact">
        <h1>CONTACT US</h1>
        <form action="" method="post">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <textarea cols="20" rows="10" placeholder="Message"></textarea>
            <button>SEND</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'ContactView',
    components: {},
};
</script>

<style scoped>
.contact {
    margin-left: 20px;
}

.contact h1 {
    text-align: center;
    font-weight: 300;
    margin: 30px 0 0 0;
}

.contact form {
    width: 800px;
    margin: auto;
}

.contact input {
    height: 50px;
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid;
    display: block;
    width: 100%;
}

.contact input:focus {
    outline: none;
}

.contact textarea {
    margin: 20px 0;
    width: 100%;
    padding: 8px;
}

.contact button {
    float: right;
    background-color: #000;
    color: white;
    width: 80px;
    padding: 8px;
}
</style>

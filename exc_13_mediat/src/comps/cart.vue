
<script setup>
</script>

<template>
    <div class='cart-box'>
        <h1 class='cart-h1'>Cart</h1>
        <nav class='cart-items'>
            <div class='cart-item'>
                <img src='' class='cart-item-img' alt=''/>
                <div class='cart-item-desc'>
                    <span class='cart-t'>title</span>
                    <span class='cart-p'>$127.00 x </span> 
                    <span class='cart-q'>3</span> 
                    <span class='cart-v'>$437.00</span> 
                </div>
                <img src='' class='cart-item-del' alt=''/>
            </div>
        </nav>
        <button class='cart-bnt'>Checkout</button>
    </div>
</template>

<style scoped>
    .cart-box {
        width: 320px;
        border-radius: 10px;
        background-color: #fff;
        margin-left: auto;
        box-shadow: 0px 10px 17px 2px rgba(0,0,0,.2);
    }
        .cart-h1 {
            font: 700 1rem/1 "Kumbh Sans", sans-serif;
            color: #030713;
            padding: 1% 5% 5% 5%;
            border-bottom: .9px solid #dad2d2;
        }
</style>
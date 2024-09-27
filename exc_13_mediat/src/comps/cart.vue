
<script setup>
</script>

<template>
    <div class='cart-box'>
        <h1 class='cart-h1'>Cart</h1>
        <nav class='cart-items'>
            <div class='cart-item' v-for="x in (1)">
                <img src='/image-product-4.jpg' class='cart-item-img' alt=''/>
                <div class='cart-item-desc'>
                    <span class='cart-t'>Fall limited Edtion Sneakers</span>
                    <span class='cart-p'>$127.00 x </span> 
                    <span class='cart-q'> 3 </span> 
                    <span class='cart-v'>$437.00</span> 
                </div>
                <img src='/icon-delete.svg' class='cart-item-del' alt=''/>
            </div>
            <button class='cart-button'>Checkout</button>
        </nav>
        <h1 class='cart-items-empty' v-if="false">Your cart is empty.</h1>
    </div>
</template>

<style scoped>
    .cart-box {
        width: 340px;
        border-radius: 10px;
        background-color: #fff;
        margin-left: auto;
        box-shadow: 0px 10px 17px 2px rgba(0,0,0,.2);
    }
        .cart-h1 {
            font: 700 1rem/1 "Kumbh Sans", sans-serif;
            color: #030713;
            padding: 3% 5% 5% 5%;
            border-bottom: .9px solid #dad2d2;
        }
    .cart-items-empty {
        display: block;
        width: 100%;
        text-align: center;
        padding: 15% 0;
        font: 600 .9rem/1.7 "Kumbh Sans", sans-serif;
        color: #363638;
    }
    .cart-items {
        display: flex;
        height: 200px;
        width: 100%;
        overflow: auto;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        padding: 5%;
    }
        
        .cart-item {
            display: grid;
            width: 100%;
            grid-template-columns: 25% 65% 10%;
            margin-bottom: 4%;
            
        }
            .cart-item-img {
                display: block;
                width: 75%;
                border-radius: 5px;
            }
            .cart-item-desc {
                display: block;
                width: 100%;
                font: 500 .9rem/1.7 "Kumbh Sans", sans-serif;
                color: #363638;
                margin: 0 3px;
            }
                .cart-t{display: block;}
                .cart-v{font-weight: 600;}
            .cart-item-del {
                display: block;
                width: 50%;
                margin: auto auto;
                cursor: pointer;
            }

        .cart-button {
            display: block;
            width: 100%;
            background-color: orange;
            border: none;
            cursor: pointer;
            padding: 15px;
            border-radius: 5px;
            color: #000;
            text-align: center;
            font: 700 .9rem/1 "Kumbh Sans", sans-serif;
        }

@media (max-width: 854px) {
    .cart-box {width: 100%;}
}

</style>
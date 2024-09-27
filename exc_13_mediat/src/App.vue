
<script setup>
    import { ref } from 'vue';
    import Cart from './comps/cart.vue'

    const SHOW_CART = ref(false);

    
    const show_cart = ()=> {SHOW_CART.value =! SHOW_CART.value;}

    const show_menu = ()=> { 
        let obj = document.querySelector('.menu-c')
        let sts = obj.style.width
        
        if (sts.length > 2) {
            obj.style.width = '0%'
            obj.style.transition = '.3s'
            return
        }
        obj.style.width = '100%'
        obj.style.transition = '.3s'
    }
</script>

<template>
    <nav class="menu">
        <div class="menu-l">
            <img src="/menu.svg" class="menu-l-icon" alt="menu icon" @click='show_menu'/>
            <img src="/logo.svg" class="menu-l-titl" alt="menu title"/>
        </div>
        <div class="menu-c">
            <nav class='menu-c-nav-box'>
                <img class='nav-menu-close' src="/icon-close.svg" alt='' @click='show_menu'/>
                <a class='menu-c-lk' href="#">Collections</a>
                <a class='menu-c-lk' href="#">Men</a>
                <a class='menu-c-lk' href="#">Women</a>
                <a class='menu-c-lk' href="#">About</a>
                <a class='menu-c-lk' href="#">Contact</a>
            </nav>
        </div>
        <div class="menu-r">
            <span @click="show_cart" class='cart-badge'><i>255</i></span>
            <img  class="user-r-icon" src="/profile.png" alt="user icon"/>
        </div>
    </nav>
    <Cart v-if="SHOW_CART"/>
</template>

<style scoped>
    .menu {
        display: flex;
        width: 100%;
        border-bottom: 1px solid #d6cbcb;
    }   
        .menu-l { 
            display: flex;
            align-items: center;
            width: 13%;
        }
            .menu-l-icon { display: none;}
            .menu-l-titl { width: 7rem; padding: 0 2%;}

        .menu-c { width: 67%;}
            .menu-c-nav-box {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-around;
            
            }
                .nav-menu-close {display: none;}
                .menu-c-lk {
                    display: flex;
                    align-items: center;
                    text-decoration: none;
                    font: 400 1rem/1 "Kumbh Sans", sans-serif;
                    color: #818181;
                    height: 65px;
                }
                    .menu-c-lk:hover {
                        color: #000;
                        border-bottom: 4px solid orange;
                        cursor: pointer;
                    }

        .menu-r {
            justify-content: right;
            display: flex;
            column-gap: 20px;
            width: 20%;
        }
            .cart-badge {
                display: block;
                width: 55px;
                height: 55px;
                background-image: url('/icon-cart.svg');
                background-repeat: no-repeat;
                background-size: 45%;
                background-position: 45% 70%;
            }
                .cart-badge i {
                    position: relative;
                    top: 20%; left: 65%;
                    background-color: orange;
                    padding: 1px 4px;
                    border-radius: 10px;
                    font: 700 .6rem/1 "Kumbh Sans", sans-serif;
                    color: #fff;
                    z-index: 12;
                }
                .cart-badge:hover {cursor: pointer;}

            .user-r-icon {
                width: 55px;
                height: 55px;
                border: 4px solid transparent;
            }
            .user-r-icon:hover {
                border-radius: 100%;
                border: 4px solid orange;
                cursor: pointer;
            }

@media (max-width: 854px) {
    
    .menu { border: none;}
    .menu-l { width: 50%;}
        .menu-l-icon { 
            display: block; 
            margin-right: 5%;
        }

    .menu-r {
        justify-content: right;
        display: flex;
        column-gap: 20px;
        width: 50%;
    }
        .cart-badge {
            width: 45px;
            height: 45px;
            background-size: 45%;
            background-position: 45% 70%;
        }
            .cart-badge i {top: 15%; left: 64%;}
        
        .user-r-icon {
            width: 45px;
            height: 45px;
        }
        

    .menu-c {
        position: absolute;
        top: 0; left: 0;
        width: 100%;
        height: 95vh;
        background: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(1.1px);
        z-index: 14;
        display: block;
        width: 0;
        overflow: hidden;
    }
        .nav-menu-close {
            display: block;
            margin: 10px 0 50px 0;
        }
        .menu-c-nav-box {
            background-color: #fff;
            width: 80%;
            height: 100%;
            display: block;
            padding: 4%;
        }
            .menu-c-lk {
                display: block;
                align-items: center;
                text-decoration: none;
                font: 700 1rem/1 "Kumbh Sans", sans-serif;
                color: #000;
                height: auto;
                margin: 10% 0;
            }
            .menu-c-lk:hover {
                color: orange;
                cursor: pointer;
                border: none;
            } 
}

</style>

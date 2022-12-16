<template>
    <div class="container my-5 d-flex gap-5">
        <Categories :products="getCategories"/>
    </div>
</template>
<script>
import Categories from "@/components/Categories"
import { mapGetters } from "vuex";
export default{
    name:"Categories-view",
    components:{Categories},
    computed:{
        ...mapGetters(['getCategories'])
    }
}
</script>

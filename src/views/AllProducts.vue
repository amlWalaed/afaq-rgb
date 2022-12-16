<template>
    <div class="container">
        <div class="col-lg-12">
            <ProductListing />
        </div>  
    </div>
</template>
<script>
import ProductListing from "@/components/Home/ProductListing"
export default {
    name:'all-products',
    components:{ProductListing}
}
</script>

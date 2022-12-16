<template>
    <ul class="pagination">
          <li class="page-link" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </li>
          <li class="page-link">1</li>
          <li class="page-link">2</li>
          <li class="page-link">3</li>
          <li class="page-link" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </li>
        </ul>
</template>
<script>
export default {
    name:'pagination-component'
}
</script>
<style lang="scss" scoped>
@import "./../../scss/common/_varibles.scss";
.pagination {
  overflow: hidden;
  .page-link {
    color: $light-green !important;
    cursor: pointer;
  }
}
</style>
